const conversionRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.00, USD: 1 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 87.00, EUR: 1 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 98.00, GBP: 1 },
    INR: { USD: 0.014, EUR: 0.012, GBP: 0.010, INR: 1 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (!amount || isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
