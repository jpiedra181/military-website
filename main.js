const openModal_1 = document.querySelector(".open-modal-1")
const openModal_2 = document.querySelector(".open-modal-2")
const openModal_3 = document.querySelector(".open-modal-3")
const openModal_4 = document.querySelector(".open-modal-4")
const openModal_5 = document.querySelector(".open-modal-5")
const openModal_6 = document.querySelector(".open-modal-6")
const openModal_7 = document.querySelector(".open-modal-7")
const openModal_8 = document.querySelector(".open-modal-8")
const modal_1 = document.getElementById("modal-1")
const modal_2 = document.getElementById("modal-2")
const modal_3 = document.getElementById("modal-3")
const modal_4 = document.getElementById("modal-4")
const modal_5 = document.getElementById("modal-5")
const modal_6 = document.getElementById("modal-6")
const modal_7 = document.getElementById("modal-7")
const modal_8 = document.getElementById("modal-8")
const closeModal_1 = document.getElementById("closeModal-1")
const closeModal_2 = document.getElementById("closeModal-2")
const closeModal_3 = document.getElementById("closeModal-3")
const closeModal_4 = document.getElementById("closeModal-4")
const closeModal_5 = document.getElementById("closeModal-5")
const closeModal_6 = document.getElementById("closeModal-6")
const closeModal_7 = document.getElementById("closeModal-7")
const closeModal_8 = document.getElementById("closeModal-8")

const openMenuMobile = document.querySelector(".open-menu-mobile")
const modalMenu = document.getElementById("modal-mobile-menu")
const closeMenuMobile = document.getElementById("closeModal-menu")
const menuLinks = document.querySelectorAll(".menu-mobile a")

// Modal Menu mobile
openMenuMobile.addEventListener("click", () => {
    modalMenu.classList.remove("hidden")
})

// Close modal
closeMenuMobile.addEventListener("click", () => {
    modalMenu.classList.add("hidden")
})

// Close modal when clicking any menu link
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        modalMenu.classList.add("hidden")
    })
})

// Optional: close modal if clicking outside modal content
modalMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay-mobile")) {
        modalMenu.classList.add("hidden")
    }
})

// openMenuMobile.addEventListener("click", () => {
//     scrollPosition = window.scrollY
//     modalMenu.classList.remove("hidden")
//     modalMenu.scrollIntoView({ behavior: "smooth", block: "center" })
// })

// closeMenuMobile.addEventListener("click", () => {
//     modalMenu.classList.add("hidden")
//     window.scrollTo({ top: scrollPosition, behavior: "smooth" })
// })

let scrollPosition = 0

// Modal 1
openModal_1.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_1.classList.remove("hidden")
    modal_1.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_1.addEventListener("click", () => {
    modal_1.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 2
openModal_2.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_2.classList.remove("hidden")
    modal_2.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_2.addEventListener("click", () => {
    modal_2.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 3
openModal_3.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_3.classList.remove("hidden")
    modal_3.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_3.addEventListener("click", () => {
    modal_3.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 4
openModal_4.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_4.classList.remove("hidden")
    modal_4.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_4.addEventListener("click", () => {
    modal_4.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 5
openModal_5.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_5.classList.remove("hidden")
    modal_5.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_5.addEventListener("click", () => {
    modal_5.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 6
openModal_6.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_6.classList.remove("hidden")
    modal_6.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_6.addEventListener("click", () => {
    modal_6.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 7
openModal_7.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_7.classList.remove("hidden")
    modal_7.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_7.addEventListener("click", () => {
    modal_7.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Modal 8
openModal_8.addEventListener("click", () => {
    scrollPosition = window.scrollY
    modal_8.classList.remove("hidden")
    modal_8.scrollIntoView({ behavior: "smooth", block: "center" })
})

closeModal_8.addEventListener("click", () => {
    modal_8.classList.add("hidden")
    window.scrollTo({ top: scrollPosition, behavior: "smooth" })
})

// Abrir el modal 1
// openBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         modal.classList.remove("hidden")
//         modal.scrollIntoView({ behavior: "smooth", block: "center" })
//     })
// })

// Cerrar el modal
// closeBtn.addEventListener("click", () => {
//     modal.classList.add("hidden")
// })

// También cerrar al hacer clic fuera del modal
// modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         modal.classList.add("hidden")
//     }
// })
