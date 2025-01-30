document.getElementById('convertBtn').addEventListener('click', function () {
    const amount = document.getElementById('amount').value;
    const currencies = document.querySelectorAll('.currencies input[type="checkbox"]:checked');
    const resultContainer = document.getElementById('resultContainer');

    
    resultContainer.innerHTML = '';

    if (!amount || currencies.length === 0) {
        return; 
    }

    const conversionRates = {
        'USD': amount * 87., 
        'EUR': amount * 92, 
        'RUB': amount * 1.13 
    };

    currencies.forEach(currency => {
        const currencyValue = currency.value;
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result', currencyValue.toLowerCase());

        
        let currencySymbol = '';
        switch (currencyValue) {
            case 'USD':
                currencySymbol = '$';
                break;
            case 'EUR':
                currencySymbol = '€';
                break;
            case 'RUB':
                currencySymbol = '₽';
                break;
        }

        resultDiv.textContent = `${currencyValue}:${currencySymbol}${conversionRates[currencyValue].toFixed(2)}`;
        resultContainer.appendChild(resultDiv);
    });
});
document.getElementById('amount').addEventListener('input', function () {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; 
});










 
