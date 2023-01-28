import coffeShop from "./parentClass.js";

class hotel extends coffeShop
{

menu ={

    drink1 : "cola",
    drink2 : "orange",
    food1: "pizza"
}

order=[];


createdOrder(ordersList)
{
    if(Object.keys(this.menu).includes(ordersList))
    {
       this.order.push(ordersList) ;
       for(let i=0; i<this.order.length; i++)
       {
       return this.order[i];
       }
       return order;
    }
 return null;
}


}

let _3mdahb=new hotel("Sara");
console.log(_3mdahb.name);
_3mdahb.createdOrder("drink2");
_3mdahb.createdOrder("drink1");
_3mdahb.createdOrder("drin");
console.log(_3mdahb.order);

