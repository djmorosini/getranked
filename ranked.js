function updatePoints(selectObject, scoreID, points) {
  var value = selectObject.value;
  if(value == "Pass") {
    document.getElementById(scoreID).innerHTML = points;
    document.getElementById(scoreID).style.color = 'green';
    selectObject.style.color = 'green'
  } else if (value == "Needs Work") {
    document.getElementById(scoreID).innerHTML = 0;
    document.getElementById(scoreID).style.color = 'red';
    selectObject.style.color = 'red'
  } else if (value == "N/A") {
    document.getElementById(scoreID).innerHTML = 'N/A';
    document.getElementById(scoreID).style.color = 'black';
    selectObject.style.color = 'black'
  }
  updateScore();
}

function updateScore() {
  var totalScore = 0;
  var possiblePoints = 0;
  for (let i = 1; i < 15; i++) {
  if(!isNaN(parseInt(document.getElementById("score" + i).innerHTML))) {
    totalScore = parseInt(totalScore) + parseInt(document.getElementById('score' + i).innerHTML);
    if(!document.getElementById("drop" + i).classList.contains("lwcls")) {
      possiblePoints = parseInt(possiblePoints) + 10;
    } else {
      possiblePoints = parseInt(possiblePoints) + 20;
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
  } else {
    document.getElementById('rankAdvanced').innerHTML = 'Yes';
    document.getElementById('rankAdvanced').style.color = 'green';
    document.getElementById('grade').style.color = 'green';
  }
}

function showNotepad(notepadID) {
  if(!document.getElementById("link" + notepadID).innerHTML == "") {
    document.getElementById('notepad' + notepadID).style.visibility = 'visible';
    document.getElementById("label"+ notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML;
    document.getElementById("notes" + notepadID).focus();
  }
}

function closeNotepad(notepadID) {
  if(notepadID == "allNotes") {
    document.getElementById(notepadID).style.visibility = 'hidden';
  } else {
    document.getElementById("notepad" + notepadID).style.visibility = 'hidden';
    if(!document.getElementById("notes" + notepadID).value == "" && !document.getElementById("link" + notepadID).innerHTML.includes("*")) {
      document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML += "*";
    } else {
      if(document.getElementById("link" + notepadID).innerHTML.includes("*") && document.getElementById("notes" + notepadID).value == "") {
        document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML.slice(0,-1);
      }
    }
  }
}

function showAllNotes() {
  document.getElementById('allNotes').style.visibility = 'visible';
  document.getElementById('allNotes').innerHTML = ""
  document.getElementById('allNotes').innerHTML = document.getElementById('allNotes').innerHTML += '<span class="closeNotepad" style="position: fixed; color: white;" onclick="closeNotepad(\'allNotes\')">&times;</span>';
  for (let i = 1; i < 15; i++) {
    if(!document.getElementById("notes" + i).value == "") {
      var title = document.getElementById('link' + i).innerHTML;
      var notes = document.getElementById('notes' + i).value;
      document.getElementById('allNotes').innerHTML = document.getElementById('allNotes').innerHTML += "<div class='innerAllNotes'><label style='text-decoration: underline; font-weight: bold;'>"+title+": </label><br/><span class='input' role='textbox' contenteditable style='width:90%;'>"+notes+"</span></div>";
    }
  }
}

function changeRole() {
  var healerList = ["Elemental Drain uptime", "Combat Prayer usage & uptime", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Overall raid awareness", "Proper RO usage & uptime", "MK/Zen's usage & uptime", "Olorime Placement", "SPC uptime"];
  var tankList = ["Elemental Drain uptime", "Tank skills usage & uptime", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Overall raid awareness", "PA uptime", "Galenwe uptime", "Olorime Placement", "Breach uptime"];
  var dpsList = ["Rotation uptimes", "Certain amount of deaths", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts", "Positioning", "Overall raid awareness", "EC usage & uptime", "MK usage & uptime", "Zen's usage & uptime", "MA usage & uptime"];
  if(document.getElementById("roleSelect").value == "Healer") {
    for (let i = 0; i < 11; i++) {
      document.getElementById("link" + (i+1)).innerHTML = healerList[i];
      setColors("Healer");
    }
  } else if (document.getElementById("roleSelect").value == "Tank") {
    for (let i = 0; i < 11; i++) {
      document.getElementById("link" + (i+1)).innerHTML = tankList[i];
      setColors("Tank");
    }
  } else if (document.getElementById("roleSelect").value == "DPS") {
    for (let i = 0; i < 11; i++) {
      document.getElementById("link" + (i+1)).innerHTML = dpsList[i];
      setColors("DPS");
    }
  }
}

function setColors(roleSelected) {
  if(roleSelected == "Healer") {
    document.body.style.backgroundColor = "#54178A";
    document.getElementById("roleSelect").style.backgroundColor = "#54178A";
  } else if (roleSelected == "Tank") {
    document.body.style.backgroundColor = "darkblue";
    document.getElementById("roleSelect").style.backgroundColor = "darkblue";
  } else if (roleSelected == "DPS") {
    document.body.style.backgroundColor = "black";
    document.getElementById("roleSelect").style.backgroundColor = "black";
  }
}

function classChanged() {
  var characterClass = document.getElementById("classSelect").value;
  if(characterClass == "Dragonknight") {
    document.getElementById("link13").innerHTML = "You did DK healer stuff";
    document.getElementById("notes13").value = "";
  } else if (characterClass == "Necromancer") {
    document.getElementById("link13").innerHTML = "Empowering Grasp uptime";
    document.getElementById("notes13").value = "";
  } else if (characterClass == "Nightblade") {
    document.getElementById("link13").innerHTML = "You did NB healer stuff";
    document.getElementById("notes13").value = "";
  } else if (characterClass == "Sorcerer") {
    document.getElementById("link13").innerHTML = "You did Sorc healer stuff";
    document.getElementById("notes13").value = "";
  } else if (characterClass == "Templar") {
    document.getElementById("link13").innerHTML = "Minor Sorcery uptime";
    document.getElementById("notes13").value = "";
  } else if (characterClass == "Warden") {
    document.getElementById("link13").innerHTML = "Fletcherflies uptimes";
    document.getElementById("notes13").value = "";
  }
}

function pageInit() {
  var healerList = ["Elemental Drain uptime", "Combat Prayer usage & uptime", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Overall raid awareness", "Proper RO usage & uptime", "MK/Zen's usage & uptime", "Olorime Placement", "SPC uptime"];
  for (let i = 0; i < 11; i++) {
    document.getElementById("link" + (i+1)).innerHTML = healerList[i];
  }
  for (let i = 1; i < 15; i++) {
    document.getElementById('notes' + i).addEventListener('focusout', function (e) {
      closeNotepad(i);
  });
  }
}