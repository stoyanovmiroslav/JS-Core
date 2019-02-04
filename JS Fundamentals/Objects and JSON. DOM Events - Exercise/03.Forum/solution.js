function solve() {
    let userInfo = document.querySelectorAll('#exercise .user-info input');
    let tableBody = document.querySelector('table tbody');
    document.querySelector('#exercise form button').addEventListener('click', registerUser);
    document.querySelector('#exercise > button').addEventListener('click', search);

    function search(e) {
        e.preventDefault();
        let searchedText = document.querySelector('#exercise > input').value;
        let userTableInfo = Array.from(document.querySelectorAll('table tbody tr td'));

        userTableInfo.forEach(x => {
            x.parentNode.style.visibility = 'hidden';
        });

        userTableInfo.forEach(x => {
            if(x.textContent.includes(searchedText)){
                x.parentNode.style.visibility = 'visible';
            }
        });
    }

    function registerUser(e){
        e.preventDefault();
        let username = userInfo[0];
        let password = userInfo[1];
        let email = userInfo[2];
        let checkedTopics = Array.from(document.querySelectorAll('#exercise .topics input'))
                                    .filter(x => x.checked).map(x => x.value);

        let tr = document.createElement('tr');
        let td = document.createElement('td');

        let tdUsername = td.cloneNode();
        tdUsername.textContent = username.value;

        let tdEmail = td.cloneNode();
        tdEmail.textContent = email.value;

        let tdTopics = td.cloneNode()
        tdTopics.textContent = checkedTopics.join(' ');

        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        tableBody.appendChild(tr);
    }
}