function solve() {
  let text = document.getElementById('str1').value;
  let textCase = document.getElementById('str2').value;

  let textResult = text.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join('');

   if (textCase !== 'Camel Case' && textCase !== 'Pascal Case'){
        textResult = 'Error!';
    }  else if(textCase === 'Camel Case'){
        textResult = textResult[0].toLowerCase() + textResult.slice(1);
    }

    document.getElementById('result').textContent = textResult;
}