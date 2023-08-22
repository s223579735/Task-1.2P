const date = new Date();
const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function getCurrentDate() {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    let ddmmyy = `${dd}-${mm}-${yy}`;
    return ddmmyy
}

function capitaliseText(text) {
    console.log(text);
    return text.toUpperCase();
}

function convertTo2DP(num) {
    num = parseFloat(num);
    return num.toFixed(2);
}

var currentDate = getCurrentDate();
document.getElementById("date").innerHTML = `Today's date is ${currentDate}.`; 
document.getElementById("day").innerHTML = `It is a ${daysOfTheWeek[date.getDay()]}`
document.getElementById("time").innerHTML = `The time now is: ${date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}`
var form = document.getElementById("form1")
form.addEventListener("submit", e => {
    e.preventDefault();
    var capText = capitaliseText(document.getElementById("caps").value);
    document.getElementById("capitalisedText").innerHTML = `Your capitalised text: ${capText}`;
    document.getElementById("textLength").innerHTML = `What you wrote is ${capText.length.toString()} letters long!` // I know you don't have to use toString() here; but it was for the requirement so ¯\_(ツ)_/¯
})
var form2 = document.getElementById("form2")
form2.addEventListener("submit", e => {
    e.preventDefault();
    var inputNum = document.getElementById("num").value;
    let isNumber = !isNaN(inputNum);

    if(isNumber) {
        let convertedNum = convertTo2DP(inputNum)
        document.getElementById("roundedNumber").innerHTML = `Your number rounded to 2 decimal places: ${convertedNum}`;
    } else {
        document.getElementById("roundedNumber").innerHTML = `You did not enter a valid number!`;
    }
})