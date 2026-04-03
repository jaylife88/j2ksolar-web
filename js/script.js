// HTML 문서가 모두 로드된 후 실행되도록 설정
document.addEventListener('DOMContentLoaded', function() {
    
    // 문의하기 버튼 기능 예시
    const inquiryBtn = document.getElementById('inquiry-btn');
    
    if(inquiryBtn) {
        inquiryBtn.addEventListener('click', function() {
            alert('고객님의 전기 고지서를 준비해주세요. 곧 맞춤형 컨설팅을 도와드리겠습니다!');
        });
    }

});