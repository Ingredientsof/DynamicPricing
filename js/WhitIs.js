$(document).ready(function() {
    let currentPage = 0;
    const pages = $('.page');
    const totalPages = pages.length;

    $(window).on('wheel', function(event) {
        if (event.originalEvent.deltaY > 0) {
            // 아래로 스크롤
            if (currentPage < totalPages - 1) {
                currentPage++;
                $('html, body').animate({
                    scrollTop: $(pages[currentPage]).offset().top
                }, 500);
            }
        } else {
            // 위로 스크롤
            if (currentPage > 0) {
                currentPage--;
                $('html, body').animate({
                    scrollTop: $(pages[currentPage]).offset().top
                }, 500);
            }
        }
        event.preventDefault(); // 기본 스크롤 방지
    });

    // 마지막 페이지에서 스크롤을 자유롭게 허용
    $(window).on('scroll', function() {
        if (currentPage === totalPages - 1) {
            // 마지막 페이지에서는 스크롤을 자유롭게 할 수 있도록 설정
            const scrollTop = $(this).scrollTop();
            const lastPageOffset = $(pages[currentPage]).offset().top;
            const lastPageHeight = $(pages[currentPage]).height();
            const windowHeight = $(window).height();

            // 스크롤이 마지막 페이지의 범위를 넘어가면 그대로 두기
            if (scrollTop < lastPageOffset) {
                $(this).scrollTop(lastPageOffset);
            } else if (scrollTop > lastPageOffset + lastPageHeight - windowHeight) {
                // 마지막 페이지의 끝에서 더 이상 스크롤하지 않도록
                $(this).scrollTop(lastPageOffset + lastPageHeight - windowHeight);
            }
        }
    });
});


// 나갔다오면 초기화
(document).ready(function() {
    $('#button1').val('');
});