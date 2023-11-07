import { CSSStyler } from "./Objects"


class ModalManager{ 
    constructor() { 
        if(ModalManager._instance) { 
            throw new Error("Modal Manager Have been instantiated")
        }
        ModalManager._instance = this
        this.modal = this.createModal()
        this.modalContentBox = this.createModalContentBox()
        this.appendToModal(this.modalContentBox)
        this.appendModal(document.body)
    }

    createModalContentBox() {
        let modalContentBox = document.createElement('div')
        modalContentBox.style = `
        background-color: ${CSSStyler.getContainerBackgroundColor()};
        margin-top:1%; 
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        max-width: 80%;
        min-width: 60%
        mid-height: 15%; 
        border-radius:15px; 
        `
        return modalContentBox
    }

    getModalContentBox() { 
        return this.modalContentBox
    }

    appendModal(targetParent) {
        targetParent.appendChild(this.modal)
    }

    appendToModal(targetElement) { 
        this.modal.appendChild(targetElement)
    } 
    
    appendToContainer(targetElement) { 
        this.modalContentBox.appendChild(targetElement)
    }

    showLoadingIcon() { 
        let loadingDiv = document.createElement('div')
        loadingDiv.classList.add('loading-logo')
        this.modalContentBox.appendChild(loadingDiv)
    }

    createCloseButton() { 
        let closeButton = document.createElement('span')
        closeButton.style = ` 
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        `

        closeButton.innerText = "x"
        closeButton.addEventListener('click', resetModal)
        return closeButton
    }

    createModal() { 
        let modal = document.createElement('div')
        modal.style = ` 
        display: none; 
        position: fixed; 
        z-index: 32;
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        overflow: auto; 
        `
        window.addEventListener('click', this.onModalClicked)
        modal.id = "CompanyModal"
        return modal
    }

    openModal() { 
        this.modal.style.display = ""
    }

    closeModal() { 
        this.modal.style.display = "none"
    }

    clearModalContent() { 
        while(this.modalContentBox.firstChild != undefined) { 
            this.modalContentBox.firstChild.remove()
        }
    }

    onModalClicked = (event) =>  { 
        if (event.target == this.modal) {
            this.resetModal()
        }
    } 

    resetModal = () => {  
        this.closeModal()
        this.clearModalContent()
    }
}

let modalManager = new ModalManager()

export {modalManager}