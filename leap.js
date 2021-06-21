let cYear = document.getElementById("year").value;

let checkBtn = document.querySelector(".submit");

const calculate = () => {
    let cYear = document.getElementById("year").valueAsNumber;
    let display = document.getElementById("result")
    if ((cYear%4==0)&&(cYear%100 !=0) ||(cYear%400==0)){
        display.innerHTML = `${cYear} is a Leap Year`
    }else{
        display.innerHTML = `${cYear} is not a Leap Year`
    }
}

checkBtn.addEventListener('click', calculate, false);
