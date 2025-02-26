document.addEventListener("DOMContentLoaded", function () {
    const points = document.querySelectorAll(".points div");
    const bannerImage = document.querySelector(".top-0.inset-x-0.h-full");

    const gradientClasses = [
        "from-slate-300", "via-slate-100", "to-transparent",
        "from-blue-400", "via-blue-200",
        "from-green-400", "via-green-200",
        "from-red-400", "via-red-200"
    ];

    const gradients = [
        ["from-slate-300", "via-slate-100", "to-transparent"],  
        ["from-blue-400", "via-blue-200", "to-transparent"],   
        ["from-green-400", "via-green-200", "to-transparent"], 
        ["from-red-400", "via-red-200", "to-transparent"]     
    ];

    points.forEach((point, index) => {
        point.addEventListener("click", function () {
            // Önce tüm noktaları gri yaptık ve tekrar tıklanabilir hale getirdik.
            points.forEach(p => {
                p.classList.remove("bg-custom-red");
                p.classList.add("bg-custom-grey", "hover:cursor-pointer");
            });

            // Tıklanan noktayı kırmızı yaptık ve tıklanamaz hale getirdik.
            this.classList.remove("bg-custom-grey", "hover:cursor-pointer");
            this.classList.add("bg-custom-red");

            // Önceki gradient sınıflarını temizledik
            bannerImage.classList.remove(...gradientClasses);

            // Yeni gradient sınıflarını ekledik
            bannerImage.classList.add(...gradients[index]);
        });
    }); 
});

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const closeBtn = document.querySelector('#mobile-menu button') // X butonunu seçiyoruz

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')

        // Menü açıldığında body'nin scroll'ını engelle
        if (mobileMenu.classList.contains('flex')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto' // Menü kapandığında scroll'ı geri getir
        }
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    closeBtn.addEventListener('click', toggleMenu) // Sadece X butonuna tıklanınca menüyü kapat
}

document.addEventListener('DOMContentLoaded', initApp)

