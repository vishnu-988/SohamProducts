
    // Parse the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
  
    // Hide all product descriptions by default
    const productDescriptions = document.querySelectorAll('.product-description');
    productDescriptions.forEach(desc => desc.style.display = 'none');
  
    // Show the relevant product description
    const selectedProduct = document.querySelector(`#product-${productId}`);
    if (selectedProduct) {
      selectedProduct.style.display = 'block';
    } else {
      console.error('Invalid product ID');
    }
 