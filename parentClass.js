class coffeShop {

    // object 
    drinkMenu=
    {
        coffe: 4,
        colla: 3,
        watter: 2,
        orange : 6
    }
// some variables
    name;
    totalCost=0;
    drinks=[];
// create constractor
    constructor (name)
    {
        this.name=name;
    }
    // create function1
    isDrinkAvailable(drink) 
    {
    return Object.keys(this.drinkMenu).includes(drink) ;
    }
    // create function2
    makeOrder(drink)
    {
        if(this.isDrinkAvailable(drink)){
             // to store drink 
            this.drinks.push(drink);
            return drink
        }
     return null;
    }
    // create function3
    checkPlease()
    {
     for(let drink of this.drinks){

        // to access price use drinkMenu[drink]
        this.totalCost += this.drinkMenu[drink];
     }
     return [this.name , this.totalCost]
    }

}

export default coffeShop;

// let sara =new coffeShop("Sara");
// console.log(sara.name);
// console.log (sara.isDrinkAvailable('colla'));
// console.log (sara.isDrinkAvailable('staw'));
// sara.makeOrder('colla');
// sara.makeOrder('colla');
// console.log(sara.checkPlease());


// let eman =new coffeShop("Eman");
// console.log(eman.name);
// eman.makeOrder('mango')
// eman.makeOrder('watter')

// console.log(eman.checkPlease());
