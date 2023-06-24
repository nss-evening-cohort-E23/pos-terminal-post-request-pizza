import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
// import { getAllOrders } from '../api/orderData';


const emptyRevenue = () => {
  const domString = '<h1>No Revenue</h1>';
  renderToDom('#revenue', domString);
};

const showRevenueOrders = (orders) => {

  const totalRevenue = () => {
    let sumTotalRevenue = 0;
    orders.forEach((order) => {
      if (order.open === false) {
        sumTotalRevenue += order.totalOrderAmount;
      }
    })
    return sumTotalRevenue.toFixed(2);
  }

  const totalTips = () => {
    let sumTotalTips = 0;
    orders.forEach((order) => {
      if (order.open === false) {
        sumTotalTips += order.tipAmount;
      }
    })
    return sumTotalTips.toFixed(2);

  }
  
  const sumCallInOrders = () => {
    let callInOrders = 0;
    orders.forEach((order) => {
      if (order.orderType === 'Call-In' && (order.open === false)) {
        callInOrders++;
      }
    });
    return callInOrders;
  };

  const sumWalkInOrders = () => {
    let walkInOrders = 0;
    orders.forEach((order) => {
      if (order.orderType === 'Walk-In' && (order.open === false)) {
        walkInOrders++;
      }
    });
    return walkInOrders;
  }

  const cashPayments = () => {
    let cashPMT = 0;
    orders.forEach((order) => {
      if (order.paymentType === 'Cash' && (order.open === false)) {
        cashPMT++;
      }
    });
    return cashPMT;
  }

  const creditPayments = () => {
    let creditPMT = 0;
    orders.forEach((order) => {
      if (order.paymentType === 'Credit' && (order.open === false)) {
        creditPMT++;
      }
    });
    return creditPMT;
  }

  const mobilePayments = () => {
    let mobilePMT = 0;
    orders.forEach((order) => {
      if (order.paymentType === 'Mobile' && (order.open === false)) {
        mobilePMT++;
      }
    });
    return mobilePMT;
  }

const revenue = () => {
  let domString = `
      <div id="revenueContainer">
        <h1 id="revenueTitle">REVENUE</h1>
        &nbsp;
        <h2 id="totalRevenueTitle">TOTAL REVENUE: $${totalRevenue()}</h2>
        &nbsp;
        <h5>Total Tips: $${totalTips()}</h5>
        <p>Total Call-In Orders: ${sumCallInOrders()}</p>
        <p>Total Walk-In Orders: ${sumWalkInOrders()}</p>
        &nbsp;
        <h4>Payment Types:</h4>
        <p>Cash - ${cashPayments()}</p>
        <p>Credit - ${creditPayments()}</p>
        <p>Mobile - ${mobilePayments()}</p>
      </div>
  `;
  renderToDom('#revenue', domString);
 } 
 if (orders) {
 revenue();
} else {
  emptyRevenue();
}}

export default showRevenueOrders;
export { emptyRevenue };
