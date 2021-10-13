function polylineLengthPlus() {
  const polyline = document.getElementById('polyline');
  const circle = document.getElementById('circle');
  const input = document.getElementById('myInput');
  let newLength = parseInt(input.value) + 20;
  input.value = newLength;
  polyline.setAttribute("points", `200,10 200,${newLength}`);
  circle.setAttribute("cy", `${newLength}`);
}

function polylineLengthMinus() {
  const polyline = document.getElementById('polyline');
  const circle = document.getElementById('circle');
  let input = document.getElementById('myInput');
  let newLength = input.value - 20;
  input.value = newLength;
  polyline.setAttribute("points", `200,10 200,${newLength}`);
  circle.setAttribute("cy", `${newLength}`);
}
