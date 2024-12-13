document.addEventListener('contextmenu', (event) => {
  if (!event.target.matches('input')) {
    event.preventDefault();
  }
});

document.addEventListener('copy', (event) => {
  if (!event.target.matches('input')) {
    event.preventDefault();
  }
});

document.addEventListener('selectstart', (event) => {
  if (!event.target.matches('input')) {
    event.preventDefault();
  }
});

document.addEventListener('mouseup', (event) => {
  if (!event.target.matches('input')) {
    window.getSelection().removeAllRanges();
  }
});

document.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode || event.which;

  if (
    !event.target.matches('input') &&
    ((event.ctrlKey && keyCode === 67) ||
      (event.ctrlKey && keyCode === 86) ||
      (event.ctrlKey && keyCode === 85) ||
      (event.ctrlKey && keyCode === 83) ||
      (event.ctrlKey && keyCode === 80) ||
      (event.metaKey && keyCode === 79) ||
      (event.metaKey && keyCode === 73) ||
      (event.metaKey && keyCode === 74) ||
      (event.shiftKey && keyCode === 123) ||
      (event.altKey && keyCode === 115) ||
      (event.altKey && keyCode === 82) ||
      event.keyCode === 123)
  ) {
    event.preventDefault();
  }
});

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  img.ondragstart = () => false;
});
