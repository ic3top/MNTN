document.addEventListener("DOMContentLoaded", () => {
    // smooth scroll
    const link = document.querySelector(".promo__scroll");
    const navigators = document.querySelectorAll(".navigator__item");


    link.addEventListener("click", clickHandler);
    navigators.forEach(el => el.addEventListener("click", clickHandler));


    function clickHandler(e) {
        e.preventDefault();
        const href = this.dataset.href || this.getAttribute("href");
        console.log(href);
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    // navigator
    const navigatorBar = document.querySelector(".navigator__bar");
    const docHeight = (Math.max( document.body.scrollHeight,document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight,document.documentElement.offsetHeight ));
    const [...navigatorItems] = document.querySelectorAll(".navigator__item");

    function resetStyle () {
        navigatorItems.forEach(el => el.style.transform = "");
    }
    function setScale (num) {
        if (num < 25) {
            resetStyle();

            navigatorItems[0].style.transform = "scale(1.4)";
        } else if (num < 60) {
            resetStyle();

            navigatorItems[1].style.transform = "scale(1.4)";
        } else if (num < 75) {
            resetStyle();

            navigatorItems[2].style.transform = "scale(1.4)";
        } else {
            resetStyle();

            navigatorItems[3].style.transform = "scale(1.4)";
        }
    }
    function getHeightPercent() {
        let percent = ((window.scrollY + window.innerHeight) * 100 / docHeight);
        setScale(percent);
        return percent;
    }

    function changeBar () {
        navigatorBar.style.height = `${getHeightPercent()}%`;
    }

    setInterval(changeBar, 10);

    // hamburger
    const e = document.querySelector(".hamburger"),
          t = document.querySelector(".menu"),
          r = document.querySelector(".menu__close");
    e.addEventListener("click", () => {
        t.classList.add("active"), o.style.overflowY = "hidden";
    }), r.addEventListener("click", () => {
        t.classList.remove("active"), o.style.overflowY = "visible";
    });
})