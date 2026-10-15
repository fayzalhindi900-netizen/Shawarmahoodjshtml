// Begrüßung / Begrüßungs-Effekt beim Laden
document.addEventListener("DOMContentLoaded", function() {
console.log("مأكولات أبو العز - موقع جاهز وشغال بنجاح!");

// Kleiner visueller Effekt für die Menü-Preise beim Antippen
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
item.addEventListener('click', function() {
this.style.backgroundColor = '#2a2a2a';
setTimeout(() => {
this.style.backgroundColor = 'transparent';
}, 300);
});
});
});