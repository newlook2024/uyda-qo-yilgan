let search = document.querySelector('#search')



let scrollist = document.querySelector('#scroll-list')
let arrForScroll = [
    // Town scroll
    {
        "title": 'Town Scroll',

        "rasm": '/img/scrols/townscroll.webp',

        "text": `  Town scroll bu scroll odatda boshlovchilar uchun mo'ljallangan shaxarga teleport qilish
        vazifasini bajaradi. Boshlovchilar shaxri (beginers town)ni o'yinchilar T1 deb nomlashadi.`,

        "narxi" : `Sotib olish narxi: 1000gold`
    },
    // Explorers town scroll
    {
        "title": "Explorers Town Scroll",

        "rasm": "/img/scrols/Explorers_Town_Scroll.webp",

        "text": `Explorers town scroll bu ikkinchi shaharga teleport qilish uchun ishlatiladigan scroll. Ko'pchilik o'yinchilar ikkinchi shaharni t2(town 2) deb nomlashadi.`,

        "narxi" : `Sotib olish narxi: 2500 gold`
    },
    // Tracker scroll
    {
        "title": `Tracker Scroll`,
        "rasm": "/img/scrols/trackerscrol.png",
        "text": `Tracker Scroll bu hech qanday teleport scroll emas. Bu scroll faqatgina yo'nalish ko'rsatuvchi vazifani bajaradi. Masalan: Kimnidur qayerdaligini bilmoqchi bo'lsangiz tracker scrolldan foydalanishingiz mumkin. Tracker scroll aniq bir joyni ko'rsatmaydi. U faqatgina yo'nalish ko'rsatadi.`,
        "narxi" : `Sotib olish narxi: 4000gold`
    },
    //Return scroll
    {
        "title": `Return Scroll`,
        "rasm": `/img/scrols/returnscroll.png`,
        'text': `Return scroll: Bu scrolldan foydalanish orqali siz oxirgi marta qayerda Town scrolldan foydalangan bo'lsangiz yana o'sha joyga qaytishingiz mumkin. Masalan: Siz vampiredan T1 yoki T2 ga teleport town scrolldan foydalanib bordingiz. Agar siz return scrolldan foydalansangiz yana vampirega teleport qilasiz.`,
        "narxi" : `Sotib olish narxi: 2 Diamond`
    },
    // Destination Scroll
    {
        "title": `Destination Scroll`,
        "rasm": `/img/scrols/destination.png`,
        "text": `Destination Scroll: Bu scroll yordamida siz o'yindagi bir qancha joylarga teleport qilishingiz mumkin.`,
        "narxi" : `Sotib olish narxi: 5 Diamond`
    },
]

arrForScroll.forEach(function (item, index) {
    let li = document.createElement('div')

    li.innerHTML = `
    <div class="qobiq">
      <div class="townscrol" id="scroll">
         <div class="flex">
             <img class="scrol-img" src="${item.rasm}" alt="town scroll">
               <h1 class="townscroll-title">${item.title}</h1>
                  </div>
                  <svg class="chevron" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path fill="#ffffff"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
                    </div>
                    <p class="townscroll-text" id="scrol-text">
                        ${item.text} <br><br> <b class='narx'>${item.narxi}</b>
                    </p>
    </div>
    `;
    scrollist.appendChild(li)

    let qobiq = document.querySelectorAll(".qobiq")
    let txt = document.querySelectorAll("#scrol-text")
    let chevron = document.querySelectorAll(".chevron")

    // function islomjon(button, chevron, text, text1, chevron1) {
    //     button.addEventListener('click', function () {
    //         chevron.classList.toggle('rotate')
    //         // chevron1.classList.remove('rotate')
    //         text.classList.toggle('open')
    //         text1.classList.remove('open')
    //     })
    // }

    // islomjon(qobiq[index], chevron[index], txt[index], txt[index + 1])

    qobiq.forEach(function (item1, index1) {
        item1.addEventListener(`click`, function () {
            qobiq.forEach(function (btn, btnIndex) {
                // btn.classList.remove('active')
                txt[btnIndex].classList.remove('open')
                chevron[btnIndex].classList.remove('rotate')
            })
            // item1.classList.add('active')
            txt[index1].classList.add('open')
            chevron[index1].classList.add('rotate')
        })
    })

    // qobiq[index].addEventListener("click", function(){
    //     txt[index].classList.toggle('open')
    //     chevron[index].classList.toggle('rotate')
    // })
    search.addEventListener("input", function () {
        qobiq.forEach(function (item5, index) {
            if (item5.textContent.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) > -1) {
                item5.style.display = 'block'
            } else {
                item5.style.display = 'none'
            }
        })
















        
    })
})

