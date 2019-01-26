function leapYear() {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', clickEvent);

    function clickEvent(e) {
        let input = document.querySelector('#exercise input');
        let year = input.value;
        input.value = '';

        document.querySelector('#year div').textContent = year;

        if (leapYear(year)){
            document.querySelector('#year h2').textContent = 'Leap Year'
        }else{
            document.querySelector('#year h2').textContent = 'Not Leap Year';
        }
    }

    function leapYear(year)
    {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
}