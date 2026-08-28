// ===========================================================
// Click a video thumbnail -> replace it with a playing
// embedded YouTube iframe. Used on videos.html
// ===========================================================
document.addEventListener('click', (e) => {
  const frame = e.target.closest('.video-frame');
  if (!frame || frame.querySelector('iframe')) return;
  const id = frame.dataset.id;
  frame.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;
});

// Footer year, used on every page
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
