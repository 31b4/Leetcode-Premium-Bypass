
import { CSSStyler } from "../Objects"
class TableElementGenerator{ 
    static generateTextElement(text) { 
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.textContent = text
        h3.style = `
        text-align: center;
        `
        div.appendChild(h3)
        return div
    }

    static generateProblemIdElement(text) { 
       let div = TableElementGenerator.generateTextElement(text)
       div.style = `
       width: 5%
       `
       return div
    }

    static generateProblemFrequencyElement(percentage){ 
        let progressBar = document.createElement('div')
        progressBar.setAttribute("title", String(Math.round(percentage*100)) + "%")
        progressBar.style = `
        display: flex;
        height: 1rem;
        overflow: hidden;
        font-size: .75rem;
        background-color: ${CSSStyler.getComplementaryColor()}; 
        border-radius: 0.5rem;
        margin-top: auto;
        margin-bottom: auto;
        width:10%; 
        `

        let progress = document.createElement('div')
        progress.style = `
        border-radius: 0.5rem;
        height:100%; 
        width:${percentage*100}%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: #fff;
        background-color: ${CSSStyler.COLOR_ACCENT};
        `
        progressBar.appendChild(progress)
        return progressBar
    }

    static generateProblemNameElement(problem_name, problem_url) { 
        let problemCell = document.createElement('div')
        let a = document.createElement('a')
        a.href = problem_url
        a.textContent = problem_name
        problemCell.appendChild(a)
        problemCell.style = `
        width: 50%
        `
        return problemCell
    }

    static generateProblemDifficultyElement(text) {
        let div = TableElementGenerator.generateTextElement(text)
        div.style = `
        width: 12%
        `
        switch(text) { 
            case "Hard":
                div.children[0].style.color = "red"
                break  
            case "Medium": 
                div.children[0].style.color = "orange"
                break ; 
            case "Easy": 
                div.children[0].style.color = "green"
                break ; 
        }
        return div
    }

    static generateProblemAcceptanceElement(percentage) { 
        let div = TableElementGenerator.generateTextElement(percentage)
        div.style = `
        width: 10%
        `
        return div
    }

    static generateRowElement(){ 
        let row = document.createElement('div')
        row.style = `
        display:flex;
        border-top: solid 1px ${CSSStyler.getComplementaryColor()};
        `
        return row
    }

    static generateTableContentElement(data) { 
        let parentDiv = document.createElement('div')
        for(let i = 0; i <= data.length-1; i ++) {        
            let row = TableElementGenerator.generateRowElement()        

            let frequency = data[i].frequency
            let id = data[i].id
            let difficulty = data[i].difficulty
            let problemUrl = data[i].problemUrl
            let problemName = data[i].problemName
            let acceptance = String(Math.round(data[i].acceptance * 100)) + "%"

            row.appendChild(TableElementGenerator.generateProblemIdElement(id))
            row.appendChild(TableElementGenerator.generateProblemNameElement(problemName, problemUrl))
            row.appendChild(TableElementGenerator.generateProblemAcceptanceElement(acceptance))
            row.appendChild(TableElementGenerator.generateProblemDifficultyElement(difficulty))
            row.appendChild(TableElementGenerator.generateProblemFrequencyElement(frequency))

            parentDiv.append(row)
        }
        parentDiv.id = "table-content"
        return parentDiv
    }

    static generateDurationElement(data) {
        let button = document.createElement('button')   
        button.innerText =data
        button.style = ` 
        width:auto; 
        margin-right: 2%; 
        `
        button.setAttribute("duration", data)

        button.addEventListener('select', () => {
            button.classList.add("selected-duration-button")
            button.classList.remove("unselected-duration-button")
        })

        button.addEventListener('unselect', () => {
            button.classList.add("unselected-duration-button")
            button.classList.remove("selected-duration-button")
        })
        button.classList.add("unselected-duration-button")
        return button
    }

    static generateTitleElement(title) { 
        let h2 = document.createElement('h2')
        h2.innerText = title
        h2.style = `
        font-size:1.5em;`
        return h2
    }

}




export {
TableElementGenerator, 
}