import { GoogleSheetsAPIManager } from "./GoogleSheetsDataFetcher";




class SheetsColumnIncrementor { 
    constructor(sheetName) { 
        this.sheetName = sheetName; 
        this.columns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
        this.currentIndex = 0
        this.currentColumn = this.columns[this.currentIndex]
    }

    getNextColumnUrl() {
        let range =  `${this.sheetName}!${this.currentColumn}:${this.currentColumn}`
        let url = GoogleSheetsAPIManager.getUrl(range)
        if(this.currentIndex > this.columns.length) return url
        this.currentIndex += 1
        this.currentColumn = this.columns[this.currentIndex]
        return url
    }
}


class GoogleSheetsDataGrabber {
    constructor() { 
        this.incrementor = new SheetsColumnIncrementor("Problem")
        this.data = []
        this.promiseResolve; 
        this.promiseReject; 
        this.promise = new Promise((resolve, reject) => {
            this.promiseResolve = resolve; 
            this.promiseReject = reject; 
        })
    }

    fetchData() { 
        this.fetchTableData()
        return this.promise
    }

    async fetchTableData() { 
        let url = this.incrementor.getNextColumnUrl() 
        let response = await fetch(url)
        if(response.status == 400) {
            console.log(this.data)
            this.promiseResolve(this.data)
            return 
        } 
        let data = await response.json();
        this.data.push(data["values"])
        this.fetchTableData()
    }
        

}


class CompanyProblemDataGrabber {   

    




}

class TopProblemDataGrabber { 





}

class ProblemCompanyTagsDataGrabber { 
    fetchData() { 
        return this.fetchCompanyProblemData()
    }

    async fetchCompanyProblemData() { 
        let range =  "CompaniesProblem!A:H"
        let url = GoogleSheetsAPIManager.getUrl(range)
        let response = await fetch(url)
        let data = await response.json();
        return data["values"]
    }
}

class ProblemCompaniesTagsDataGrabber { 
    fetchData() { 
        return this.fetchProblemCompaniesTagData()
    }

    async fetchProblemCompaniesTagData() { 
        let range =  "ProblemCompaniesTags!A:C"
        let url = GoogleSheetsAPIManager.getUrl(range)
        let response = await fetch(url)
        let data = await response.json();
        return data["values"]
    }
}





export { 
    ProblemDataGrabber, 
    CompanyProblemDataGrabber

}