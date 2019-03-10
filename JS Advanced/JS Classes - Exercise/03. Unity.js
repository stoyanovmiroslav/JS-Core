class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(obj){
        if (obj instanceof Rat){
            this.unitedRats.push(obj);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let result = [];
        result.push(this.name);
        this.getRats().forEach(x => {
            result.push(`##${x.name}`)
        });
        return result.join('\n');
    };
}


let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
