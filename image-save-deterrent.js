// Limit the save gesture to photos, including photos beneath a stretched card link.
function preventPhotoGesture(event) {
  if (event.target instanceof HTMLImageElement ||
      document.elementsFromPoint(event.clientX, event.clientY).some(element => element instanceof HTMLImageElement)) {
    event.preventDefault();
  }
}

document.addEventListener('contextmenu', preventPhotoGesture);
document.addEventListener('dragstart', preventPhotoGesture);
