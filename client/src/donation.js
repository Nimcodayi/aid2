import { useEffect } from "react";

const useDonationHandler = () => {
  useEffect(() => {
    const form = document.querySelector(".donation-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const amountInput = form.querySelector("input[type='number']");
      const amount = amountInput.value || form.querySelector("button.active")?.innerText?.replace('$','');
      const method = form.querySelector("select").value;

      if (!amount || !method) {
        alert("Please select amount and payment method");
        return;
      }

      if (method === "paypal") {
        const response = await fetch("/create-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: amount, currency: "USD" }) // default USD
        });
        const data = await response.json();
        if (data.approval_url) {
          window.location.href = data.approval_url;
        } else {
          alert("PayPal payment error");
        }
      } else if (method === "bank") {
        alert(`Please send your donation to our international bank account:
        
Bank Name: Premiere Bank
Account Name: AID NGO
IBAN: YOUR_IBAN_NUMBER
SWIFT/BIC: YOUR_SWIFT_CODE
Currency: USD or EUR

After sending, please email us at donations@aid.org with your receipt.`);
      }
    });

    return () => form.removeEventListener("submit");
  }, []);
};

export default useDonationHandler;
