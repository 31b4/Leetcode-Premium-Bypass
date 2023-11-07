
class ProblemTableElementModifier{ 
    constructor() { 
        this.elementModifier = []
    }

    modifyElement() {
        this.observer = new MutationObserver(() => {
            this.modifyActiveElement()
        });
        this.modifyActiveElement()
        this.addObserverToProblemTable()
    }

    injectFunctionToTargetElement(func){ 
        this.elementModifier.push(func)
    }

    isTableLoading() {
        let table = document.querySelectorAll('[role="rowgroup"]')[1]
        let problemsets = table.querySelectorAll('[role="row"]')
        return problemsets[0].querySelectorAll('[role="cell"]')[1].textContent == ''
    }

    modifyActiveElement = () => {     
        if(this.isTableLoading()) { 
            window.setTimeout(() => {this.modifyActiveElement.bind(this)()} ,100);
            return; 
        }
        this.disconnectObserverToProblemTable()
        let table = document.querySelectorAll('[role="rowgroup"]')[1]
        let problemsets = table.querySelectorAll('[role="row"]')
        for(let i =0; i <= problemsets.length -1 ; i ++) { 
            let cells = problemsets[i].querySelectorAll('[role="cell"]')
            let problemName = cells[1].textContent
            let id = problemName.split(".")[0]
            problemsets[i].setAttribute("problem-id", String(id))
            let isPremium = problemsets[i].getElementsByTagName("rect").length > 0
            problemsets[i].setAttribute("is-premium", isPremium)
            for(let ii = 0; ii <= this.elementModifier.length -1; ii ++) { 
                this.elementModifier[ii](problemsets[i])
            }
        }
        this.addObserverToProblemTable()
    }

    disconnectObserverToProblemTable() { 
        this.observer.disconnect()
    }

    addObserverToProblemTable() { 
        let table = document.querySelector('[role="table"]')
        var config = {childList: true, subtree: true};
        this.observer.observe(table,config);
    }
}

export { ProblemTableElementModifier}