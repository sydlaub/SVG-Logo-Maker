// code to render circle shape
class Shape {
    constructor() {
        this.color = "";
    }; 
    setColor(color){
        this.color = color;
    }
}

// code for each shape to inherit the class properties defined in Shape 
class Circle extends Shape {
    render(){
        return `<circle cx="25" cy="75" r="20" fill = ${this.color}/>`
    };
};

class Triangle extends Shape {
    render() {
        return `<polygon points="200,10 250,200 160,200" fill = ${this.color}/>`
    };
};

class Sqaure extends Shape {
    render() {
        return `<rect x="73" y="40" width="200" height="200" fill = ${this.color}/>`
    };
};

module.exports = {Circle, Triangle, Sqaure};