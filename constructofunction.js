// console.log("hlo")
// function constructerfunc(){
    // let obj={
       
    //     name:"shivani",
    //     surname:"pandey",
    //     age:8,
    //     school:"amity",
    //     print:function(){
    //         console.log(this);
    //     },
    //     moreinfo:{
    //         fathername:"anil pandey",
    //         mothername:"sunita pandey",
    //         printInner:function(){
    //             console.log(this);

    //     },
    //     },
    // };
  
// };

//  obj.print();
// function(){
//     conslotchange.log(this);
// }
// (obj.moreinfo.printInner());
// let per1={
//     name:"arav"
// };
// let per2={
//     name:"arnav"
// };
// function print(city,marks){
//     console.log(`My name is ${this.name} city : ${city} marks : ${marks}`)
// };
//  print.call(per1,"shibu",72);
//  print.apply(per2,["bhanu",98]);


//consructer function psc
function Student(name,age,gender){
    this.name=name,
    this.age=age,
    this.gender=gender,
    this.info=function(){
        console.log(`${name},${age},${gender}`)
    }
    

};
let p1=new Student("shibu",76,"female");
console.log(p1)
p1.info()

