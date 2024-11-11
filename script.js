// Показати/Приховати контент
document.getElementById("toggle-content").addEventListener("click", function() {
    const content = document.getElementById("content");
    content.style.display = content.style.display === "none" ? "block" : "none";
});

// Таймер зворотного відліку до дедлайну
function startCountdown() {
    const deadline = new Date("December 14, 2024 23:59:59").getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            document.getElementById("timer-display").innerHTML = "Дедлайн завершено!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer-display").innerHTML = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
    }, 1000);
}

startCountdown();

// Функція для показу акційного сповіщення один раз
function showPromoModal() {
    if (!localStorage.getItem("promoShown")) {
        document.getElementById("promo-modal").style.display = "block";
        localStorage.setItem("promoShown", "true");
    }
}

// Функція для закриття акційного сповіщення
function closePromoModal() {
    document.getElementById("promo-modal").style.display = "none";
}

// Виклик функції після завантаження сторінки
window.onload = function() {
    showPromoModal();
};

// Спливаюче вікно при виході курсора за межі сторінки
document.addEventListener("mouseleave", function() {
    alert("Верніть курсор на сайт!");
});


// Показати/приховати елемент з плавною появою та затемненням
document.getElementById("fade-in-btn").addEventListener("click", function() {
    const content = document.getElementById("more-content");
    const overlay = document.getElementById("overlay");

    if (content.classList.contains("show")) {
        content.classList.remove("show");
        overlay.style.display = "none";
    } else {
        content.classList.add("show");
        overlay.style.display = "block";
    }
});

// Закрити плавно з’явлений контент при натисканні на затемнений фон
document.getElementById("overlay").addEventListener("click", function() {
    const content = document.getElementById("more-content");
    content.classList.remove("show");
    this.style.display = "none";
});

// Показати діалогове вікно
document.getElementById("dialog-btn").addEventListener("click", function() {
    document.getElementById("dialog-modal").style.display = "block";
});

// Закрити діалогове вікно
function closeDialog() {
    document.getElementById("dialog-modal").style.display = "none";
}

// Спливаюче вікно при виході за межі сторінки
document.addEventListener("mouseleave", function() {
    if (!localStorage.getItem("exitPopupShown")) {
        alert("Не забувайте про нашу акцію! Знижка на заняття до кінця місяця.");
        localStorage.setItem("exitPopupShown", "true");
    }
});


        // Функція для прокручування до верху сторінки
        function topFunction() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
		
