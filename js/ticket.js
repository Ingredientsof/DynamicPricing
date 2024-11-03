
// 실시간

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timeSet').innerText = currentTime;
}

setInterval(updateTime, 1000);
updateTime();


// 페이지 접속 시간 카운트
//let startTime = Date.now();
//const timeSetElement = document.getElementById('timeSet');

//function updateTimeElapsed() {
//    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
//    const minutes = Math.floor(elapsedTime / 60); 
//    const seconds = elapsedTime % 60;
//
//    // 포맷: 00:00
//    timeSetElement.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//}

//setInterval(updateTimeElapsed, 1000);

// 카운트업
document.addEventListener("DOMContentLoaded", function () {
    let count = 1;
    const countUpElement = document.getElementById('countUp');
    const target = 999999;

    const countUpInterval = setInterval(function () {
        const increment = Math.floor(Math.random() * (100 - 10 + 1)) + 20;

        count += increment;

        countUpElement.textContent = Math.floor(count);

        if (count >= target) {
            clearInterval(countUpInterval);
            countUpElement.textContent = target;
        }
    }, 500);
});

setInterval(updateValue, 1000);


// 카운트업2
let currentValue = 19000;
const targetValue = 999999999999;
const increment = 1000;
const totalIncrements = 100;
const displayElement = document.getElementById('ticketValue');

function updateValue() {
    let increments = 0;

    const interval = setInterval(() => {
        if (currentValue < targetValue && increments < totalIncrements) {
            currentValue += increment;
            displayElement.textContent = currentValue;
            increments++;
        } else {
            clearInterval(interval);
        }
    }, 10);
}

setInterval(updateValue, 1000);


// 카운트 다운
let waitingNumber = 1034;

const waitingNumberElement = document.getElementById('CountDownWaiting');
const fadeImageElement = document.querySelector('.fade-image');


// 대기번호
setInterval(updateValue, 1000);

document.addEventListener('DOMContentLoaded', () => {
    let waitingNumber = 1034;

    const waitingNumberElement = document.getElementById('CountDownWaiting');
    const fadeImageElement = document.querySelector('.fade_image');
    const customAlert = document.getElementById('customAlert');
    const opacityAlert = document.getElementById('opacityAlert');
    const closeAlertButton = document.getElementById('closeAlert');
    const ticketValueElement = document.getElementById('ticketValue');
    const confirmYesButton = document.getElementById('confirmYes');
    const confirmNoButton = document.getElementById('confirmNo');

    // 대기번호 감소 함수
    function decreaseWaitingNumber() {
        if (waitingNumber > 0) {
            const randomDecrease = Math.floor(Math.random() * 100) + 10;
            waitingNumber -= randomDecrease;

            if (waitingNumber < 0) {
                waitingNumber = 0;
            }

            waitingNumberElement.textContent = waitingNumber;

            // 이미지 오퍼시티...
            fadeImageElement.style.opacity = 0.3;
        } else {
            clearInterval(intervalId);
            fadeImageElement.style.opacity = 1;
        }
    }

    // 이미지
    fadeImageElement.addEventListener('click', () => {
        if (fadeImageElement.style.opacity === '0.3') {
            customAlert.style.display = 'block';
        } else if (fadeImageElement.style.opacity === '1') {
            document.getElementById('currentTicketValue').textContent = currentValue;
            opacityAlert.style.display = 'block';
        }
    });

    // 닫기
    closeAlertButton.addEventListener('click', () => {
        customAlert.style.display = 'none';
    });

    // 예
    confirmYesButton.addEventListener('click', () => {
        const ticketValue = currentValue;
        alert(`구매가 완료되었습니다! 티켓 가격: ${ticketValue} 원`);
        opacityAlert.style.display = 'none';

        // 마참내...
        window.location.href = './WhatIs.html';
    });

    // 아니오
    confirmNoButton.addEventListener('click', () => {
        opacityAlert.style.display = 'none';
    });

    const intervalId = setInterval(decreaseWaitingNumber, 500);
});


// 나갔다오면 초기화

(document).ready(function() {
    $('#button1').val('');
});