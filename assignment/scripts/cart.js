console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// establish basket to put items into
let basket = [];
const maxItems = 5;
console.log('Ready to buy groceries. Basket is empty:', + basket);
// just playing with concatenation and logging; learning syntax differences
console.log('Basket is', basket);
console.log(`Basket can hold ${maxItems} items.`);


// adding items to basket
function addItem(item) {
    if (isFull() === false) {
        basket.push(item);
        console.log(`Item added: ${item}`);
        return true;
    } else {
        return false;
    }
    
}
console.log(`Apples added (expect true) ${addItem('apples')}`);
console.log(`Bread added (expect true) ${addItem('bread')}`);
console.log(`Candy added (expect true) ${addItem('candy')}`);
console.log(`Drinks added (expect true) ${addItem('drinks')}`);
console.log('Basket is now:', basket);
console.log(`Basket is full: ${isFull()}`);
console.log(addItem('eggs'));
console.log('Test - adding fruit:', addItem('fruit'));
console.log('Basket is now:', basket);


// removes items from basket
function removeItem(item, index) {    
    basket.indexOf(item, index);
    basket.splice(index, 1);
    if () {
        return item;
    } else {
        return null;
    }
}
console.log('Should be candy:', removeItem('candy', 2));
console.log('Should be null:', removeItem('fruit', 2));


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
console.log(`Basket is full: ${isFull()}`);


// empties basket
function empty() {
    basket.splice(0);
    console.log(basket);
}
console.log('The basket is now empty:');
empty();