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
  document.getElementById("notepad" + notepadID).style.visibility = 'hidden';
  if(!document.getElementById("notes" + notepadID).innerText == "") {
    document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML += " *";
  }
}