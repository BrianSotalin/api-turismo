
  function openLink(ext) {
    // Redirige al usuario a la URL de Google
    window.open("https://api-turismo.bee-10.com/"+ext)
  }
  // Detecta el evento de desplazamiento
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("scrolled"); // Añade la clase "scrolled" al hacer scroll
    } else {
      navbar.classList.remove("scrolled"); // Elimina la clase cuando no hay scroll
    }
  };
  