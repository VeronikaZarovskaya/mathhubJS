/*

//alert('Hello!')
//confirm('вы учите JS?')

/*
const skill = document.getElementById('skill')
const isLove = document.getElementById('isLove')

const skillText = prompt ("какой язык вы учите?", "пока не в курсе")
const isLoveValue = confirm('вы любите изучаемый язык?')

console.log(isLoveValue)

skill.innerText = skillText
isLove.innerText = isLoveValue
*/

/*STRINGS
const str1 = 'I\'m OK'
const str2 = "Саша сказал:\n\"Привет\""
const str3 = `I'm say
${str1}`
console.log(str1)
console.log(str2)
console.log(str3)
*/
//NUMBER
//const num1 = 75+15
//const num2 = 79*9
//const num3= 79**3
//Пример NaN - not a number
//const rem = 8 * "a"
//Пример infinity - бесконечно малое число
//const inf = 17/0
//тип number вкючает число от -(2**53-1)до (2**53-1)

//Это будет в console отражно как 1е+21, что значит единица в 21 степени или единица с 21-ю нолями 
//console.log(999999999999999999999)

//100000000000000000000 единица с 20-ю нолями (происходит округление)
//console.log (999999999999999999999)

//BIGINT - используется для работы с большими числами
//В console так и отразиться, без округлений 103123123n
//const bigint = 103123123n
//console.log(bigint)

//BOOLEAN
//TRUE or FALSE
// <   >   <=   >=   <==   >==    ==   ===  вариации сравнения

//const bool = 10>5
//console.log(bool)  
//true

//const bool1 = "a" > "AAAA"
//Сравнивает сначала с первым символом A, если есть с черм сравнивать, то выдает результат и дальше не AAA не смотрит. 
//Строки сравнивает согласно номеру в списке UNF-8, так а - 61, а А-41. Логично, что результат в console будет true. 
//console.log(bool1)
//По этому списку UNF-8 сначала идут цифры, потом буквы. Соответственно цифры всегда меньше букв.
//const bool2 = "a" < 100000
//console.log (bool2)
//в console покажет false

//NULL  (то, что пусто)
//const empty = null (не имеет смысла обозначать так константу, так как она пуста и мы не сможем переназначить, логичнее через let)
//let empty = null
//console.log (empty) - в консоле будет null
//Ниже бак в JS, который уже стал фичей, так как настолько уже давно и все привыкли. Смысл, что если посмотреть тип такой переменной, то:
//console.log(typeof empty) - покажет Object

//UNDEFINED
//let box = undefined
//глупо делать const, т.е. постоянным то, чего ещё не существует. Такая переменная (сама переменная) существует, объявлена, но в неё ничего пока не поместили.Поэтому можно вообще писать так:
//let box1
//console.log(box1, typeof box1)

//SYMBOL (нечто уникальное) записывается особым синтаксисом, 'id' это название, они могут быть разные. Если сравнить символы, то они не равны. Так как символы всегда уникальны. 
//используется как свойство объекта, чтобы имена объекта были уникальные 
/*const uniq = Symbol('id') 
const uniq2 = Symbol('id')
const comp = uniq == uniq2
console.log(comp)


//OBJECT всё в JS объекты. Они имеют особый синтаксис. (набор пар, ключ, значение)
const obj = {
name: "Sasha",
age: 19,
isHappy: true,
}

//name, age, isHappy это ключи. sasha,19,true - это значения.
//Тут мы можем получить доступ к ключу. А с помощью symbol мы так просто не сможем получит этот доступ.

//console.log (obj.name) вариант получения доступа к ключу
// если хочу динамически формировать ключи или генерироввать их, то :
//console.log(obj['name'])
//Доп. инфа. Есть направление программировнаия  (объектно ориентированное программирование), где всё строиться на объектах. 
//Есть в JS классы - инструмент для создания объектов

//Объект можно изменить - добавить или удалить свой-во
//obj.job= "Google"
//console.log(obj)

//Есть отдельный вид объектов. Массив- array. 
//const array= ["Аня", 18, false]
//console.log(array)
//Добавим элемент в наш массив
//array[3]= "facebook"
//вместо ключа здесь число, порядковый номер, считаем с 0. Аня - 0-ой item массива
//console.log(array[0])

/*const res= 56 /"8"
console.log(res)

*/

// здесь = используется как оператор присвоения
//const variant ="option1"
// == и === сравнивают данные как они относятся друг к другу (не больше меньше), а скорее как либо равно, либо нет, т.е. подобные значения имеют булевый тип (true/false)
//пример сравнения по значению ниже. когда используем == эти сравниваемые значения приводятся к одному типу (обычно в строку или булевое)
//console.log(5 == "5")
//пример сравнения по типу.когда используем === эти сравниваемые значения НЕ приводятся к одному типу, а сравнивает сначала типы и если они разнве в console будет false.
//console.log(5 === "5")
//фича с null. Смысл в том, что null ==, > , <  0  всегда false/ а вот >= , <= 0 будет true
//undefind всегда false в любых вариациях 
//console.log(null == 0)
//console.log(null <= 0)
//console.log(undefined<= 0)
//здесь значения приводятся к булевому типу и сравнивают значения false == false в console отразится true
//console.log(null == undefined)
//но по типу они не равны, будет в console false
//console.log(null === undefined)

/*const go = true
if (go) {
    alert("Побежали!")
}else {
    alert("Стоим!")
}*/

/*const go = confirm("Будем ли мы бегать?")
if (go) {
    alert("Побежали!")
}else {
    alert("Стоим!")
}*/
/*const go = prompt("Куда мы побежим?", "Домой")
if (go) {
    alert("Побежали!")
}else {
    alert("Стоим!")
}
*/
//const userName = prompt("Who you are?", "anonim")
//userName = 0
//if (userName === "admin") {
 //   alert("Hello boss!")
//} else if (userName === "anonim") {
 //   alert("I don't know you...")
//}
/*можно записать по-другому
else if (userName == null) {
    alert("You don't exist...")
}*/
/*else if (!userName) {
    alert("You don't exist...")
}
else {
    alert(`Hi ${userName}`)
}*/

// сократим код
//const userName = prompt("Who you are?", "anonim")
//userName = 0
/*if (userName === "admin") {
    alert("Hello boss!")
} else if (userName === "anonim" || !userName) {
    alert("I don't know you...")
}
/*можно записать по-другому
else if (userName == null) {
    alert("You don't exist...")
}*/

/*else {
    alert(`Hi ${userName}`)
}
*/

//оператор while
//const counts= prompt("До скольки вы хотите досчитать?",10)
//let i=10
/*while(i<=counts){
    console.log(++i)
}

do {
    console.log(i++)

}
while(i<=counts)
console.log(i)
*/


//оператор for
/*const arr=[]
for (let i=1; i<=50; ++i){
   arr.push(i)
}
const newArr=[]
for (elem of arr){
    const marker = elem % 3
    if(!marker){
        newArr.push(elem)
    }
}
console.log(newArr)*/
/*const obj={
    name:"Sasha",
    age:25,
    city:"Voronej!"
}
for(key in obj){
    console.log(key,obj[key])
}
const randomValue1=(Math.random()*100).toFixed(0)
const randomValue2=(Math.random()*100).toFixed(0)
const isPlus = Math.random() >0.5

const gameElements = document.getElementById("myGame").children
if(isPlus){
    gameElements[1].innerText=`${randomValue1}+${randomValue2}`
} else {
    gameElements[1].innerText=`${randomValue1}-${randomValue2}`
}
console.log(gameElements)*/

//ДЗтест3
/*
let count = 15

let point = 5

while (count < 18) {

point = point + 3

count++

}

console.log(point)
let num = 17

let str = "17"

let empty = null

if ( str - num ) {

    console.log('first')

} else if (empty - num) {

    console.log("second")

} else if (str - empty) {

    console.log("third")

} else {

    console.log("no one")

*/
//ИГРА
//Нажав на кнопку начать игра запускается: генерируется пример
// у пользователя есть возможность ввести ответ,должна появиться кнопка проверить
// Нажав кнопку проверить, мы сравниваем ввод пользователя с ответом
//вывести результат и правильное значение
//сменить кнопку на начать занова

const getRandomNumInRange = (min, max) => {
    const randomNum=(Math.random()*(max-min)+min).toFixed(0)
    return randomNum
}

const getTask = () => {
   // const randomNum1=getRandomNumInRange(0,100)
    //const randomNum2=getRandomNumInRange(0,100)
   /* let symbol
    if(Math.random() > 0.5) {
        symbol = "+"
    } else {
        symbol = "-"
    }*/
    const symbol = (Math.random() > 0.5) ? "+" : "-"

    //const task = `${randomNum1} ${symbol} ${randomNum2}` 
    const task = `${getRandomNumInRange(0,100)} ${symbol} ${getRandomNumInRange(0,100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
    //тоглые функции тк это переключение (если он да, то он стане нет и наоборот если он да, то станет нет)
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

btnGame.onclick = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        //тут будем генерировать задачу и ответ
        const task = getTask()
        //показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState ()
        //меняю кнопку
        //меняю состояние 
    } else {
//сравнить ответ пользователя с правильным
const isRight = gameState.rightAnswer == userAnswer.value
//вывести результат 
userTask.innerText=userTask.innerText + " = " + gameState.rightAnswer
//вывести поздравления
title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
//поменять кнопку и состояние
btnGame.innerText= "Начать заново!"
toggleGameState ()
    }
}
