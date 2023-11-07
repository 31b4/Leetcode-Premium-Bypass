import { GoogleSheetBufferManager } from "../BufferManager/GoogleSheetsBufferManager"
import { GoogleSheetsEditorialDataFetcher, GoogleSheetsProblemTableDataFetcher } from "./GoogleSheetsDataFetcher";



class LocalStorageFrequencyDataFetcher{ 
    constructor() { 
        this.bufferManager = new GoogleSheetBufferManager()
        this.dataTTL = 1209600000; //two weeks in milliseconds
    }

    fetchData() { 
        return this.bufferManager.getBufferedData("TableFrequencyData")
        .then(data => this.onDataFetched(data))
    }; 

    onDataFetched(data) { 
        if(Object.keys(data).length == 0 || data == undefined){ 
            return this.bufferManager.refreshTableData()
            .then(data => this.bufferManager.getBufferedData("TableFrequencyData"))
            .then(data => data["TableFrequencyData"]["data"])
        }
        //refresh data if over ttl duration. The cost refreshing the whole data  is the same as checking if there is new update or not
        if(Date.now() > data["TableFrequencyData"]["FetchDate"] + this.dataTTL) {
            this.bufferManager.refreshTableData()
        }
        return data["TableFrequencyData"]["data"]
    }

    fetchPremiumProblem(problemId) { 
        return this.fetchProblemData(problemId)
    }
    
    fetchProblemData(problemId) {
        return this.bufferManager.getRowOffsetData()
        .then(data => this.onPremiumProblemDataFetched(problemId, data))
    }

    onPremiumProblemDataFetched(problemId, data) { 
        data = data["rowOffset"]
        if(problemId in data == false){ 
            return "<h1>No data</h1>";
        }else { 
            let row = data[problemId]
            return GoogleSheetsProblemTableDataFetcher.fetchProblemDataByRow(row)
        }
    }
}


class LocalStorageEditorialDataFetcher { 
    fetchData(problemId) {
        return new GoogleSheetBufferManager().getRowOffsetData()
        .then(data => this.onPremiumProblemDataFetched(problemId, data))
    }

    onPremiumProblemDataFetched(problemId, data) { 
        data = data["rowOffset"]
        if(problemId in data == false){ 
            return "<h1>No data</h1>";
        }else { 
            let row = data[problemId]
            return GoogleSheetsEditorialDataFetcher.fetchEditorialDataByRow(row)
        }
    }
}





export {LocalStorageFrequencyDataFetcher, 
    LocalStorageEditorialDataFetcher
}