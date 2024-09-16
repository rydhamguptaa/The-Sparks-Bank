let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney()
{
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   
   if (enterAmount > myAccountBalance)
   {
      alert("Insufficient Balance.");
   } 
   else 
   {
      var findUserBankAccount = enterName + "BitcoinBalance";
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
      var finalAmount = parseInt(document.getElementById(enterName+"BitcoinBalance").innerHTML) + enterAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      
      document.getElementById(enterName+"BitcoinBalance").innerText = finalAmount;
      
     
      alert(`Transaction Successful !!  
      ${enterAmount} Rs sent to ${enterName}`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${enterAmount} Rs Transferred Successfully to ${enterName} on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}

function donate(){
   var person = alert("Thank you for your kind gesture. You are a true treasure to us :))");
}