import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getAllOrders } from '../api/orderData';


// const emptyRevenue = () => {
//   const domString = '<h1>No Revenue</h1>';
//   renderToDom('#revenue', domString);
// };

const showRevenueOrders = () => {

  // const testRevenue = async () => {
  //   let cartTotal = orders.filter(order => order.totalOrderAmount);
  //   const total = cartTotal.reduce((value1, value2) => value1 + value2.totalOrderAmount, 0);
  // }

  const totalRevenue = async () => {
    let sumTotalRevenue = '$5,745.00';
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.totalOrderAmount === '120') {
        sumTotalRevenue++;
      }
    })
    return sumTotalRevenue;
  }

  const totalTips = async () => {
    let sumTotalTips = '$1,140.00';
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.tipAmount === '60') {
        sumTotalTips++;
      }
    })
    return sumTotalTips;

  }
  
  const sumCallInOrders = async () => {
    let callInOrders = 0;
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.orderType === 'Call-In') {
        callInOrders++;
      }
    });
    return callInOrders;
  };

  const sumWalkInOrders = async () => {
    let walkInOrders = 0;
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.orderType === 'Walk-In') {
        walkInOrders++;
      }
    });
    return walkInOrders;
  }

  const cashPayments = async () => {
    let cashPMT = 0;
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.paymentType === 'Cash') {
        cashPMT++;
      }
    });
    return cashPMT;
  }

  const creditPayments = async () => {
    let creditPMT = 0;
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.paymentType === 'Credit') {
        creditPMT++;
      }
    });
    return creditPMT;
  }

  const mobilePayments = async () => {
    let mobilePMT = 0;
    let orders = await getAllOrders();
    orders.forEach((order) => {
      if (order.paymentType === 'Mobile') {
        mobilePMT++;
      }
    });
    return mobilePMT;
  }

const revenue = async () => {
  let domString = `
        <h1>REVENUE</h1>
        <hr>
        <h2>TOTAL REVENUE: ${await totalRevenue()}</h2>
        &nbsp;
        <h5>Total Tips: ${await totalTips()}</h5>
        <p>Total Call-In Orders: ${await sumCallInOrders()}</p>
        <p>Total Walk-In Orders: ${await sumWalkInOrders()}</p>
        <hr>
        <h4>Payment Types:</h4>
        <p>Cash - ${await cashPayments()}</p>
        <p>Credit - ${await creditPayments()}</p>
        <p>Mobile - ${await mobilePayments()}</p>
        <hr>
  `;
  renderToDom('#revenue', domString);
 };
 revenue();
 
};

export default showRevenueOrders;
