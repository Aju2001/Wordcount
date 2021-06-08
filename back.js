"use strict";
var conText;
var input = document.querySelectorAll('#text-for-count')[0],
  wordCount = document.querySelector('#wordCount'),
  characterCount = document.querySelector('#characterCount'),
  sentenceCount = document.querySelector('#sentenceCount'),
  paragraphCount = document.querySelector('#paragraphCount');
console.log(input.value);


// refresh the page by clicking home button
function refreshPage() {
  window.location.reload();
}

input.addEventListener('keyup', function() {

  //keeping the console clean to make only the latest data visible
  console.clear();

  // word count using \w metacharacter - replacing this with .* to match anything between word boundaries since it was not taking 'a' as a word.
  // this is a masterstroke - to count words with any number of hyphens as one word
  // [-?(\w+)?]+ looks for hyphen and a word (we make both optional with ?). + at the end makes it a repeated pattern
  // \b is word boundary metacharacter
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  // console.log(words);
  if (words) {
    wordCount.innerHTML = words.length;
  } else {
    wordCount.innerHTML = 0;
  }

  // character count
  // just displaying the input length as everything is a character
  characterCount.innerHTML = input.value.length;



  // sentence count	using ./!/? as sentense separators
  if (words) {
    var sentences = input.value.split(/[.|!|?]+/g);
    sentenceCount.innerHTML = sentences.length - 1;
    console.log(sentences);
    conText = sentences.join("");
    console.log("Hey my name is aju chhabria");

  } else {
    sentenceCount.innerHTML = 0;
  }


  // paragraph count from http://stackoverflow.com/a/3336537
  if (words) {
    // \n$ takes care of empty lines: lines with no characters, and only \n are not paragraphs
    // and need to be replaced with empty string
    var paragraphs = input.value.replace(/\n$/gm, '').split(/\n/);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }
  // console.log(paragraphs);
});

//conversion into upper case using the button of upper case

function upper() {
  var upp = conText.toUpperCase();
  console.log(upp);
  document.getElementById("text-for-count").value = upp;
}

//convertion into lower case using the button of lower case

function lower() {
  console.log("hey")
  var upp = conText.toLowerCase()
  console.log(upp);
  console.log("Hey");
  document.getElementById("text-for-count").value = upp;
}

//convertion of given sentence in title case

function titleCase() {
  var upp = conText.toLowerCase().split(" ");
  for (var i = 0; i < upp.length; i++) {
    upp[i] = upp[i][0].toUpperCase() + upp[i].slice(1);
  }
  var convertedTitle = upp.join(" ");
  document.getElementById("text-for-count").value = convertedTitle;
}

//convertion of given sentence in sentence case(first alphabet in upper case rest all in lower case)

function firstLetterUpper() {
  var newString = conText.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
    return c.toUpperCase()
  });
  return newString;
}

function sentence() {
  var newString = firstLetterUpper();
  //console.log("Converted: "+newString);
  document.getElementById('text-for-count').value = newString;
}


// clear button in the html page
function clearButton() {
  console.log("Hey my nakdfuhufd");
  document.getElementById('text-for-count').value = '';
}

// about us button on home page
