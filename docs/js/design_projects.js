document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".title-heading");
  const heading_title = document.querySelector(".heading_title");

  // ! Titles

  title.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(12)";
    cursor.style.mixBlendMode = "difference";
    cursor.style.boxShadow = "none";
  });

  title.addEventListener("mouseout", () => {
    cursor.style.transform = "none";
    cursor.style.mixBlendMode = "normal";
    cursor.style.boxShadow = "0px 0px 30px white";
  });

  //! First Intersection Observer for the headers text
  function handleIntersection(entries, observer) {
    //! Fade in the content box
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // heading_title.style.opacity = "1";
      } else {
        // heading_title.style.opacity = "0";
      }
    });
  }
  const observer1 = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  observer1.observe(heading_title);
});

//! Header Scrolling Carousel
const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

class DragScroll {
  constructor(obj) {
    this.el = document.querySelector(obj.el);
    this.wrap = this.el.querySelector(obj.wrap);
    this.items = this.el.querySelectorAll(obj.item);
    this.bar = this.el.querySelector(obj.bar);
    this.init();
  }

  init() {
    this.progress = 0;
    this.speed = 0;
    this.oldX = 0;
    this.x = 0;
    this.playrate = 0;

    this.bindings();
    this.events();
    this.calculate();
    this.raf();
  }

  bindings() {
    [
      "events",
      "calculate",
      "raf",
      "handleWheel",
      "move",
      "raf",
      "handleTouchStart",
      "handleTouchMove",
      "handleTouchEnd",
    ].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  calculate() {
    this.progress = 0;
    this.wrapWidth = this.items[0].clientWidth * this.items.length;
    this.wrap.style.width = `${this.wrapWidth}px`;
    this.maxScroll = this.wrapWidth - this.el.clientWidth;
  }

  handleWheel(e) {
    this.progress += e.deltaY;
    this.move();
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.dragging = true;
    this.startX = e.clientX || e.touches[0].clientX;
    this.el.classList.add("dragging");
  }

  handleTouchMove(e) {
    if (!this.dragging) return false;
    const x = e.clientX || e.touches[0].clientX;
    this.progress += (this.startX - x) * 2.5;
    this.startX = x;
    this.move();
  }

  handleTouchEnd() {
    this.dragging = false;
    this.el.classList.remove("dragging");
  }

  move() {
    this.progress = clamp(this.progress, 0, this.maxScroll);
  }

  events() {
    window.addEventListener("resize", this.calculate);
    window.addEventListener("wheel", this.handleWheel);

    this.el.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);

    window.addEventListener("mousedown", this.handleTouchStart);
    window.addEventListener("mousemove", this.handleTouchMove);
    window.addEventListener("mouseup", this.handleTouchEnd);
    document.body.addEventListener("mouseleave", this.handleTouchEnd);
  }

  raf() {
    this.x = lerp(this.x, this.progress, 0.1);
    this.playrate = this.x / this.maxScroll;

    this.wrap.style.transform = `translateX(${-this.x}px)`;
    this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;

    this.speed = Math.min(100, this.oldX - this.x);
    this.oldX = this.x;

    this.scale = lerp(this.scale, this.speed, 0.1);
    this.items.forEach((item) => {
      item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
      item.querySelector("img").style.transform = `scaleX(${
        1 + Math.abs(this.speed) * 0.004
      })`;
    });
  }
}

const scroll = new DragScroll({
  el: ".slider",
  wrap: ".slider-wrapper",
  item: ".slider-item",
  bar: ".slider-progress-bar",
});

const merch_scroll = new DragScroll({
  el: ".merch_slider",
  wrap: ".slider-wrapper",
  item: ".merch-slider-item",
  bar: ".slider-progress-bar",
});

const animateScroll = () => {
  requestAnimationFrame(animateScroll);
  scroll.raf();
};
animateScroll();

const animateScroll2 = () => {
  requestAnimationFrame(animateScroll2);
  merch_scroll.raf();
};
animateScroll2();
//! Header Scrolling End

//! Change cursor to drag when hover on headers

const slider = document.querySelector(".slider");
const cursoricondrag = document.getElementById("cursoricondrag");

slider.addEventListener("mouseover", () => {
  cursor.style.transform = "none";
  cursor.style.boxShadow = "none";
  cursor.classList.add("transparent");
  cursoricondrag.classList.add("active");
});

slider.addEventListener("mouseout", () => {
  cursor.classList.remove("transparent");
  cursor.style.boxShadow = "0px 0px 30px white";
  cursoricondrag.classList.remove("active");
});

//! Change cursor to drag when hover on merch

const merch_slider = document.querySelector(".merch_slider");

merch_slider.addEventListener("mouseover", () => {
  cursor.style.transform = "none";
  cursor.style.boxShadow = "none";
  cursor.classList.add("transparent");
  cursoricondrag.classList.add("active");
});

merch_slider.addEventListener("mouseout", () => {
  cursor.classList.remove("transparent");
  cursor.style.boxShadow = "0px 0px 30px white";
  cursoricondrag.classList.remove("active");
});
