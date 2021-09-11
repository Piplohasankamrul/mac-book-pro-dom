function upgradeProduct(productAccessoriesId,productAccessoriesPrice){
    const productAccessoriesCost = document.getElementById(productAccessoriesId);
    return productAccessoriesCost.innerText = productAccessoriesPrice
}

function totalUpgradeCost(){
    const ramUpgradeCost = document.getElementById('ram-upgrade-cost').innerText;
    const storageUpgradeCost = document.getElementById('storage-upgrade-cost').innerText;
    const costOfShipping = document.getElementById('shipping-cost').innerText;
    const bestPrice = document.getElementById('best-price').innerText;
    let newTotalPrice =  parseFloat(ramUpgradeCost) + parseFloat(storageUpgradeCost) + parseFloat(costOfShipping) +parseFloat(bestPrice);
    document.getElementById('sub-total-price').innerText = newTotalPrice;
    document.getElementById('total-price').innerText = newTotalPrice;
}
function discountPrice(){
    const promoCodeField = document.getElementById('promo-code-field');
    const promoCode = promoCodeField.value;
    const totalPrice = document.getElementById('sub-total-price').innerText;
    const discountPrice = (totalPrice*20)/100;
    const newTotalPrice = totalPrice - discountPrice;
    if(promoCode == 'stevekaku'){
        document.getElementById('total-price').innerText = newTotalPrice;
        promoCodeField.value = ' ';
    }
    else{
        promoCodeField.value = ' ';
    }
    
    
}

// / * 8GB Ram Handler
document.getElementById('ram-8gb-button').addEventListener('click',function(){
    upgradeProduct('ram-upgrade-cost',0)
   totalUpgradeCost();
});
// * 16GB Ram Handler
document.getElementById('ram-16gb-button').addEventListener('click',function(){
    upgradeProduct('ram-upgrade-cost',180);
    totalUpgradeCost();
});
// * 256GB SSD Handler
document.getElementById('storage-256gb-button').addEventListener('click',function(){
    upgradeProduct('storage-upgrade-cost',0);
    totalUpgradeCost();
});
// * 512GB SSD Handler
document.getElementById('storage-512gb-button').addEventListener('click',function(){
    upgradeProduct('storage-upgrade-cost',100);
    totalUpgradeCost();
});
// * 1TB SSD Handler
document.getElementById('storage-1tb-button').addEventListener('click',function(){
    upgradeProduct('storage-upgrade-cost',180);
    totalUpgradeCost();
});
// * 21 Sept Shipping Handler
document.getElementById('free-shipping-button').addEventListener('click',function(){
    upgradeProduct('shipping-cost',0);
    totalUpgradeCost();
});
// * 15 Sept Shipping Handler
document.getElementById('shipping-button').addEventListener('click',function(){
    upgradeProduct('shipping-cost',20);
    totalUpgradeCost();
});
// Discount Handler
document.getElementById('discount-button').addEventListener('click',function(){
    discountPrice();
})