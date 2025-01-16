function generateBill() {
    const product = document.getElementById('productName').value;
    const customProduct = document.getElementById('customProduct').value;
    const imei = document.getElementById('imeiNumber').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const total = quantity * price;

    document.getElementById('productDisplay').textContent = 
        product === "Others" && customProduct ? customProduct : product;
    document.getElementById('imeiDisplay').textContent = imei || "N/A";
    document.getElementById('quantityDisplay').textContent = quantity;
    document.getElementById('priceDisplay').textContent = price;
    document.getElementById('totalDisplay').textContent = total.toFixed(2);
}
