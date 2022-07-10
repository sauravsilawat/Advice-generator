const headline = document.querySelector(".advice--headline")
const text = document.querySelector(".advice--para")
const btn = document.querySelector(".circle") 


btn.addEventListener("click", () =>{ 
    
    fetch("https://api.adviceslip.com/advice")
    .then(resp => resp.json())
    .then(data => {
        headline.textContent = `ADVICE #${data.slip.id}`
        text.textContent = `${data.slip.advice}`
    })
})