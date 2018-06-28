//function to reverse a string
function reverse(string) {
    //split turns the string into an array which each char is a position on the array
    var split = string.split("");
    //rev reverses the array 
    var rev = split.reverse();
    //comb turns the array back into a string
    var comb = rev.join("");
    //we then log it onto the console
    console.log(comb);
};
reverse("hello world");
