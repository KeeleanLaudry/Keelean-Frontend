export function openRazorpayPayment({
  amount,
  customer,
  onSuccess,
  onFailure,
}) {
  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded ❌");
    return;
  }

  const options = {
    key: "rzp_test_XXXXXXXX",
    amount: amount * 100,
    currency: "INR",
    name: "Keelean Laundry",
    description: "Laundry Pickup Payment",

    handler: function (response) {
      onSuccess(response);
    },

    modal: {
      ondismiss: function () {
        if (onFailure) onFailure();
      },
    },

    prefill: {
      name: customer.name,
      contact: customer.phone,
      email: customer.email,
    },

    theme: {
      color: "#2563eb",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}
