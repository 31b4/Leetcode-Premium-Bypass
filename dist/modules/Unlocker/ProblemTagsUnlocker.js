
import { GoogleSheetsProblemTagsDataFetcher } from "../DataFetcher/GoogleSheetsDataFetcher"
import { ProblemTagsElementModifier } from "../ElementModifier/ProblemTagsElementModifier"
import { TagsContentBuilder } from "../ContentBuilder/TagsContentBuilder"
import { modalManager } from "../ContainerManager"
import { analyticsManager } from "../AnalyticsManager"

class ProblemTagsUnlocker{ 
    constructor() { 
        this.elementModifier = new ProblemTagsElementModifier()
        this.dataFetcher = new GoogleSheetsProblemTagsDataFetcher()
        this.containerManager = modalManager
        this.isFetching = false
        this.problemTagButtonId = 3;
        this.analyticsManager = analyticsManager; 
        this.name = "ProblemTagsUnlocker"
    }

    onTagButtonClicked = () => { 
        if(this.isFetching) return 
        this.isFetching=true
        let problemName = document.URL.split('/')[4]
        this.analyticsManager.fireModifiedButtonClickedEvent(this.problemTagButtonId, "ProblemTagButton", problemName)
        this.containerManager.clearModalContent()
        this.containerManager.openModal()
        this.containerManager.showLoadingIcon()
        this.dataFetcher.fetchData(problemName)
        .then(data => this.onFetchSucces(data)) 
        .then(data=>{this.isFetching=false})
        .catch( e => {console.log(this, e);
        this.isFetching=false})
    }

    unlock() { 
        this.elementModifier.modifyElement()
        this.elementModifier.addTagButtonOnClickListener(this.onTagButtonClicked)
        this.analyticsManager.fireUnlockedDataEvent(this.name)
    }

    onFetchSucces = (data) =>  { 
        let keys = data.getKeys()
        let builder = new TagsContentBuilder()
        for(let i =0; i<= keys.length -1; i ++) {
            builder.buildHeader(keys[i])
            builder.buildTagsBox(data.getList(keys[i]))
        }
        builder.buildRateUsText()
        let targetParent = this.containerManager.getModalContentBox()
        this.containerManager.clearModalContent()
        targetParent.appendChild(builder.getResult())
    }
}


export {ProblemTagsUnlocker}