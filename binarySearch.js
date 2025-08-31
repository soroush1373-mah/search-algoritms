//impletation binary search algoritm
//arrays= [2,3,5,6,8,10]
//target : 3 , 8 , 10 , 20;


function binarySearch(array , target) {
    let leftIndex = 0;
    let rightIndex = array.length -1 ;
    while (leftIndex <= rightIndex) {
        let middle = Math.floor((leftIndex + rightIndex) / 2);
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            leftIndex = middle + 1;
        } else {
            rightIndex = middle - 1;
        }
    }
    return -1 ;

}
console.log(binarySearch([2,3,5,6,8,10] , 3));
console.log(binarySearch([2,3,5,6,8,10] , 8));
console.log(binarySearch([2,3,5,6,8,10] , 20));

//recursive binary search
//array [ -5 , 2, 3,6 ,10]
//target : 10 , 6 , 20 ;

function recursiveBinarySearch(array , target) {
    return search(array , target , 0 , array.length -1)
}
function search(array , target ,leftIndex ,rightIndex) {
    if(leftIndex > rightIndex) {
        return -1;
    }
    let middle = Math.floor((leftIndex + rightIndex) /2 );
    if (array[middle] === target) {
        return middle;
    }
    if (target > array[middle]) {
        return search (array , target , middle + 1 , rightIndex)
    } else {
        return search (array , target , leftIndex , middle -1)
    }
}
console.log(recursiveBinarySearch([-5 , 2, 3,6 ,10], 10));
console.log(recursiveBinarySearch([-5 , 2, 3,6 ,10], 20));
console.log(recursiveBinarySearch([-5 , 2, 3,6 ,10], 6));
console.log(recursiveBinarySearch([-5 , 2, 3,6 ,10], 20));
