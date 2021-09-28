function updatePoints(selectObject, scoreID, points) {
  var value = selectObject.value;
  if(value == "Pass") {
    document.getElementById(scoreID).innerHTML = points;
    document.getElementById(scoreID).style.color = 'green';
    selectObject.style.color = 'green'
  }
  else if (value == "Needs Work") {
    document.getElementById(scoreID).innerHTML = 0;
    document.getElementById(scoreID).style.color = 'red';
    selectObject.style.color = 'red'
  }
  else if (value == "N/A") {
    document.getElementById(scoreID).innerHTML = 'N/A';
    document.getElementById(scoreID).style.color = 'black';
    selectObject.style.color = 'black'
  }
  updateScore()
}
function updateScore() {
  var totalScore = 0;
  var possiblePoints = 0;
  for (let i = 1; i < 15; i++) {
    if(!isNaN(parseInt(document.getElementById('score' + i).innerHTML))) {
      totalScore = parseInt(totalScore) + parseInt(document.getElementById('score' + i).innerHTML);
      if (i<12){
      possiblePoints += 10;
      }
      else {
        possiblePoints += 20;
      }
    }
  }
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
    document.getElementById('grade').style.color = 'green';
  }
}

function showNotepad(notepadID) {
  document.getElementById('notepad' + notepadID).style.visibility = 'visible';
}

function closeNotepad(notepadID) {
  document.getElementById("notepad" + notepadID).style.visibility = 'hidden';
  if(!document.getElementById("notes" + notepadID).value == "") {
    document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML += "*";
  }
  else {
    if(document.getElementById("link" + notepadID).innerHTML.includes("*")) {
      document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML.slice(0,-1);
    }
  }
}