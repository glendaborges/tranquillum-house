let menuMobile = document.getElementById("mobile-menu");

//função para quando o nav estiver a classe ativo o menu vai aparecer
function toggleMenu() {
    //chamo pelo o id o nav
    let nav = document.getElementById('nav');
    //adiciono uma classe para o nav
    nav.classList.toggle('active');
    console.log("ok")
}
menuMobile.addEventListener('click', toggleMenu);