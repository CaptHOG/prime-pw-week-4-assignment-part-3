console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    console.log(`Item added: ${item}`);
    return true;
}

console.log(addItem(1));
console.log(addItem(2));
console.log(addItem(3));
