// complete the given function

function palindrome(str){
  let lowerstr=str.toLowerCase();
	let isPalindrome=true;
	let i=0;
	let j=lowerstr.length-1;
	while(i<j){
		if(lowerstr[i]!==lowerstr[j]){
			isPalindrome=false;
			break;
		}
		i++;
		j--;
	}
	return isPalindrome;
}

module.exports = palindrome
