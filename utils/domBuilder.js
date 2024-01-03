import renderToDom from './renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navigation"></div>
    <div id="main-container">
      <div id="landing-page"></div>
      <div id="view-orders"></div>
      <div id="form-container"></div>
      <div id="order-details"></div>
      <div id="close-orders"></div>
      <div id="revenue"></div>
    </div>`;

  renderToDom('#app', domString);
};

export default domBuilder;
