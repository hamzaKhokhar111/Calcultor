document.addEventListener("DOMContentLoaded", function () {
    function formatCurrency(input) {
        let value = input.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
        if (value) {
            input.value = `$${parseInt(value).toLocaleString()}`;
        } else {
            input.value = '';
        }
    }

    function calculateSavings() {
        let salePrice = parseFloat(document.getElementById('salePrice').value.replace(/\$/g, '').replace(/,/g, '')) || 0;
        let commission = parseFloat(document.getElementById('commission').value) || 0;
        let marketing = parseFloat(document.getElementById('marketing').value.replace(/\$/g, '').replace(/,/g, '')) || 0;
        let bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;

        // Commission Calculation
        let commissionAmount = (salePrice * commission) / 100;

        // Ownerhero saving logic based on bedroom count
        let baseSaving = bedrooms >= 4 ? 11950 : 10950;

        let totalSavings = commissionAmount + marketing + baseSaving;

        document.getElementById('savings').value = `$${totalSavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }

    // Ensure values are formatted on input
    document.getElementById('salePrice').addEventListener('input', function () {
        formatCurrency(this);
        calculateSavings();
    });

    document.getElementById('marketing').addEventListener('input', function () {
        formatCurrency(this);
        calculateSavings();
    });

    document.getElementById('commission').addEventListener('input', calculateSavings);
    document.getElementById('bedrooms').addEventListener('input', calculateSavings);
});
