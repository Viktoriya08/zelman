const swiper = new Swiper('.main-slider', {
    // Optional parameters
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    }
  
    // Navigation arrows
    /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
    /* thumbs:{
        swiper:{
            el: '.detail-elem__mini-slider',
            slidesPerView: 5,
        }
    }, */
});

const lightbox = GLightbox({

});

/* menu-btn */

const menuBtn = document.querySelector('.menu-btn .menu-btn-js');
const headerLogo = document.querySelector('.header__logo');
const searchMob = document.querySelector('.search--mob');
const headerMenu = document.querySelector('.header__box');
const header = document.querySelector('.header');

if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
        console.log(123);
        menuBtn.classList.toggle('open');
        headerLogo.classList.toggle('hidden');
        searchMob.classList.toggle('open');
        headerMenu.classList.toggle('open');
    })
}

/* search-form */

const search = document.querySelectorAll('.search-form');


if(search){

    search.forEach(searchForm =>{

        /* поиск при открытом меню */
        const searchInput = searchForm.querySelector('.search__input');
        searchInput.addEventListener('click', ()=>{
            searchForm.classList.add('search-open');
            menuBtn.style.display = 'none';

            if( window.innerWidth < 767 ){
                headerMenu.style.borderTop = '2px solid #EA5E20';
            }

        });

        /* поиск при закрытом меню */
        const searchActive = searchForm.querySelector('.btn-icon'); 

        searchActive.addEventListener('click', ()=>{
            searchForm.classList.add('search-open');
            searchMob.classList.add('open');
            menuBtn.style.display = 'none';
            headerLogo.classList.add('hidden');
            header.style.borderBottom = '2px solid #EA5E20';
        });

        /* закрыть поиск */

        const searchCross = searchForm.querySelector('.search__cross');
        const input = searchForm.querySelector('.search__input');

        searchCross.addEventListener('click', ()=>{

            if(headerMenu.classList.contains('open')){

                searchForm.classList.remove('search-open');
                menuBtn.style.display = 'block';
                headerMenu.style.borderTop = null;
                input.value = "";

            } else{

                searchForm.classList.remove('search-open');
                searchMob.classList.remove('open');
                menuBtn.style.display = 'block';
                headerLogo.classList.remove('hidden');
                input.value = "";
                header.style.borderBottom = null;
            }
            
        })

    });

    
};

/* select */

/* const defailtSelect = () =>{
    const element = document.querySelector('.select-lang');
    const choices = new Choices(element);
};
defailtSelect(); */

/* добавить ::before для иконки меню */

const headerEl = document.querySelectorAll('.header__el');

if(headerEl){
    headerEl.forEach(el =>{

        if(el.hasAttribute('data-before') && el.getAttribute('data-before') !== ""){
            el.classList.add('header__el--before');
        } else{
            el.classList.remove('header__el--before');
        }

    });
}

/* открыть полный список меню */

const btnsMore = document.querySelectorAll('.js-menu');
const headerSubNav = document.querySelector('.header__sub-nav');

if(btnsMore){

    btnsMore.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            e.target.classList.toggle('open');
            headerSubNav.classList.toggle('open');
        });
    });

};

/* выбор языка сайта  select-custom__selected*/

const lang = document.querySelector('.select-custom__selected');
const langBox = document.querySelector('.select-custom__box');
const allLangs = langBox.querySelectorAll('.select-lang');

if(lang){

    lang.addEventListener('click', ()=>{
        lang.classList.toggle('open');
        langBox.classList.toggle('open');
    });

    
    allLangs.forEach(el =>{

        el.addEventListener("click", (e)=>{
            const langSelect = el.getAttribute('bata-lang');
            //console.log(langSelect);
            
            lang.removeAttribute('bata-lang');
            lang.setAttribute('bata-lang', langSelect);
            const text = lang.querySelector('.select-custom__lg');
            text.innerHTML = langSelect;
        });

    });

};

/* search-form__categ выбор категории поиска */

const searhCategorys = document.querySelector('.search-form__categ');
const categorys = document.querySelectorAll('.search-form__categ-el');
const btnCategory = document.querySelector('.js-btn__category');

if(categorys){

    categorys.forEach(categoty =>{
        categoty.addEventListener('click', ()=>{
            btnCategory.innerHTML = categoty.innerHTML
            btnCategory.classList.add('choise');
            btnCategory.classList.remove('cat-open');
            searhCategorys.classList.remove('open');
            btnCategory.classList.remove('cat-open');
        })
    })

    btnCategory.addEventListener('click', ()=>{

        if(btnCategory.classList.contains("choise")){
            btnCategory.innerHTML = 'Везде';
            btnCategory.classList.remove('choise');

        } else{
            searhCategorys.classList.toggle('open');
            btnCategory.classList.toggle('cat-open');
        }
        
    })

}

/* js-catalog */

const catalogBtn = document.querySelector('.js-catalog');
const headerMain = document.querySelector('.header__main');
const contentBody = document.querySelector('.main-wrapp');
const headerCatalog = document.querySelector('.header__catalog');
const headerBtn = headerCatalog.querySelector('.header__catalog-title .btn');
const firstCatalog = document.querySelector('.header__main-catalog');
const mainCatalogEl = headerCatalog.querySelectorAll('.el-catalog__item');
const subCatalogList = document.querySelectorAll('.header__sub-catalog');
const headerDeep = document.querySelectorAll('.header__catalog-deep');
//const subSubList = document.querySelectorAll('.header__sub-sub-catalog');

if(catalogBtn) {

    catalogBtn.addEventListener('click', ()=>{
        catalogBtn.classList.toggle('open');
        contentBody.classList.toggle('shadow');
        headerCatalog.classList.toggle('open');

        if(window.innerWidth < 767){
            headerMain.classList.add('open');
        }
    })

    if(window.innerWidth < 767){
        headerBtn.addEventListener('click', ()=>{
            headerMain.classList.remove('open');
            catalogBtn.classList.remove('open');
            contentBody.classList.remove('shadow');
            headerCatalog.classList.remove('open');
        });
    };
};

/* выбор по меню каталог */

/* let arrDeep = []; */ //записываем все значения data-deep в массив

/* headerDeep?.forEach(deep =>{
    let el = deep.getAttribute('data-deep');
    arrDeep.push(el);
});

console.log(arrDeep);*/

if(mainCatalogEl){

    mainCatalogEl.forEach(el =>{

    /* курсор выбирает главную категорию */
        el.addEventListener('mouseover', ()=>{
            let id = el.id;

            let parent = el.closest('.header__catalog-deep');
            //let parentDeep = parent?.getAttribute('data-deep');
            //console.log(parent);
            //console.log(parentDeep);

            subCatalogList.forEach(subList =>{
                let dataId = subList.getAttribute('data-id');
                
                if(id == dataId){
                    subList.classList.add('open');
                    let deep = subList.parentNode;
                    deep.classList.add('open');
                } else{
                    subList.classList.remove('open');
                    //if(id !=="" ||  !parent?.classList.contains("open")){
                       //subList.classList.remove('open'); 
                    //}
                    
                };
            });

        });

    /* курсор уходит из выбора каталога */
        /* el.addEventListener('mouseout', ()=>{
            subCatalogList.forEach(subList =>{
                subList.classList.remove('open');
            });
        }); */

    });

};

/* курсор выбирает подкатегорию deep-2 */
subCatalogList.forEach(subList =>{
    
    subList.addEventListener('mouseover', (event)=>{
        subList.classList.add('open');
        
    });

});


/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

function getwidth(){
    console.log(this.offsetWidth);
}

const getWidth2 = getwidth.bind(document.querySelector('.test2'));

document.querySelector('.test1').onclick = getWidth2;

const res = [5,7,9];

console.log(res);
const res2 = [5,7,9].slice(1);

console.log(res2);

res2.pop();
console.log(res2);
