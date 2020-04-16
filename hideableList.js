function hasClass(element, className) {
  for (let i = 0; i < element.classList.length; i++) {
    if (element.classList[i] === className) {
      return true;
    }
  }
  return false;
}

function hider(hl) {
  let targetList = hl.children;

  let saveHeader = undefined;
  for (let i = 0; i < targetList.length; i++) {
    let target = targetList[i];
    if (hasClass(target, "hl-header")) {
      saveHeader = target;
      break;
    }
  }

  let disappearing = /^\u25BC/.test(saveHeader.innerText);

  // twist the triangle
  if (disappearing) {
    saveHeader.innerText = saveHeader.innerText.replace('\u25BC', '\u25B6');
  } else {
    saveHeader.innerText = saveHeader.innerText.replace('\u25B6', '\u25BC');
  }

  for (let i = 0; i < targetList.length; i++) {
    let target = targetList[i];
    if (!hasClass(target, "hl-header")) {
      // change the visibility
      if (disappearing) {
        target.style.display = "none";
      } else {
        target.style.display = "";
      }
    }
  }

}

function makeHideables() {
  hideables = document.getElementsByClassName("hideableList");

  for (let i = 0; i < hideables.length; i++) {
    let target = hideables[i];
    target.onclick = () => { hider(target) };
  }

  twistables = document.getElementsByClassName("hl-header");

  for (let i = 0; i < twistables.length; i++) {
    let target = twistables[i];
    target.innerText = '\u25BC' + target.innerText;
  }

}

makeHideables();

