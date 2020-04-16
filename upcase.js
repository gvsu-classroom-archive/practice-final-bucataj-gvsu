function addCSSRule(className, xform) {
  // from: https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/
  // from: https://love2dev.com/blog/css-text-transform/
  document.styleSheets[0].insertRule(`.${className} { text-transform: ${xform} }`, 0);
}

function upYourCases() {
  addCSSRule("allcaps", "uppercase");
  addCSSRule("upcase", "capitalize");
}

document.getElementById("decorate").onclick = upYourCases;

