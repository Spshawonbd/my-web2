console.log("Login script loaded");

document.getElementById("login-btn").addEventListener("click", function() {
  // console.log("Login button clicked");
  const inputNumber = document.getElementById("input-number");
  const mobailNumber = inputNumber.value;
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  
  // console.log("Mobail Number:", mobailNumber);
  //  console.log("Pin:", pin);
  if (mobailNumber === "01879777553" && pin === "1234") {
    // console.log("Login Sucsessful");
    alert("Login Successful");
    window.location.assign("home.html");
  }
    else {
      // console.log("Login Failed");
      alert("Login Failded");
      return;
    }
});