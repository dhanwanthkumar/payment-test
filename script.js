function makePayment() {
    const upiId = 'dhanwanthmohan@oksbi';
    const amount = 10; // Amount in dollars
    const upiPaymentUrl = `upi://pay?pa=${upiId}&pn=My%20Ecommerce%20Store&am=${amount}&cu=INR`;

    // Redirect to UPI payment URL
    window.location.href = upiPaymentUrl;
}
