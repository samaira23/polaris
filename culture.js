document.addEventListener("DOMContentLoaded", function () {
    // Toggle active state for buttons
    const toggleActive = (buttons, activeButton) => {
        buttons.forEach(button => button.classList.remove("active"));
        activeButton.classList.add("active");
    };

    // Veg / Non-Veg buttons
    const vegButton = document.querySelector(".veg");
    const nonVegButton = document.querySelector(".non-veg");
    const vegButtons = [vegButton, nonVegButton];

    vegButtons.forEach(button => {
        button.addEventListener("click", () => toggleActive(vegButtons, button));
    });

    // Architecture buttons
    const architectureYesButton = document.querySelector(".architecture-yes");
    const architectureNoButton = document.querySelector(".architecture-no");
    const architectureButtons = [architectureYesButton, architectureNoButton];

    architectureButtons.forEach(button => {
        button.addEventListener("click", () => toggleActive(architectureButtons, button));
    });

    // History buttons
    const historyYesButton = document.querySelector(".history-yes");
    const historyNoButton = document.querySelector(".history-no");
    const historyButtons = [historyYesButton, historyNoButton];

    historyButtons.forEach(button => {
        button.addEventListener("click", () => toggleActive(historyButtons, button));
    });

    // Music buttons
    const musicYesButton = document.querySelector(".music-yes");
    const musicNoButton = document.querySelector(".music-no");
    const musicButtons = [musicYesButton, musicNoButton];

    musicButtons.forEach(button => {
        button.addEventListener("click", () => toggleActive(musicButtons, button));
    });

    // Spiritual buttons
    const spiritualYesButton = document.querySelector(".spiritual-yes");
    const spiritualNoButton = document.querySelector(".spiritual-no");
    const spiritualButtons = [spiritualYesButton, spiritualNoButton];

    spiritualButtons.forEach(button => {
        button.addEventListener("click", () => toggleActive(spiritualButtons, button));
    });

    // Form submission
    const form = document.getElementById("preferences-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Gather form data
        const dietaryPreferences = document.getElementById("dietary-preferences").value;
        const transportPreferences = document.getElementById("transport-preferences").value;

        const preferences = {
            dietary: dietaryPreferences,
            transport: transportPreferences,
            veg: vegButton.classList.contains("active"),
            architecture: architectureYesButton.classList.contains("active"),
            history: historyYesButton.classList.contains("active"),
            music: musicYesButton.classList.contains("active"),
            spiritual: spiritualYesButton.classList.contains("active"),
        };

        console.log("User Preferences:", preferences);
        alert("Preferences submitted! Check the console for details.");
    });
});