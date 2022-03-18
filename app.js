function add(x, y){
    if(typeof x !== `number` || typeof y !== `number`){
        return false;
    }
        return x + y; 
}

function multiply(x, y){
    return x*y;
}

function isShortWeather(x){
    if(x >=75){
        return true;
    } else {
        return false;
    }
}

function lastElement(arr){
    return arr.length > 0 ? arr.slice(-1)[0] : null;}

function capitalize(str){
    let firstLetter = str.slice(0,1).toUpperCase();
    let restStr = str.slice(1);
    return firstLetter+restStr;
}

function sumArray(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

function returnDay(num){
    const days=[null, "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return num > 0 && num <=7 ? days[num] : null;
}