let rates = document.querySelectorAll(".ovals");
let submitButton = document.getElementById("submit-button");


rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    console.log(rate.innerHTML);
    sessionStorage.setItem("userRating", rate.innerHTML);
  });
});


submitButton.addEventListener("click", (event) => {
  let givenRating = sessionStorage.getItem("userRating");
  if (givenRating === null || givenRating === undefined) {
    event.preventDefault();
    document.getElementById("error-message").innerHTML = "Please select a rating.";
  } else {
    document.getElementById("error-message").innerHTML = "";
  }
});

function setRating() {
  let givenRating = sessionStorage.getItem("userRating");
    document.getElementById("rating").innerHTML = givenRating;
  }

