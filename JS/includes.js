document.addEventListener("DOMContentLoaded", function () {

  const basePath = window.location.pathname.split('/')[1]
    ? "/" + window.location.pathname.split('/')[1] + "/COMPONENTS/"
    : "/COMPONENTS/";

  document.querySelectorAll("[data-include]").forEach(el => {
    const file = el.getAttribute("data-include") + ".html";

    fetch(basePath + file)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load " + file);
        return res.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => console.error(err));
  });

});
