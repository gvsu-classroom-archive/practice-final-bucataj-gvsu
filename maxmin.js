function appendAfter(element, target) {
  // from StackOverflow https://tinyurl.com/slvljt9
  // N.B. Doesn't work for a last element
  target.parentNode.insertBefore(element, target.nextSibling);
}

/****************************/

function doMath() {
  let inputFields = document.getElementById("input-list").children;

  let sum = 0;
  let cnt = 0;
  let minval = 0;
  let minloc = 0;
  let maxval = 0;
  let maxloc = 0;

  for (let i = 0; i < inputFields.length; i++) {
    thisValue = parseFloat(inputFields[i].value.trim());
    if (isNaN(thisValue)) {
      continue;
    }

    sum += thisValue;
    cnt++;

    if (cnt == 1 || thisValue < minval) {
      minval = thisValue;
      minloc = i;
    }

    if (cnt == 1 || thisValue > maxval) {
      maxval = thisValue;
      maxloc = i;
    }
  }

  document.getElementById("min").innerText = minval;
  document.getElementById("max").innerText = maxval;
  document.getElementById("average").innerText = sum / cnt;
}

document.getElementById("submit").onclick = doMath;

/****************************/

function addMore() {
  let inputList = document.getElementById("input-list");

  for (let i = 0; i < 10; i++) {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    inputList.appendChild(newInput);
  }
}

document.getElementById("more").onclick = addMore;

/****************************/

function addDeleters() {
  let inputFields = document.getElementById("input-list").children;
  for (let i = inputFields.length - 1; i >= 0; i--) {
    let inputField = inputFields[i];

    let xButton = document.createElement("button");
    xButton.innerText = "[X]";
    xButton.style.backgroundColor = "red";
    xButton.style.color = "white";

    // Using closure to capture which elements to delete
    function deleter() {
      inputField.remove();
      xButton.remove();
    }
    xButton.onclick = deleter;

    appendAfter(xButton, inputField);

  }
}

function addDeleteButton() {
  removeButton = document.createElement("button");
  removeButton.setAttribute("id", "delete");
  removeButton.innerText = "Delete";
  removeButton.onclick = addDeleters;

  appendAfter(removeButton, document.getElementById("more"));
}

addDeleteButton();

