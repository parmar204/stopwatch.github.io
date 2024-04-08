const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let setCount = 0;
let IntervalId;

const startTime = () => {
    IntervalId = setInterval(() => {countDownElement.innerText = setCount++;},1000)
}

const stopTime = () => {
    clearInterval(IntervalId)
}

const resetTime = () =>{
    setCount = 0;
    countDownElement.innerText = setCount;
    clearInterval(IntervalId)
}

const showStopValue = () => {
    resetValueElement.innerHTML += `the timing is ${setCount -1}<br>`;
}

const clearTime = () => {
    resetValueElement.innerHTML = "";
}

document.querySelector(".start_btn").addEventListener("click",startTime);
document.querySelector(".reset_btn").addEventListener("click",resetTime);
document.querySelector(".stop_btn").addEventListener("click",stopTime);
document.querySelector(".time_btn").addEventListener("click",showStopValue);
document.querySelector(".clear_btn").addEventListener("click",clearTime);