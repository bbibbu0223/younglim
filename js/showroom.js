$(function(){
    //start
    $(".s-bn").slick({
        arrows:false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000
    });


    const header = document.querySelector('.header'),
        sub =  document.querySelectorAll('.sub'),
        menu = document.querySelectorAll('.menu li'),
        subMenu = document.querySelectorAll('.header_out');
    let menuIdx = 0;

        for(let i=0;i<menu.length;i++){
            menu[i].addEventListener('mouseenter',function(){
                try{
                    sub[menuIdx].classList.remove('active');
                    
                    header.classList.add('active');
                    sub[i].classList.add('active');
                    menuIdx = i;
                }catch{
                    header.classList.remove('active');
                    sub[menuIdx].classList.remove('active');
                }
            });
        }
        for(let i=0;i<subMenu.length;i++){
            subMenu[i].addEventListener('mouseleave',function(){
                header.classList.remove('active');
            });
        }

        (function(){

            var doc = document.documentElement;
            var w = window;
            var prevScroll = w.scrollY || doc.scrollTop;
            var curScroll;
            var direction = 0;
            var prevDirection = 0;
            var header1 = document.querySelector('.header');
            var checkScroll = function() {
            
                    /*
                ** Find the direction of scroll
                ** 0 - initial, 1 - up, 2 - down
                */
                curScroll = w.scrollY || doc.scrollTop;
                if (curScroll > prevScroll) { 
                    //scrolled up
                    direction = 2;
                } else if (curScroll < prevScroll) { 
                    //scrolled down
                    direction = 1;
                }
    
                if (direction !== prevDirection) {
                    toggleHeader(direction, curScroll);
                }
                prevScroll = curScroll;
            };
    
    
            var toggleHeader = function(direction, curScroll) {
                if (direction === 2 && curScroll > 75) { 
                    header1.classList.add('hide');
                    prevDirection = direction;
    
                } else if (direction === 1) {
                    header1.classList.remove('hide');
                    prevDirection = direction;
    
                }
            };
            
            window.addEventListener('scroll', checkScroll);
        })();

        $('.search_icon').on({
            click:function(e){
            e.preventDefault();
            $('.search').show();
            $('.search_cancle_icon').show();
            }
        });
        $('.search_cancle_icon').on({
            click:function(){
            $('.search').hide();
            $('.search_cancle_icon').hide();
            }
        });
        
         // 엘리먼트 스크롤시 위로 올라오기

    function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
    }

    // function isElementRightToLeft(elem2, triggerDiff2) {
    //     const { right } = elem2.getBoundingClientRect();
    //     const { innerWidth } = window;
    //     return right > innerWidth + (triggerDiff2 || 0);
    // }
    
    function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
        })
    }

    // function handleScroll2() {
    //     const elems2 = document.querySelectorAll('.right-left-scroll');
    //     elems2.forEach(elem => {
    //     if (isElementRightToLeft(elem2, -20)) {
    //         elem2.style.opacity = "0";
    //         elem2.style.transform = 'translateX(70px)';
    //     } else {
    //         elem2.style.opacity = "1";
    //         elem2.style.transform = 'translateX(0px)';
    //     }
    //     })
    // }


    
    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('scroll', handleScroll2);

    //상담버튼

    $(document).ready(function(){ 
        var currentPosition = parseInt($(".floating_btn").css("top")); $(window).scroll(function() { 
        var position = $(window).scrollTop(); $(".floating_btn").stop().animate({"top":position+currentPosition+"px"},2500); }); 
    });

});