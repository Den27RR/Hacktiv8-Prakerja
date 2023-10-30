function cetak() {
  const textValue = document.getElementById("textInput").value;
  const numberValue = document.getElementById("numberInput").value;
  const outputList = document.getElementById("outputList");

  for (var i = 1; i <= numberValue; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = textValue;
    outputList.appendChild(listItem);
  }
}

function hapus() {
  var outputList = document.getElementById("outputList");
  outputList.innerHTML = "";
}

