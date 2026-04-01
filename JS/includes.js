const basePath = "/CJEVOH/components/";

async function includeHTML(el, file) {
  const res = await fetch(basePath + file);
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(el => {
    const file = el.getAttribute("data-include") + ".html";
    includeHTML(el, file);
  });
});