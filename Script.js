function isOldEnoughToVote(age) {
    if(age>=18){
        return true;
    }else{
        if(age<0){
            return "What the fuck that isn't a number!"
        }else{
            return false;
        }
    }
}


function getProperty(obj, key) {
    return obj[key];
}


function addProperty(obj, key) {
    return obj[key] = true;
}


function removeProperty(obj, key) {
    delete obj[key];
}


function isEven(num) {
    if(num%2==0){
        return true
    }else{
        return false
    }
}


function isOdd(num) {
    if(num%2==0){
        return false
    }else{
        return true
    }
}


function addToFront(arr, element) {
    arr.unshift(element);
    return arr
}


function addToBack(arr, element) {
    arr.push(element);
    return arr
}


function joinArrays(arr1, arr2) {
    return arr1.concat(arr2)
}


function getAllWords(str) {
    if(str!=''){
        return str.split(" ")
    }else{
        return [];
    }
}


function extend(obj1, obj2) {
    for(var keys in obj2){
        if(!(keys in obj1)){
            obj1[keys] = obj2[keys];
        }
    }
    return obj1;
}


function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key]=='string'){
            delete obj[key];
        }
    }
    return obj
}


function getIndexOf(char, str) {
    return str.indexOf(char)
}


function keep(array, keeper) {
    var newArray=[];
    for(var i=0;i<array.length;i++){
        if(array[i]==keeper){
            newArray.push(array[i])
        }
    }
    return newArray
}


function getLargestElementAtProperty(obj, key) {
    var thing=undefined;
    if(Array.isArray(obj[key])){
        thing=obj[key][0];
        for(var i=0;i<obj[key].length;i++){
            if(obj[key][i]>thing){
                thing=obj[key][i];
            }
        }
    }
    return thing
}


function calculateBillTotal(preTaxAndTipAmount) {
    return Math.floor(preTaxAndTipAmount*(1.245)*1000)/1000
}


function detectOutlierValue(string){
    var digits = (""+string).split(" ");
    if(digits[0]%2!=digits[digits.length-1]%2){
        if(digits[0]%2!=digits[1]%2){
            return 1
        }
        return digits.length
    }
    for(var i=1;i<digits.length-1;i++){
        if(digits[0]%2!=digits[i]%2){
            return i+1
        }
    }
}


function sumDigits(num) {
    var digits = (""+num).split("");
    if(num<0){
        var value= 0-parseFloat(digits[1])
        for(var i=2;i<digits.length;i++){
            value+=parseFloat(digits[i]);
        }
    }else{
        var value=parseFloat(digits[0])
        for(var i=1;i<digits.length;i++){
            value+=parseFloat(digits[i]);
        }
    }
    return value;
}


function listAllValues(obj) {
    var array=[];
    for(var key in obj){
        array.push(obj[key])
    }
    return array
}


function search(array, value) {
    if(!array.includes(value)){
        return null
    }
    var currentIndex=Math.floor(array.length/2);
    while(array[currentIndex]!=value){
        if(array[currentIndex]<value){
            currentIndex=Math.max(Math.floor(1.5*currentIndex),currentIndex+1)
        }else{
            currentIndex=Math.min(Math.floor(.5*currentIndex),currentIndex-1)
        }
    }
    return currentIndex;
}