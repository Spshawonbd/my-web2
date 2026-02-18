document.getElementById("add-money-btn").addEventListener("click", function(){

  const bankAccountn = getvalueFromInput("add-money-bank");

  if(bankAccountn == "Selected a Bank"){
    alert("Please select a bank");
    return;
  }
const accon = getvalueFromInput("add-money-number");
if( accon.length != 11){
  alert("Invalid numbar")
  return;
}
 const amount = getvalueFromInput("add-money-amount");

 const currentBlance= getBalance() 
 const newBlance = currentBlance+ Number(amount);
const pin = getvalueFromInput("add-money-pin")
if (pin === "1234"){
  alert(`Add money success full
    ${bankAccountn}
    at ${new Date()}`)
    setBalance(newBlance);
} else{
  alert("Invalid pin")

  return;
}
}
);
