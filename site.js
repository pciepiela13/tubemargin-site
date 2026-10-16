/* Fills prices and placeholders from TM_SITE (site/config.js). Pages without it keep their own text. */
(function () {
  var c = window.TM_SITE || {};
  document.querySelectorAll("[data-price]").forEach(function (e) { e.textContent = c[e.dataset.price] || ""; });
  var live = c.cwsUrl && c.cwsUrl.indexOf("http") === 0;
  document.querySelectorAll("[data-cws]").forEach(function (e) {
    if (live) { e.href = c.cwsUrl; }
    else { e.removeAttribute("href"); e.setAttribute("aria-disabled", "true"); e.textContent = "Coming soon to Chrome"; e.style.cursor = "default"; e.style.opacity = "0.75"; }
  });
  document.querySelectorAll("[data-email]").forEach(function (e) { e.href = "mailto:" + c.supportEmail; e.textContent = c.supportEmail; });
  document.querySelectorAll("[data-legal]").forEach(function (e) { e.textContent = c.legalEntity || ""; });
  var y = document.getElementById("yr"); if (y) y.textContent = new Date().getFullYear();
})();
