document.addEventListener("DOMContentLoaded", () => {
  document.body.onclick = click;
});

click = event => {
  if (event.target.closest(".e-accordion__short")) {
    showAccordion(event.target);
  }
  if (event.target.closest(".onoffswitch")) {
    onoffswitch();
  }
};

showAccordion = target => {
  target.nextElementSibling.classList.toggle("history__hide");
};
