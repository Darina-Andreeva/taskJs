function repeat(n,arr){
var newArr=[];
for(var j=0;j<n;j++)
    for(var i=0;i< arr.length;i++){
        newArr.push(arr[i]);
    }
return newArr;
}
repeat(3,[1,2,3]);



function reformat(str) {
	var newString = str.replace(/[aeiou]/gi, '');
	var lowercase = newString.toLowerCase();
	return  lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
	
}

reformat("liMeSHArp DeveLoper TEST");