let serial = 0;

// Triangle Area Calculation

document.getElementById("triangle-btn").addEventListener("click", function () {
  serial += 1;
  const name = "Triangle";
  const triangleB = getFieldValue("triangle-b");
  const triangleH = getFieldValue("triangle-h");
  if (isNaN(triangleB) || isNaN(triangleH)) {
    alert("Please Enter a Number");
  } else if (triangleB < 0 || triangleH < 0) {
    alert("Please enter a Positive Number");
  } else {
    triangleArea = 0.5 * triangleB * triangleH;
    displayData(name, triangleArea);
  }
});

// Rectangle Area Calculation

document.getElementById("rectangle-btn").addEventListener("click", function () {
  serial += 1;
  const name = "Rectangle";
  const rectangleW = getFieldValue("rectangle-w");
  const rectangleL = getFieldValue("rectangle-l");
  if (isNaN(rectangleW) || isNaN(rectangleL)) {
    alert("Please Enter a Number");
  } else if (rectangleW < 0 || rectangleL < 0) {
    alert("Please enter a Positive Number");
  } else {
    rectangleArea = rectangleW * rectangleL;
    displayData(name, rectangleArea);
  }
});

// Parallelogram Area Calculation

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    serial += 1;
    const name = "Parallelogram";
    const parallelogramB = getFieldValue("parallelogram-b");
    const parallelogramH = getFieldValue("parallelogram-h");
    if (isNaN(parallelogramB) || isNaN(parallelogramH)) {
      alert("Please Enter a Number");
    } else if (parallelogramB < 0 || parallelogramH < 0) {
      alert("Please enter a Positive Number");
    } else {
      parallelogramArea = parallelogramB * parallelogramH;
      displayData(name, parallelogramArea);
    }
  });

// Rhombus Area Calculation

document.getElementById("rhombus-btn").addEventListener("click", function () {
  serial += 1;
  const name = "Rhombus";
  const rhombusH1 = getFieldValue("rhombus-h-1");
  const rhombusH2 = getFieldValue("rhombus-h-1");
  if (isNaN(rhombusH1) || isNaN(rhombusH2)) {
    alert("Please Enter a Number");
  } else if (rhombusH1 < 0 || rhombusH2 < 0) {
    alert("Please enter a Positive Number");
  } else {
    rhombusArea = 0.5 * rhombusH1 * rhombusH2;
    displayData(name, rhombusArea);
  }
});

// Pentagon Area Calculation

document.getElementById("pentagon-btn").addEventListener("click", function () {
  serial += 1;
  const name = "Pentagon";
  const pentagonP = getFieldValue("pentagon-p");
  const pentagonB = getFieldValue("pentagon-b");
  if (isNaN(pentagonP) || isNaN(pentagonB)) {
    alert("Please Enter a Number");
  } else if (pentagonP < 0 || pentagonB < 0) {
    alert("Please enter a Positive Number");
  } else {
    pentagonArea = 0.5 * pentagonP * pentagonB;
    displayData(name, pentagonArea);
  }
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
    <td>${result}</td>
   <td>
    <button class="btn btn-sm btn-red-500">Convert to m<sup>2</sup></button>
    </td>
  `;
  container.appendChild(tr);
}
