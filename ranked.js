function updatePoints(selectObject, scoreID, points) {
  var value = selectObject.value;
  if(value == "Pass") {
    document.getElementById(scoreID).innerHTML = points;
  }
  else if (value == "Fail") {
    document.getElementById(scoreID).innerHTML = 0;
  }
  else if (value == "N/A") {
    document.getElementById(scoreID).innerHTML = 'N/A';
  }
  else {
    alert("Please select an option.");
  }
}