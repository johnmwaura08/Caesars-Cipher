//we want to convert the letter to ASCII code and add 13
  //.CharCodeAt() returns the ASCII value of a string

  //.fromCharCode() returns the string from ASCII value



function rot13(str) {

    return str.replace(/[A-Z]/g,(letter) => {

        let asciiValue = letter.charCodeAt(0) + 13;

            if(asciiValue > 90) {
                asciiValue = asciiValue % 90 + 64;
            }

            return String.fromCharCode(asciiValue);
    })
}

// console.log(rot13("SERR PBQR PNZC")); decodes to FREE CODE CAMP
// console.log(rot13("SERR CVMMN!")); decodes to FREE PIZZA!
