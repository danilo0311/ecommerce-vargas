let exitLogin;

exitLogin = () => {
    document.getElementsByClassName('contact-wrapper')[0].style.display="none";   
}

let notifyProgress;

notifyProgress = () => {
    let progresoI = "PROGRESO: VENTANA DE CATEGORIAS AÑADIDA";
    // let progresoII = "LANDING PAGE: NUEVA SECCIÓN: PRODUCTOS MAS COTIZADOS";
    alert(progresoI);
    // alert(progresoII);
}

let categoryButtonHandler, displayCategory, hideCategory;

categoryButtonHandler = () => {
    document.getElementById("category-button").addEventListener('mouseout', hideCategory);
    document.getElementById("category-button").addEventListener('mouseover', displayCategory);
    document.getElementsByClassName("category-wrapper")[0].addEventListener('mouseover', displayCategory);
    document.getElementsByClassName("category-wrapper")[0].addEventListener('mouseout', hideCategory);
  }
  
  displayCategory = () => {
    document.getElementsByClassName("category-wrapper")[0].style.height="321px";
  }
  
  hideCategory = () => {
    document.getElementsByClassName("category-wrapper")[0].style.height="0px";
  }