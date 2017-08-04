 //title screen
document.onkeypress = function(event) {
  var titleInput = event.key; //Registers whatever is last pressed.
  console.log("WORKS")

  if (titleInput) {
    var none = document.getElementById("title-off");
      none.style.visibility="hidden";
      console.log("WORKS!");

    var visible = document.getElementById("title-on");
      visible.style.visibility="visible";
      console.log("WORKS!!");

    var audio = document.getElementById("lozbg");
      audio.play();
      console.log("WORKS!!!");
  }

}




  var wordBank = ["rupees","zelda","heart","ganon","sword","wisdom","courage","power","link","dungeon","hyrule","bombs","bows"];

  console.log(wordBank);
  
  var numGuesses = 5;   
  var correct = 0;

  var audio = document.getElementById("lozbg");
    audio.volume = 0.1;

function reset(){
  var randomWord = wordBank[Math.floor((Math.random()*wordBank.length))];
 
  var wordArray = randomWord.split("");

  		console.log(wordArray);
  		//console.log(wordArray.indexOf("e")); //searches for letter in wordArray

  var blankedWordArray = [];
  var letterGuessed = "";

  //var guessWrong = numGuesses--;

 

  //Loop to create "_ _ _ _" words
 
	for (var i=0; i < randomWord.length; i++) {
	  blankedWordArray.push("_ ");


	  var replaceTag = document.getElementById("blanked");
	  var blankedOut = document.createElement("span");
	  blankedOut.innerHTML = blankedWordArray[i];
	  replaceTag.appendChild(blankedOut);
    }
  

  console.log(blankedWordArray);

   //var indices = 0
  	
   // for (i=1; i<wordArray.length; i++){
   // 	  indices += ("||" + i); 
   // 	};
  //console.log(indices);

  function guessWrong(){
  	console.log("test!")
    return numGuesses--;
  }

  
  document.getElementById("guesses").innerHTML = numGuesses;


  
  function guessCorrect(){
  	return correct++;
  }


  document.getElementById("completed").innerHTML = correct;

  document.onkeyup = function(event) {
  	var userInput = event.key; //Registers whatever is last pressed.
  	var keyCodeNumber = event.keyCode; //Gives unique number to keys.
  	
  	var letterIndex = wordArray.indexOf(userInput);


  	console.log("User Input: " +userInput);
  	console.log("Key Code Number: "+ keyCodeNumber);
  	console.log("Initial letter Index: "+ letterIndex);

  	if (userInput) { 
  	  //Code to make sure only a-z does something.
  	  if (keyCodeNumber > 90 || keyCodeNumber < 65) {
 		//blank
  	  }  

  	  else { 	//If a-z, adds typed letter to a list.
  	  letterGuessed += String(userInput+" "); 
  	  }

  	}


  	if (wordArray.indexOf(userInput) === 0||1||2||3||4||5||6||7||8){
 		if ((wordArray.indexOf(userInput) === -1)&&((keyCodeNumber <= 90 && keyCodeNumber >= 65) )) {
 		  guessWrong();
 		  console.log("Guesses Left: " + numGuesses)
 		}
  		//creates new arrays for each letter and adds them all up. used to limit loop from going over letter amount and going into -1 index.
  		var counts = {};
  	  	  wordArray.forEach(function(x){
   	  	  counts[x] = (counts[x]||0) + 1;
   	  	  console.log(counts[userInput]);
  		});

  	  //create loop to find same letter in entire array:
  	  //first var a creates initial value 0, then is held by variable b, then b+1 to force indexOf to search for next same letter in array
  	  for (i=0; i<counts[userInput]; i++){
  	  	

  		var a = wordArray.indexOf(userInput, letterIndex);
  		var a = wordArray.indexOf(userInput, b+1);
  	
  		console.log("Same letter indices: "+ a);

  		//replaces first blank that occurs blankedWordArray with letter
  		blankedWordArray.splice(letterIndex, 1, wordArray[letterIndex]);

  		//replaces other blanks that occurs in blankedWordArray with letter as same as above
  		blankedWordArray.splice(a, 1, wordArray[letterIndex]);

  		console.log(blankedWordArray);

  		var b = a
  		
  			
  	  }	
  	  	for (var i=0; i < randomWord.length; i++) {

  	  	  var blankedOut = document.createElement("span");
  	  	  var textNode = document.createTextNode(blankedWordArray[i]+" ");
	  	  var replaceTag = document.getElementById("blanked");
	  	  	blankedOut.appendChild(textNode);

	  	  replaceTag.replaceChild(blankedOut, replaceTag.childNodes[i]);
  	  	
  		}
  	}

 
  	if (blankedWordArray.toString() === wordArray.toString()){
  	  
  	  guessCorrect();
  	  numGuesses = 5;
  	  blankedWordArray.length = 0;

	    document.getElementById("blanked").innerHTML = "";

      var x = document.getElementById("item");
      x.play();
      x.volume = 0.1;

  	  console.log(blankedWordArray)
  	  console.log(correct);
  	  console.log("YOU DID ITTTT!!!@!#^!@*");

  	  reset();

  	}

  	else if (numGuesses === 0){
  	  
  	  numGuesses = 5;
  	  blankedWordArray.length = 0;
  	  
  	  document.getElementById("blanked").innerHTML = "";

  	  console.log(blankedWordArray)
  	  console.log("YOU SUUUUUUCK");

  	  reset();
  	}


	document.getElementById("completed").innerHTML = correct;
	document.getElementById("guesses").innerHTML = numGuesses;
	//document.getElementById("input").innerHTML = userInput;
	document.getElementById("letg").innerHTML = letterGuessed;
	//document.getElementById("random").innerHTML = randomWord;
  }
}

reset();

// if (blankedWordArray.toString() === wordArray.toString()){
//   	  guessCorrect();
// }

  

 
  

//getElementById(), getElementsByClassName(), getElementsByTagName()
//querySelector() <-- Only used for specifed CSS selectors
//document.onkeyup <-- registers after key is pressed
//document.onkeypress <--  registers when pressing a key 
