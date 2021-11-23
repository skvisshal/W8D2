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

function bsearch(arr, target) {
    if(arr.length === 0) {
        return -1;
    }

    let midIdx = Math.floor(arr.length / 2);
    if(target === arr[midIdx]) {
        return midIdx;
    } else if(target < arr[midIdx]) {
        let left = arr.slice(0,midIdx);
        return bsearch(left, target);
    } else {
        let right = arr.slice(midIdx+1, arr.length);
        let result = bsearch(right, target);
        if (result === -1) {
            return -1;
        } else {
            return result + midIdx + 1
        }
    }
}

console.log(bsearch([-1,1,2,3, 4, 5, 6, 7, 9],0));

function subsets(arr) {
    if(arr.length === 0) {
        return [[]]
    }

    let prev = subsets(arr.slice(0,arr.length-1))
    let temp = prev.map(ele => ele.concat([arr[arr.length-1]]))
    return prev.concat(temp)
}

console.log(subsets([1,2,3]))

function merge(left, right) {
    let mergedArr = [];

    while(left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            mergedArr.push(left.shift());
        } else {
            mergedArr.push(right.shift());
        }
    }
    mergedArr = mergedArr.concat(left)
    mergedArr = mergedArr.concat(right)
    return mergedArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let midIdx = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midIdx));
    let right = mergeSort(arr.slice(midIdx));
    return merge(left,right);
}

console.log(mergeSort([7,5,9,4,2,1,3,0]))