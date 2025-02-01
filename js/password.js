function myFuncao() {
  let show = document.getElementById("inputPassword5");
  if (show.type === "password"){
    show.type = "text";
  } else{
    show.type = "password";
  }

  let mostrar = document.getElementById("inputPassword6");
  if(mostrar.type === "password"){
    mostrar.type = "text";
  } else{
    mostrar.type = "password";
  }
}