import { CSSStyler } from "../Objects"




class EditorialPageElementModifier { 
    constructor() { 
        this.elementModifier = []
        this.checkCount = 0 
    }

    injectFunctionToTargetElement(func) { 
        this.elementModifier.push(func)
    }

    getTabMenu() { 
        let tabMenu = document.getElementsByClassName('gap-8')[0]
        if (tabMenu == undefined) tabMenu = document.getElementsByClassName('gap-6')[0]
        return tabMenu
    }

    modifyElement() { 
        let tabs = this.getTabMenu()
        if(tabs == undefined) {
            window.setTimeout(() => {this.modifyElement()} ,100);
            return;
        }
        this.addEventListenerToEditorialButton();
    }

    addEventListenerToEditorialButton() { 
        let button = this.getEditorialButton()
        if (button == undefined) { 
            window.setTimeout(() => {this.addEventListenerToEditorialButton()}, 50)
            return
        }
        button.parentElement.parentElement.addEventListener('click', (event) => {
            for(let iii = 0; iii <= this.elementModifier.length -1; iii++) { 
                this.elementModifier[iii](button)
            }
            if(button.getAttribute("problem-id") != undefined) event.stopImmediatePropagation() 
        })
        this.disableEditorialRedirect()
        this.removeEditorialLockLogo(); 
    }

    getEditorialButton() {
        return document.getElementsByClassName('gap-8')[0].children[1]
        .getElementsByClassName("flex")[1]
    }

    disableEditorialRedirect() { 
        document.getElementsByClassName('gap-8')[0].children[1].href = "javascript:void(0)"
    }

    removeEditorialLockLogo() { 
        let editorialButton = this.getEditorialButton()
        if (editorialButton == undefined) {
            window.setTimeout(() => {this.removeEditorialLockLogo()} ,50);
            return;
        }
        let lockLogo = document.getElementsByClassName('gap-8')[0].children[1]
        .getElementsByClassName("flex")[1]
        .children[0].getElementsByTagName('svg')[0]
        if(lockLogo == undefined) { 
            if(this.checkCount > 5) return
            window.setTimeout(() => {this.removeEditorialLockLogo()} ,150);
            this.checkCount += 1 
            return 
        }
        lockLogo.style.opacity = 0; 
        editorialButton.setAttribute("problem-name", document.URL.split("/")[4])
        editorialButton.setAttribute("problem-id", this.getProblemId())
        this.addUnlockedIndicator()
    }

    addUnlockedIndicator(){ 
        let editorialTabElement = this.getTabMenu().children[1]; 
        editorialTabElement.getElementsByTagName('span')[0].style.color = CSSStyler.COLOR_ACCENT
    }

    getProblemId() { 
        //Todo: Dont rely on problem id, if description page is not opened problem id wont be fetched
       return  document.getElementsByClassName("text-lg")[0].textContent.split(".")[0]
    }
}


export {EditorialPageElementModifier}