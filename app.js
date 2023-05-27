(function () {
  const formData = document.getElementById("formData");
  let invisible = document.getElementById("invisible");
  let convertType = "Miles";
  const heading = document.querySelector(".heading");
  const upperTitle = document.querySelector(".upperTitle");

  document.addEventListener("keydown", (e) => {
    let keyVal = e.key;
    if (keyVal == "K") {
      convertType = "Kilometers";
      heading.innerHTML = `Kilometers to Miles Converter`;
      upperTitle.innerHTML = `Type a distance in kilometers and click the button to convert distance to
    miles`;
    } else if (keyVal == "M") {
      convertType = "Miles";
      heading.innerHTML = `Miles to Kilometers Converter`;
      upperTitle.innerHTML = `Type a distance in miles and click the button to convert distance to
    kilometers`;
    }
  });

  formData.addEventListener("submit", (event) => {
    event.preventDefault();
    let distance = parseFloat(document.getElementById("inp").value);

    if (distance) {
      if (convertType == "Miles") {
        let kilometers = (distance * 1.609344).toFixed(3);
        invisible.innerHTML = `${distance} miles is ${kilometers} kilometers `;
      } else if (convertType == "Kilometers") {
        let miles = (distance * 0.6213712).toFixed(3);
        invisible.innerHTML = `${distance} kilometers is ${miles} miles `;
      }
    } else {
      invisible.innerHTML = `Given value is not correct `;
      invisible.style.color = "red";
    }
  });
})();
