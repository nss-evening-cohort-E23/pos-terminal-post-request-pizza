# Stretch Goals 2: Dealing with Change

## Problem

You have built an amazing application for the Hip Hop, Pizza, and Wangs resturant. They are very greatful for your generosity, that even though you offered to do it for free, they were able to smoothly make so much money that they could not let you refuse a payment of $4,000 which makes about $1,000 per person (cha-ching).

It's now mid-year, and you're still job hunting. The pandemic has slowed down your search as many companies are undergoing an job hiring freeze.

So as you're scrolling through social media, you notice some familiar faces. The owners of Hip Hop, Pizza, and Wangs! They just posted advertising that they are still open and are offering take out by phone order. You're so happy that they were able to stay open for during the pandemic, that you contacted them to catch up.

After messaging your hello's and asking them how everything's going, the topic of how the app is currently working for them came up. They still use it and it has been one of the things that has been able to keep their doors open during these difficult times. But they do get a lot of calls from customers asking if they can place an order online themselves and even be able to see their menu when calling in an order.

After you read that message, you had an idea. With all the time on your hands, you could add that feature on to the application. So you offer your services again, and this time you ask for $500 per person working on the project because you could really use the money. They take you up on your offer, so you call up your buddies again, who are also looking for a job, to help you add this new feature!

## Acceptence Criteria

### The Menu
* **ONLY** Admin users should be able to CRUD items to the menu. The items should include:
  - Title
  - Image 
  - Price
  - Description

* There should be a new view added to the application that shows the menu items and allows users to add those items to an order. 

**NOTE:** You will need to refacter the old app and remove the ability to add items to an order manually. You can likely reuse the form to add items to the menu with the added fields, but after the menu is created, users should only be able to add from the menu and not a form.

---
### Online Orders
**Non-admin Users**
* As a non-admin authenticated user, I should only be able to do CRUD and close the orders I've created.
* As a non-admin authenticated user, I should only be able to view the revenue information from my order history.
* As a non-admin authenticated user, I should only be able to have one open order at a time.

**Admin Users**
* As an admin authenticated user, I should be able to do CRUD and close all orders.
* As an admin authenticated user, I should be able to view all revenue information.
* As an admin authenticated user, I should be able to view, create, delete and edit all of the menu items

**All users:**
* As an admin and non-admin authenticated user, I should be able to view all of the menu items with the following information:
  * Menu Item Name
  * Menu Item Price
  * Menu Item Image
  * Is Menu Item Is On Sale
* As an admin and non-admin authenticated user, I should be able to add an menu item from the menu to an order as an order item, and should no longer be able to type in an item name and price.
* As a non-admin authenticated user, I should only be able to view, create and delete an order item. (No longer able to update)

## Hint
It might be good to either put user types on users OR use your `.env` file to list the userIDs of your admins and compare those with the user who logs in.
