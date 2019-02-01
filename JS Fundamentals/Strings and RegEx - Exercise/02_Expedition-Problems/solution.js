function solve() {
    let keyword = document.getElementById('str').value;
    let str = document.getElementById('text').value;

    let regexMessage = new RegExp(`${keyword}(.+?)${keyword}`, 'gm')
    let regexCoordinates = /(east|north).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
    
    let message = `Message: ${regexMessage.exec(str)[1]}`;

    let north , east;
    
    let match;
    while ((match = regexCoordinates.exec(str)) !== null) {
        match[1].toLowerCase() === 'north' ? north = `${match[2]}.${match[3]} N` : east = `${match[2]}.${match[3]} E`;
    }

    appendToResult(north);
    appendToResult(east);
    appendToResult(message);

    function appendToResult(text) {
        let p = document.createElement('p');
        p.textContent = text;
        document.getElementById('result').appendChild(p);
    }
}