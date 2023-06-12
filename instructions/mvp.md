# MVP Definition - It Gets the Job Done
### Problem

You've just been contacted by a Ma and Pop resturant called **Hip Hop, Pizza, and Wangs** which has been in the community for over 30 years. They saw your LinkedIn post offering your app development services to any small businesses in need to help build your portfolio. You are in the middle of your coding bootcamp and need all the real experience you can get to help you land your first job in tech.

The concept of HHP+W is the crossroads of music and food is where fun happens. Their clientele are 25 - 45 year old urban professionals who appreciate old school hip hop while enjoying pizza, wings and their favorite beverage. Their customer's average income is between $80,000 - $120,000 per year. It is also an art scene for artists who create art that embodies hip hop culture.

HHP+W is a spot that you can take a meeting or hang out. Since the pandemic in 2020, they've had to change their business model and offer call in orders and business is booming. 

HHP+W been getting a lot of call in orders to their store since placing an ad on Facebook and they can't seem to keep up with the new influx of orders using their current pencil and paper order tracking method.

They would like to have a POS (point of sale) application built for them to help keep up with their orders! They will be primarily using the application on tablet devices. After hearing their story you happily accept the request.

You call up your developer buddies to help you build this appication so that you can get it up and running for HHP+W as soon as possible.

## Get Started
* Review [wireframe](https://www.figma.com/file/4y3EZddALuBR3ouSEM57Np/MVP?node-id=0%3A1)
* Ensure all teammates have access to the repo and have it pulled down to their machines
* Begin by reviewing the AC and creating the tickets your team will need to complete the project separated by milestones and organizaed by priority on your Github project board.
* Create a setup branch
* Do all the stuff needed when setting up the project. These include:
  *  making the updates to the `.env` file
  * Create a new firebase project, database, and enable google authentication, etc.
  * _Reference the [webpack instructions](../webpack-instructions.md) if needed._

## Part 1: ERDs and Authentication
* Create an authentication branch and add a navbar with a logout button, and place the google login button somewhere for you to test
  * Note: There are components that you can use to get started and style later. We just want you to get your auth set up by yourself.
* When your user is **logged out**:
  - They should NOT see the navbar. 
  - They should see either an h1 or the Logo on the page that says Hip Hop Pizza and Wings (make a `homeLoggedOut` component for this)
  - A button to login
* When your user is **logged in**:
  - Navbar:
    - they should see a navbar with a brand
    - A logout button in the navbar
    - A link to view all orders in the navbar
    - A link to Create an Order in the navbar
  - Page:
    - And an H1 on the page that says, Welcome, username! (make a `homeLoggedIn` component for this)
    - Button to view orders
    - Button to create an order
    - Button to view revenue

## Part 2: READ

### Setup

* Create some JSON data
* Import that data into firebase
* Test your endpoints using Postman and create a collection for your app

#### Acceptence Criteria

* As an authenticated user, when the app first loads, I should see a home screen that Welcome's the user with their name and the following buttons:
  - View Orders
  - Create an Order

* As an authenticated user, I should be able to see a list of all of the orders.
* As an authenticated user, I should be able to see the following details from a single order:
  * Order Name
  * Order Status (open or closed)
  * Customer Phone Number
  * Customer Email Address
  * Order Type (phone or in-person)
* As an authenticated user, I should be able see a lists of all of the order item's associated with an order in the order's details view. The following information should be seen from each item:
  * Order Item Name
  * Order Item Price

## Part 3: DELETE

* As an authenticated user, I should be able to delete an order item from an order.
* As an authenticated user, I should be able to delete an order.
* As an authenticated user, when I delete one of the orders all order items that were associated to that order should be deleted as well.

## Part 4: CREATE

* As an authenticated user, when the app first loads, I should see a home screen that has a button that reads "Create Order".
* As an authenticated user, I should be able to create an order.
* As an authenticated user, I should be able to add an order item to an order.

## Part 5: UPDATE

* As an authenticated user, I should be able to update the following information on an order: Order Name, Customer Phone Number, Customer Email Address, and Order Type
* As an authenticated user, I should be able to update the following information on an order item: Item name and Item Price
* As an authenticated user, when I'm looking at an order, I should be able to click a button that will take me to a Close Order Form. I should be able to input the following information:
  * Payment Type (cash, check, debit, credit, or mobile-payment)
  * Tip Amount
* As an authenticated user, when I submit the Close Order form, the order's status should change from "Open" to "Closed".
## Part 6: Revenue
* As an authenticated user, when I submit the Close Order form, a new revenue node is created with the following information:
  * Total Order Amount (including tip)
  * Date
  * Payment Type
  * Tip Amount
  * Order Type
* As an authenticated user, I should __NOT__ be able to close an order that has already been closed.
* As an authenticated user, when the app first loads, I should see a home screen that has a button that reads "View Revenue".
* As an authenticated user, I should be able to see the sum of all of the Revenue made to date.

## Part 7: Deploy and Readme

* As a user, I should be able to use your app on the internet - it should be deployed using Netlify.
* As a developer, I want to see an amazing README for this project.
