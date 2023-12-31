import navBar from '../components/shared/navbar';
import landingPage from '../pages/landing-page';
import domBuilder from './domBuilder';
// import logoutButton from '../components/buttons/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
// ATTEMPT TO HOOK UP REVENUE NAVBAR LINK BELOW:
// import { revenueNavEvent } from '../events/navigationEvents';
// import { showOrders } from '../pages/orderCards';
// import { getAllOrders } from '../api/orderData';

// You can pass this function with no parameter and the app will work and display all cards for ANY user signed in. By adding the parameter "user" it will then put cards on the dom based on "uid".
const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  // formEvents2(user);
  navBar(); // DYNAMICALLY ADD THE NAVBAR
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  //ATTEMPT TO LINK REVENUE PAGE IN NAVBAR BELOW:
  // revenueNavEvent(user);
  // getOrdersPlaceholder(user.uid).then((orders) => showWords(orders)); // Puts all orders on the DOM at App load & Pass userID to display items based on UID.
  landingPage(); // This will run the introduction when user is logged in
  

};

export default startApp;
