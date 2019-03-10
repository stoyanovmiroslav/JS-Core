class ArrManipulation {
    constructor(){
        this.size = 0;
        this.arr = [];
    }

    remove(index){
        if (this.arr.length > Number(index) && index >= 0){
            this.arr.splice(index, 1);
            this.arr = this.arr.sort((a, b) => a - b);
            this.size--;
        }
    }

    add(elemenent){
        if (isNaN(elemenent)){
            return;
        }
        this.arr.push(Number(elemenent));
        this.arr = this.arr.sort((a, b) => a - b);
        this.size++;
    }

    get(index){
        if (this.arr.length > Number(index) && index >= 0){
            return this.arr[index];
        }
    }
}