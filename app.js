const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn")
const color = document.querySelector('.color')

const getRandomNumber = ()=>{
    return Math.floor(Math.random() * colors.length)
}


btn.addEventListener('click' , ()=>{
    let randomNumber = getRandomNumber()
    color.textContent = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]
})

