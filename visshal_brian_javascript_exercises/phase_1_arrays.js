Array.prototype.uniq = function() {
    let result = [];

    for(let i = 0; i < this.length; i++) {
        if(!result.includes(this[i])) {
            result.push(this[i]);
        }
    }

    return result;
}

Array.prototype.twoSum = function () {
    let result = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = (i+1); j < this.length; j++) {
            if((this[i] + this[j]) === 0) {
                result.push([i,j]);
            }
        }
    }

    return result;
}

Array.prototype.transpose = function () {
    let result = new Array(this[0].length)
    for(let i =0; i < result.length; i++) {
        result[i] = new Array(this.length)
    }

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            result[j][i] = this[i][j];
        }
    }

    return result;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())