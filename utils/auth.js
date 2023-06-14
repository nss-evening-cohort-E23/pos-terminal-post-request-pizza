import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
  document.querySelector('#navigation').innerHTML = '';
  clearDom();
};

export { signIn, signOut };
