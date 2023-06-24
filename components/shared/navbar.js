import renderToDom from '../../utils/renderToDom';

// NAVBAR
const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <img src="https://i.imgur.com/XgjPbNB.png" style="width: 10%; margin-right: 1%; border-radius: 50%" alt="pizza" id="navLogo">
      <a class="navbar-brand title" id="navTitle" id="navLogo" href="#">Post Request Pizza</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="create-order-landing">
              Create Order <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="view-order">View Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="view-nav-revenue">View Revenue</a>
          </li>
        <li>
          <input
            class="form-control mr-sm-2"
            id="search"
            placeholder="Search by name or #"
            aria-label="Search"
          />
        </li>
        <li>
        <button id="search-btn" class="btn btn-warning">Search!</button>
        </li>
        </ul>
        <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
      </div>
      </div>
    </nav>`;

  renderToDom('#navigation', domString);
};

export default navBar;

// OLD SEARCH BAR HTML BELOW:
{
  /* <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" id="searchBar" type="search" placeholder="Search by Name or Phone #" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */
}

// OLD NAVBAR
// `<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
//   <div class="container-fluid">
//       <img src="https://i.imgur.com/XgjPbNB.png" id="navLogo" style="width: 12%">
//       <h3 href="#">Post Request Pizza</h3>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="navListButtons">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item active">
//               <a class="nav-link" href="#" id="create-order-landing">Create Order<span class="sr-only">(current)</span>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#" id="view-order">View Orders</a>
//             </li>
//             <li>
//             <input
//               class="form-control mr-sm-2"
//               id="search"
//               placeholder="Search by title.."
//               aria-label="Search"
//             />
//           </li>
//         </ul>
//         <span class="navbar-text">
//           <div id="logout-button"></div>
//         </span>
//       </div>
//       </div>
//     </nav>`;
