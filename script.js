function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const validUser = email === "user@eventify.com" && password === "user123";
  const validAdmin = email === "admin@eventify.com" && password === "admin123";

  if (validUser) {
    alert("Login successful! Redirecting...");
    window.location.href = "dashboard.html";
  } else if (validAdmin) {
    alert("Login successful! Redirecting...");
    window.location.href = "Admindashboard.html";
  } else {
    alert("Invalid credentials. Try demo login.");

    }
  }
