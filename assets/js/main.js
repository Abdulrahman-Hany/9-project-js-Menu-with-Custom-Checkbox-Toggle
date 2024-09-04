let body = document.querySelector('body');
let dark = document.querySelector("#dark");

dark.addEventListener('click', () => {
  if(dark.checked == true) {
    body.classList.add('darkMode');
  }else {
    body.classList.remove('darkMode');
  }
})