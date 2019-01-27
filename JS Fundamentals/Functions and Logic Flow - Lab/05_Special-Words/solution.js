function solve() {
    let firstNumber = Number(document.querySelector("#firstNumber").value);
    let secondNumber = Number(document.querySelector("#secondNumber").value);

    let firstString = document.querySelector("#firstString").value;
    let secondString = document.querySelector("#secondString").value;
    let thirdString = document.querySelector("#thirdString").value;

    for(let i = firstNumber; i <= secondNumber; i++){
        let paragraph = document.createElement('p');

        if(i % 5 === 0 && i % 3 === 0){
            paragraph.textContent = `${i} ${firstString}-${secondString}-${thirdString}`;
        }else if(i % 5 === 0){
            paragraph.textContent = `${i} ${thirdString}`;
        }else if(i % 3 === 0){
            paragraph.textContent = `${i} ${secondString}`;
        }else {
            paragraph.textContent = i;
        }

        document.querySelector("#result").appendChild(paragraph);
    }
}