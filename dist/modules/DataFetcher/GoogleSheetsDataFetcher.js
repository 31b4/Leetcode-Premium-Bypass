import {ProblemInfo,ProblemInfoList,  CompanyProblemInfo, CompanyProblemInfoList, ProblemArray, ProblemT, ProblemTag} from "../Objects"

class GoogleSheetsAPIManager{   
    static API_KEY =  "AIzaSyD3pKgr2-5dCitiv8IVgMtrKthD42BfJtM"
    static SHEETS_ID =  "14TOiRmqxbhR9WFj3o5HdgmdOQiaePkI7CBW9D55LMf4"
    static TESTING_SHEETS_ID = "1TJUhILyqBYsXWaPSUGwN1EvzBFeRNg1MgXH_SVqjQJo"

    static  getUrl (range) {
        return `https://sheets.googleapis.com/v4/spreadsheets/${GoogleSheetsAPIManager.SHEETS_ID}/values/${range}?key=${GoogleSheetsAPIManager.API_KEY}`
    }
}

class GoogleSheetsProblemTableDataFetcher { 
    constructor() { 
        this.cachedData = {}; 
    }

    fetchData() { 
        return this.fetchProblemFrequencyData()
    }

    async fetchProblemFrequencyData() {
        let range =  "Problem!A:B"
        let url = GoogleSheetsAPIManager.getUrl(range)
        let response = await fetch(url)
        let data = await response.json();
        let parsedData =  this.parseProblemFrequencyData(data["values"])
        return parsedData
    }

    parseProblemFrequencyData(data) { 
        let returnData = {}
        for(let i =0; i<=data.length -1; i ++) { 
            let id = data[i][0]
            let frequency = data[i][1]
            returnData[id] = frequency
            this.cachedData[id] = i + 1
        }
        return returnData
    }

    fetchPremiumProblem(problemId) { 
        return this.fetchProblemData(problemId)
    }
    
    async fetchProblemData(problemId) { 
        if(problemId in this.cachedData == false)  return new Promise((resolve, reject) => resolve("<h1>No data</h1>")) 
        let row = this.cachedData[problemId]
        let range = "Problem!K" + row
        let url = GoogleSheetsAPIManager.getUrl(range)
        let response = await fetch(url)
        let data = await response.json()
        return data["values"][0]
    }

    static async fetchProblemDataByRow(row) { 
        let range = "Problem!K" + row
        let url = GoogleSheetsAPIManager.getUrl(range)
        let response = await fetch(url)
        let data = await response.json()
        return data["values"][0][0]
    }
}


class GoogleSheetsCompanyProblemDataFetcher { 
    constructor() { 
        this.companyPageTableData = {}
        this.cachedData = {}
        this.tableDataFetched = false
        // this.fetchCompanyPageTable() //cache company map data
    }

    fetchData(companyName) { 
        if(this.tableDataFetched == false) { 
            return this.fetchCompanyPageTable()
            .then(data => this.fetchCompanyProblemData(companyName))
        }
        return this.fetchCompanyProblemData(companyName)
    }

    fetchCompanyPageTable() { 
        let range = "CompaniesProblem_Map!A:C"
        let url = GoogleSheetsAPIManager.getUrl(range)    
        return fetch(url)
        .then(data => data.json())
        .then(data => {this.parseCompanyPageTableData(data["values"])})
        .then(this.tableDataFetched = true)
    }

    fetchCompanyProblemData(companyName){ 
        if(companyName in this.cachedData) { return new Promise((resolve, reject) => resolve(this.cachedData[companyName]))}
        if(companyName in this.companyPageTableData == false) { return new Promise((resolve, reject) => resolve(new CompanyProblemInfoList()))}
        let startRow =  this.companyPageTableData[companyName][0]
        let endRow =  this.companyPageTableData[companyName][1]
        let companyDataSheetName = "CompaniesProblem"
        let range = `${companyDataSheetName}!A${startRow}:I${endRow}` 
        let url = GoogleSheetsAPIManager.getUrl(range)    
        return fetch(url)
        .then(data => data.json())
        .then(data =>this.parseCompanyProblemData(companyName, data["values"]))
    }

    parseCompanyPageTableData(data) {
        for(let i =1; i <= data.length-1; i ++) { 
            let companyName = data[i][0]
            let starRow = data[i][1]
            let endRow = data[i][2]
            this.companyPageTableData[companyName] = [starRow, endRow]
        }
        return this.companyPageTableData
    }

    parseCompanyProblemData(companyName, data) { 
        let companyProblemInfoList = new CompanyProblemInfoList()
        for(let i =0; i <= data.length - 1; i ++ ){ 
            let frequency =  data[i][2]
            let id = data[i][1]
            let difficulty = data[i][7]
            let problemUrl =  data[i][6]
            let problemName = data[i][4]
            let acceptance = data[i][5]
            let companyName = data[i][0]
            let duration = data[i][3]
            let problemInfo = new CompanyProblemInfo(frequency,id,difficulty,problemUrl,problemName,acceptance,companyName,duration)
            companyProblemInfoList.push(duration, problemInfo)
        }
        this.cachedData[companyName] = companyProblemInfoList
        return companyProblemInfoList
    }
}

class GoogleSheetsTopProblemDataFetcher { 
    fetchData(itemName) { 
        let range = `${itemName}!A2:F`
        let url = GoogleSheetsAPIManager.getUrl(range)    
        return fetch(url)
        .then(data => data.json())
        .then(data => this.parseTopQuestionData(data["values"]))
    }

    parseTopQuestionData(data){ 
        let problemInfoList = new ProblemArray()
        for(let i =0; i <= data.length -1; i ++) { 
            let id = data[i][0]
            let freq = data[i][1]
            let name = data[i][2]
            let acceptance = data[i][3]
            let url = data[i][4]
            let difficulty = data[i][5]
            let problemInfo = new ProblemInfo(freq, id, difficulty, url, name, acceptance)
            problemInfoList.push(problemInfo)
        }
        return problemInfoList
    }
}

class GoogleSheetsProblemTagsDataFetcher {
    constructor() { 
        this.map = {}
        this.mapFetched = false
        // this.fetchtProblemTagsMap()
    }

    fetchData(url) { 
        if(this.mapFetched) return this.fetchProblemTag(url)
        return this.fetchtProblemTagsMap().then(data => this.fetchProblemTag(url))
    }
    
    fetchProblemTag(url) { 
        if(!(url in this.map)) { return new Promise((resolve, reject) => resolve(new ProblemInfoList()))}
        let startRow = this.map[url][0]
        let endRow = this.map[url][1]
        let range = `ProblemCompaniesTags!A${startRow}:C${endRow}`
        let fetchUrl = GoogleSheetsAPIManager.getUrl(range)
        return fetch(fetchUrl).then(data=> data.json()).then(data => this.parseProblemTagData(data["values"]))
    }

    parseProblemTagData(data) {
        let tagList = new ProblemInfoList()
        for(let i =0; i <= data.length -1; i ++) { 
            let link = data[i][0]
            let duration = data[i][1]
            let company = data[i][2]
            let problemTagObject = new ProblemTag()
            problemTagObject.duration = duration
            problemTagObject.company = company
            problemTagObject.url = link
            tagList.push(duration, problemTagObject)
        }
        this.cachedData = tagList
        return tagList
    }

    fetchtProblemTagsMap(){ 
        let range = `ProblemCompaniesTags_Map!A:C`
        let url = GoogleSheetsAPIManager.getUrl(range)
        return fetch(url)
        .then(data => data.json())
        .then(data => this.setProblemTagMap(data["values"]))
    }

    setProblemTagMap(data) { 
        for(let i =0; i <= data.length-1; i ++){ 
            let url = data[i][0]
            let startRow = data[i][1]
            let endRow = data[i][2]
            this.map[url] = [startRow, endRow]
        }
        this.mapFetched = true
    }
}



class GoogleSheetsEditorialDataFetcher{ 
    static async fetchEditorialDataByRow(row) { 
        let range = "Problem!L" + row
        let url = GoogleSheetsAPIManager.getUrl(range)
        let response = await fetch(url)
        let data = await response.json()
        let values = data["values"]
        if (values == undefined) return "<h1>No data</h1>"
        return values[0][0]
    }
}

export { 
    GoogleSheetsAPIManager, 
    GoogleSheetsProblemTableDataFetcher, 
    GoogleSheetsCompanyProblemDataFetcher, 
    GoogleSheetsTopProblemDataFetcher, 
    GoogleSheetsProblemTagsDataFetcher, 
    GoogleSheetsEditorialDataFetcher
}

