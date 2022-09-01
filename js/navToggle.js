const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      header = body.querySelector('header'),
      toggle = body.querySelector(".toggle"),
      navBtns = body.querySelectorAll(".nav-link");
      

navBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        sidebar.classList.add("close");
        header.classList.add("close");
    })
});

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    header.classList.toggle("close");
})

window.addEventListener("resize", () => {
    if (window.innerWidth < 620) {
        sidebar.classList.add("close");
        header.classList.add("close");
    } else {
        sidebar.classList.remove("close");
        header.classList.remove("close");
    }
  });