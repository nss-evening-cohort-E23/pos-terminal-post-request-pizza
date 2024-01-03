const clearDom = () => {
  document.querySelector('#view-orders').innerHTML = '';
  document.querySelector('#landing-page').innerHTML = '';
  document.querySelector('#order-details').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#close-orders').innerHTML = '';
  document.querySelector('#revenue').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
};

export default clearDom;
