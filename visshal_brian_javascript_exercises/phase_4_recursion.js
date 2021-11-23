function range(start, end) {
    if (start === end) {
        return [start];
    }
    let result = range(start, end-1);
    result.push(end);
    return result;
}

console.log(range(0,3));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return sumRec(arr.slice(0,arr.length-1)) + (arr[arr.length-1]);
}

console.log(sumRec([1,2,3]));

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }

    return base*exponent(base, exp-1)
}

console.log(exponent(2,5));

function exponent2(base, exp) {
    if (exp === 0) {
        return 1;
    }

    if (exp%2 === 0) {
       let temp = exponent2(base, exp/2);;
       return temp*temp;
    } else {
        let temp = exponent2(base, (exp-1) / 2);
        return base*temp*temp;
    }
}
console.log(exponent2(2, 5));
console.log(exponent2(2, 6));

function fibonacci(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0,1];
    } else {
        let prev = fibonacci(n-1);
        // console.log(prev);
        prev.push(prev[prev.length - 2] + prev[prev.length - 1]);
        return prev;
    }
}

console.log(fibonacci(5));

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
   let duped = arr.map(ele => {
        return deepDup(ele);
    })
    return duped
}

console.log(deepDup([1,2,3,4,5,[2,3]]));