var name="Mariam"
let age=19
const nationality="Egyptian"
console.log(name,age,nationality)

console.log(typeof(nationality))
//confirm("confirm?")
//alert("alert!")

g="google"
c=".com"
var gc=g+c
console.log(gc)

//Problem 1
alert("Alert: error")
var length=prompt("Enter Length: ")
var width=prompt("Enter Width: ")
console.log("The area is: ", length*width)

//Problem 2
function area(l, w){
    console.log("The area is: ", l*w)
}
var x=prompt("Enter Length: ")
var y=prompt("Enter Width: ")
area(x,y)

//Problem 3
function checkNumber(num){
    if (num>0){
        console.log("The number is positive ")
    }
    else if (num<0){
     console.log("The number is negative ")   
    }
    else{
        console.log("The number is 0 ") 
    }
}
var m=prompt("Enter number: ")
checkNumber(m)

//Problem 4
function factorial(num){
    var f=1
    for(let i=1; i<=num;i++){
        f*=i
    }
    console.log(f)
}
var d=prompt("Enter number: ")
factorial(d)

//Problem 5
function addeven(num){
    if (num>1){
        var u=0
    for(let i=1; i<=num;i++){
        if (i%2==0){
            u+=i
        }
    }
    console.log(u)
    }
    else{
        console.log("Enter positive int>1")
    }
}
var l=prompt("Enter number: ")
addeven(l)

//Problem 6
function fizzbuzz(num){
    if (num>1){
        var u=0
    for(let i=1; i<=num;i++){
        if (i%3==0 && i%5==0){
            console.log("fizzbuzz")
        }
        else if (i%3==0){
            console.log("fizz")
        }
        else if (i%5==0){
            console.log("buzz")
        }
        else{
            console.log(i)
        }
    }
    }
    else{
        console.log("Enter positive int>1")
    }
}
var l=prompt("Enter number: ")
fizzbuzz(l)

//Problem 7
function reversestring(str){
    if (typeof(str)=='string'){
        var newstr=''
        for(let i=str.length-1; i>=0; i--){
            newstr+=str[i]
        }
       console.log(newstr)
        }
    else{
        console.log("Enter string")
    }
}
var d=prompt("Enter string: ")
reversestring(d)

//Problem 7 cont'd 
var dr=prompt("Enter string: ")
console.log(dr.split('').reverse().join(''))

//Problem 8
function ispalindrome(x){
    var x2=x.split('').reverse().join('').toLowerCase()
    if (x2==x){
        console.log("Word is palindrome")
    }
    else{
        console.log("Word isn't palindrome")
    }
}
var d=prompt("Enter word: ")
ispalindrome(d)

//Problem 1
for(let i=1;i<=30;i++){
    if (i%2==0){
       console.log(i) 
    }
}

//Problem 2
function add(num){
var sum=0
for(let i=1; i<=num;i++){
    sum+=i
}
console.log("The sum is: ", sum)
}
var l=prompt("Enter number: ")
add(l)

//Problem 3
let array=[1,2,3,4]
for(i in array){
console.log(array[i])
}

//Problem 4
let array2=[1,2,3,4,50,65,0]
var max=0
for(let i=0; i<array2.length-1; i++){
if(array2[i+1]>array2[i]){
    max=array2[i+1]
}
}
console.log(max)

//Problem 5
let array3=['m','a','r','i','a','m']
let array4=[]
for(let i=array3.length-1; i>=0; i--){
        array4.push(array3[i])
    }
console.log(array4)

//Problem 6
let array5=[-1,3,-4,5]
let sum=0
for(i in array5){
if(array5[i]<0)continue;
sum+=array5[i]
}
console.log(sum)

//Problem 7
function isprime(x){
    bool=true
    if(x==1){
        console.log("Is not a prime number")
    }
    else if(x==2){
        console.log("Is a prime number")
    }
    else if(x>2){
        for(let i=2; i<x;i++){
        if(x%i==0){
            bool=false
            break;
        }
        else{
        bool=true 
    }
    }
    }
    if (bool==true){
        console.log("Is a prime number")
    }
    else{
        console.log("Is not a prime number")
    }
}
var d=prompt("Enter number: ")
isprime(d)

//Problem 1
class Dog{
    constructor(name,breed,age){
        this.name=name
        this.breed=breed
        this.age=age
    }
    bark(){
        console.log("bark!")
    }
}
let dog1=new Dog("bob","golden retriever","8")
dog1.bark()

//Problem 2
class Rectangle{
    constructor(length,width){
        this.length=length
        this.width=width
    }
    area(){
        var area=this.length*this.width
        console.log(area)
    }
    perimeter(){
        var p=(this.length+this.width)*2
        console.log(p)
    }
}
let rect1=new Rectangle(2,3)
rect1.area()
rect1.perimeter()

//Problem 3
class Student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    adult(){
        if(this.age>=18){
            console.log("Is an adult")
        }
        else{
            console.log("Is not an adult")
        }
    }
}
let student=new Student("Mariam",18)
student.adult()

//Problem 4
class Person{
    constructor(name,birthyear){
        this.name=name
        this.birthyear=birthyear
    }
    age(){
        var a
        a=2023-this.birthyear
        console.log(a)
    }
}
let person1=new Person("Mariam",2004)
person1.age()

//Problem 5
function secmax(x){
    for(let i=0; i<x.length;i++){
        for(let j=i+1; j<x.length;j++){
            if(x[i]<x[j]){
                var y
                y=x[i]
                x[i]=x[j]
                x[j]=y
    }
        }
    }
console.log(x[1])
}
var d=[1,6,98,65]
secmax(d)

//Problem 6
function median(x){
    var sum=0
    for(i in x){
        sum+=x[i]
    }
console.log(sum/x.length)
}
var d=[1,6,98,65]
median(d)

//Problem 7
function duplicates(x){
    var y=[]
    for(i in x){
        if (!y.includes(x[i])) {
      y.push(x[i]);
    }
    }
    console.log(y)
}
var d=[1,6,98,65,1,65]
duplicates(d)

//Problem 8
function isprime(x){
    bool=true
    if(x==1){
        console.log("Is not a prime number")
    }
    else if(x==2){
        console.log("Is a prime number")
    }
    else if(x>2){
        for(let i=2; i<x;i++){
        if(x%i==0){
            bool=false
            break;
        }
        else{
        bool=true 
    }
    }
    }
    if (bool==true){
        console.log("Is a prime number")
    }
    else{
        console.log("Is not a prime number")
    }
}
var d=prompt("Enter number: ")
isprime(d)

//Problem 9
function vowels(x){
    var counter=0
    var x=x.toLowerCase()
    for(i in x){
        switch (x[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
          counter+=1
          break;
    }
    }
    console.log(counter)
}
var d=prompt("Enter word: ")
vowels(d)

//Problem 10
function intersection(x,y){
    var arr=[]
    for(i in x){
        for(j in y){
            if(x[i]==y[j]){
                arr.push(x[i])
            }
        }
    }
    console.log(arr)
}
var d=[1,6,98,65,1]
var a=[0,6,7,65,9]
intersection(d,a)

//Problem 11
function sort(x,y){
    var arr=[]
    for(i in x){
        y.push(x[i])
    }
    for(let i=0; i<y.length;i++){
        for(let j=i+1; j<y.length;j++){
            if(y[i]>y[j]){
                var temp
                temp=y[i]
                y[i]=y[j]
                y[j]=temp
    }
        }
    }
    console.log(y)
}
var d=[1,8,98,75,2]
var a=[0,6,7,65,9]
sort(d,a)
