// const lista_filtros = ['tamanhos', 'preços', 'mais vendidos', 'mais recentes', 'importados']
const larguraviewport = window.innerWidth

function criarNavbar(){

    const header = document.querySelector('.navheader')
    header.innerHTML = `
    <nav class="navbar">
        <img src="../elementos/img/logo.png" alt="logo tipográfica OK.L">
        <nav id="header-nav1"></nav>
        <nav id="header-nav2"></nav>
    </nav>
    <nav id="nav-categ"></nav>`
    const navlist = ['novos', 'categorias', 'promo']
    const naviconslist = ['search', 'profile', 'cart']
    const naviconslist_alttxt = ['ícone da pesquisa', 'ícone do perfil', 'ícone do carrinho']
    const lista_categ = ['plusize', 'sutãs', 'calcinhas', 'conjuntos', 'camisolas', 'modeladores', 'infantil', 'masculino', 'feminino'] //disponibilizar essa lista em um  nivel abaixo
    const navcateg = document.getElementById('nav-categ')
    navcateg.style.display='none'
    navcateg.innerHTML=`<ol id="olnav-categ"></ol>`

    navlist.map((el, p)=>{
        const nav1 = document.getElementById('header-nav1')
        let button = document.createElement('button')
        button.setAttribute('id', `header_navlink${p}`)
        button.classList.add('header_navlink')
        button.innerHTML = el
        nav1.appendChild(button)
    })

    lista_categ.map((el,p)=>{
        const olnavcateg = document.getElementById('olnav-categ')
        let li = document.createElement('li')
        li.setAttribute('id', `lista-categ${p}`)
        li.innerHTML = el
        olnavcateg.appendChild(li)
    })

    // navcateg.setAttribute('id', 'nav-categ')
    // navcateg.style.display='none'
    // header.appendChild(navcateg)
    // navcateg.appendChild(olnavcateg)

    naviconslist.map((el,p)=>{
        const navicons = document.getElementById('header-nav2')
        let img = document.createElement('img')
        img.setAttribute('src', `../elementos/icons/${el}-icon.png`)
        img.setAttribute('alt', `${naviconslist_alttxt[p]}`)
        img.classList.add('header_navlinkimg')
        navicons.appendChild(img)
    })


        /* <===== ADD EVENTOS =======> */
    
    const evtclickcategorias = document.getElementById('header_navlink1')
    let clickcateg = true

    evtclickcategorias.addEventListener('click', ()=>{
        if(clickcateg){
            navcateg.style.display='inherit'
        }else{
            navcateg.style.display='none' 
        }
        clickcateg = !clickcateg
    })
}

//Grupo Sub-Categorias
function criarGpSubCateg500_700px(){
    const grupo = document.getElementById('gpbtn-subcateg')
    const lista = ['tons pasteis', 'alto contraste','basicos', 'terrosos', 'rendados'] // lista palavras chaves = classe?talvez?

    lista.map((el,p)=>{
        const li = document.createElement('li')
        const classe = 'gpbtn-subcateg'
        const link = document.createElement('a')
        li.setAttribute('id', `${classe}${p}`)
        link.setAttribute('href', '#')
        link.innerHTML=el
        li.appendChild(link)
        grupo.appendChild(li)
    })
}

function width_desktop(){

    const bannerDesktop = ()=>{
        const banner = document.getElementById('banner-princ')
        banner.innerHTML = `
        <div class="area-img">
            <img src="" alt="modelo">
        </div>
        <div class="area-conteudo cont-banner">

            <div class="titulo-banner">
                <h1 id="h1_banner1">Okairo</h1>
                <h1 id="h1_banner2">Lingerie</h1>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit cum excepturi expedita,
                voluptate quidem esse non accusamus.</p>
        </div> `
    }

    const sec_apresent = ()=>{
        sec =  document.getElementById('sec_apresent')
        sec.innerHTML = `
        <div>
            <div id="sec-especial-card1">
                <h2>Compre Online</h2>
                <img src="elementos/img/004865_000003--1702557351--camisola-amanda-estampada.jpg" alt=""
                    id="sec-especial-img1">
            </div>
            <div id="sec-especial-card2">
                <img src="elementos/img/007911_000001--1612876459--conjunto-sem-bojo-com-arco.jpg" alt=""
                    id="sec-especial-img2">
            </div>
            <div id="sec-especial-card3">
                <img src="elementos/img/007973_000001--1654286757--camisola-sem-bojo-com-renda.jpg" alt=""
                    id="sec-especial-img3">
            </div>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita consectetur quod quidem  placeat, ex dolorem, repellat reiciendis magnam facere illo dolor, labore eos veniam nisi ratione?Repellat, atque inventore.</p> `
    }
    criarNavbar()
    bannerDesktop()
    sec_apresent()
}

function width700px(){

    function criarBanner700px(){
        const sec_banner = document.getElementById('banner-princ')
        const listaslides = ['1', '2', '3']
        sec_banner.innerHTML = `
        <div id="bannerdiv1">
            <div class="slider" id="banner-slider1"></div>
        </div>
        <div id="bannerdiv2">
            <div class="texto-banner">
                <h1 id="h1_banner1">Okairo</h1>
                <h1 id="h1_banner2">Lingerie</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>`

        listaslides.map((el,p)=>{
            const slider = document.getElementById('banner-slider1')
            const slide = document.createElement('div')
            slide.setAttribute('class', 'banner-slide')
            slider.appendChild(slide)
        })

    }

    criarNavbar()
    criarBanner700px()
    criarGpSubCateg500_700px()
}


if(larguraviewport <= 500){
    width500px()
} else if(larguraviewport <=700){
    width700px()
}
else if(larguraviewport >700){
    width_desktop()
}

function width500px(){
    const body = document.querySelector('body')

    function criarNavbar500px(){
        const header = document.querySelector('.navheader')
        header.innerHTML= `
        <nav class="navbar">
            <img src="../elementos/img/logo.png'" alt="logo tipográfica OK.L">
            <input type="text" class="search">
            <img src="../elementos/img/menu.png" alt="ícone do menu" class="menuicon">
        </nav>`
    }

    function criarBanner500px(){
        const sec_banner = document.getElementById('banner-princ')
        sec_banner.innerHTML = `
        <div class="texto-banner">
            <h1 class="h1_banner1">Okairo</h1>
            <h1 class="h1_banner2">Lingerie</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>`

    }

    function sec_apresent500px(){
        const sect = document.getElementById('sec_apresent')
        const card = document.createElement('div')
        const textareacard = document.createElement('div')
        const titulocard = document.createElement('h3')
        const desccard = document.createElement('p')

    }

    criarNavbar500px()
    criarBanner500px()
    criarGpSubCateg500_700px()
    sec_apresent500px()
}
