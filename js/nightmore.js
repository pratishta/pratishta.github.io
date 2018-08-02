document.querySelector('[data-switch-contrast]').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
  console.log("in nightmode");
});