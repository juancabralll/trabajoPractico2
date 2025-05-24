const formulario = document.getElementById("contenedor");
formulario.onsubmit = (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const altura = document.getElementById("altura").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg");

  const mensaje = (tipo, mensaje) => {
    if (tipo === "error") {
      msg.classList.add("error");
      msg.classList.remove("correcto");
    } else if (tipo === "correcto") {
      msg.classList.add("correcto");
      msg.classList.remove("error");
    }
    msg.innerText = mensaje;
  };
  if (nombre === "" || apellido === "") {
    mensaje("error", "nombre o apellido no pueden estar vacios");
    return;
  }
  if (nombre.length >= 50 || apellido.length >= 50) {
    mensaje("nombre o apellido no pueden superar los 50 caracteres");
    return;
  }

  if (edad <= 0) {
    mensaje("error", "la edad no puede ser negativa o estar vacia");
    return;
  }
  if (edad < 18) {
    mensaje("error", "la edad debe ser mayor a 18");
    return;
  }

  if (altura <= 0) {
    mensaje("Error", "la altura no puede ser negativa");
    return;
  }
  if (altura >= 230) {
    mensaje("error", "la altura no puede ser mayor a 230cm");
    return;
  }

  if (email.length === 0) {
    mensaje("error", "email no puede estar vacio");
    return;
  }
  if (!email.includes("@")) {
    mensaje("error", "el Email debe contener @");
    return;
  }

  mensaje("correcto", "las validaciones son correctas");
};
