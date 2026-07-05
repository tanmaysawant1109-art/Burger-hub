console.log("🍔 Burger Hub Loaded Successfully");

// ================= NAVBAR =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.getElementById("nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================= SCROLL REVEAL =================

function revealSections(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// ================= LOADER =================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    },1500);

});
// ================= CART =================

let cartCount = 0;
let totalPrice = 0;

document.querySelectorAll(".order-btn").forEach(btn => {

    btn.dataset.added = "false";

    btn.addEventListener("click", () => {

        const price = parseInt(btn.dataset.price);

        if(btn.dataset.added === "false"){

            cartCount++;
            totalPrice += price;

            btn.dataset.added = "true";
            btn.innerText = "Remove";

        }else{

            cartCount--;
            totalPrice -= price;

            btn.dataset.added = "false";
            btn.innerText = "Order";

        }

        document.getElementById("cart-count").innerText = cartCount;
        document.getElementById("total-price").innerText = totalPrice;

    });

});

// ================= HEART =================

document.querySelectorAll(".heart").forEach(heart => {

    heart.addEventListener("click", () => {

        heart.innerHTML = heart.innerHTML === "🤍" ? "❤️" : "🤍";

    });

});

// ================= SEARCH =================

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", () => {

const value = search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card => {

const name = card.querySelector("h3").innerText.toLowerCase();

card.style.display = name.includes(value) ? "block" : "none";

});

});

}
// ================= QUANTITY =================

document.querySelectorAll(".quantity").forEach(quantity => {

let value = quantity.querySelector("span");

let count = 1;

quantity.querySelector(".plus").addEventListener("click", () => {

count++;

value.innerText = count;

});

quantity.querySelector(".minus").addEventListener("click", () => {

if(count > 1){

count--;

value.innerText = count;

}

});

});

// ================= POPUP =================

function showPopup(){

document.getElementById("popup").style.display = "flex";

}

function closePopup(){

document.getElementById("popup").style.display = "none";

}