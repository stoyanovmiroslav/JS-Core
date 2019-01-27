function solve() {
  let links = Array.from(document.querySelectorAll('#exercise div a'));
  links.forEach(x => x.addEventListener('click', clickEvent));

  function clickEvent(e) {
      let parent = e.target.parentNode;
      let spanResult = parent.children[1];

      let timesVisited = spanResult.textContent.split(' ')[1];
      spanResult.textContent = `Visited: ${++timesVisited} times`;
  }
}