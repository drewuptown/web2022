if (new Date().getHours() > 18 ) {
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const content = document.getElementsByClassName('header');
  content[0].style.backgroundColor = 'grey';
  content[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const content = document.getElementsByClassName('footer');
  content[0].style.backgroundColor = 'grey';
  content[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const content = document.getElementsByClassName('footerbottom');
  content[0].style.backgroundColor = 'grey';
  content[0].style.color = 'white';
}
