function updatePoints(selectObject, scoreID, points) {
  var value = selectObject.value;
  if(value == "Pass") {
    document.getElementById(scoreID).innerHTML = points;
    document.getElementById(scoreID).style.color = 'green';
  }
  else if (value == "Fail") {
    document.getElementById(scoreID).innerHTML = 0;
    document.getElementById(scoreID).style.color = 'red';
  }
  else if (value == "N/A") {
    document.getElementById(scoreID).innerHTML = 'N/A';
  }
  updateScore()
}
function updateScore() {
  //add upper score
  var upperScore = 0;
  var possiblePoints = 0;
  for (let i = 1; i < 12; i++) {
    if(!isNaN(parseInt(document.getElementById('score' + i).innerHTML))) {
      upperScore = parseInt(upperScore) + parseInt(document.getElementById('score' + i).innerHTML);
      possiblePoints += 10;
    }
  }
  //add lower score
  var lowerScore = 0;
  for (let i = 1; i < 4; i++) {
    if(!isNaN(parseInt(document.getElementById('classScore' + i).innerHTML))) {
      lowerScore = parseInt(lowerScore) + parseInt(document.getElementById('classScore' + i).innerHTML);
      possiblePoints += 20;
    }
    var totalScore = parseInt(upperScore) + parseInt(lowerScore);
    document.getElementById('scoreEarned').innerHTML = totalScore;
    document.getElementById('possiblePoints').innerHTML = possiblePoints;
    document.getElementById('grade').innerHTML = ((totalScore / possiblePoints) * 100).toFixed(2) + '%';
    if ((totalScore / possiblePoints)<0.8) {
      document.getElementById('rankAdvanced').innerHTML = 'No';
      document.getElementById('rankAdvanced').style.color = 'red';
      document.getElementById('grade').style.color = 'red';
    }
    else {
      document.getElementById('rankAdvanced').innerHTML = 'Yes';
      document.getElementById('rankAdvanced').style.color = 'green';
      document.getElementById('grade').style.color = 'red';
    }
  }
}