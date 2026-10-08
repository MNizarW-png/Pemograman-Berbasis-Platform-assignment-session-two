// given data
const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

// function
function calculateTotal(price, quantity, discount) {
  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  return subtotal - discountAmount;
}

// Arrow function to determine shipping costs
// Analytical challenge: Examining the post-discount price (total) rather than the initial subtotal.
const calculateShipping = (total) => {
  return total >= 500000 ? 0 : shippingCost;
};

// Kalkulasi nilai-nilai pendukung
const subtotal = productPrice * quantity;
const discountAmount = subtotal * (discountPercent / 100);
const afterDiscount = calculateTotal(productPrice, quantity, discountPercent);
const finalShipping = calculateShipping(afterDiscount);
const totalPayment = afterDiscount + finalShipping;

// output
console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Discount: Rp${discountAmount}`);
console.log(`After Discount: Rp${afterDiscount}`);
console.log(`Shipping: Rp${finalShipping}`);
console.log(`Total Payment: Rp${totalPayment}`);