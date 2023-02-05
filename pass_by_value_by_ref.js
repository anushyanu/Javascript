/* variables outside the function e.g var a = 4 and inside the fn a =5,  and when it is passed as a argument in function
then the output becomes a = 5 */

function letters(a,b,c){
    a = 4;
    b.push("dave");
    c.first = false;

}

var x = 5;
var y = ["ram","leela"];
var z = {first:true}

letter(x,y,z)

output:

a = 5  /* a is changed becoz variables goes with pass by value ,wtever is given in argument it is taken */
b = ["ram","leela","dave"]  /* arrays and objects goes by reference , it gets changed in the same reference */
c = {first:false}