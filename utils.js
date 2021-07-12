// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
    return "Hello";
};

const area = (w, h) => {
    // should return the area
    if (w < 0 || h < 0) {
        return null;
    } else {
        return w * h;
    }
};

const perimeter = (w, h) => {
    // should return the perimeter
    if (w < 0 || h < 0) {
        return null;
    } else {
        return w * 2 + h * 2;
    }
};

const circleArea = (r) => {
    // should return the area of the circle
    if (r < 0) {
        return null;
    } else {
        return r * r * Math.PI;
    }
};

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = [];

const clearCart = () => {
    shoppingCart.length = 0;
};

const createItem = (name, price) => {
    return { name, price, quantity: 1 };
};

const getShoppingCart = () => {
    // should return the current state of shopping cart
    // var cart = "";
    // for (count = 0; count < shoppingCart.length; count++) {
    //     cart += shoppingCart[count];
    // }
    // return cart;
    return shoppingCart;
};

const addItemToCart = (item) => {
    // should add item to shopping cart
    shoppingCart.push(item);
    return;
};

const getNumItemsInCart = () => {
    // should return the total quantity of items in cart
    return shoppingCart.length;
};

const removeItemFromCart = (item) => {
    // should remove item from shopping cart
    const index = shoppingCart.indexOf(item);
    shoppingCart.splice(item);
};

module.exports = {
    sayHello,
    area,
    perimeter,
    circleArea,
    clearCart,
    createItem,
    getShoppingCart,
    addItemToCart,
    getNumItemsInCart,
    removeItemFromCart,
};
