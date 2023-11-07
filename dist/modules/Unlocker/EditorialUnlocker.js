import { LocalStorageEditorialDataFetcher } from "../DataFetcher/LocalStorageDataFetcher"
import { EditorialPageElementModifier } from "../ElementModifier/EditorialPageElementModifier"
import { modalManager } from "../ContainerManager"
import { EditorialContentBuilder } from "../ContentBuilder/EditorialContentBuilder"


class EditorialUnlocker{
    constructor() {
        this.name = "EditorialUnlocker"
        this.elementModifier = new EditorialPageElementModifier()
        this.dataFetcher = new LocalStorageEditorialDataFetcher()
        this.containerManager = modalManager; 
        
    }

    unlock(){
        this.elementModifier.injectFunctionToTargetElement(this.onEditorialTabClicked)
        this.elementModifier.modifyElement()
    }

    onEditorialTabClicked = (button) => { 
        let problemId = button.getAttribute("problem-id")
        if (problemId == undefined) return; 
        this.containerManager.clearModalContent()
        this.containerManager.openModal()
        this.containerManager.showLoadingIcon()
        this.dataFetcher.fetchData(problemId)
        .then(data => this.onDataFetched(data))
    }
    
    onDataFetched(innerHtml) { 
        let builder = new EditorialContentBuilder()
        builder.buildRateUsText()
        builder.buildContent(innerHtml)
        let targetParent = this.containerManager.getModalContentBox()
        this.containerManager.clearModalContent()
        targetParent.appendChild(builder.getResult())
    }
}


export {EditorialUnlocker}