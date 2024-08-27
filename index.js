function encriptar() {
    let txtarea = (document.getElementById("txtarea").value).toLowerCase();
    let tituloMensaje = (document.getElementById("titulo-mensaje").textContent).toLowerCase();
    let parrafo = ((document.getElementById("parrafo")).textContent).toLowerCase();
    let muñeco = ((document.getElementById("muñeco")).textContent).toLowerCase();
  
    let textoCifrado = txtarea
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (txtarea.length != 0) {
      document.getElementById("txtarea").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./assets/img/Muñeco.png";
    } else {
      muñeco.src = "./assets/img/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
  }
  
  function desencriptar() {
    let txtarea = (document.getElementById("txtarea").value).toLowerCase();
    let tituloMensaje = (document.getElementById("titulo-mensaje").textContent).toLowerCase();
    let parrafo = ((document.getElementById("parrafo")).textContent).toLowerCase();
    let muñeco = ((document.getElementById("muñeco")).textContent).toLowerCase();
  
    let textoCifrado = txtarea
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (txtarea.length != 0) {
        document.getElementById("txtarea").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./assets/img/Muñeco.png";
      } else {
        muñeco.src = "./assets/img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      }
  }