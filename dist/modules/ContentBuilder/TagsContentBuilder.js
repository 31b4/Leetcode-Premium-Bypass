
import { getRateUsElement } from "../ElementGenerator/ElementHelperClass"
import { TagsElementGenerator } from "../ElementGenerator/TagContentElementGenerator"


class TagsContentBuilder{ 
    constructor() { 
        this.parentDiv = document.createElement('div')
    }

    buildHeader(headerName) {
        let row = TagsElementGenerator.generateRow()
        row.style.justifyContent = 'center'
        row.appendChild(TagsElementGenerator.generateHeader(headerName))
        this.parentDiv.appendChild(row)
        return this
    }   

    getResult() { 
        return this.parentDiv
    }

    buildTagsBox(tags) { 
        let row = TagsElementGenerator.generateRow()
        for(let i =0; i <= tags.length -1; i ++) {
            let tag = TagsElementGenerator.generateTag(tags[i].company)
            row.appendChild(tag)
        }
        this.parentDiv.appendChild(row)
        return this
    }

    buildRateUsText() { 
        let row = TagsElementGenerator.generateRow()
        row.style.justifyContent = 'center'
        row.appendChild(getRateUsElement())
        this.parentDiv.appendChild(row)
        return this
    }
}


export {TagsContentBuilder}