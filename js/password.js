function myFuncao() {
  let show = document.getElementById("inputPassword5");
  if (show.type === "password"){
    show.type = "text";
  } else{
    show.type = "password";
  }
}