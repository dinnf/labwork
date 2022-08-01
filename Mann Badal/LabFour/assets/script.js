let box = document.querySelector('.container');
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log({ width, height });

document.getElementById("footer").innerHTML = `style="width:${width};"`