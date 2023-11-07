
import { modalManager } from "../ContainerManager"
import { GoogleSheetsTopProblemDataFetcher } from "../DataFetcher/GoogleSheetsDataFetcher"
import { TopProblemFoldoutElementModifier } from "../ElementModifier/TopProblemFoldoutElementModifier"
import { TableContentBuilder } from "../ContentBuilder/TableContentBuilder"
import { analyticsManager } from "../AnalyticsManager"

class TopProblemUnlocker { 
    constructor() {     
        this.elementModifier =  new TopProblemFoldoutElementModifier()
        this.dataFetcher = new GoogleSheetsTopProblemDataFetcher()
        this.containerManager = modalManager
        this.isFetching = false
        this.topProblemButtonId = 4; 
        this.analyticsManager = analyticsManager;
        this.name = "TopProblemUnlocker" 
    }

    unlock( ){ 
        this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected())
        this.elementModifier.modifyElement()
        this.analyticsManager.fireUnlockedDataEvent(this.name)
    }

    onTopProblemClicked = (event) => {
        if(this.isFetching)return
        this.isFetching=true
        let itemName = event.currentTarget.getAttribute("item")
        let title = event.currentTarget.getElementsByClassName("font-medium")[0].textContent
        this.analyticsManager.fireModifiedButtonClickedEvent(this.topProblemButtonId, "TopProblem", title)
        this.containerManager.clearModalContent()
        this.containerManager.openModal()
        this.containerManager.showLoadingIcon()
        this.dataFetcher.fetchData(itemName)
        .then(data => this.onFetchSuccess(data, title))
        .then(data =>{this.isFetching=false})
        .catch(e => {
            console.log(this, "Fetch Error" + e); 
            this.isFetching=false
        })
        event.stopImmediatePropagation();
    }

    onFetchSuccess(data, itemName){
        let tableBulder = new TableContentBuilder()
        tableBulder.setShownData(data)
        tableBulder.buildTitleRow(itemName)
        tableBulder.buildHeaderRow()
        tableBulder.buildTable()
        let table = tableBulder.getResult()
        this.containerManager.clearModalContent()
        this.containerManager.getModalContentBox().appendChild(table)
    } 

    getFunctionToBeInjected() { 
        return (element) => {
            element.addEventListener("click", this.onTopProblemClicked);
        }
    }
}

export{ TopProblemUnlocker}