$(document).ready(function() {
    let currentPage = 0;
    const pages = $('.page');
    const totalPages = pages.length;

    $(window).on('wheel', function(event) {
        if (event.originalEvent.deltaY > 0) {
            if (currentPage < totalPages - 1) {
                currentPage++;
            }
        } else {
            if (currentPage > 0) {
                currentPage--;
            }
        }

        const pageHeight = $(window).height();
        const scrollPosition = currentPage * pageHeight;

        $('html, body').stop().animate({ scrollTop: scrollPosition }, 30, 'linear');
        event.preventDefault(); 
    });

    $('#goTop').on('click', function() {
        $('html, body').stop().animate({ scrollTop: 0 }, 5, 'linear');
    });
});

// 나갔다오면 초기화
(document).ready(function() {
    $('#button1').val('');
});