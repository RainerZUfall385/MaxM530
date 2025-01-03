<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Tabs auswählen
    const tabButtons = document.querySelectorAll(".slider-tabs .tab-button");

    const sliderA = document.querySelector(".sliderA");
    const sliderB = document.querySelector(".sliderB");

    if (!sliderA || !sliderB) {
      console.error("Slider konnten nicht gefunden werden. Bitte überprüfe die CSS-Klassen.");
      return;
    }

    sliderA.style.display = "block";
    sliderB.style.display = "none";

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Aktiven Tab hervorheben
        document.querySelector(".slider-tabs .tab-button.active").classList.remove("active");
        button.classList.add("active");

        const selectedSlider = button.getAttribute("data-slider");
        if (selectedSlider === "sliderA") {
          sliderA.style.display = "block";
          sliderB.style.display = "none";
        } else if (selectedSlider === "sliderB") {
          sliderA.style.display = "none";
          sliderB.style.display = "block";
        }
      });
    });
  });
</script>
