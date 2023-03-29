// Get the input elements by their id
let cmpriceInput = document.getElementById("cmprice");
let epsInput = document.getElementById("eps");
let interestInput = document.getElementById("interest");
let btn = document.getElementById("btn");
let cm = document.querySelector("#cm");
let ivalue = document.querySelector("#ivalue");
let valuation = document.querySelector("#value");
let valuePercentage = document.querySelector("#valueP");
let MyOpnion = document.querySelector("#opnion");
// Add an event listener to the button to detect clicks
btn.addEventListener("click", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the values of the input elements
  let cmprice = cmpriceInput.value;
  let eps = epsInput.value;
  let interest = interestInput.value;
  cm.innerText = cmprice;
  const intrasicValue = (eps * 100) / interest;
  ivalue.innerText = Math.floor(intrasicValue);
  if (cmprice < intrasicValue) {
    valuation.innerText = "Undervalued";
    MyOpnion.innerText =
      "Take look on Quarterly results,News on Share,Dividend growth, Debtdetails , Promoter holding , Techincals. And make a decision - HappyInvesting.";
  } else if (cmprice >= intrasicValue + intrasicValue + intrasicValue) {
    valuation.innerText = "Overvalued - 3 times";
    MyOpnion.innerHtml =
      " Oops..! Don't touch,otherwise it's a Finance Sector. Index-ETF is Better -Happy Investing";
  } else if (cmprice >= intrasicValue + intrasicValue) {
    valuation.innerText = "Overvalued - 2 times";
    MyOpnion.innerText =
      "Take look on Quarterly results,News on Share,Dividend growth, Debt details , Promoter holding , Techincals.Invest Only a 10% of your Plan when every 10% down - Happy Investing";
  } else if (
    cmprice > intrasicValue &&
    cmprice < intrasicValue + intrasicValue
  ) {
    valuation.innerText = "Overvalued  but-Ok ";
    MyOpnion.innerText =
      "Take look on Quarterly results,News on Share,Dividend growth, Debt details , Promoter holding , Techincals. Take a Buy, when price down Average - Happy Investing..";
  }
});
