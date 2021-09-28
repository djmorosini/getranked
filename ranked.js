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
    document.getElementById('grade').style.color = 'green';
  }
}

function showNotepad(selectObject) {
  var sectionTitle = selectObject.innerText;
  if(sectionTitle == "Proper RO usage & uptime") {
    document.getElementById('notepad1').style.visibility = 'visible';
  }
  else if(sectionTitle == "MK/Zen's usage & uptime") {
    document.getElementById('notepad2').style.visibility = 'visible';
  }
  else if(sectionTitle == "Elemental Drain uptime") {
    document.getElementById('notepad3').style.visibility = 'visible';
  }
  else if(sectionTitle == "Apporpriate Ultimate usage") {
    document.getElementById('notepad4').style.visibility = 'visible';
  }
  else if(sectionTitle == "Combat Prayer usage & uptime") {
    document.getElementById('notepad5').style.visibility = 'visible';
  }
  else if(sectionTitle == "Olorime Placement") {
    document.getElementById('notepad6').style.visibility = 'visible';
  }
  else if(sectionTitle == "SPC uptime") {
    document.getElementById('notepad7').style.visibility = 'visible';
  }
  else if(sectionTitle == "Adds debuffed") {
    document.getElementById('notepad8').style.visibility = 'visible';
  }
  else if(sectionTitle == "Callouts, including Warhorns") {
    document.getElementById('notepad9').style.visibility = 'visible';
  }
  else if(sectionTitle == "Positioning") {
    document.getElementById('notepad10').style.visibility = 'visible';
  }
  else if(sectionTitle == "Overall raid awareness") {
    document.getElementById('notepad11').style.visibility = 'visible';
  }
  else if(sectionTitle == "Warden: Fletcherflies uptimes") {
    document.getElementById('notepad12').style.visibility = 'visible';
  }
  else if(sectionTitle == "Templar: Minor Sorcery uptime") {
    document.getElementById('notepad13').style.visibility = 'visible';
  }
  else if(sectionTitle == "Necro: Empowering Grasp uptime") {
    document.getElementById('notepad14').style.visibility = 'visible';
  }
}

function closeNotepad(notepadID) {
  document.getElementById(notepadID).style.visibility = 'hidden';
}