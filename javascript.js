// Seleciona o botão do menu (ícone de hambúrguer) pelo ID definido no HTML
const menuBtn = document.getElementById('menu-btn');

// Seleciona o elemento de navegação (menu que será aberto/fechado)
const navMenu = document.getElementById('navMenu');

// Dentro do botão, procura o elemento <i> (ícone da fonte Font Awesome)
const menuIcon = menuBtn.querySelector('i');
// querySelector() -> método reservado do JavaScript usado para buscar
// o primeiro elemento que corresponde a um seletor CSS dentro de outro elemento.

// --------------------------------------------------------------------

// Adiciona um "ouvinte de evento" (listener) que detecta o clique no botão do menu.
menuBtn.addEventListener('click', () => {
    // addEventListener() -> método reservado usado para executar uma função
    // toda vez que um evento específico ocorre (nesse caso, um clique).

    // Alterna (liga/desliga) a classe "show" no menu de navegação.
    // Isso faz o menu aparecer ou desaparecer visualmente via CSS.
    navMenu.classList.toggle('show');
    // classList.toggle() -> adiciona a classe se ela não existir; remove se já existir.

    // Troca o ícone (de hambúrguer para "X" e vice-versa), dependendo do estado atual.
    // Verifica se o ícone atual tem a classe "fa-bars" (ícone de hambúrguer)
    if (menuIcon.classList.contains('fa-bars')) {
        // classList.contains() -> verifica se o elemento contém uma classe específica (retorna true ou false).

        // Se sim, remove a classe do ícone de hambúrguer...
        menuIcon.classList.remove('fa-bars');
        // ...e adiciona o ícone de "X" para indicar que o menu pode ser fechado.
        menuIcon.classList.add('fa-xmark');
        // Caso contrário, volta o ícone para o estado original (hambúrguer).

    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }

});



    //CRIAÇÃO DO NOME E IDENTIDADE VISUAL DA MARCA
    //CRIAÇÃO LOGO ILLUSTRATOR
    //CRIAÇÃO DE MINÍMO 2 BANNER PHOTOSHOP
    //CRIAR FIGMA
    //CRIAR REPOSITÓRIO E ADD COLABORADORES AO GRUPO
    //PÁGINA PRECISA ESTAR FIEL AO FIGMA
    //PALETA DE CORES
    //FAMÍLIA DE FONTES
    //MÍNIMO 2 PÁGINAS TODAS RESPONSIVAS + BÔNUS POR PÁGINAS
    //OBTER JAVASCRIPT NO PROJETO


    //


    const typed = new Typed(".auto-type", {
        strings: ["RS Finance", " Inovação e Confiança no Mundo das Finanças"],
        typeSpeed: 70, //vekocidade da digitação
        backSpeed: 60, //velocidade da remoção do texto
        backDelay: 1200, // pausa antes de apagar
        loop: true,
        showCursor: false, // Oculta o cursor de digitação
    });



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,   // mostra 3 por vez
        spaceBetween: 20,   // espaçamento entre elas
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Responsividade
        breakpoints: {
            0: { slidesPerView: 1 },   // mobile
            600: { slidesPerView: 2 },   // tablet
            900: { slidesPerView: 3 }    // desktop
        }
    });



// 1 - CRIAR O MENU HAMBURGUER (DIV e icon) NO HTML e o Menu MOBILE
// 2 - FORA DO @MEDIA, INSERIR UM DISPLAY NONE NA DIV QUE GUARDA O ICON DO HAMBURGUER E NA LISTA DO MENU MOBILE
// 3 - DENTRO DO @MEDIA INSERIR O DISPLAY NONE NO MENU DESKTOP
// 4 - DENTRO DO @MEDIA APLICAR O DISPLAY:FLEX NA DIV DO MENU MOBILE QUE ESTAVA OCULTA, COM ISSO ELA FICARÁ VISÍVEL
// 5 - REALIZAR A ESTILIZAÇÃO DO NAV DO MENU MOBILE NO CSS DENTRO DO @MEDIA, ALINHAMENTO, CORES E TRANSIÇÃO
// 6 - FAZER O JAVASCRIPT CONVERSAR COM O ICON DO MENU HAMBURGUER E REALIZAR A AÇÃO