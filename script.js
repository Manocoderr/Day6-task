// class movie{
//     constructor(title,studio,rating="PG13"){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }
// const obj = new movie("leo","7-screen studio","7.2");
// const obj1 = new movie("vikram","RKFI");
// const obj2 = new movie("Avenger","Marvel studio","8");
// const obj3 = new movie("Justice league","DC");
// const obj4 = new movie("Jailor","Sun Picture","7.9");


// console.log(obj.title,obj.studio,obj.rating);
// console.log(obj1.title,obj1.studio,obj1.rating);
// console.log(obj2.title,obj2.studio,obj2.rating);
// console.log(obj3.title,obj3.studio,obj3.rating);



// class person{
//     constructor(name,age,gender,martialstatus,contact,email){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.martialstatus = martialstatus;
//         this.contact = contact;
//         this.email = email;
//     }
// }
// const obj = new person("Manoj","28","Male","Married","8465135484","kmiaknsd@gmail.com");
// const obj1 = new person("Suresh","23","Male","Single","6413213543","fdbdfsgb@gmail.com");
// const obj2 = new person("Karthik","27","Male","Single","6412135433","sFSFVF@gmail.com");


// console.log(obj.name,obj.age,obj.gender,obj.martialstatus,obj.contact,obj.email);
// console.log(obj1.name,obj1.age,obj1.gender,obj1.martialstatus,obj1.contact,obj1.email);
// console.log(obj2.name,obj2.age,obj2.gender,obj2.martialstatus,obj2.contact,obj2.email);



// class car{
//     constructor(company,model,year,rating="PB"){
//         this.company = company;
//         this.model = model;
//         this.year = year;
//         this.rating = rating;
        
//     }
// }
// const obj = new car("TATA","Punch","2017","4.5");
// const obj1 = new car("Hyundai","i20","Asta","2016");
// const obj2 = new car("Maruti","Swift","2020","3");


// console.log(obj.company,obj.model,obj.year,obj.rating);
// console.log(obj1.company,obj1.model,obj1.year,obj1.rating);
// console.log(obj2.company,obj2.model,obj2.year,obj2.rating);

//--------------------------------------------------------------------------------------------------------------------------


class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle(){
        return this.radius;
    }
    get colorCircle(){
        return this.color;
    }
    
    set radiusCircle(radius){
            this.radius = radius;
    }
    
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);