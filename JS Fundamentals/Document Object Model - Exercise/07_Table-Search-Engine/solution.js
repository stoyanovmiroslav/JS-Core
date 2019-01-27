function solve() {
    document.getElementById('searchBtn').addEventListener('click', clickEvent);

    function clickEvent() {
        let input = document.getElementById('searchField').value.toLowerCase();

        Array.from(document.querySelectorAll('tbody tr'))
            .forEach(x => x.classList.remove('select'));

        Array.from(document.querySelectorAll('tbody tr td'))
            .filter(x => x.textContent.toLowerCase().includes(input))
            .forEach(x => x.parentNode.classList.add('select'));

        document.getElementById('searchField').value = '';
    }
}