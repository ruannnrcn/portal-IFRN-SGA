function pesquisar() {
  let busca = document.getElementById("pesquisa").value;
  busca = busca.toLowerCase();

  let x = document.getElementsByClassName("card");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(busca)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
