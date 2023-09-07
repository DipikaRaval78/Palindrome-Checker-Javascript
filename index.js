// var checkButton = document.getElementById('checkPalindrome')
// console.log(checkButton)

function isPalindrome(str) {
  'use strict';
  
  const alphanumericOnly = str
        // 1) Lowercase the input
        .toLowerCase()
        // 2) Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g);
        
    // 3) return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}
function checkbutton()
{
    'use strict';
    var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  console.log(value)
  
  if(isPalindrome(value)) {
    notification.innerHTML = "Yay! You've got yourself a palindrome";
    notification.className = "alert alert-success";
  } else {
    notification.innerHTML = "Nay! Ain't no palindrome";
    notification.className = "alert alert-danger";
  } 
}
// checkButton.addEventListener("click", function() {
//   'use strict';
  
//   var value = document.getElementById("inputPalindrome").value;
//   var notification = document.getElementById("notification");
  
//   if(isPalindrome(value)) {
//     notification.innerHTML = "Yay! You've got yourself a palindrome";
//     notification.className = "alert alert-success";
//   } else {
//     notification.innerHTML = "Nay! Ain't no palindrome";
//     notification.className = "alert alert-danger";
//   }
// });