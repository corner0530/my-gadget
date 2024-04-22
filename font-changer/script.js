document.getElementById('textInput').addEventListener('input', function () {
  var text = this.value;
  document.getElementById('serifOutput').textContent = text;
  document.getElementById('sansSerifOutput').textContent = text;
  document.getElementById('doublestruckOutput').textContent = text;
});
