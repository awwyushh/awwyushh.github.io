document.addEventListener("DOMContentLoaded", () => {
  const toggleInput = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "latte";
  root.setAttribute("data-theme", savedTheme);
  toggleInput.checked = savedTheme === "mocha";

  toggleInput.addEventListener("change", () => {
    const newTheme = toggleInput.checked ? "mocha" : "latte";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
