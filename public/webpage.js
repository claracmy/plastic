// getRestaurantDetails axios post
// setup database // try catch
// authentication

const url = window.location.pathname.toString();

function getRestaurantDetails() {
  return {
    restaurantID: document.querySelector(".page-header__order-info > h1")
      .innerHTML,
    cutlery: document.querySelector("#cutlery").value === "on" ? true : false
  };
}

if (url.includes("checkout")) getRestaurantDetails();
