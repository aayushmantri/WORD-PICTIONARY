var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "engineer"
words[2] = "computer"
words[3] = "science"
words[4] = "techno"
words[5] = "international"
words[6] = "newtown"
words[7] = "devil"
words[8] = "undertaker"
words[9] = "kickass"
words[10] = "ovation"
words[11] = "standing"
words[12] = "ridiculous"
words[13] = "jjs"
words[14] = "technician"
words[15] = "cowpuncher"
words[16] = "middlebrow"
words[17] = "jackhammer"
words[18] = "triphthong"
words[19] = "wunderkind"
words[20] = "dazzlement"
words[21] = "jabberwock"
words[22] = "witchcraft"
words[23] = "pawnbroker"
words[24] = "thumbprint"
words[25] = "motorcycle"
words[26] = "cryptogram"
words[27] = "torchlight"
words[28] = "bankruptcy"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
