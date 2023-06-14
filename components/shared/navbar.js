// NAVBAR
const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg mb-5">
  <div class="container-fluid">
      <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" width="40" height="70" alt="pizza">
      <h3 href="#">Post Request Pizza</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
      <button id="create-order" class="btn btn-success">Create An Order</button>
      </div>
      <button id="view-order" class="btn btn-success">View An Order</button>
      <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" id="search-cards" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
      </div>
      </div>
    </nav>`;
    // TODO: RENDER THE LOGOUT BUTTON TO THE #logout-button DIV
  renderToDOM('#navigation', domString);
};

export default navBar;
