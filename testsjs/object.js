let animail =
{
    "name" : "Dog",
    "age" :3,
    "location" : "Egypt"
}

console.log(animail)
console.log(animail.age)
console.log(Object.keys(animail))
console.log(Object.values(animail))

let animal2=animail
console.log(animal2==animail)
console.log(animal2.name)

animail.name="cat"

console.log(animal2.name)


class coffeShop {
    drinkMenu={
        coffe: 4,
        colla: 3,
        watter: 2,
        orange : 6
    }
    name;
    totalCost=0;
    constructor (name){
        this.name=name;
    }

}

let sara =new coffeShop("Sara");
console.log(sara.name);

let eman =new coffeShop("Eman");

