import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
// import { showOrders } from '../pages/orders';
// import { getOrders } from '../api/orderData';

// You can pass this function with no parameter and the app will work and display all cards for ANY user signed in. By adding the parameter "user" it will then put cards on the dom based on "uid".
const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAVBAR
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getOrdersPlaceholder(user.uid).then((orders) => showWords(orders)); // Puts all orders on the DOM at App load & Pass userID to display items based on UID.
};

export default startApp;
