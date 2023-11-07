import { CSSStyler } from "../Objects"

class TagsElementGenerator{
    static  generateHeader(text) {
        let h3 = document.createElement('h3')
        h3.classList.add("default-text-color")
        h3.textContent = text
        return h3
    }

    static generateTag(text) { 
        let div = document.createElement('div')
        div.style = `
        min-width:7%;
        margin-right: 3%;
        margin-bottom: 1%;
        max-width:15%; 
        text-align:center; 
        border-radius: 21px;
        `
        div.classList.add("sub-title-text-color")
        div.textContent = text; 
        return div

    }

    static generateRow() { 
        let row = document.createElement('div')
        row.style = `
        display:flex;
        flex-wrap: wrap;
        border-top: solid 1px darkgrey;

        `
        return row

    }
}

export {TagsElementGenerator}