function compareText() {
  var text1 = document.getElementById('text1').value;
  var text2 = document.getElementById('text2').value;

  var diff = [];
  var text1Lines = text1.split('\n');
  var text2Lines = text2.split('\n');

  text1Lines.forEach((line, index) => {
    if (line !== text2Lines[index]) {
      diff.push(`line ${index + 1}: ${line} <> ${text2Lines[index]}`);
    }
  });

  document.getElementById('result').innerHTML = diff.join('<br>');
}
