const getRandomNumInRange = (min, max) => {
    const randomNum=(Math.random()*(max-min)+min).toFixed(0)
    return randomNum
}

const getTask = () => {

    const symbol = (Math.random() > 0.5) ? "+" : "-"

    const task = `${getRandomNumInRange(0,100)} ${symbol} ${getRandomNumInRange(0,100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
   
}


const gameElements = document.getElementById("myGame").children

const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

startGameFanc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null

        const task = getTask()
   
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState ()

    } else {

const isRight = gameState.rightAnswer == userAnswer.value

userTask.innerText=userTask.innerText + " = " + gameState.rightAnswer

title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"

btnGame.innerText= "Начать заново!"
toggleGameState ()
    }
}

btnGame.addEventListener("click", startGameFanc)

userAnswer.addEventListener("keydown", (e) => {
   // console.log(e)
   if (e.key === "Enter"){ 
    startGameFanc()
   
   }
   else if (e.key === "Escape") {
    userAnswer.blur()
   }
})
 //здесь (где if и else if) если моим событием было "Enter", то он даже не станет проверять , что было в цикле ниже, а сразу перейду к следующему блоку кода
//если так (if и if), подобный синтаксис заставляет каждый раз проверять был ли это "Enter", был ли это "Escape" и даже если это был "Enter" он пойдет проверять ещё был ли это "Escape"




//консоль блоки 
//покажет все элементы документа
//console.log(document)
//покажет все свойства документа
//console.dir(document)
const choosedEl = document.querySelectorAll(".choosed_block-container > div ")
const counterEl = document.querySelector(".choosed_block span")
//const choosedState = {
 //   countsElements: 0,
//}
//const changeCount = (value) => {
 //   choosedState.countsElements += value
    //counterEl.innerText = choosedState.countsElements
//}
//теперь сделаем ООП инкапсуляцию (сокрытие некоторой информации деталями, мы не должны даже обращаться к count элементу, это значение должно быть скорыто и только с помощью внутренних методов нашего объекта мы должны получать его и изменять)

const choosedState = {
    countsElements: 0,
setCountValue(value) {
    this.countsElements += value
    counterEl.innerText = this.countsElements
}
}
const evenFanc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        
        choosedState.setCountValue(-1)
    }
}
for (let i = 0; i < choosedEl.length; i++){
choosedEl[i].addEventListener("click", evenFanc)

}
//choosedEl[2].removeEventListener("click",evenFanc)
//если нужно снять подслушку с элемента