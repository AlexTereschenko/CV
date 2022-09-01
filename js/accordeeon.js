const accBtn = body.querySelectorAll(".acc-btn");
const accArr = body.querySelectorAll(".bxs-up-arrow");
      

accBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.classList.toggle("close");
    })
});