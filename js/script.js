//  скрипт переключения табов (6 программ ЭКО)

const btnP1 = document.querySelector('#P1'); // кнопки
const btnP2 = document.querySelector('#P2');
const btnP3 = document.querySelector('#P3');
const btnP4 = document.querySelector('#P4');
const btnP5 = document.querySelector('#P5');
const btnP6 = document.querySelector('#P6');
const ProgrammOne = document.querySelector('.ProgrammOne'); // блоки с инфой
const ProgrammTwo = document.querySelector('.ProgrammTwo');
const ProgrammThree = document.querySelector('.ProgrammThree');
const ProgrammThour = document.querySelector('.ProgrammThour');
const ProgrammFive = document.querySelector('.ProgrammFive');
const ProgrammSix = document.querySelector('.ProgrammSix');



// функция сокрытия программ при клике
const noneBlockInfo = function () {
    ProgrammOne.style.display = 'none';
    ProgrammTwo.style.display = 'none';
    ProgrammThree.style.display = 'none';
    ProgrammThour.style.display = 'none';
    ProgrammFive.style.display = 'none';
    ProgrammSix.style.display = 'none';
}

// функция удаления класса у кнопки в программах

const delClass = function () {
    btnP1.classList.remove('active');
    btnP2.classList.remove('active');
    btnP3.classList.remove('active');
    btnP4.classList.remove('active');
    btnP5.classList.remove('active');
    btnP6.classList.remove('active');
}



btnP1.addEventListener('click' , (e) => {
    delClass();
    btnP1.classList.add('active');
    noneBlockInfo();
    ProgrammOne.style.display = 'flex';
});



btnP2.addEventListener('click' , (e) => {
    delClass();
    btnP2.classList.add('active');
    noneBlockInfo();
    ProgrammTwo.style.display = 'flex';
});

btnP3.addEventListener('click' , (e) => {
    delClass();
    btnP3.classList.add('active');
    noneBlockInfo();
    ProgrammThree.style.display = 'flex';
});

btnP4.addEventListener('click' , (e) => {
    delClass();
    btnP4.classList.add('active');
    noneBlockInfo();
    ProgrammThour.style.display = 'flex';
});

btnP5.addEventListener('click' , (e) => {
    delClass();
    btnP5.classList.add('active');
    noneBlockInfo();
    ProgrammFive.style.display = 'flex';
});

btnP6.addEventListener('click' , (e) => {
    delClass();
    btnP6.classList.add('active');
    noneBlockInfo();
    ProgrammSix.style.display = 'flex';
});


//  скрипт переключения табов (3 таба)

const btn1 = document.querySelector('#B1');
const btn2 = document.querySelector('#B2');
const btn3 = document.querySelector('#B3');
const blockInfo1 = document.querySelector('.blockInfo1');
const blockInfo2 = document.querySelector('.blockInfo2');
const blockInfo3 = document.querySelector('.blockInfo3');


btn2.addEventListener('click' , (e) => {
    btn2.style.color = '#FF287A';
    btn1.style.color = '#000';
    btn3.style.color = '#000';
    btn1.style.borderBottom = '5px solid #fff';
    btn2.style.borderBottom = '5px solid #FF287A';
    btn3.style.borderBottom = '5px solid #fff';
    blockInfo2.style.display = 'flex';
    blockInfo1.style.display = 'none';
    blockInfo3.style.display = 'none';
})
btn3.addEventListener('click' , (e) => {
    btn2.style.color = '#000';
    btn1.style.color = '#000';
    btn3.style.color = '#FF287A';
    btn1.style.borderBottom = '5px solid #fff';
    btn2.style.borderBottom = '5px solid #fff';
    btn3.style.borderBottom = '5px solid #FF287A';
    blockInfo2.style.display = 'none';
    blockInfo1.style.display = 'none';
    blockInfo3.style.display = 'flex';
})
btn1.addEventListener('click' , (e) => {
    btn2.style.color = '#000';
    btn1.style.color = '#FF287A';
    btn3.style.color = '#000';
    btn1.style.borderBottom = '5px solid #FF287A';
    btn2.style.borderBottom = '5px solid #fff';
    btn3.style.borderBottom = '5px solid #fff';
    blockInfo2.style.display = 'none';
    blockInfo1.style.display = 'flex';
    blockInfo3.style.display = 'none';
})


// block questions

const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});


function boxHandler(e) {
    e.preventDefault(); // сбрасываем стандартное поведение
    let currentBox = e.target.closest(".box"); // определяем текущий бокс
    let currentContent = e.target.closest(".box").querySelector('.content'); // находим скрытый контент
    currentBox.classList.toggle("active"); // присваиваем ему активный класс
    if (currentBox.classList.contains("active")) {
        // если класс активный ..
        currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
    } else {
        // в противном случае
        currentContent.style.maxHeight = 0; // скрываем контент
    }
}

// делаем хедер fixed при прокрутке




window.onscroll = function() {fixedHeader()};

// Получаем шапку
const headerOne = document.querySelector('.hOne');
const headerTwo = document.querySelector('.hTwo');
const nameClinic = document.querySelector('.nameClinic h2');
const nameClinicSpan = document.querySelector('.nameClinic span');
const navToggle = document.querySelector('.nav-toggle');

// Получаем позицию элемента


const sticky = headerOne.clientHeight;
const nameSticky = nameClinic.clientHeight;
const nameClinicSticky = nameClinicSpan.clientHeight;
const navTogglePos = navToggle.clientHeight;

// Добавляем класс sticky, когда шапка достигнет нужной позиции.
// Удаляем класс sticky, когда шапка уйдет с этой позиции.
function fixedHeader() {
    if (window.pageYOffset > sticky) {
        headerOne.classList.add("sticky");
        nameClinic.classList.add("nameSticky");
        nameClinicSpan.classList.add("nameClinicSticky");
        navToggle.classList.add("navToggleTop");
        headerTwo.classList.add('showHead');
    } else {
        headerOne.classList.remove("sticky");
        nameClinic.classList.remove("nameSticky");
        nameClinicSpan.classList.remove("nameClinicSticky");
        navToggle.classList.remove("navToggleTop");
        headerTwo.classList.remove('showHead');
    }
}




// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function scrollToTargetAdjusted(){
//         let element = document.getElementById('targetElement');
//         let headerOffset = 100;
//         let offsetPosition = window.pageYOffset - headerOffset;
//         window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth"
//         });
//     })
//
// }

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 100;
        // const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        const headerHeght = document.querySelector('.hOne').clientHeight;
        if (headerHeght >= 99) {
            window.scrollBy({
                top: offsetPosition - 100,
                behavior: 'smooth'
            });
        } else {
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});






// cворачиваем меню при клике на ссылку

const noneMenu1 = document.querySelector('#noneMenu1');
const navToggleClickID = document.querySelector('#nav-toggle');


noneMenu1.addEventListener('click' , (event) => {

    const clickMenu = event.target.closest('.listMenu');
    if (event.target = clickMenu) {
        navToggleClickID.checked = false;
    }
})



//  кнопка наверх

// считываем кнопку
const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
    // вычисляем положение от верхушки страницы
    const scrolled = window.pageYOffset;
    // считаем высоту окна браузера
    const coords = document.documentElement.clientHeight;
    // если вышли за пределы первого окна
    if (scrolled > coords) {
        // кнопка появляется
        goTopBtn.classList.add("go-top--show");
    } else {
        // иначе исчезает
        goTopBtn.classList.remove("go-top--show");
    }
}

function goTop() {
    // пока не вернулись в начало страницы
    if (window.pageYOffset > 0) {
        // скроллим наверх
        window.scrollBy(0, -75); // второй аргумент - скорость
        setTimeout(goTop, 10); // входим в рекурсию
    }
}


//  отзывы сокрытия и раскрытия



function noneReviews(elem) {
    let textReviews = document.querySelectorAll(elem);


    textReviews.forEach( e => {
        e.classList.add('hiddenReviews');
    })
}
noneReviews('.textareaReviews', '.btnHide');



window.addEventListener('click' , e => {
    if (e.target === e.target.closest('.btnAll')) {
        const showText = e.target.closest('.allBlockReviews').children[2];
        const btnHide = e.target.closest('.allBlockReviews').children[4];
        const btnVisible = e.target.closest('.allBlockReviews').children[3];
        console.log(btnHide)
        btnHide.style.display = 'block';
        btnVisible.style.display = 'none';
        if (showText.style.height = '110px') {
            showText.style.height = 'auto';
        }
    }
    if (e.target === e.target.closest('.btnHide')) {
        const showText = e.target.closest('.allBlockReviews').children[2];
        const btnHide = e.target.closest('.allBlockReviews').children[4];
        const btnVisible = e.target.closest('.allBlockReviews').children[3];
        showText.style.height = '110px';
        btnHide.style.display = 'none';
        btnVisible.style.display = 'block';
    }
})





// вызов модалки


const modal = document.querySelector('#myModal');

const btn = document.querySelector("#myBtn");


const span = document.querySelector(".close");


window.addEventListener('click' , (e) => {
    if (e.target.id === 'myBtn') {
        if (window.innerHeight < 450) {
            modal.style.display = "block";
            modal.style.paddingTop = '100px';
        } else {
            modal.style.display = "block";
            modal.style.paddingTop = '200px';
        }
    }
    if (e.target === e.target.closest('.close')) {
        modal.style.display = "none";
    }
    if (e.target === modal) {
        modal.style.display = "none";
    }
    if (e.target === e.target.closest('#myModal')) {
        modal.style.display = "none";
    }
})
