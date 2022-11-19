console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// establish basket to put items into
let basket = [];
const maxItems = 5;
console.log('Ready to buy groceries. Basket is empty:', basket);
console.log(`Basket can hold ${maxItems} items.`);


// adding items to basket
function addItem(item) {
    if (isFull() === false) {
        basket.push(item);
        console.log('Item added:', item);
        return true;
    } else {
        console.log('Basket full');
        return false;
    }
}
console.log('Apples added (expect true)', addItem('apples'));
console.log('Bread added (expect true)', addItem('bread'));
console.log('Candy added (expect true)', addItem('candy'));
console.log('Drinks added (expect true)', addItem('drinks'));
console.log(`Basket is now: ${basket}`);
console.log('Basket is full:', isFull());
console.log('Eggs added (expect true)', addItem('eggs'));
console.log(`Basket is now: ${basket}`);
console.log('Fruit added (expect false)', addItem('fruit'));


// removes item from basket
function removeItem(item, index) {    
    basket.indexOf(item);
    if (basket[index] === item) {
        basket.splice(index, 1);
        return item;
    } else {
        return null;
    }
}
console.log('Candy removed (expect candy)', removeItem('candy', 2));
console.log('Candy removed (expect null)', removeItem('candy', 2));


// listing items in basket
function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}
console.log('These items are in the basket:');
listItems();


//checking if basket is full
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}
console.log('Basket is full:', isFull());


// adding fruit
console.log('Fruit added (expect true)', addItem('fruit'));
console.log(`Basket is now: ${basket}`);
console.log('Basket is full:', isFull());
console.log('Time to purchase groceries!');


// empties basket
function empty() {
    basket.splice(0);
    return basket;
}
console.log('The basket is now empty:', empty());