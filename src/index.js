import _ from 'lodash'
import './style.scss'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());
