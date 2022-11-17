console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log(`Ready to buy groceries. Basket is ${basket}`);
function addItem(item) {
    basket.push(item);
    console.log(`Item added: ${item}`);
    return true;
}
console.log(`Apples added (expect true) ${addItem('apples')}`);
console.log(`Bread added (expect true) ${addItem('bread')}`);
console.log(`Candy added (expect true) ${addItem('candy')}`);
console.log(`Drinks added (expect true) ${addItem('drinks')}`);
console.log(`Basket is now ${basket}`);

function listItems() {
    
}