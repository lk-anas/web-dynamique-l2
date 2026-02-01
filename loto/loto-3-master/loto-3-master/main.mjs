/**
 * Main Application Entry Point
 * Lottery Number Selection and Drawing Application
 */

// Import utilities
import { handleSelect, getSelectedNumbers } from "./Utils/handletSelect.mjs";
import { tirage, getSortedDraw } from "./Utils/tirage.mjs";
import { printEnsemble } from "./Utils/printEnsemble.mjs";
import { getElement, addListener } from "./Utils/domUtils.mjs";
import { SELECTORS } from "./Utils/constants.mjs";

/**
 * Initialize the application
 */
function initApp() {
  setupEventListeners();
  performInitialDraw();
}

/**
 * Set up event listeners for user interactions
 */
function setupEventListeners() {
  const container = getElement(SELECTORS.CONTAINER);

  if (!container) {
    console.error("Container element not found");
    return;
  }

  addListener(container, "click", handleSelect, false);
}

/**
 * Perform initial lottery draw and display results
 */
function performInitialDraw() {
  console.log("Performing lottery draw...");

  const drawResult = tirage();
  const sortedNumbers = getSortedDraw(drawResult);

  console.log("Draw result:", sortedNumbers);

  printEnsemble(drawResult);
}

/**
 * Log selected numbers (for debugging)
 */
function logSelectedNumbers() {
  const selected = getSelectedNumbers();
  console.log("Selected numbers:", selected);
}

// Initialize application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Export functions for external use if needed
export { logSelectedNumbers };
