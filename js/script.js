document.addEventListener('DOMContentLoaded', function() {
    
    // 메인 배너의 버튼 클릭 이벤트
    const heroBtn = document.getElementById('hero-cta');
    
    if(heroBtn) {
        heroBtn.addEventListener('click', function() {
            alert('최근 전기 고지서를 준비해 주시면, 더욱 빠르고 정확한 용량 설계가 가능합니다.');
        });
    }

    // 내비게이션 바 스크롤 효과 (스크롤 내릴 때 그림자 추가)
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

});

// 햄버거 메뉴 클릭 동작 추가
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if(hamburger) {
        hamburger.addEventListener('click', function() {
            // 메뉴 창 열기/닫기
            navMenu.classList.toggle('active');
        });
    }
