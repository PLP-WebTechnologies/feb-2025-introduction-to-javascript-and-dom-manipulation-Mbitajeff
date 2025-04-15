// Add event listener to the button that changes the text content
const changeTextButton = document.getElementById('change-button');
changeTextButton.addEventListener('click', () => {
    // Grab the paragraph element by its ID
    const introText = document.getElementById('intro-text');

    // Dynamically change the text content of the paragraph
    introText.textContent = "The text has been changed! 🎉";

    // Modify CSS styles directly using JavaScript
    introText.style.color = "blue";  // Change text color
    introText.style.fontSize = "24px";  // Increase font size for emphasis
});

// Add event listener to the button that adds a new list item
const addItemButton = document.getElementById('add-item-button');
addItemButton.addEventListener('click', () => {
    // Grab the unordered list (UL) where the new items will be added
    const itemList = document.getElementById('item-list');

    // Create a new list item (LI) element dynamically
    const newItem = document.createElement('li');

    // Set the text content for the new item
    newItem.textContent = "New item added to the list!";

    // Append the new item to the list (UL)
    itemList.appendChild(newItem);
});
