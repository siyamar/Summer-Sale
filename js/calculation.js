document.getElementById('apply-btn').addEventListener('click', function(){
const couponField = document.getElementById('coupon-field');
const couponValue = couponField.value;
console.log(couponValue);



const firstTotal = document.getElementById('total');
console.log(firstTotal.innerText)
const discount = document.getElementById('discount');
const mainTotal = document.getElementById('main-total');


const discountValue = parseFloat(((20/100)*firstTotal.innerText).toFixed(2));
const mainTotalValue = parseFloat(firstTotal.innerText) - parseFloat(discountValue);


if(couponValue.toLowerCase = 'sell200'){
    console.log(true);
    discount.innerText = discountValue.toFixed(2);
    mainTotal.innerText = mainTotalValue.toFixed(2);
}
else{
    console.log(false);
}

})
