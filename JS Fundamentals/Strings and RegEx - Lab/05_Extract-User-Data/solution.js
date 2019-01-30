function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let regex = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359( |-)\d\3\d{3}\3\d{3}) ([a-z]+@[a-z]+.[a-z]{2,3})$/gm;

  arr.forEach(x => {
     let match = regex.exec(x);
     if (match){
         createParagraph(`Name: ${match[1]}`);
         createParagraph(`Phone Number: ${match[2]}`);
         createParagraph(`Email: ${match[4]}`);
     }else {
         createParagraph(`Invalid data`);
     }
      createParagraph(`- - -`);
  });

  function createParagraph(textContent) {
      let p = document.createElement('p');
      p.textContent = textContent;

      document.getElementById('result').appendChild(p);
  }
}