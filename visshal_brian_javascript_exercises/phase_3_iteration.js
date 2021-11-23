const unsorted = [1, 2, 5, 7, 3, 0, 2, 4, 6]

Array.prototype.bubbleSort = function() {
    let isSorted = false;

    while(!isSorted) {
        isSorted = true;

        for(let i = 0; i < (this.length - 1); i++) {
            let j = i + 1;
            if(this[i] > this[j]) {

                let temp = this[j];
                this[j] = this[i];
                this[i] = temp;
                isSorted = false;
            } 
        }
    }

    return this;
}

console.log(unsorted.bubbleSort())

String.prototype.substrings = function() {
    let result = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = (i + 1); j <= this.length; j++) {
            result.push(this.slice(i,j));
        }
    }

    return result;
} 

console.log("abc".substrings())