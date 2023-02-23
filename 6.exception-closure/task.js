function parseCount(value) {
    let result = Number.parseFloat(value);

    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    };
};

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    };
};

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        };
    };

    get perimeter() {
        return (this.a + this.b + this.c);
    };

    get area() {
        let perimtrResult = (this.a + this.b + this.c) / 2;
    
        return + Math.sqrt(perimtrResult * (perimtrResult - this.a) * (perimtrResult - this.b) * (perimtrResult - this.c)).toFixed(3);
    };
};

function getTriangle(a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch (error) {
        let objectToReturn = {
            get area() {
                return "Ошибка! Треугольник не существует"},
            get perimeter() {
                return "Ошибка! Треугольник не существует"}
        };
        return objectToReturn;
    };
};




