function makePayment() {
    const upiId = 'dhanwanthmohan@oksbi';
    const amount = 10; // Amount in dollars
    const upiPaymentUrl = "https://upilinks.in/payment-link/upi4519273741";

    // Redirect to UPI payment URL
    window.location.href = upiPaymentUrl;
}
