import './index.scss';

const $app = document.querySelector("#app");

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World';
  return element;
}

$app.appendChild(component());