// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const result = {};

    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false;
    //97 - 122  char codes a-z
    let count = 97;

    for(let i = 0; i <= 25; i++){ 
      //fill our object with normal alphabet keys paired with substitution keys
      if(Object.values(result).includes(alphabet[i])){ 
        return false;
      //if a value in result already exists (is alphabet[c])
      }else{
        result[String.fromCharCode(count)] = alphabet[i]; 
        //set each key to a normal alphabet letter, value to a new alphabet char
        count++;
      }
    }

  const buildEncryption = input.toLowerCase().split('');

    { //encode or decode here
    return buildEncryption.map(letter => {  
      //iterate through each letter in our input
  for(let normalLetter in result){  
    //iterate through each object in result
  let subLetter = result[normalLetter]; 
    //set our keyvalue to subLetter
  if(letter == " ") return " "; 
      //keep spaces
  if(encode && letter == normalLetter) return subLetter; 
      //encode - if our input letter = key's string of plain letter, return the value of subLetter
  if(!encode && letter == subLetter) return normalLetter; 
      //decode - if our input letter equals a subletter, return the normalLetter
      }
		}).join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };