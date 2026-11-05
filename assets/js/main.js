(function () {
  "use strict";
  // Eröffnungsangebot endet am 30.11.2026 um 23:59 Uhr – danach normale Preise
  var ende = new Date("2026-12-01T00:00:00+01:00");
  if (new Date() >= ende) document.documentElement.classList.add("angebot-vorbei");

  // Menü auf dem Handy nach Klick schließen
  var menue = document.querySelector(".menue");
  if (menue) {
    menue.addEventListener("click", function (e) {
      if (e.target.closest("a")) menue.removeAttribute("open");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") menue.removeAttribute("open");
    });
  }

  // Besucherzählung mit GoatCounter: ohne Cookies, ohne IP-Speicherung, nur auf der echten Domain
  if (location.hostname === "facecolorconcept.de" || location.hostname === "www.facecolorconcept.de") {
    if (navigator.doNotTrack === "1") return;
    var p = "https://facecolorconcept.goatcounter.com/count?p=" + encodeURIComponent(location.pathname) +
      "&t=" + encodeURIComponent(document.title) +
      "&r=" + encodeURIComponent(document.referrer) + "&rnd=" + Math.random().toString(36).slice(2);
    var img = new Image();
    img.src = p;
  }
})();
