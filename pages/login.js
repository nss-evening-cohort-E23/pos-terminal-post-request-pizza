import domBuilder from "../utils/domBuilder";
import { signIn } from "../utils/auth";
import firebase from "firebase/app";
import clearDom from "../utils/clearDom";
import landingPage from "./landing-page";

const loginPage = () => {
    const backgroundImg = 'https://img.freepik.com/free-vector/seamless-pizza-ingredients_1176-269.jpg?w=826&t=st=1686708012~exp=1686708612~hmac=99fc9c04d2abf1902a54733d40778f902dda8d0e5c016fb0e8fbbc529064e585';

    const domString = `
    <style> 
      body { 
         background-image: url(${backgroundImg});
         background-size: cover;
         background-position: center;
       }

       #logo img{
        width: 400px;
        height: auto;
        margin-bottom: 20px;
        border-radius: 50%;
       }
       
    </style>
 
    <div id="logo">
      <img src="https://i.imgur.com/XgjPbNB.png" alt="">
    </div>
    <div id="login-btn">
    <button id="google-auth" class="btn btn-primary" style="background-color: #6e2613; border-color: #4d1e12;">Login to Get Started</button>
    </div>
 `;
     document.querySelector('#landing-page').innerHTML = domString;
     document.querySelector('#google-auth').addEventListener('click', signIn);

     //Once user has logged in it will clear the dom and render its introduction to the landing page.
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          clearDom();
          landingPage();
        }
      })
};

export default loginPage;
