const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function () {
    const hello = utils.sayHello();
    expect(hello).to.be.a("string");
    expect(hello).to.equal("Hello");
    expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

// Area of rectangle test
it("Should return the area of a rectangle", function () {
    const area = utils.area(5, 3);
    expect(area).to.be.a("number");
    expect(area).to.be.equal(15);
});

// Perimeter of rectangle test
it("Should be the perimeter of a rectangle", function () {
    const perimeter = utils.perimeter(10, 4);
    expect(perimeter).to.be.a("number");
    expect(perimeter).to.be.equal(10 + 10 + 4 + 4);
});

// Area of a circle with radius test
it("Should return the area of a circle", function () {
    const circleArea = utils.circleArea(6);
    expect(circleArea).to.be.a("number");
    expect(circleArea).to.be.equal(6 * 6 * Math.PI);
});

// Stretch null return for any negative values
it("Should return null", function () {
    const area = utils.area(5, -3);
    expect(area).to.be.null;

    const perimeter = utils.perimeter(-10, 4);
    expect(perimeter).to.be.null;

    const circleArea = utils.circleArea(-6);
    expect(circleArea).to.be.null;
});
// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
    utils.clearCart();
    done();
});

it("Should create a new (object) Item with name and price", function () {
    const item = utils.createItem("apple", 0.99);
    expect(item).to.be.a("object");
    expect(item).to.have.property("name", "apple");
    expect(item).to.have.property("price", 0.99);
    expect(item).to.have.property("quantity", 1);
});

it("Should return an array containing all items in cart", function () {
    const cart = utils.getShoppingCart();
    expect(cart).to.be.an("array");
    expect(cart).to.empty;

    const newItem = utils.createItem("apple", 0.99);
    utils.addItemToCart(newItem);
    expect(cart).to.be.an("array");
    expect(cart).to.have.length(1);
});

it("Should add a new item to the shopping cart", function () {
    const newItem = utils.createItem("apple", 0.99);
    utils.addItemToCart(newItem);
    const cart = utils.getNumItemsInCart();
    expect(cart).to.equal(1);
});

it("Should return the number of items in the cart", function () {
    const newItem = utils.createItem("apple", 0.99);
    utils.addItemToCart(newItem);
    const cart = utils.getNumItemsInCart();
    expect(cart).to.equal(1);
});

it("Should remove items from cart", function () {
    const newItem = utils.createItem("apple", 0.99);
    utils.addItemToCart(newItem);
    var cart = utils.getNumItemsInCart();
    expect(cart).to.equal(1);
    utils.removeItemFromCart(newItem);

    cart = utils.getNumItemsInCart();
    expect(cart).to.equal(0);
});
// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
