// ฟังก์ชันเพื่อเพิ่มคลาส 'in-view' เมื่อ Section อยู่ใน viewport
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('in-view');
        }
    });
}

// ฟังก์ชันเพื่อจัดการการคลิกเมนู
function handleMenuClick(event) {
    document.querySelectorAll('.menu-link').forEach(link => {
        link.classList.remove('active'); // ลบคลาส active จากเมนูอื่น
    });
    event.target.classList.add('active'); // เพิ่มคลาส active ให้กับเมนูที่ถูกคลิก
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // ตรวจสอบทันทีที่โหลดหน้าเว็บ

// เพิ่ม event listener ให้กับลิงก์เมนูทั้งหมด
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', handleMenuClick);
});

// Get the popup elements
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const close = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Function to open popup with the clicked image
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImage.src = item.src;
    });
});

// Function to close the popup
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup when clicking outside of the image
popup.addEventListener('click', (e) => {
    if (e.target !== popupImage) {
        popup.style.display = 'none';
    }
});