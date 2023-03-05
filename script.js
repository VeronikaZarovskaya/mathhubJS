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
    if (e.key === "Enter"){ 
    startGameFanc()
    }
    else if (e.key === "Escape") {
    userAnswer.blur()
    }
    })
    const choosedEl = document.querySelectorAll(".choosed_block-container > div ")
    const counterEl = document.querySelector(".choosed_block span")
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
    const postsBlock = document.querySelector(".posts_block-container")
    const showPostsBtn = document.querySelector(".posts_block button")
    function addPost(title, body) {
    const postsTitle = document.createElement("h3")
    const postsBody= document.createElement("span")
    const postItem = document.createElement("p")
    postsTitle.innerText=title
    postsBody.innerText=body
    postItem.append(postsTitle, postsBody)
    postsBlock.append(postItem)
    }
    function getPosts (){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then( data => {
    for (item of data) {
    addPost(item.title, item.body)
    }
    })
    .catch( err => console.log(err.message))
    }
    getPosts()