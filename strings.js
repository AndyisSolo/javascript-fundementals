let firstName = "David";
let lastName = "Tucker";
let title = 'VP Engineering';
title = 'CTO' ;

let fullName = firstName + "" + lastName;

fullName = '${firstname} $[lastname]';
console.log(fullName);

let bio = "Line 1/nLine 2/nLine 3";
bio = `
About David Tucker: David Tuckeer is thee current CTO of Globomantics. 
He also sereeves as an author for Pluralsight.`;

let quote = 'David said, "Java script is great."';
quote = "David said , \"Javascript is great.\"";
quote = `In JavaScript can use 'single' and "double" quotes. `;
quote = `In JavaScript, you must escape the \\ character`;

// String leng
let length = quote.length;
console.log (`Quote Length: ${length}`)


let secondCharacter = quote[1];
console.log(`secondCharacte: ${secondCharacter}`)

let uppercaseName = fullName.toUpperCase();
console.log (uppercaseName)

let idx1 = fullName.indexOf("Dav")