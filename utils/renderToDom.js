const renderToDom = (divId, htmlToRender) => {
  document.querySelector(`${divId}`).innerHTML = htmlToRender;
};

export default renderToDom;
