
class Smoothie {
    constructor(flavor, base, toppings) {
      this.flavor = flavor; // Store flavor of the smoothie
      this.base = base; // Store base of the smoothie
      this.toppings = toppings; // Store toppings of the smoothie
    }
  
    // Method to describe the smoothie
    describe() {
      return `Your ${this.flavor} smoothie with ${this.base} base and toppings: ${this.toppings.join(', ')}.`;
    }
  }
  
  // Function to create smoothie object and display description
  function createSmoothie() {
    // Retrieve selected values from the form
    const flavor = document.getElementById('flavor').value;
    const base = document.getElementById('base').value;
    const selectedToppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);
  
    // Create a new Smoothie object
    const smoothie = new Smoothie(flavor, base, selectedToppings);
  
    // Display description of the smoothie on the webpage
    document.getElementById('smoothieOutput').innerText = `${smoothie.describe()} Thank you for ordering from Smoothie Cafe!`;

  }
  