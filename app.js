// tabs
let lenTab = document.getElementById("tab1");
let weiTab = document.getElementById("tab2");
let tempTab = document.getElementById("tab3");
let currentTab = "leng";
let fromUnit = document.querySelector("#fromUnit").value;
let toUnit = document.querySelector("#toUnit").value;

// sections
let convetSection = document.getElementById("converter");
let leng = document.getElementById("len");
let weight = document.getElementById("wei");
let temp = document.getElementById("temp");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let resultSection = document.querySelector(".display-result");
let resetBtn = document.getElementById("btn-reset");
resultSection.style.display = "none";

lenTab.addEventListener("click", function(){
    weight.style.display = "none"
    temp.style.display = "none"
    leng.style.display = "block"

    lenTab.classList.add("clicked");
    weiTab.classList.remove("clicked");
    tempTab.classList.remove("clicked");
    currentTab = "leng";

    convetSection.style.display = "block";
    resultSection.style.display = "none";
})

weiTab.addEventListener("click", function(){
    currentTab = "weight";
    leng.style.display = "none"
    temp.style.display = "none"
    weight.style.display = "block"
    
    weiTab.classList.add("clicked");
    lenTab.classList.remove("tab1");
    lenTab.classList.remove("clicked");
    tempTab.classList.remove("clicked");
    convetSection.style.display = "block";
    resultSection.style.display = "none";
})

tempTab.addEventListener("click", function(){
    currentTab = "temperature";
    leng.style.display = "none"
    weight.style.display = "none"
    temp.style.display = "block"
    
    tempTab.classList.add("clicked");
    lenTab.classList.remove("tab1");
    lenTab.classList.remove("clicked");
    weiTab.classList.remove("clicked");
    convetSection.style.display = "block";
    resultSection.style.display = "none";
})



// Calculation 
const userInput1 = document.getElementById("value1");
const userInput2 = document.getElementById("value2");
const userInput3 = document.getElementById("value3");

let result;

function convert(){
    const lengToMeter = {mm: 0.001,cm: 0.01,m: 1,km: 1000,in: 0.0254,ft: 0.3048,yd: 0.9144,mi: 1609.34};
    const weightToKg = {mg: 0.000001,g: 0.001,kg: 1,t: 1000,oz: 0.0283495,lb: 0.453592};
    
    let valueINMeter, valueInKg;
    if (currentTab === "leng"){
        fromUnit = document.querySelector("#fromUnit").value;
        toUnit = document.querySelector("#toUnit").value;
        valueINMeter = userInput1.value * lengToMeter[fromUnit];
        result = valueINMeter / lengToMeter[toUnit];
        console.log(`${userInput1.value} ${fromUnit} = ${result} ${toUnit}`);
    }
    else if (currentTab === "weight"){
        fromUnit = document.querySelector("#fromUnit2").value;
        toUnit = document.querySelector("#toUnit2").value;
        valueInKg = userInput2.value * weightToKg[fromUnit];
        result = valueInKg / weightToKg[toUnit];
        console.log(`${userInput2.value} ${fromUnit} = ${result} ${toUnit}`);
        
    } 
    else {
        fromUnit = document.querySelector("#fromUnit3").value;
        toUnit = document.querySelector("#toUnit3").value;
        let inputValue = Number(userInput3.value);
        // Convert to Celsius first
        let cel = inputValue;
        if (fromUnit === 'f') {cel = (5/9) * (inputValue - 32)}
        else if (fromUnit === 'k') {cel = inputValue - 273.15}
    
        // Convert Celsius to toUnit result
        let res = cel;
        if (toUnit === 'f') {res = (9/5) * cel + 32}
        else if (toUnit === 'k') {res = cel + 273.15}
        result = res;
        console.log(`${inputValue} ${fromUnit} = ${res} ${toUnit}`);
    }
    result = result.toFixed(4);
    convetSection.style.display = "none";
    resultSection.style.display = "block";
    document.getElementById("show-res").textContent = `${userInput3.value || 0} ${fromUnit} = ${result} ${toUnit}`;
}

btn1.addEventListener("click", convert);
btn2.addEventListener("click", convert);
btn3.addEventListener("click", convert);
    
resetBtn.addEventListener("click", function(){
    convetSection.style.display = "block";
    resultSection.style.display = "none";
    userInput1.value = "";
    userInput2.value = "";
    userInput3.value = "";
})