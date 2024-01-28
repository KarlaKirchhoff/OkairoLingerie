// Eventos de Navegação
const lista_categ = ['plusize', 'sutãs', 'calcinhas', 'conjuntos', 'camisolas', 'modeladores', 'infantil', 'masculino', 'feminino']
const lista_filtros = ['tamanhos', 'preços', 'mais vendidos', 'mais recentes', 'importados']

const criarLista = (tag, array) =>{
    this.tag=tag
    this.array=array
    const ol = document.createElement("ol")

    array.map((el)=>{
        const li = document.createElement("li")
        li.innerHTML = el
        ol.appendChild(li)
    })

    tag.appendChild(ol)
    ol.style.display="flex"

    console.log(array)
}

/* ---------- Eventos de click - Lista de Categorias ---------- */
let click_header_categ=0; let cont_header_categ=0
function headerCateg(){

    let nav_categ = document.getElementById('nav-categ')
    ++click_header_categ;
    
        if(click_header_categ == 1){    
            if(cont_header_categ == 0){
                criarLista(nav_categ, lista_categ)
            }
        nav_categ.style.display="block"
        cont_header_categ++
    }else{
        click_header_categ=0;
        nav_categ.style.display="none"
        // nav_categ.removeChild(ol_categ))      
    }    
}

let click_navLateral_categ=0; let cont_navLateral_categ=0
function navLateralCateg(){
    let nav_categ = document.getElementById("navLateral-categ")
    ++click_navLateral_categ;

    if(click_navLateral_categ == 1){
        if(cont_navLateral_categ == 0){
            criarLista(nav_categ, lista_categ)
        }

        nav_categ.style.display="flex";
        nav_categ.style.flexDirection="column"
        ++cont_navLateral_categ
    }else{
        click_navLateral_categ=0
        nav_categ.style.display="none"
    }
}

let click_navLateral_filtros=0; let cont_navLateral_filtros=0
function navLateralFiltros(){
    let nav_categ = document.getElementById("navLateral-filtros")
    ++click_navLateral_filtros;

    if(click_navLateral_categ == 1){
        if(cont_navLateral_filtros==0){
            criarLista(nav_categ, lista_filtros)
        }

        nav_categ.style.display="flex"
        nav_categ.style.flexDirection="column"
        ++cont_navLateral_filtros
    }
}
