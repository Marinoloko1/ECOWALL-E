document.addEventListener("DOMContentLoaded", () => {
  const closeButtons = document.querySelectorAll(".close-btn");

  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const content = e.target.closest(".redesS__content");
      if (content) {
        content.classList.add("temp-hide");
      }
    });
  });

  const cards = document.querySelectorAll(".redesS");
  cards.forEach((card) => {
    card.addEventListener("mouseleave", () => {
      const content = card.querySelector(".redesS__content");
      content.classList.remove("temp-hide");
    });
  });
});
