//
// Esse Snippet serve para integrar o darkmode
//
// Autor: Nadson Santos
// Data: 05/23
//

var checkbox = document.getElementById("ChangeTheme"); //obter o checkbox em uma variável

//verificar o armazenamento se o modo escuro estava ligado ou desligado
if (sessionStorage.getItem("mode") === "dark") {
  darkmode(); //se o modo escuro estava ligado, execute esta função
} else {
  nodark(); //caso contrário, execute esta função
}

//se o estado do checkbox for alterado, execute uma função
checkbox.addEventListener("change", function () {
  //verificar se o checkbox está marcado ou não
  if (checkbox.checked) {
    darkmode(); //se o checkbox estiver marcado, execute esta função
  } else {
    nodark(); //caso contrário, execute esta função
  }
});

//função para o checkbox quando o checkbox está marcado
function darkmode() {
  document.body.classList.add("dark-mode"); //adicionar uma classe à tag body
  checkbox.checked = true; //definir o estado do checkbox como marcado
  sessionStorage.setItem("mode", "dark"); //armazenar um nome e valor para saber que o modo escuro está ligado
  var image = document.getElementById("imageLogo");
  image.src = "../public/images/ImagensGerais/logo-ifrn-light.svg";
}

//função para o checkbox quando o checkbox não está marcado
function nodark() {
  document.body.classList.remove("dark-mode"); //remover a classe adicionada da tag body
  checkbox.checked = false; //definir o estado do checkbox como desmarcado
  sessionStorage.setItem("mode", "light"); //armazenar um nome e valor para saber se o modo escuro está desligado ou o modo claro está ligado
  var image = document.getElementById("imageLogo");
  image.src = "../public/images/ImagensGerais/logo-ifrn-dark.svg";
}
