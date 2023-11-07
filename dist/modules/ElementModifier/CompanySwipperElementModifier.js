import { CSSStyler } from "../Objects"


class CompanySwipperElementModifier { 

    constructor() {
        this.elementModifier = []
    }
  
    injectFunctionToTargetElement(func) { 
        this.elementModifier.push(func)
    }

    modifyElement() { 
        this.modifyActiveElement()
        this.addObserverToCompaniesSection()
    }

    isSwiperLoading() { 
        return document.getElementsByClassName("swiper-autoheight")[1] == undefined
    }
    
    modifyActiveElement() { 
        if(this.isSwiperLoading()) { 
            window.setTimeout(() => {this.modifyActiveElement.bind(this)()} ,100);
            return 
        }
        let parentSwipper = document.getElementsByClassName("swiper-autoheight")[1]
        let swipers = parentSwipper.getElementsByClassName('swiper-slide-active')
        let swiper = swipers[swipers.length-1]
        let links = swiper.getElementsByTagName('a')
        for(let ii = 0; ii <= links.length-1; ii ++) {
            let href = links[ii].href.split("/")
            let companyName = href[href.length-1]
            let companyButton = links[ii]
            if (companyButton.getAttribute("company-name") == null) {
                companyButton.setAttribute("company-name", companyName)
            }
            companyButton.href = "javascript:void(0)"
            for(let iii = 0; iii <= this.elementModifier.length -1; iii++) { 
                this.elementModifier[iii](companyButton)
            }
            this.onModifyElementSuccess(companyButton)
        }
    }

    onModifyElementSuccess(element) {
        //generate some kind of indication if element have been modified
        let spans = element.getElementsByTagName('span')
        let companyButtonNumbeLabel = spans[spans.length-1]
        companyButtonNumbeLabel.style.backgroundColor = CSSStyler.COLOR_ACCENT

    }

    addObserverToCompaniesSection() {
        if(this.isSwiperLoading()) { 
            window.setTimeout(() => {this.addObserverToCompaniesSection.bind(this)()} ,100);
            return 
        }
        let parentSwipper = document.getElementsByClassName("swiper-autoheight")[1]
        var swipper =  parentSwipper.parentNode.parentNode
        const observer = new MutationObserver(() => {
            this.modifyActiveElement()
        });
    
        if(!swipper) {
            window.setTimeout(() => {this.addObserverToCompaniesSection()} ,100);
            return;
        }
        var config = {childList: true, subtree: true,  attributes: true, attributeFilter: ['class']};
        observer.observe(swipper,config);
    }
}

export {CompanySwipperElementModifier}