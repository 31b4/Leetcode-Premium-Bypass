import { CSSStyler } from "../Objects"

function generateInnerProgressbar(width) { 
    let progress = document.createElement('div')
    progress.style = `
    background-color: ${CSSStyler.COLOR_ACCENT};
    width: ${width}%;
    height: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    `
    return progress
}

function generateRedInnerProgressBar(width) { 
    let progress = document.createElement('div')
    progress.style = `
    background-color: red;
    width: ${width}%;
    height: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    `
    return progress
}

function getRateUsElement() { 
    let span = document.createElement('span')
    let innerHtml =  `<h3>
    if you enjoy our app rate us <a href = "https://chrome.google.com/webstore/detail/leetcode-premium-unlocker/gnpcbhmchfdadabkcmooljbhgdemgiof">here</a>. 
    </h3>
    `
    span.innerHTML = innerHtml;
    let urls = span.getElementsByTagName('a')
    for(let i =0; i <= urls.length -1; i ++) { 
        urls[i].classList.add('clickable')
    }
    return span
}


export { 
generateInnerProgressbar, 
generateRedInnerProgressBar, 
getRateUsElement
}