console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// establish basket to put items into
let basket = [];
const maxItems = 5;
console.log('Ready to buy groceries. Basket is', + basket);
console.log(basket);
function addItem(item) {
    basket.push(item);
    console.log(`Item added: ${item}`);
    return true;
}
console.log(`Apples added (expect true) ${addItem('apples')}`);
console.log(`Bread added (expect true) ${addItem('bread')}`);
console.log(`Candy added (expect true) ${addItem('candy')}`);
console.log(`Drinks added (expect true) ${addItem('drinks')}`);
console.log('Basket is now:', basket);
// end addItem


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
console.log(isFull());


// empties basket
function empty() {
    basket.splice(0);
    console.log(basket);
}
console.log('The basket is now empty:');
empty();