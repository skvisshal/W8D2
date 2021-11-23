const arr = [1,2,3]

Array.prototype.myEach = function (callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// [1,2,3].myEach((num) => {
//     console.log(num);
// });

Array.prototype.myMap = function (callback) {
    let mapArray = [];
    this.myEach(ele => {
        mapArray.push(callback(ele));
    });
    return mapArray;
}

let disp = arr.myMap((num) => {
    return num*2;
});

console.log(disp);

Array.prototype.myReduce = function (callback, [initialValue]) {
    let i = 0
    if (initialValue === undefined) {
        initialValue = this[0];
        i++;
    };
    let result = initialValue
    for(i; i<this.length; i++) {
        result = callback(result, this[i])
    }
    return result;
}

let disp2 = arr.myReduce(function (acc, el) {
    return acc + el;
}, [25]);

console.log(disp2);



