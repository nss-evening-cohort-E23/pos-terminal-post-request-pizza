// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! You are up and running!</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Click ME!</button><br />
    <hr />
    <h2>These are font awesome icons:</h2>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;
  console.warn('YOU ARE UP AND RUNNING!');

  document
    .querySelector('#click-me')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
