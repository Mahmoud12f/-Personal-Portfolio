const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 50) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// ================= المود ==============
const themeButton = document.getElementById("theme-toggle-button");
const htmlElement = document.documentElement;
themeButton.addEventListener(`click`, function () {
  htmlElement.classList.toggle("dark");
});
// ===================== معرض المشريع =============
const filterButtons = document.querySelectorAll(".portfolio-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white"
      );
      btn.classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300"
      );
    });

    button.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white"
    );
    button.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300"
    );
    const filterValue = button.getAttribute("data-filter");
    portfolioItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (filterValue === "all" || category === filterValue) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// =================== التقليب بين اراء العملاء ==================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("testimonials-carousel");
  const cards = document.querySelectorAll(".testimonial-card");
  const nextBtn = document.getElementById("next-testimonial");
  const prevBtn = document.getElementById("prev-testimonial");

  let index = 0;
 
  function moveCarousel() {
    const cardWidth = cards[0].offsetWidth;
    carousel.style.transform = `translateX(${index * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < cards.length - 3) {
      index++;
      moveCarousel();
    } else {
      index = 0;
      moveCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      moveCarousel();
    } else {
      index = cards.length - 3;
      moveCarousel();
    }
  });
});

//====================== اظهار قائمة تخصيص المظهر =====================
const settingsBut = document.getElementById("settings-toggle");
const settingsSidebar = document.getElementById("settings-sidebar");
settingsBut.addEventListener(`click`, function () {
  settingsSidebar.classList.toggle("translate-full");
  settingsSidebar.classList.toggle("translate-x-full");
});

// ================== تغير الوان الخط ===================
const butColor1 = document.querySelectorAll(".but-color");

const stylecolor = document.documentElement.style;

butColor1.forEach(button => {
  button.addEventListener(`click`, () => {
    const colorP = button.getAttribute(`data-color-p`);
    const colorS = button.getAttribute(`data-color-s`);
    const colorA = button.getAttribute(`data-color-a`);

    stylecolor.setProperty(`--color-primary`, colorP);
    stylecolor.setProperty(`--color-secondary`, colorS);
    stylecolor.setProperty(`--color-accent`, colorA);
  });
});

// ====================== تغير نوع الخط ========================

const butfont = document.querySelectorAll(".font-option");
const StyleFont = document.documentElement.style;

butfont.forEach(btn => {
  btn.addEventListener("click", () => {
    
    const fontName = btn.getAttribute("data-font");

    
    StyleFont.setProperty("--default-font-family", fontName);

  });
});
