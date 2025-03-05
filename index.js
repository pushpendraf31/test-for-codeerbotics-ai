function validateLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;
  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  if (!password) {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    isValid = false;
  }

  if (isValid) {
    alert("Login successful!"); // You can replace this with an API call
  }
}
