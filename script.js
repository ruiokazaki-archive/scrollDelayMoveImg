window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let bgPosition = scrollTop / 12;
  window.setTimeout(() => {
    document.getElementById("bg").style.backgroundPosition =
      "center -" + bgPosition + "px";
  }, 150);
});
