
// Cart logic with localStorage and remove support
/*let cart = JSON.parse(localStorage.getItem("cart")) || [];


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${index + 1}. ${item} <button class="remove-item" data-index="${index}">Remove</button>`;
        cartItemsContainer.appendChild(li);
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", () => {
            const idx = button.dataset.index;
            cart.splice(idx, 1);
            saveCart();
            renderCart();
        });
    });
}
 

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.dataset.item;
        cart.push(itemName);
        saveCart();
        renderCart();
        button.classList.add("highlight");
        setTimeout(() => button.classList.remove("highlight"), 300);
    });
});
 

document.getElementById("place-order-button").addEventListener("click", async () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const response = await fetch("http://localhost:3000/api/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart })
        });

        const result = await response.json();
        if (result.success) {
            alert("Order placed successfully!");
            cart = [];
            saveCart();
            renderCart();
        } else {
            alert("Failed to place order.");
        }
    }
});
*/

  const currencyRates = {
    INR: 1,
    USD: 0.05/*83*/,
    EUR: 0.07/*104*/
  };

  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€'
  };

  function updatePrices() {
    const selected = document.getElementById('currency-selector').value;
    const priceEls = document.querySelectorAll('.price');
    priceEls.forEach(el => {
      const inr = parseFloat(el.getAttribute('data-inr'));
      const converted = (inr * currencyRates[selected]).toFixed(2);
      el.textContent = `${currencySymbols[selected]} ${converted}`;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('currency-selector');
    if (selector) selector.addEventListener('change', updatePrices);
    updatePrices();
  });

/*
renderCart();
*/



