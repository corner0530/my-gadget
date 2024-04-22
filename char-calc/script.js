function countWordsAndCharacters() {
  var text = document.getElementById('textInput').value.trim();

  // 文字数のカウント
  var characterCount = text.length;

  // 単語数のカウント（スペースで分割）
  var wordCount = text.length > 0 ? text.split(/\s+/).length : 0;

  // 結果の表示
  document.getElementById('wordCount').innerText = wordCount;
  document.getElementById('characterCount').innerText = characterCount;
}
