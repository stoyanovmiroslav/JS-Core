function solve() {
    let resultSpan = document.querySelector("#result");

    let number = document.querySelector("#num1").value;
    let type = document.querySelector("#type").value;

    switch(type.toLowerCase()){
        case "celsius":{
            let result = (+number * 1.8) + 32;
            resultSpan.textContent = Math.round(result);
        }break;
        case "fahrenheit":{
            let result = (+number - 32) / 1.8;
            resultSpan.textContent = Math.round(result);
        }break;
        default:{
            resultSpan.textContent = "Error!";
        }break;
    }
}