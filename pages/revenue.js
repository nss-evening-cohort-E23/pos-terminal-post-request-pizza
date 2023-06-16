import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyRevenue = () => {
  const domString = '<h1>No Revenue</h1>';
  renderToDom('#revenue', domString);
};

const showRevOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div id="revenue">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">${item.tipAmount}</h4>
        <hr>
        <h4 class="card-subtitle mb-2 text-muted"><i>${item.orderType}</i></h4>
        <hr>
        <h4 class="card-subtitle mb-2 text-muted">${item.paymentType}</h4>
      </div>
    </div>
    </div>`;
  });
  renderToDOM('#revenue', domString);
};

export { emptyRevenue, showRevOrders };


// TEST CODE BELOW ****

// const emptyRevenue = () => {
//   const domString = '<h1>No Words</h1>';
//   renderToDom('#revenue', domString);
// };

// const totalTips = () => {
//   let tips = "<h3>Total tips goes here.</h3>";
//   renderToDom("#revenue", tips);
// };

// const callInOrders = () => {
//   let callIns = "<h3>Total # of call-in orders go here.</h3>";
//   renderToDom("#revenue", callIns);
// };

// const walkInOrders = () => {
//   let walkIns = "<h3>Total # of walk-in orders go here.</h3>";
//   renderToDom("#revenue", walkIns);
// };

// const cashPmtType = () => {
//   let cashPmt = "<h3>Total # of cash payments go here.</h3>";
//   renderToDom("#revenue", cashPmt);
// };

// const creditPmtType = () => {
//   let creditPmt = "<h3>Total # of credit payments go here.</h3>";
//   renderToDom("#revenue", creditPmt);
// }

// const mobilePmtType = () => {
//   let mobilePtm = "<h3>Total # of mobile payments go here.</h3>";
//   renderToDom("#revenue", mobilePmt);
// };
// mobilePmtType();

// export { revenuePage, emptyRevenue };


// Code Assets
// const revenuePage = (array) => {
//   clearDom();

//   // const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Add A Word</button>';
//   // renderToDOM('#add-button', btnString);

//   let domString = '';
//   array.forEach((item) => {
//     domString += `
//     <div id="revenueContainer">
//       <h1>REVENUE</h1>
//       <div class="card" id="totalRevenue">
//         <h1>Total Revenue: $80.00</h1>
//           <div class="card-body">
//             <h2 class="card-title">${item.title}</h2>
//             <hr>
//             <h4 class="card-subtitle mb-2 text-muted"><i>${item.language}</i></h4>
//             <hr>
//             <h7 class="card-subtitle mb-2 text-muted">${item.definition}</h7>
//             <hr>
//             <div class="btn btn-info" id="edit-word-btn--${item.firebaseKey}">Edit</div>
//             <div class="btn btn-danger" id="delete-word-btn--${item.firebaseKey}">Delete</div>
//           </div>
//       </div>
//     </div>`;
//   });
//   renderToDOM('#revenue', domString);
// };
