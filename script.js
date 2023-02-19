
  var getwords = document.getElementById("mywords");
  var setwords = document.getElementById("setwords");
  getwords.addEventListener('keyup', () => {
   var t = getwords.value;
    let string = t.split("").reverse().join("");
   setwords.innerHTML = string;
  })