class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }
    addToStock(amount) {
        this.inStock += amount;
    }
    caulculateDiscount(percent) {
        const discount = this.price * (percent / 100);
        return this.price - discount;
    }
}
