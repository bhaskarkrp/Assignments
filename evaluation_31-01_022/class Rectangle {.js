class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        // this.length = length;
        super(length, length)
    }

    getPerimeter() {
        return 4 * this.length;
    }
}

let square1 = new Square(2);
console.log(square1.getPerimeter());
console.log(square1.getArea());