
import { CSSStyler } from "../Objects";

class TopProblemFoldoutElementModifier{ 
    constructor() {
        this.elementModifier = []
    }
  
    injectFunctionToTargetElement(func) { 
        this.elementModifier.push(func)
    }

    modifyElement() {
        if(this.isloading()) { 
            window.setTimeout(() => {this.modifyElement()} ,100);
            return;
        } 
        this.observer = new MutationObserver(() => {
            this.modifyLockedElement()
        });
        this.modifyLockedElement()
        this.addObsersverToFoldout()
    }

    isloading() { 
        return document.getElementsByClassName("space-y-1.5")[0] == undefined
    }

    addObsersverToFoldout() { 
        let foldout = document.getElementsByClassName("space-y-1.5")[0]
        var config = {childList: true, subtree: true};
        this.observer.observe(foldout,config);
    }

    modifyLockedElement = () => { 
        let foldout = document.getElementsByClassName("space-y-1.5")[0]
        if(!foldout) {
            window.setTimeout(() => {this.modifyLockedElement.bind(this)()} ,100);
            return;
        }
        let foldoutItem = foldout.children 
        for(let i =0; i <= foldoutItem.length -2; i ++){ 
            let lockLogo = foldoutItem[i].getElementsByTagName('svg') 
            if (lockLogo.length > 0) { 
                foldoutItem[i].getElementsByTagName('a')[0].href = "javascript:void(0)"
                let itemName = foldoutItem[i].textContent.replaceAll(" ", "")
                foldoutItem[i].setAttribute("item", itemName)
                foldoutItem[i].style.color = CSSStyler.COLOR_ACCENT
                lockLogo[0].remove()
                for(let iii = 0; iii <= this.elementModifier.length -1; iii++) { 
                    this.elementModifier[iii](foldoutItem[i])
                }
            }
        }
    }

    disconnectObserverToFoldout() { 
        this.observer.disconnect()
    }
}

export {TopProblemFoldoutElementModifier}