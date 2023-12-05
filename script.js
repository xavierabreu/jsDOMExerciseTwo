// Update 'Coffee' to say 'Fair Trade Coffee'
document.querySelector('#list li:nth-child(2)').textContent = 'Fair Trade Coffee';

// Remove 'Twinkies' from the list
let twinkiesItem = document.querySelector('#list li:nth-child(4)');
twinkiesItem.parentNode.removeChild(twinkiesItem);

// Add an 'Cheese Whiz'
let cheeseWhizItem = document.createElement('li');
cheeseWhizItem.textContent = 'Cheese Whiz';
document.querySelector('#list').appendChild(cheeseWhizItem);

//Clear the list and programmatically add items from the array
let newListItems = ['protein powder', 'muscle milk', 'power bars'];
let listElement = document.querySelector('#list');
listElement.innerHTML = ''; // Clear the list

newListItems.forEach(item => {
    let newItem = document.createElement('li');
    newItem.textContent = item;
    listElement.appendChild(newItem);
});

// Add class 'important' to muscle milk item
let muscleMilkItem = document.querySelector('#list li:nth-child(2)');
muscleMilkItem.classList.add('important');