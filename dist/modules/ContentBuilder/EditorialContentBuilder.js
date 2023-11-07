import { getRateUsElement } from "../ElementGenerator/ElementHelperClass"
import { TagsElementGenerator } from "../ElementGenerator/TagContentElementGenerator"


class EditorialContentBuilder{ 
    constructor() { 
        this.parentDiv = document.createElement('div')
    }

    buildContent(innerHTML) { 
        let row = document.createElement('div')
        row.style.justifyContent = 'center'
        row.innerHTML = innerHTML
        this.parentDiv.appendChild(row)
        return this
    }

    getResult() { 
        return this.parentDiv
    }
    
    buildRateUsText() { 
        let row = TagsElementGenerator.generateRow()
        row.style.justifyContent = 'center'
        row.appendChild(getRateUsElement())
        this.parentDiv.appendChild(row)
        return this
    }
}



export {EditorialContentBuilder}