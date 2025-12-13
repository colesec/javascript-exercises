const removeFromArray = function(arr, elementToRemove) {
    for(let i=arr.length;i>=0;i--){
        if (arr[i]==elementToRemove){
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
