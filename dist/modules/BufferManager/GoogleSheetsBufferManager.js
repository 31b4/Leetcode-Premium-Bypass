import { GoogleSheetsAPIManager, GoogleSheetsProblemTableDataFetcher } from "../DataFetcher/GoogleSheetsDataFetcher";


function getBrowser() { 
    if (typeof browser === 'undefined') return chrome
    return browser
}

class GoogleSheetBufferManager { 
    constructor() { 
        this.cachedData = {}
        this.browser = getBrowser(); 
    }

    refreshTableData() { 
        let savedData = {"FetchDate": Date.now()}
        let dataFetcher = new GoogleSheetsProblemTableDataFetcher(); 
        return dataFetcher.fetchData()
        .then(data=> savedData["data"] = data)
        .then(data => this.onDataFetched(savedData))
    }

    onDataFetched(savedData) {
        let rowOffsetData = this.parseRowOffsetData(savedData["data"]) 
        this.browser.storage.local.set({"rowOffset":rowOffsetData})
        this.browser.storage.local.set({"TableFrequencyData":savedData})
    }

    getRowOffsetData() { 
        return this.browser.storage.local.get("rowOffset")
    }

    parseRowOffsetData(data) {
        let rowOffsetData = {}
        let i = 2
        // {ProblemID: Row}
        for(let key in data) { 
            rowOffsetData[key] = i 
            i +=1 
        }
        return rowOffsetData; 
    }

    getBufferedData(key) {
        return this.browser.storage.local.get(key)
    }
}

export { GoogleSheetBufferManager}