let serial = 0;

// Triangle Area Calculation

document.getElementById("triangle-btn").addEventListener("click", function () {
  const name = "Triangle";
  const triangleB = getFieldValue("triangle-b");
  const triangleH = getFieldValue("triangle-h");
  if (isNaN(triangleB) || isNaN(triangleH)) {
    alert("Please Enter a Number");
  } else if (triangleB < 0 || triangleH < 0) {
    alert("Please enter a Positive Number");
  } else {
    serial += 1;
    triangleArea = 0.5 * triangleB * triangleH;
    displayData(name, triangleArea);
    const triangleDisplayValue = document.getElementById(
      "triangle-value-display"
    );
    triangleDisplayValue.style.display = "block";
    setInnerText(triangleB, "display-triangle-b");
    setInnerText(triangleB, "display-triangle-h");
  }
});

// Triangle Section Random Color

document
  .getElementById("triangle-section")
  .addEventListener("mouseenter", function () {
    getColor("triangle-section");
  });

// Rectangle Area Calculation

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const name = "Rectangle";
  const rectangleW = getFieldValue("rectangle-w");
  const rectangleL = getFieldValue("rectangle-l");
  if (isNaN(rectangleW) || isNaN(rectangleL)) {
    alert("Please Enter a Number");
  } else if (rectangleW < 0 || rectangleL < 0) {
    alert("Please enter a Positive Number");
  } else {
    serial += 1;
    rectangleArea = rectangleW * rectangleL;
    displayData(name, rectangleArea);
    const rectangleDisplayValue = document.getElementById(
      "rectangle-value-display"
    );
    rectangleDisplayValue.style.display = "block";
    setInnerText(rectangleW, "display-rectangle-w");
    setInnerText(rectangleL, "display-rectangle-l");
  }
});

// Rectangle Section Random Color

document
  .getElementById("rectangle-section")
  .addEventListener("mouseenter", function () {
    getColor("rectangle-section");
  });

// Parallelogram Area Calculation

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const name = "Parallelogram";
    const parallelogramB = getFieldValue("parallelogram-b");
    const parallelogramH = getFieldValue("parallelogram-h");
    if (isNaN(parallelogramB) || isNaN(parallelogramH)) {
      alert("Please Enter a Number");
    } else if (parallelogramB < 0 || parallelogramH < 0) {
      alert("Please enter a Positive Number");
    } else {
      serial += 1;
      parallelogramArea = parallelogramB * parallelogramH;
      displayData(name, parallelogramArea);
      const parallelogramDisplayValue = document.getElementById(
        "parallelogram-value-display"
      );
      parallelogramDisplayValue.style.display = "block";
      setInnerText(parallelogramB, "display-parallelogram-b");
      setInnerText(parallelogramH, "display-parallelogram-h");
    }
  });

// Parallelogram Section Random Color

document
  .getElementById("parallelogram-section")
  .addEventListener("mouseenter", function () {
    getColor("parallelogram-section");
  });

// Rhombus Area Calculation

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const name = "Rhombus";
  const rhombusH1 = getFieldValue("rhombus-h-1");
  const rhombusH2 = getFieldValue("rhombus-h-1");
  if (isNaN(rhombusH1) || isNaN(rhombusH2)) {
    alert("Please Enter a Number");
  } else if (rhombusH1 < 0 || rhombusH2 < 0) {
    alert("Please enter a Positive Number");
  } else {
    serial += 1;
    rhombusArea = 0.5 * rhombusH1 * rhombusH2;
    displayData(name, rhombusArea);
    const parallelogramDisplayValue = document.getElementById(
      "rhombus-value-display"
    );
    parallelogramDisplayValue.style.display = "block";
    setInnerText(rhombusH1, "display-rhombus-h1");
    setInnerText(rhombusH2, "display-rhombus-h2");
  }
});

// Rhombus Section Random Color

document
  .getElementById("rhombus-section")
  .addEventListener("mouseenter", function () {
    getColor("rhombus-section");
  });

// Pentagon Area Calculation

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const name = "Pentagon";
  const pentagonP = getFieldValue("pentagon-p");
  const pentagonB = getFieldValue("pentagon-b");
  if (isNaN(pentagonP) || isNaN(pentagonB)) {
    alert("Please Enter a Number");
  } else if (pentagonP < 0 || pentagonB < 0) {
    alert("Please enter a Positive Number");
  } else {
    serial += 1;
    pentagonArea = 0.5 * pentagonP * pentagonB;
    displayData(name, pentagonArea);
    const parallelogramDisplayValue = document.getElementById(
      "pentagon-value-display"
    );
    parallelogramDisplayValue.style.display = "block";
    setInnerText(pentagonP, "display-pentagon-p");
    setInnerText(pentagonB, "display-pentagon-b");
  }
});

// Pentagon Section Random Color

document
  .getElementById("pentagon-section")
  .addEventListener("mouseenter", function () {
    getColor("pentagon-section");
  });

// Ellipse Area Calculation

document.getElementById("ellipse-btn").addEventListener("click", function () {
  const name = "Ellipse";
  const ellipseA = getFieldValue("ellipse-a");
  const ellipseB = getFieldValue("ellipse-b");
  if (isNaN(ellipseA) || isNaN(ellipseB)) {
    alert("Please Enter a Number");
  } else if (ellipseA < 0 || ellipseB < 0) {
    alert("Please enter a Positive Number");
  } else {
    serial += 1;
    ellipseArea = 3.1416 * ellipseA * ellipseB;
    displayData(name, ellipseArea);
    const ellipseDisplayValue = document.getElementById(
      "ellipse-value-display"
    );
    ellipseDisplayValue.style.display = "block";
    setInnerText(ellipseA, "display-ellipse-a");
    setInnerText(ellipseB, "display-ellipse-b");
  }
});

// Ellipse Section Random Color

document
  .getElementById("ellipse-section")
  .addEventListener("mouseenter", function () {
    getColor("ellipse-section");
  });

// Get Field Value By Id
function getFieldValue(id) {
  const fieldValueById = document.getElementById(id);
  const value = parseFloat(fieldValueById.value);
  return value;
}

// Set element Details
function displayData(name, result) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${result}cm<sup>2</sup></td>
   <td>
    <button class="btn btn-sm btn-red-500">Convert to m<sup>2</sup></button>
    </td>
    <td>
    <button class="deleteBtn btn btn-sm btn-red-500">Remove</button>
    </td>
  `;
  container.appendChild(tr);
}

// Random backgroundColor Generator
function getColor(e) {
  const randomNumber = Math.floor(Math.random() * 16777245);
  const randomCode = "#" + randomNumber.toString(16);
  document.getElementById(e).style.backgroundColor = randomCode;
}

// Remove Button

const table = document.querySelector("table");
function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}
table.addEventListener("click", onDeleteRow);

// Change Page with Button

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Set Text InnerText by Id

function setInnerText(result, id) {
  const element = document.getElementById(id);
  element.innerText = result;
}
