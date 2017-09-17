module.exports = function multiply(first, second) {
var arr1 = first.split('');
var arr2 = second.split('');
var arr3 = new Array();
var arr4 = [];
var arr5 = [];
var flag = 0;
var memory = 0;
var result;
for(var i=0; i< arr1.length; i++){
	arr3[i] = new Array();
}
for(var i=0; i< arr1.length; i++){
	for(var j = 0; j<arr2.length; j++){
		arr3[i][j]= +arr1[arr1.length-i-1] * +arr2[arr2.length-j-1];
		if(j == arr2.length-1){
			for(var x = 0; x<flag; x++){
				arr3[i].unshift(0);
			}
			flag++;
		}
	}
}
var length = arr3[arr3.length-1].length;
for(var i=0; i< arr3.length; i++){
	for(var j = 0; j<length; j++){
		if(arr3[i][j] == null){
			arr3[i][j] = 0;
		}
	}
}
for(var j = 0; j < length; j++){
	var sum =0;
	for(var i=0; i < arr3.length; i++){
		sum += arr3[i][j];
		if(i == arr3.length-1){
			arr4[j] = sum;
		}
	}
}
for(var i = 0; i < arr4.length; i++){
var sum;
var arr6 = [];
var arr7=[];
var str = '';
var str = String(arr4[i]);
if(i == arr4.length-1){

	arr5[i] = +str + (+memory);
}
else{

sum = +str + (+memory);
sum = String(sum);
arr7=sum.split('');
arr5[i]=arr7[arr7.length-1];
for(var x = 0; x < arr7.length-1; x++){
	arr6.push(arr7[x]);
}
}
memory = 0;

memory += +(arr6.join(''));
// alert(memory);
}
arr5.reverse();
result = arr5.join('');
return result;
}

