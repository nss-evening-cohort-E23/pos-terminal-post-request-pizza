import { getAllOrders } from "../api/orderData";
import { showOrders } from "../pages/orderCards";
import { signOut } from "../utils/auth";
import addOrderForm from "../components/addOrderForm";
import landingPage from "../pages/landing-page";
// import showRevenueOrders from "../pages/revenue";
// import clearDom from '../utils/clearDom';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
  // LOGO HOME BUTTON
  if (e.target.id.includes('navLogo')) {
    landingPage();
    console.warn('navLogo');
  }
  // NAVBAR HOME LINK
  if (e.target.id.includes('navTitle')) {
    landingPage();
    console.warn('navTitle');
  }
  // LOGOUT BUTTON
  if (e.target.id.includes('logout-button')) {
    signOut();
  }
  // GET 'CREATE AN ORDER' FORM TO SHOW
  if (e.target.id.includes('create-order-landing')) {
    addOrderForm({});
  }
  // GET 'VIEW ORDERS' BUTTON TO WORK
  if (e.target.id.includes('view-order')) {
    getAllOrders(user).then(showOrders);
  }
  
  })
  // END OF navigationEvents
}
// ATTEMPT TO HOOK UP REVENUE LINK IN NAVBAR BELOW:
// const revenueNavEvent = (user) => {
//   document
//     .querySelector('#navigation')
//     .addEventListener('click', async (e) => {
//       // VIEW REVENUE PAGE
//       if (e.target.id.includes('view-nav-revenue')) {
//         let orders = await getAllOrders();
//         // console.warn(e.target, 'VIEW REVENUE BUTTON CLICKED');
//         clearDom();
//         showRevenueOrders(orders);
//       }
//     })
//   }

// SEARCH BAR EVENT
const searchEvent = (user) => {
  document.querySelector('#searchBar').addEventListener('hover', (e) => {
  // SEARCH BAR
  const search = (event) => {
    const lowerCase = event.target.value.toLowerCase();
    getAllOrders(user.uid).then((data) => {
      const searchOrders = Object.values(data).filter((item) => item.orderName.toLowerCase().includes(lowerCase));
      return searchOrders;
    }).then(showOrders);
  };
  document.querySelector('#searchBar').addEventListener('keyup', search);

  })
}
export default navigationEvents

// ATTEMPT TO HOOK UP REVENUE NAVBAR EVENT BELOW:
// export {
//   revenueNavEvent
// }
