const formulario = document.getElementById("calculadora");
formulario.onsubmit = (event) => {
  event.preventDefault();
  const estatura = document.getElementById("estatura").value;
  const peso = document.getElementById("peso").value;
  if (!estatura || !peso || estatura < 0 || peso < 0) {
    alert("Por favor rellene todos los campos");
    return;
  }
  const imc = peso / (estatura * estatura);
  alert("Tu IMC es: " + imc);
};
