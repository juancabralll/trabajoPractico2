const formulario = document.getElementById("Area");
formulario.onsubmit = (event) => {
  event.preventDefault();
  const LadoA = document.getElementById("ladoA").value;
  const LadoB = document.getElementById("ladoB").value;
  const LadoC = document.getElementById("ladoC").value;
  if (LadoA <= 0 || LadoB <= 0 || LadoC <= 0) {
    alert("Ingrese valores positivos");
    return;
  }
  if (LadoA < LadoC) {
    alert("Lado A debe ser mayor al lado C");
    return;
  }

  const area1 = LadoC * LadoB;
  const area2 = ((LadoA - LadoC) / 2) * LadoB;
  const area = area1 + area2;
  alert("El area es: " + area + "mts");
};
