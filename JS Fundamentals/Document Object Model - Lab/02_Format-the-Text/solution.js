function solve(){
    let input = document.getElementById('input');
    let sentences = input.innerHTML.split('.');

    let tempArr = [];
    for (let i = 0; i < sentences.length; i++) {
        tempArr.push(sentences[i]);
        let isLastSentence = i === sentences.length - 1;

        if (tempArr.length === 3 || isLastSentence){
            let paragraph = document.createElement('p');
            paragraph.textContent = `${tempArr.join('.')}${isLastSentence ? '' : '.'}`;

            document.getElementById('output').appendChild(paragraph);
            tempArr = [];
        }
    }
}