var cars={
    honda:{
        civic:{
            reborn:{
                name:'Honda Civic Reborn',
                year: 2023,
                price: 2000,
                colors: ['red','green','yellow'],
                engine: '7000cc',
                gates:4
            }
        }
    }
}


// Topic#1 : Acccess propertis of objects through bracket notation

//bracket notation for the objects
var user='honda';
var model='civic';
var variant='reborn';
var specific='price'

// console.log(cars[user]);
// console.log(cars[user][model]);
// console.log(cars[user][model][variant]);
// console.log(cars[user][model][variant][specific]);
// console.log(cars.honda.civic.reborn.price);
















//Topic#2 : simple for-in loop on objects


/*
    for (const key in cars) {
   console.log(key);
              }
 */


/* 
// Note :
1.this for in loop will run as many as times as there are properties in cars (direct properties)
2.clg(key) => this will print all the keys of cars (direct keys)
*/


/////////////////////////


// Now take value from user and give it back data 





