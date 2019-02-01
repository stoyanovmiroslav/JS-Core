function solve() {
    let [text, command] = document.getElementById('str').value.split(', ');

    if (command === 'all') {
        let name = getName(text);
        let flightNumber = getFlight(text);
        let company = getCompany(text);
        let airports = getAirports(text);

        appendToResult(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airports[1].trim()} to ${airports[2].trim()}. Have a nice flight with ${company}.`);
    }
    else if(command === 'name'){
        let name = getName(text);

        appendToResult(`Mr/Ms, ${name}, have a nice flight!`);
    }
    else if(command === 'company'){
        let company = getCompany(text);

        appendToResult(`Have a nice flight with ${company}.`);
    }
    else if(command === 'flight'){
        let flightNumber = getFlight(text);
        let airport = getAirports(text);

        appendToResult(`Your flight number ${flightNumber} is from ${airport[1].trim()} to ${airport[2].trim()}.`);
    }

    function getFlight(text) {
        let regexFlight = /\s[A-Z]{1,3}\d{1,5}\s/gm;
        return regexFlight.exec(text)[0].trim();
    }

    function getCompany(text) {
        let regexCompany = /-(\s[A-Z][A-Za-z]*\*[A-Z][A-Za-z]*\s)/gm;
        return regexCompany.exec(text)[1].trim().replace('*', ' ');
    }

    function getName(text) {
        let regexName = /\s[A-Z][A-Za-z]*(-([A-Z][a-z]*\.))?-([A-Z][A-Za-z]*)\s/gm;
        return regexName.exec(text)[0].trim().split('-').join(' ');
    }

    function getAirports(text) {
        let regexAirport = /\s([A-Z]{3})\/([A-Z]{3})\s/gm;
        return regexAirport.exec(text);
    }

    function appendToResult(text) {
        document.getElementById('result').textContent = text;
    }
}