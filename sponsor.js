
function copyToClipboard() {
  const text = document.getElementById("copyText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied!");
  });
}


