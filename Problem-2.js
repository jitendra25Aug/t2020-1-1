function generateList(arg) {
    let arr = [];
    let a = 0;
    if(isNaN(arg)){
        return NaN;
    }
    while (arr.length < arg && arg >= 1 ) {
        if(a%2 !== 0){
            arr.push(a);
        }
        a++;
    }
    return arr.join(', ');
}
console.log(generateList(5));