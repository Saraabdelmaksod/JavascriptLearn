// to make inheritance 
import coffeShop from "./parentClass.js";

//
class resturant extends coffeShop
 {
// create object 
    foodMenu ={
        pitza: 50,
        pasta: 60,
        rise:30
    }
// variable -> type array 
 foodOrder=[];


 makeOrder2(foodRequest)
 {
     if(
        // to get keys of foodmenu object
        Object.keys(this.foodMenu).includes(foodRequest)
        )
        {
          // to store drink 
         this.foodOrder.push(foodRequest);
         return foodRequest;
        }
  return null;
 }
 // create function
 
checkPlease()
{
    // to get function that defined in parent class ->checkPlease()
    super.checkPlease();
    for(let food of this.foodOrder)
    {
        // totalCost defined in parent class so we not repeat definetion here
    this.totalCost += this.foodMenu[food];

    }
     return [this.name, this.totalCost];
}

}


let _3mdahb=new resturant("Sara");
 console.log(_3mdahb.name);

 _3mdahb.makeOrder2("pitza");
 _3mdahb.makeOrder('colla');
  console.log(_3mdahb.checkPlease());
