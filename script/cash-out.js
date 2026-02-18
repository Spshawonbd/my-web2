// console.log("Cash out sript loaded")

document.getElementById("cashout-btn").addEventListener("click", function() {
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log("Cashout Number:", cashoutNumber);
  if (cashoutNumber.length !== 11) {
    alert("Please enter a valid 11-digit agent number.");
    return;
  }


  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log("Cashout Amount:", cashoutAmount);

  const balenceElement = document.getElementById("balance");
  const  balance = balenceElement.innerText; 
  console.log("Current Balance:", balance);

  const newBalance = Number(balance)- Number(cashoutAmount);
  console.log("New Balance:", newBalance);
    if (newBalance < 0) {
      alert("Insufficient balance. Please enter a smaller amount.");
      return;
    }
      console.log("New Balance:", newBalance);
const cashoutPintInpput = document.getElementById("cashout-pin");
const pin = cashoutPintInpput.value;
console.log("pin:", pin);
if (pin === "1234") {
  alert("Cashout Successful");
  balenceElement.innerText = newBalance;
  cashoutNumberInput.value = "";
  cashoutAmountInput.value = "";
  cashoutPintInpput.value = "";

  }
    else {
    alert("Invalid Pin. Please try again.");
    return;
}


});


