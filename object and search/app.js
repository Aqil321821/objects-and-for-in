/* var student ={
    name : 'Ghous',
    course:'WAM',
    rollNo:2524,
    enroll: true

}


var input = prompt("Enter Property Name to Get the property value");

 var output= student[input];

 alert('value of given key is ' + output);

//  special loop for objects

// this will print all key names 

for (const key in student) {
    console.log(key);
   }


//    this will print all values stored against keys
  
for (const key in student) {

    console.log(student[key]);
   
}







 */




// search within objects 

// create object of objects


var phones={
    // 0th property of phones object is iphone
    iphone:{
        // iphone has three prop
        iphone1 :{
                            name:'Iphone1',
                            price: 150000,
                            ram:'10 GB',
                            rom: '128 GB',
        },
        iphone2:{
                            name:'Iphone2',
                            price: 160000,
                            ram:'11 GB',
                            rom: '130 GB',

        },
        iphone3:{
                            name:'Iphone3',
                            price: 160000,
                            ram:'11 GB',
                            rom: '130 GB',

        },
},
  
// 1st proprty of phones is samsung
samsung: {
         
       galaxy1:{
        name:'galaxy1',
        price: 160000,
        ram:'11 GB',
        rom: '130 GB',

       },
       galaxy2:{
        name:'galaxy2',
        price: 160000,
        ram:'11 GB',
        rom: '130 GB',
       },
       galaxy3:{
        name:'galaxy3',
        price: 160000,
        ram:'11 GB',
        rom: '130 GB',
       },


      


},
// 2nd prop of the object phones
Nokia:{

    Nokia1:{
        name:'Nokia1',
        price: 160000,
        ram:'11 GB',
        rom: '130 GB',
    },
    Nokia2:{
        ame:'Nokia2',
        price: 160000,
        ram:'11 GB',
        rom: '130 GB',
    },
    Nokia3:{
        ame:'Nokia3',
        price: 160000,
        ram:'11 GB',
        rom: '130 GB',
    },

}










}

// Practice
// lets print all the properties of phones....

for (const phone in phones) {

           console.log(phone);
}

// lets print all values of phones

// for (const data in phones) {
//     console.log(phones[data]);
   
// }

// lets print iphone data
for (const key in phones) {
    console.log(phones.key);
    
}








// now take brand and name of mobile phone from user and print its specif on console....



// var company=prompt('Eneter The brand name od phone');
// var  product=prompt('Enter The product name of that company');


  