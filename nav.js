// const lista_filtros = ['tamanhos', 'preços', 'mais vendidos', 'mais recentes', 'importados']

function criarNavbar(){

    const header = document.querySelector('.navheader')
    const navbar = document.createElement('nav')
    const img = document.createElement('img')
    const nav1 = document.createElement('nav')
    const navlist = ['novos', 'categorias', 'promo']
    const navicons = document.createElement('nav')
    const naviconslist = ['search', 'profile', 'cart']
    const naviconslist_alttxt = ['ícone da pesquisa', 'ícone do perfil', 'ícone do carrinho']    
    const navcateg = document.createElement('nav')
    const olnavcateg = document.createElement('ol')
    const lista_categ = ['plusize', 'sutãs', 'calcinhas', 'conjuntos', 'camisolas', 'modeladores', 'infantil', 'masculino', 'feminino']

    navbar.setAttribute('class', 'navbar')
    header.appendChild(navbar)
    img.setAttribute('src', '../elementos/img/logo.png')
    img.setAttribute('alt', 'logo tipográfica OK.L')
    navbar.appendChild(img)
    nav1.setAttribute('id', 'header-nav1')
    navicons.setAttribute('id', 'header-nav2')

    navlist.map((el, p)=>{
        let button = document.createElement('button')
        button.setAttribute('id', `header_navlink${p}`)
        button.classList.add('header_navlink')
        button.innerHTML = el
        nav1.appendChild(button)
    })
    navbar.appendChild(nav1)

    lista_categ.map((el,p)=>{
        let li = document.createElement('li')
        li.setAttribute('id', `lista-categ${p}`)
        li.innerHTML = el
        olnavcateg.appendChild(li)
    })

    navcateg.setAttribute('id', 'nav-categ')
    navcateg.style.display='none'
    header.appendChild(navcateg)
    navcateg.appendChild(olnavcateg)

    naviconslist.map((el,p)=>{
        let img = document.createElement('img')
        img.setAttribute('src', `../elementos/icons/${el}-icon.png`)
        img.setAttribute('alt', `${naviconslist_alttxt[p]}`)
        img.classList.add('header_navlinkimg')
        navicons.appendChild(img)
    })
    navbar.appendChild(navicons)

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

criarNavbar()
