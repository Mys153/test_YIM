const input = prompt();
const val = prompt();

var valArray = input.split(' ').map(Number);
var count=0,result=0;

console.log("Array Input "+valArray);
console.log("value "+val);

for(let i=1 ; i<valArray.length ; i++){
    for(let j=0 ; j<=i ; j++){
        result = valArray[j] * valArray[i];
        if(result == val){
            count++;
        }
    }
}
console.log("Ans "+count + "pairs");
