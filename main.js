console.log('Sample JavaScript #3 HW #17');


//  * #1

var counter = function () {
  score = 0;
  return function (n) {
      if (typeof(n) === 'number') score=n
      else score=score
      return score++
  };
  }();

  console.log (counter());
  console.log (counter());
  console.log (counter(6));
  console.log (counter());
  console.log (counter());
  console.log (counter(21));
  console.log (counter());
  

//  * #2
 

var counting = function () {
    score = 0;
    return { value (n){
        if (typeof(n) === 'number') score = n
        else score=score
        return score },
            increment() {
                score++
            },
            decrement() {
                score--
            }
    };
    }();

    console.log(counting.value());
    counting.increment();
    counting.increment();
    counting.increment();
    console.log(counting.value());
    counting.decrement();
    counting.decrement();
    console.log(counting.value());
    console.log(counting.value(100));
    counting.decrement();
    console.log(counting.value());
    console.log(counting.value());
    console.log(counting.value());
    

//  * #3


var myPrint = function (a,b,res) {
    return a+'^'+b+'='+res;
};
var myPow = function (a,b, myPrint) {
    var myPowInner = function (a,b){
        if (b>0 || b<0) return Math.pow(a,b);
        else return a;
    };
    return myPrint(a,b, myPowInner(a,b));
};

//  * console.log(myPow(3, 4, myPrint)); // 3^4=81
//  * console.log(myPow(2, 3, myPrint)); // 2^3=8


//  * #4  #  5  #6

var yearNow = function(){
    return (new Date().getFullYear())
   };

var car = {
    engine: 2000,
    model: 'Lacetti',
    name: 'Chevrolet',
    year: 2010,
    used: 'used',
    get used(){ 
        if (yearNow() === this.year) {return 'new'}
        else {return 'used'} ;     
              },
    set used (value){
       if (value === 'new' && yearNow() !== this.year) {return this.year=yearNow()}
       else {return this.used=value};
                    },
    info: function() {
      return this.name+' '+this.model+', '+this.engine+'cc, '+'year '+this.year+', '+this.used
                     }
         };

var car2 = {
  engine: 5000,
  model: 'FX50 AWD',
  name: 'Infinite',
  year: 2019,
  used: 'new',
  get used(){ 
    if (yearNow() === this.year) {return 'new'}
    else {return 'used'} ;     
           },
  set used (value){
   if (value === 'new' && yearNow() !== this.year) {return this.year=yearNow()}
   else {return this.used=value};
                 },
  info: function() {
      return this.name+' '+this.model+', '+this.engine+'cc, '+'year '+this.year+', '+this.used
                   }
            };


console.log(car2.info());
car2.used='new';
console.log(car2.info());
car2.year=2015;
console.log(car2.info());

//  * #7

let list = [12, 23, 100, 34, 56, 450, 9, 233];

let myMax = function(arr) {
 return Math.max.apply(null, arr); // при apply массив и переменные передаются ВТОРЫМ агрументом !!!!
};

console.log(myMax(list));

//  * #8
 
//  * Создайте функцию myMul(a, b), которая будет умножать числа а и b, возвращая результат.
//  */
let myMul = function (a,b) {
    return a*b;
}

console.log(myMul (2,6));


//  * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.

let myDouble = myMul.bind(null,2);

console.log(myDouble(3));


// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

let myTriple = myMul.bind(null,3);

console.log(myTriple(4));


//  * #9

let notUniqNums = [1, 1, 2, 2, 3, 4, 5, 15, 6, 7];
let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob','Jane', 'Jhon', 'Tom'];

let myUniq = function (x) {
    return Array.from(new Set(x));
};
console.log(myUniq(notUniqNums));
console.log(myUniq(notUniqStrings));

