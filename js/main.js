window.addEventListener("DOMContentLoaded", () => {
    const renderCart = (users) => {
        const jsList = document.querySelector("#js-cart");

        if (!jsList || !users || users.length === 0) {
            if (jsList) jsList.innerHTML = "Пусто";
            return;
        }

        jsList.innerHTML = "";

        users.forEach(item => {
            jsList.insertAdjacentHTML("beforeend", `
                <li data-aos="fade-up" data-aos-duration="2000" class="flex flex-col items-center gap-4">
                    <h4 class="text-2xl font-extrabold text-center bg-clip-text text-transparent 
                    bg-gradient-to-r from-[#8d9cf4] via-[#7bcdd1] to-[#fefefe] 
                    animate-gradientText drop-shadow-lg">
                        ${item.name}
                    </h4>
                </li>

                <li data-aos="fade-up" data-aos-duration="2000" class="border border-white/40 rounded-xl px-10 py-3 bg-white/10 
                    backdrop-blur-md shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <a href="https://t.me/${item.telegram}" target="_blank"
                        class="flex items-center gap-4 text-white text-lg font-medium">
                        <img src="./svg/telegram-paper-airplane-apps-svgrepo-com.svg" alt="Telegram" class="w-10 h-10" />
                        <div class="w-[1px] h-6 bg-white/40 mx-10"></div>
                        <span class="text-white font-semibold drop-shadow-md">Телеграм</span>
                    </a>
                </li>

                <li data-aos="fade-up" data-aos-duration="2000" class="border border-white/40 rounded-xl px-10 py-3 bg-white/10 
                    backdrop-blur-md shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <a href="https://www.instagram.com/${item.ins}/" target="_blank"
                        class="flex items-center gap-4 text-white text-lg font-medium">
                        <img src="./svg/instagram-1-svgrepo-com.svg" alt="Instagram" class="w-10 h-10" />
                        <div class="w-[1px] h-6 bg-white/40 mx-10"></div>
                        <span class="text-white font-semibold drop-shadow-md">Инстаграм</span>
                    </a>
                </li>

                <li data-aos="fade-up" data-aos-duration="2000" class="border border-white/40 rounded-xl px-10 py-3 bg-white/10 
                    backdrop-blur-md shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <a href="tel:${item.telNumber}" class="flex items-center gap-4 text-white text-lg font-medium">
                        <img src="./svg/telephone-call-mic-svgrepo-com.svg" alt="Телефон" class="w-10 h-10" />
                        <div class="w-[1px] h-6 bg-white/40 mx-10"></div>
                        <span class="text-white font-semibold drop-shadow-md">${item.telNumber}</span>
                    </a>
                </li>

                <li data-aos="fade-up" data-aos-duration="2000" class="border border-white/40 rounded-xl px-10 py-3 bg-white/10 
                    backdrop-blur-md shadow-md hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <button data-id="${item.id}" class="js-open-map flex items-center gap-4 text-white text-lg font-medium">
                        <img src="./svg/address.svg" alt="Адрес" class="w-10 h-10" />
                        <div class="w-[1px] h-6 bg-white/40 mx-10"></div>
                        <span class="text-white font-semibold drop-shadow-md">${item.address}</span>
                    </button>
                </li>
            `);
        });

        // === ПОДКЛЮЧАЕМ ОБРАБОТЧИКИ КНОПОК ===
        document.querySelectorAll(".js-open-map").forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                const user = users.find(u => u.id == id);

                if (!user) return;

                const url = `https://www.google.com/maps?q=${user.lat},${user.lon}`;
                window.open(url, "_blank");
            });
        });
    };

    renderCart(users);

    const buttonShare = () => {
        const button = document.querySelector("#js-share")
        button.addEventListener("click" , () => {
            if(navigator.share){
                navigator.share({
                    title: "Моя Визитка",
                    text: "Подельиться ссылкой : PuBG",
                    url: "https://vladislav-jpg97.github.io/Business-card/"
                })

            }
            else{
                alert("Ваш браузер не поддерживает функцию")
            }
        })
    }
    buttonShare()
});
