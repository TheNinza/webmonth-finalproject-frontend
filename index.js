const body = document.querySelector("body");
const signInSignUpButton = document.querySelector(".sign-in-sign-up");

window.addEventListener("load", () => {
  body.classList.add("visible");

  const token = localStorage.getItem("jwt");

  if (token) {
    location.href = "/pages/dashboard/dashboard.html";
  }
});

signInSignUpButton.addEventListener("click", () => {
  location.href = "/pages/signInsignUp/authenticate.html";
});
