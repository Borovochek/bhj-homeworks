const productQuantityValue = document.getElementsByClassName('product__quantity-value');
const productQuantityReduction = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityIncrease = document.querySelectorAll('.product__quantity-control_inc');


productQuantityReduction.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const valueElement = product.querySelector('.product__quantity-value');
        const currentValue = Number(valueElement.textContent);

        if (currentValue > 1) {
            valueElement.textContent = currentValue - 1;
        }
    });
});

productQuantityIncrease.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const valueElement = product.querySelector('.product__quantity-value');
        valueElement.textContent = Number(valueElement.textContent) + 1;
    });
});


const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

productAdd.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productImg = product.querySelector('.product__image');
        const valueElement = product.querySelector('.product__quantity-value');

        const existingCartProduct = cartProducts.querySelector('.cart__product[data-id="' + product.dataset.id + '"]');

        console.log(existingCartProduct);

        if(existingCartProduct) {
            const cartProductCount = existingCartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = Number(cartProductCount.textContent) + Number(valueElement.textContent);
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = product.dataset.id;
    
            const cartProductImage = document.createElement('img');
            cartProductImage.setAttribute('src', productImg.src);
            cartProductImage.className = 'cart__product-image';
            
    
            const cartProductCount = document.createElement('div');
            cartProductCount.className = 'cart__product-count';
            cartProductCount.textContent = valueElement.textContent;

            const cartProductRemove = document.createElement('a'); 
            cartProductRemove.className = 'cart-product__remove';
            cartProductRemove.setAttribute('href', '#');
            cartProductRemove.innerHTML = '&times;';

            cartProductRemove.addEventListener('click', () => {   
                cartProduct.remove();
            });                                                  
        
            
            
        
    
            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);
    
            cartProduct.appendChild(cartProductRemove); 

            cartProducts.appendChild(cartProduct);
        }
    });
});

 

