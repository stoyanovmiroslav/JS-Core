function solve() {
    let zoneArray = [];
    let numberOfFans = 0;
    let ticketsSum = 0;

    initializeZoneArrayAndAddEventListener(document.querySelectorAll("#exercise .Levski button"));
    initializeZoneArrayAndAddEventListener(document.querySelectorAll("#exercise .Litex button"));
    initializeZoneArrayAndAddEventListener(document.querySelectorAll("#exercise .VIP button"));

    document.querySelector('#summary button').addEventListener('click', showSummary);

    function orderTicket(e) {
        let zone = getParentNodeByTagName(e.target, 'SECTION').classList[0];
        let sector = getSectorName(e.target);
        let seatNumber = e.target.textContent;

        if (!zoneArray[zone][sector][seatNumber]){
            zoneArray[zone][sector][seatNumber] = true;
            e.target.style.backgroundColor = 'rgb(255,0,0)';
            ticketsSum += getTicketPrice(zone, sector);
            numberOfFans++;

            appendResult(` Seat ${seatNumber} in zone ${zone} sector ${sector} was taken.`);
        } else {
            appendResult(` Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable.`);
        }
    }

    function showSummary(){
        document.querySelector('#summary span').textContent = `${ticketsSum} leva, ${numberOfFans} fans.`;
    }

    function getParentNodeByTagName(element, tagName) {
        while ( element !== null && element.tagName !== tagName){
            element = element.parentNode;
        }

        return element;
    }

    function appendResult(text){
        let result = document.getElementById('output');
        result.value += text + '\n';
    }

    function getSectorName(element) {
        let allSectors = element.parentNode.parentNode.getElementsByTagName('button');
        let indexOfSector = Array.from(allSectors).indexOf(element);

        switch (indexOfSector) {
            case 0: return 'A';
            case 1: return 'B';
            case 2: return 'C';
            default: return 'invalid';
        }
    }

    function initializeZoneArrayAndAddEventListener(buttonElements){
        let zone = getParentNodeByTagName(buttonElements[0], 'SECTION').classList[0];

        Array.from(buttonElements).forEach((x, i) => {
            let sectorName = getSectorName(x);
            if (!zoneArray[zone]){
                zoneArray[zone] = {};
            }
            if (!zoneArray[zone][sectorName]){
                zoneArray[zone][sectorName] = {};
            }
            
            zoneArray[zone][sectorName][x.textContent] = false;
            x.addEventListener('click', orderTicket);
        });
    }

    function getTicketPrice(zone, sector) {
        if (zone === 'Levski' || zone === 'Litex')
        {
            switch (sector) {
                case 'A': return 10;
                case 'B': return 7;
                case 'C': return 5;
            }
        }else if (zone === 'VIP'){
            switch (sector) {
                case 'A': return 25;
                case 'B': return 15;
                case 'C': return 10;
            }
        }

        return 0;
    }
}