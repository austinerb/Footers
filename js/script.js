function footers() {
  var footerBtns = document.getElementsByClassName("footer-btns")[0].children;
  var so = document.getElementsByClassName("so")[0];
  var evernote = document.getElementsByClassName("evernote")[0];
  var linkedin = document.getElementsByClassName("linkedin")[0];

  for (var i = 0; i < footerBtns.length; i++) {
    footerBtns[i].addEventListener("click", function() {
      for (var x = 0; x < footerBtns.length; x++) {
        footerBtns[x].classList.remove("footer-btn-selected");
      }
      this.classList.add("footer-btn-selected");

      so.classList.remove("footer-show");
      evernote.classList.remove("footer-show");
      linkedin.classList.remove("footer-show");

      if (this.innerText == "Stack Overflow") {
        so.classList.add("footer-show");
      } else if (this.innerText == "Evernote") {
        evernote.classList.add("footer-show");
      } else if (this.innerText == "LinkedIn") {
        linkedin.classList.add("footer-show");
      }
    });
  }
};

footers();
