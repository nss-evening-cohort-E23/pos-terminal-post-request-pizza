import clearDom from "../utils/clearDom";
import firebase from "firebase/app";

const landingPage = () => {
  clearDom();

  const user = firebase.auth().currentUser;

  const domString = `
   <div id="landing-page-intro">
    <style>
      h1 {
        color: white;
        margin-bottom: 5rem;
      }
      .landing-page-btn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .btn {
        margin-bottom: 5px;
        margin-top: 5px
      }
    </style>
    <h1>Welcome, ${user.displayName}!</h1>

    <div class="landing-page-btn">
      <button class="btn btn-success" id="view-orders">View Orders</button>
      <button class="btn btn-primary" id="create-order">Create an Order</button>
      <button class="btn btn-warning" id="view-revenue">View Revenue</button>
    </div>
   </div>
   `;

  document.querySelector('#landing-page').innerHTML = domString;
};

export default landingPage;