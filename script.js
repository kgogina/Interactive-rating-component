
let rates = document.querySelectorAll(".ovals");
let givenRating = sessionStorage.getItem("userRating");
let ratesClicked = false;

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    ratesClicked = true;
      document.getElementById("error-message").innerHTML = "";
      sessionStorage.setItem("userRating", rate.innerHTML) ;   
  });
});

function setRating() {
  document.getElementById("rating").innerHTML = givenRating;
}

function clickChecker() {
  if (ratesClicked == false) {
    document.getElementById("error-message").innerHTML = "Please choose a number!";
  }else{
    window.location.href = "index_thankYou_page.html";
  }
};

