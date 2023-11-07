
import {AcceptanceSorter, DifficultySorter, NameSorter, IDSorter, FrequencySorter} from "../ProblemSorter"
import { TableElementGenerator } from "../ElementGenerator/TableContentElementGenerator"
import { getRateUsElement } from "../ElementGenerator/ElementHelperClass"

class TableContentBuilder{ 
    constructor() {
        this.tableId = "table-content"
        this.shownData = []
        this.currentlySortedBy = ""
        this.isReverseSorted = false
        this.parentDiv = document.createElement('div')
        this.durationData = {}
        this.currentlySelectedDuration = undefined
    } 

    setShownData(data) { 
        this.shownData = data
        return this
    }

    buildRateUsRow() { 
        let row = TableElementGenerator.generateRowElement()
        row.style.justifyContent = "center";
        row.appendChild(getRateUsElement())
        this.parentDiv.appendChild(row)
        return this
    }

    buildTitleRow(title) {
        let row =  TableElementGenerator.generateRowElement()
        row.style.justifyContent = "center"; 
        row.appendChild(TableElementGenerator.generateTitleElement(title))
        this.parentDiv.appendChild(row)
        return this
    }

    addDurationData(duration, data) { 
        this.durationData[duration] = data
    }

    buildDurationsRow() { 
        let row =  TableElementGenerator.generateRowElement()
        for(let duration in this.durationData) { 
            let element = TableElementGenerator.generateDurationElement(duration)
            element.classList.add("clickable")
            element.addEventListener('click', this.onDurationButtonClicked)
            row.appendChild(element)
            if(this.currentlySelectedDuration == undefined) {
                this.currentlySelectedDuration = element
                let selectEvent = new Event('select');
                this.currentlySelectedDuration.dispatchEvent(selectEvent)
            } 
        }  
        this.parentDiv.appendChild(row)
        return this
    }

    buildHeaderRow() { 
        let row = TableElementGenerator.generateRowElement()
        let idHeaderCell = TableElementGenerator.generateProblemIdElement("#")
        let titleHeaderCell = TableElementGenerator.generateProblemNameElement("Title", "javascript:void(0)")
        let acceptanceHeaderCell= TableElementGenerator.generateProblemAcceptanceElement("Acceptance")
        let difficultyHeaderCell= TableElementGenerator.generateProblemDifficultyElement("Difficulty")
        let frequencyHeaderCell= TableElementGenerator.generateProblemAcceptanceElement("Frequency")
     
        idHeaderCell.firstChild.classList.add("clickable")
        titleHeaderCell.firstChild.classList.add("clickable")
        acceptanceHeaderCell.firstChild.classList.add("clickable")
        difficultyHeaderCell.firstChild.classList.add("clickable")
        frequencyHeaderCell.firstChild.classList.add("clickable")

        idHeaderCell.firstChild.classList.add("default-text-color")
        titleHeaderCell.firstChild.classList.add("default-text-color")
        acceptanceHeaderCell.firstChild.classList.add("default-text-color")
        difficultyHeaderCell.firstChild.classList.add("default-text-color")
        frequencyHeaderCell.firstChild.classList.add("default-text-color")

        idHeaderCell.addEventListener('click', this.getOnHeaderClickedFunction(IDSorter).bind(this))
        titleHeaderCell.addEventListener('click', this.getOnHeaderClickedFunction(NameSorter).bind(this))
        acceptanceHeaderCell.addEventListener('click', this.getOnHeaderClickedFunction(AcceptanceSorter).bind(this))
        difficultyHeaderCell.addEventListener('click', this.getOnHeaderClickedFunction(DifficultySorter).bind(this))
        frequencyHeaderCell.addEventListener('click', this.getOnHeaderClickedFunction(FrequencySorter).bind(this))

        row.appendChild(idHeaderCell)
        row.appendChild(titleHeaderCell)
        row.appendChild(acceptanceHeaderCell)
        row.appendChild(difficultyHeaderCell)
        row.appendChild(frequencyHeaderCell)
        this.parentDiv.appendChild(row)
        return this
    }

    buildTable(Sortby = NameSorter) { 
        this.shownData.sort(Sortby)
        this.currentlySortedBy = Sortby.name
        this.isReverseSorted = false
        let table = TableElementGenerator.generateTableContentElement(this.shownData)
        this.parentDiv.appendChild(table)
        return this
    }

    getResult() {
        return this.parentDiv
    }

    
    onDurationButtonClicked = (event) => {
        let selectEvent = new Event('select');
        event.currentTarget.dispatchEvent(selectEvent)
        let unselectEvent = new Event('unselect');
        this.currentlySelectedDuration.dispatchEvent(unselectEvent)
        this.currentlySelectedDuration = event.currentTarget

        this.shownData = this.durationData[event.currentTarget.getAttribute("duration")]
        this.swapContentTableElement(this.shownData)
    }

    getOnHeaderClickedFunction(Sorter) { 
        return () => {  
            if(Sorter.name == this.currentlySortedBy) { 
                this.shownData.sort(Sorter, !this.isReverseSorted)    
                this.isReverseSorted = !this.isReverseSorted
            } else { 
                this.shownData.sort(Sorter)
                this.currentlySortedBy = Sorter.name
                this.isReverseSorted = false
            }
            this.swapContentTableElement(this.shownData)
        }
    }

    swapContentTableElement = (swapTo) => {
        if(document.getElementById(this.tableId) != undefined) document.getElementById(this.tableId).remove() 
        let table = TableElementGenerator.generateTableContentElement(swapTo)
        this.parentDiv.appendChild(table)
    }
}

export {TableContentBuilder}