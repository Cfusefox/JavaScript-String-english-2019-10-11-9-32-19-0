// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase())
// TODO write your code here...


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var arr = sentence.split(" ")
for(var i=0; i < arr.length; i++) {
  var upperFirstWord = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase())
  sentence = sentence.replace(arr[i], upperFirstWord)
}
console.log(sentence)
//TODO write your code here...


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.replace('￥', ''))
//TODO write your code here...
