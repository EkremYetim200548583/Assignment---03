// Smoothie class
class Smoothie {
  constructor(flavor, toppings, size) {
      this.flavor = flavor; // Smoothie flavor
      this.toppings = toppings; // Array of selected toppings
      this.size = size; // Smoothie size
  }

  // Get smoothie description
  getDescription() {
      return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.toppings.join(', ')} toppings.`;
  }
}

// Handle smoothie order
function orderSmoothie() {
   // Get selected flavor, toppings, and size
  const flavor = document.getElementById('flavor').value; // Selected flavor
  const toppings = Array.from(document.querySelectorAll('input[name=toppings]:checked')).map(checkbox => checkbox.value); // Selected toppings
  const size = document.querySelector('input[name=size]:checked').value; // Selected size

  const smoothie = new Smoothie(flavor, toppings, size); // Create smoothie object

  document.getElementById('smoothieOutput').textContent = smoothie.getDescription(); // Display smoothie description
}

// Event listener for order button
document.getElementById('orderButton').addEventListener('click', orderSmoothie);
