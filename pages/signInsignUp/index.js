const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signInForm = document.querySelector(".signin-form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const signInEmail = document.querySelector(".signin-email");
  const signInPassword = document.querySelector(".signin-password");

  const email = signInEmail.value;
  const password = signInPassword.value;

  location.href = "/pages/dashboard/dashboard.html";
});
