function solve() {
    let string = document.querySelector("#string").value;
    let character = document.querySelector("#character").value;

    let count = 0;
    let charArr = string.split('');
    for(i = 0; i < charArr.length; i++){
        if(charArr[i] === character){
            count++;
        }
    }

    let result = document.querySelector("#result");
    result.textContent = count % 2 === 0 ? `Count of ${character} is even.` :`Count of ${character} is odd.`;
}