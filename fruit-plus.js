document.getElementById('fruit-plus').addEventListener('click', function(){
    const ProductInput = document.getElementById('fruit-number');
    let productNumber = ProductInput.value;
    // console.log(productNumber,ProductInput);
    productNumber++; 
    ProductInput.value = productNumber;
    console.log(productNumber)

    let fruitTotal = document.getElementById('fruit-total').innerText = productNumber * 30 ;
    console.log(fruitTotal)


    const subTotal = parseInt(document.getElementById('fruit-number').value * 30 ) + parseInt(document.getElementById('fruit1-number').value * 20);
    console.log(subTotal)

    document.getElementById('sub-total').innerText = subTotal.toFixed(2);

    const tax = subTotal * .1;
    document.getElementById('tax-amount').innerText = tax.toFixed(2);

    const totalPrice = subTotal + tax;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}) 