const switchInputs = document.querySelectorAll(".switch-wrapper input");
const PRICES = {
  basic: {
    monthly: 9.99,
    yearly: 99.99,
  },
  standard: {
    monthly: 14.99,
    yearly: 149.99,
  },
  premium: {
    monthly: 19.99,
    yearly: 199.99,
  },
};
const MONTHLY = "monthly";
const YEARLY = "yearly";

window.onload = function () {
  const monthlyInput = document.getElementById(MONTHLY);
  updatePrices(MONTHLY);
  monthlyInput.checked = true;
};

switchInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.id === MONTHLY && event.target.checked) {
      updatePrices(MONTHLY);
    } else if (event.target.id === YEARLY && event.target.checked) {
      updatePrices(YEARLY);
    }
  });
});

function updatePrices(billingPeriod) {
  const priceElements = document.querySelectorAll(".price");

  priceElements.forEach((priceElement) => {
    const plan = priceElement.parentElement.id;
    const newPrice = PRICES[plan][billingPeriod];
    priceElement.innerHTML = `<span class="amount">$${newPrice}</span> / ${billingPeriod}`;
  });
}
