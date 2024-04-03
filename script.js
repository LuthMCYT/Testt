function countCharacters() {
  var inputText = document.getElementById("text").value;
  var characterCount = inputText.length;
  document.getElementById("uppercaseText").innerText = "Number of characters: " + characterCount;
}
