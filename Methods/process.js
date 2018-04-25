
class Polygon{
    constructor(height,width){
        this.name='Polygon',
        this.height=height;
        this.width=width;
    }
    getHelloPhrase(){
        return `Hi I am a ${this.name}`;
    }
}

class Square extends Polygon{
    constructor(length){
        super(length,length);
        this.name="Square";
        this.length="length";
    }

    getCustomerHelloPhrase(){
        const polygonPhrase=super.getHelloPhrase();
        return `${polygonPhrase} with a length of ${this.length}`;
    }

    getarea(){
        return this.height*this.width;
    }
}
module.exports=Square;

// const mySquare=new Square(10);
// console.log(mySquare.getarea());
// console.log(mySquare.getHelloPhrase());
// console.log(mySquare.getCustomerHelloPhrase())