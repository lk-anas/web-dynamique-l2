/**
 * Event Handlers for User Selection
 */

import { toggleClass } from "./domUtils.mjs";
import { SELECTORS, CSS_CLASSES } from "./constants.mjs";

/**
 * Handle number selection in the grid
 * @param {Event} event - Click event
 */
export function handleSelect(event) {
  const targetElement = event.target;

  if (!targetElement.closest("div")) {
    return;
  }

  const selectedDiv = targetElement.closest(SELECTORS.CONTAINER_ITEM);

  if (!selectedDiv) {
    return;
  }

  // Toggle selected state
  toggleClass(selectedDiv, CSS_CLASSES.SELECTED);

  const selectedValue = selectedDiv.dataset.value;
  const isSelected = selectedDiv.classList.contains(CSS_CLASSES.SELECTED);

  console.log(
    `Numéro ${selectedValue} ${isSelected ? "sélectionné" : "désélectionné"}`
  );
}

/**
 * Get all currently selected numbers
 * @returns {number[]} Array of selected numbers
 */
export function getSelectedNumbers() {
  const selectedElements = document.querySelectorAll(
    `${SELECTORS.CONTAINER_ITEM}.${CSS_CLASSES.SELECTED}`
  );

  return Array.from(selectedElements).map((element) =>
    parseInt(element.dataset.value, 10)
  );
}
