
function fetchLatestUpdate() { 
    let range = "metadata!A:B"
    let url =  `https://sheets.googleapis.com/v4/spreadsheets/1ilv8yYAIcggzTkehjuB_dsRI4LUxjkTPZz4hsBKJvwo/values/${range}?key=AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs`
    fetch(url)
    .then(data => data.json())
}

function setTextToElement(data) { 
    let strings = data["values"]
    for(let i =0; i <= strings.length-1; i ++) { 
        let text = strings[i][0] + ": " + strings[i][1]
        let element = getSpan(text)
        let parent = document.getElementById("data-update-data")
        parent.appendChild(element)
        parent.appendChild(document.createElement('br'))
    }
    return data["values"][0][1]
}

function getSpan(text){ 
    let span =  document.createElement("span")
    span.textContent = text; 
    return span 
}

window.addEventListener('click',function(e){
    if(e.target.href!==undefined){
      chrome.tabs.create({url:e.target.href})
    }
  })

fetchLatestUpdate()
