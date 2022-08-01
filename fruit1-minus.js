document.getElementById('fruit1-minus').addEventListener('click', function () {
    // console.log('Minus BTN Clicked');
    const ProductInput = document.getElementById('fruit1-number');
    let productNumber = ProductInput.value;
    if (ProductInput.value > 0) {

        console.log(productNumber, 's')
        productNumber--;
        ProductInput.value = productNumber;
        console.log(productNumber)
        if (productNumber > 0) {

            let fruitTotal = document.getElementById('fruit1-total').innerText = productNumber * 20;
            console.log(fruitTotal)
        }
    }
    else {
        alert('Fruit Quantity Cannot Be Less Than 0')
    }

    const subTotal = parseInt(document.getElementById('fruit-number').value * 30 ) + parseInt(document.getElementById('fruit1-number').value * 20);
    console.log(subTotal)

    document.getElementById('sub-total').innerText = subTotal.toFixed(2);

    const tax = subTotal * .1;
    document.getElementById('tax-amount').innerText = tax.toFixed(2);

    const totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    
})