function Calculator() {
    this.methods = {
        "-" : (a, b) => a - b,
        "+" : (a, b) => a + b,
        "*" : (a, b) => a * b,
        "/" : (a, b) => a / b
    };
    this.calculate = function(str) {
        let split = str.trim().split('');
        let a = Number(split[0]);
        let opr = split[1];
        let b = Number(split[2]);

        if(!this.methods[opr] || isNaN(a) || isNaN(b)){
            return NaN;
        }
        return this.methods[opr](a, b);
    };
}

let calc = new Calculator();
console.log(calc.calculate("3-7"));