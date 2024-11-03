

// 버튼 활성화

$(function(){
    const requiredText = ["asdfgh", "ASDFGH", "ㅁㄴㅇㄹ호"] ;

    $("#button1").on('input', function(){
        const inputValue = $("#button1").val();

        if (requiredText.includes(inputValue)) {
            $("#input_text_check").attr("disabled", false);
        } else {
            $("#input_text_check").attr("disabled", true);
        }
    });
});

 // 페이지 이동

$("#input_text_check").on('click', function() {
    window.location.href = './ticket.html';
});

// 엔터쳐서 이동
$(document).ready(function() {
    $('#button1').keypress(function(event) {
        if (event.which === 13) {
            event.preventDefault(); 
            if (!$("#input_text_check").is(':disabled')) { 
                $('#input_text_check').click();
            }
        }
    });
});

// 포커스시 플레이스 홀더 지우기
$(document).ready(function() {
    $('#button1').focus(function() {
        $(this).attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', '문자를 입력해주세요.');
    });
});

// 나갔다오면 초기화
(document).ready(function() {
    $('#button1').val('');
});
