// Binary search using a function find the target
// let num =[2,9,17,20,22,24,34,45];
// let target=2
function binary(num,target){
    let left = 0;
    let right =num.length -1;
    while (left <= right) {
        let middle = Math.floor((right+left)/2) 
        if (num[middle]===target) {
        return middle;
        }
        else if (num[middle]< target) {
            left = middle +1
        } 
        else {
           right = middle -1 
        } 
    }
    return null
}
let num =[2,9,17,20,22,24,34,45];
let target=2
let output = binary(num,target)
console.log(output)
// using binary search get the target
// let numm=[100,200,300,400,500,600,700,,800,900];
// target=200;
function binry(numm,target){
    let left=0;
    let right=numm.length-1
    while(left<=right){
        let middle=Math.floor((right+left)/2)
        if (numm[middle]===target) {
            return middle;
        }
        else if
            (numm[middle]<target){
                left =middle +1
        }
        else{
            right= middle-1
        }
    }
    return null
}
let numm=[100,200,300,400,500,600,700,,800,900];
target=200;
let result=binry(numm,target)
console.log(result);


// using binary search get the target
// let numbers=[0.1,0.3,0.4,0.5,0.7,0.9]
// let targe=9.0;
function biiinay(numbers,targe){
let left=0;
let right=numbers.length-1;
while(left<right){
    let middle=Math.floor((left+right)/2)
    if (numbers[middle]===targe) {
        return middle
    }
  else if
    (numbers[middle]<targe){
        left=middle+1
    }
    else {
        right=middle-1
    }
}
return null
}
let numbers=[0.1,0.3,0.4,0.5,0.7,0.9]
let targe=9.0;
console.log(biiinay(numbers,targe))
biiinay(numbers,targe)


// mergesort
// let array=[10,50,30,50,70,80,2,9]
function divideArray(array){
    if (array.length <=1 ) {
        return array
    }
    const middle=Math.floor(array.length / 2);
    const left=array.slice(0,middle);
    const right=array.slice(middle);

    return mergesort(divideArray(left),divideArray(right))
    }
   function mergesort(left,right){
     empty=[]
    while(left.length && right.length){
    
   if (left[0] <right[0]) {
    empty.push(left.shift())
   }
   else{
    empty.push(right.shift())
   }
    }
    return[...empty,...left,...right] 
   }
let array=[10,50,30,50,70,80,2,9]
console.log(divideArray(array))
// mergesort
// let arry=[50.9,20.0,30.5,90.5,34.9,56.0,12.4]
function divideArry(arry){
    if (arry.length <=1 ) {
        return arry
    }
    const middle=Math.floor(arry.length / 2);
    const left=arry.slice(0,middle);
    const right=arry.slice(middle);

    return mergesort(divideArry(left),divideArry(right))
    }
   function mergesort(left,right){
     empty=[]
    while(left.length && right.length){
    
   if (left[0] < right[0]) {
    empty.push(left.shift())
   }
   else{
    empty.push(right.shift())
   }
    }
    return[...empty,...left,...right] 
   }
let arry=[50.9,20.0,30.5,90.5,34.9,56.0,12.4]
console.log(divideArry(arry))



let number=(c,d,e,r,y);
let sum=c+d+e+r+y
console.log(3,7,8,9,19);


// function item(items) {
    //  for (let o= 0; o < array.length; o++) {
    //   let empty=[]
    //   if (o in items===items ) {
    //     console.log(item)
    //     o++
    //   }
    //  } 
    // }
    // itmes=["mango","orange","pineapple","mango","strawberries","pineapple"]
    // let output=item(items)
    // console.log(empty.push(item[o]));