// login button handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//  deposit button handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("deposit-amount");

  updateSpanText("current-deposit", depositNumber);
  updateSpanText("current-balance", depositNumber);

  hiddenCursor("deposit-amount");
});

//withdraw button event handler

const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = getInputNumber("withdraw-amount");
  updateSpanText("current-withdraw", withdrawAmount);
  updateSpanText("current-balance", -1 * withdrawAmount);

  hiddenCursor("withdraw-amount");
});

function hiddenCursor(id){
  document.getElementById(id).value = ""; // input tag এ এমাউন্ট লেখার পর কারসোর দেখাবে না। তাই নাল দিয়েছি। 
}

function getInputNumber(id) {
  const amount = document.getElementById(id).value; // input tag থেকে কিছু নিতে হতে .value দিতে হয়।
  const amountNumber = parseFloat(amount); // parseFloat() ইউজ করা হয় স্ট্রিং থেকে নাম্বারে কনভার্ট করতে।
  return amountNumber;
}

function updateSpanText(id, addedNumber) {
  const current = document.getElementById(id).innerText; // input tag বাদে অন্য কোন ট্যাগ থেকে কিছু নিতে হলে .innerText / innerHTML দিতে হয়।
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
