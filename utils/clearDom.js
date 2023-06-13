const clearDom = () => {
  document.querySelector('#view-orders').innerHTML = '';
  document.querySelector('#order-details').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#close-orders').innerHTML = '';
  document.querySelector('#revenue').innerHTML = '';
};

export default clearDom;
