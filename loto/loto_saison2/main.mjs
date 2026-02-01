// Define a function to handle click events within the container
const handleSelect = function (event) {
  // Get the element that was actually clicked
  const targetElement = event.target;

  // Check if the clicked element is inside a <div>
  if (targetElement.closest("div")) {
    // Find the closest <div> inside the .container (but not .container itself)
    const selectedDiv = targetElement.closest(".container > div");

    // Toggle the 'selected' class on the clicked <div>
    selectedDiv.classList.toggle("selected");

    // Retrieve the custom data-value attribute from the selected <div>
    const selectedValue = selectedDiv.dataset.value;

    // Log the selected value to the console in French
    console.log(`Vous avez sélectionné : ${selectedValue}`);
  }
};

// Select the container element that holds the clickable <div>s
const container = document.querySelector(".container");

// Attach the click event listener to the container
// This enables event delegation for all child <div> elements
container.addEventListener("click", handleSelect, false);
