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
  updateScore()
}
function updateScore() {
  //add upper score
  var upperScore = 0;
  var possiblePoints = 0;
  for (let i = 1; i < 12; i++) {
    if(isNaN(parseInt(document.getElementById('score' + i).innerHTML))) {
      upperScore = parseInt(upperScore) + parseInt(document.getElementById('score' + i).innerHTML);
      possiblePoints += 10;
    }
  }
  //add lower score
  var lowerScore = 0;
  for (let i = 1; i < 4; i++) {
    if(isNaN(parseInt(document.getElementById('classScore' + i).innerHTML))) {
      lowerScore = parseInt(lowerScore) + parseInt(document.getElementById('classScore' + i).innerHTML);
      possiblePoints += 20;
    }
    var totalScore = parseInt(upperScore) + parseInt(lowerScore);
    document.getElementById('scoreEarned').innerHTML = totalScore;
    document.getElementById('possiblePoints').innerHTML = possiblePoints;
    document.getElementById('grade').innerHTML = '';
    document.getElementById('rankAdvanced').innerHTML = '';
  }
}