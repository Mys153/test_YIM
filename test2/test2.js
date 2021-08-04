const input = prompt();

var StringInput = input.split('').map(String);
var count=1,max=0; 
var alphabet='' , char_max='';

console.log(StringInput);

for(let i=0 ; i<StringInput.length ; i++){
    if(alphabet == StringInput[i]){
        //console.log("Alp " +alphabet);
        //console.log("Str " +StringInput[i]);
        count++;
        //console.log("Count " +count);
    }else if(alphabet != StringInput[i]){
        if(max < count){
            max = count;
            char_max=alphabet;
        }
        alphabet=StringInput[i];
        count=1;
    }
    if (max < count){
        max = count;
        char_max=alphabet;
    }
    if(char_max == ''){
        char_max = StringInput[i];
    }
}
console.log("Ans "+max + " (" +char_max .repeat(max) + ")") ;