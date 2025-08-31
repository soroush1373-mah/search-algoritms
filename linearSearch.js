//1-implement linear search algoritms
//array[4 ,1 , 2, 6 , 5 , 9]
//targets : 2 - 5 - 9 - 20 ;

function linearSearch( array , target) {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }
    return -1;
} 
console.log(linearSearch([4 ,1 , 2, 6 , 5 , 9] , 2));
console.log(linearSearch([4,1,2,6,5,9],5));
console.log(linearSearch([4 ,1 , 2, 6 , 5 , 9], 20));


//globalLinearsearch algoritm
//implement globallinearsearch
//array [2,4,1,0,3,0,7]
//target : 7 , 0 ;

function globalLinearsearch(array , target) {
    const result = [];
    for ( let i = 0 ; i < array.length ; i++) {
        if (target === array[i]) {
           result.push(i);
        }
    }
    if (result.length === 0) {
            return -1;
    }
    else {
        return result;
    }
     
        
    
}
 console.log(globalLinearsearch([2,4,1,0,3,0,7] , 0));
 console.log(globalLinearsearch([2,4,1,0,3,0,7] , 7));

