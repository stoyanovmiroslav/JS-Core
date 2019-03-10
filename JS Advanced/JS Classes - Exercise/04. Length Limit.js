class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    decrease(length){
        if (this.innerLength - length < 0){
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    increase(length){
        this.innerLength += length;
    }

    toString(){
        if (this.innerString.length > this.innerLength){
            return `${this.innerString.substr(0, this.innerLength)}...`
        } else {
            return this.innerString;
        }
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
