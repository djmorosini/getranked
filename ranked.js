function updatePoints(selectObject, scoreID, points) {
  var value = selectObject.value;
  if (value == "Pass") {
    document.getElementById(scoreID).innerHTML = points;
    document.getElementById(scoreID).style.color = 'green';
    selectObject.style.color = 'green';
  } else if (value == "Needs Work") {
    document.getElementById(scoreID).innerHTML = 0;
    document.getElementById(scoreID).style.color = 'red';
    selectObject.style.color = 'red';
  } else if (value == "N/A") {
    document.getElementById(scoreID).innerHTML = 'N/A';
    document.getElementById(scoreID).style.color = 'black';
    selectObject.style.color = 'black';
  }
  updateScore();
}

function updateScore() {
  var totalScore = 0;
  var possiblePoints = 0;
  for (let i = 1; i < 15; i++) {
    if (!isNaN(parseInt(document.getElementById("score" + i).innerHTML))) {
      totalScore = parseInt(totalScore) + parseInt(document.getElementById('score' + i).innerHTML);
      if (!document.getElementById("drop" + i).classList.contains("lwcls")) {
        possiblePoints = parseInt(possiblePoints) + 10;
      } else {
        possiblePoints = parseInt(possiblePoints) + 20;
      }
    }
  }
  document.getElementById('scoreEarned').innerHTML = totalScore;
  document.getElementById('possiblePoints').innerHTML = possiblePoints;
  document.getElementById('grade').innerHTML = ((totalScore / possiblePoints) * 100).toFixed(2) + '%';
  if ((totalScore / possiblePoints) < 0.8) {
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
  if (!document.getElementById("link" + notepadID).innerHTML == "") {
    document.getElementById('notepad' + notepadID).style.visibility = 'visible';
    document.getElementById("label" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML;
    document.getElementById("notes" + notepadID).focus();
  }
}

function closeNotepad(notepadID) {
  if (notepadID == "allNotes") {
    document.getElementById(notepadID).style.visibility = 'hidden';
  } else {
    document.getElementById("notepad" + notepadID).style.visibility = 'hidden';
    if (!document.getElementById("notes" + notepadID).value == "" && !document.getElementById("link" + notepadID).innerHTML.includes("*")) {
      document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML += "*";
    } else {
      if (document.getElementById("link" + notepadID).innerHTML.includes("*") && document.getElementById("notes" + notepadID).value == "") {
        document.getElementById("link" + notepadID).innerHTML = document.getElementById("link" + notepadID).innerHTML.slice(0, -1);
      }
    }
  }
}

function showAllNotes() {
  document.getElementById('allNotes').style.visibility = 'visible';
  document.getElementById('allNotes').innerHTML = ""
  document.getElementById('allNotes').innerHTML = document.getElementById('allNotes').innerHTML += '<span class="closeNotepad" style="position: fixed; color: white;" onclick="closeNotepad(\'allNotes\')">&times;</span>';
  for (let i = 1; i < 15; i++) {
    if (!document.getElementById("notes" + i).value == "") {
      var title = document.getElementById('link' + i).innerHTML;
      var notes = document.getElementById('notes' + i).value;
      document.getElementById('allNotes').innerHTML = document.getElementById('allNotes').innerHTML += "<div id='innerNote" + i + "' class='innerAllNotes'><label style='text-decoration: underline; font-weight: bold;'>" + title + ": </label><br/><span class='input' role='textbox' contenteditable style='width:90%;'>" + notes + "</span></div>";
    }
  }
  setColors();
}

function changeRole() {
  var healerList = ["Elemental Drain uptime", "Combat Prayer usage & uptime", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Situational Awareness"];
  var tankList = ["Elemental Drain uptime", "Brittle uptimes", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Situational Awareness"];
  var dpsList = ["Rotation", "Survivability", "Appropriate Mob Focus", "Ultimate Usage/Callout", "Proper Bar Setup", "Mechanics Knowledge", "Situational Awareness"];

  var healerGear = ["Proper RO usage & uptime", "MK/Zen's usage & uptime", "Olorime Placement", "SPC uptime"];
  var tankGear = ["PA uptime", "Galenwe uptime", "Olorime Placement", "Breach uptime"];
  var dpsGear = ["EC usage & uptime", "MK usage & uptime", "Zen's usage & uptime", "MA usage & uptime"];
  if (document.getElementById("roleSelect").value == "Healer") {
    for (let i = 0; i < 9; i++) {
      document.getElementById("link" + (i + 1)).innerHTML = healerList[i];
    }
  } else if (document.getElementById("roleSelect").value == "Tank") {
    for (let i = 0; i < 9; i++) {
      document.getElementById("link" + (i + 1)).innerHTML = tankList[i];
    }
  } else if (document.getElementById("roleSelect").value == "DPS") {
    for (let i = 0; i < 9; i++) {
      document.getElementById("link" + (i + 1)).innerHTML = dpsList[i];
    }
  }
  document.getElementById("link12").innerHTML = "";
  document.getElementById("notes12").value = "";
  classChanged();
  setColors();
}

function actuallySetColors(background, header, row1, row2) {
  document.body.style.backgroundColor = background;
  document.getElementById("roleSelect").style.backgroundColor = background;
  document.getElementById("psn").style.backgroundColor = row1;
  document.getElementById("allNotes").style.backgroundColor = row2;
  document.getElementById("bottomButton1").style.backgroundColor = row2;
  document.getElementById("bottomButton2").style.backgroundColor = row2;
  document.getElementById("trialSelect").style.backgroundColor = row2;
  document.getElementById("gear1").style.backgroundColor = row2;
  document.getElementById("gear2").style.backgroundColor = row2;
  for (let i = 1; i < 6; i++) {
    document.getElementById("table" + i).style.backgroundColor = row1;
  }
  for (let i = 1; i < 15; i++) {
    document.getElementById("notes" + i).style.backgroundColor = row1;
    document.getElementById("notepad" + i).style.backgroundColor = row2;
    if ((i % 2) == 0) {
      document.getElementById("drop" + i).style.backgroundColor = row2;
    } else {
      document.getElementById("drop" + i).style.backgroundColor = row1;
    }
    if (document.getElementById("innerNote" + i)) {
      document.getElementById("innerNote" + i).style.backgroundColor = row2;
    }
  }
  for (let i = 1; i < 7; i++) {
    document.getElementById("tableHead" + i).style.backgroundColor = header;
  }
  for (let i = 1; i < 11; i++) {
    document.getElementById("tableRow" + i).style.backgroundColor = row2;
  }
}

function setColors() {
  var role = document.getElementById("roleSelect").value;
  if (role == "Healer") {
    actuallySetColors("#54178A", "#8649C3", "#D3BAEC", "#A98BC8");
  } else if (role == "Tank") {
    actuallySetColors("#0E1B44", "#2d448c", "#99ace8", "#7b94e0");
  } else if (role == "DPS") {
    actuallySetColors("#0d0d0f", "#3c3c42", "#6e6e73", "#ababb3");
  }
}

function classChanged() {
  var characterClass = document.getElementById("classSelect").value;
  var role = document.getElementById("roleSelect").value;
  if (role == "Healer") {
    if (characterClass == "Dragonknight") {
      document.getElementById("link13").innerHTML = "You did DK healer stuff";
    } else if (characterClass == "Necromancer") {
      document.getElementById("link13").innerHTML = "Empowering Grasp uptime";
    } else if (characterClass == "Nightblade") {
      document.getElementById("link13").innerHTML = "You did NB healer stuff";
    } else if (characterClass == "Sorcerer") {
      document.getElementById("link13").innerHTML = "You did Sorc healer stuff";
    } else if (characterClass == "Templar") {
      document.getElementById("link13").innerHTML = "Minor Sorcery uptime";
    } else if (characterClass == "Warden") {
      document.getElementById("link13").innerHTML = "Fletcherflies uptimes";
    }
  } else if (role == "Tank") {
    if (characterClass == "Dragonknight") {
      document.getElementById("link13").innerHTML = "Stone fist or engulfing uptime";
    } else if (characterClass == "Necromancer") {
      document.getElementById("link13").innerHTML = "Empowering Grasp uptime";
    } else if (characterClass == "Nightblade") {
      document.getElementById("link13").innerHTML = "You did NB tank stuff";
    } else if (characterClass == "Sorcerer") {
      document.getElementById("link13").innerHTML = "Minor Prophecy uptime";
    } else if (characterClass == "Templar") {
      document.getElementById("link13").innerHTML = "Minor Sorcery uptime";
    } else if (characterClass == "Warden") {
      document.getElementById("link13").innerHTML = "Fletcherflies uptimes";
    }
  } else if (role == "DPS") {
    if (characterClass == "Dragonknight") {
      document.getElementById("link13").innerHTML = "You did DK DPS stuff";
    } else if (characterClass == "Necromancer") {
      document.getElementById("link13").innerHTML = "You did Necro DPS stuff";
    } else if (characterClass == "Nightblade") {
      document.getElementById("link13").innerHTML = "You Impaled everything";
    } else if (characterClass == "Sorcerer") {
      document.getElementById("link13").innerHTML = "Minor Prophecy uptime";
    } else if (characterClass == "Templar") {
      document.getElementById("link13").innerHTML = "Minor Sorcery uptime";
    } else if (characterClass == "Warden") {
      document.getElementById("link13").innerHTML = "Fletcherflies uptimes";
    }
  }
  document.getElementById("notes13").value = "";
  document.getElementById("link14").innerHTML = "";
  document.getElementById("notes14").value = "";
}

function switchIt(variable, myRow) {
  var role = document.getElementById("roleSelect").value;
  if(role == "Healer") {
    switch (variable) {
      case "SPC":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "SPC uptimes";
        } else {
          document.getElementById("link11").innerHTML = "SPC uptimes";
        }
        break;
      case "VoO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "VoO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "VoO uptimes";
        }
        break;
      case "HT":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "HT uptimes";
        } else {
          document.getElementById("link11").innerHTML = "HT uptimes";
        }
        break;
      case "RO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "RO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "RO uptimes";
        }
        break;
      case "JG":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "JG uptimes";
        } else {
          document.getElementById("link11").innerHTML = "JG uptimes";
        }
        break;
      case "STO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "STO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "STO uptimes";
        }
        break;
      case "MK":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "MK uptimes";
        } else {
          document.getElementById("link11").innerHTML = "MK uptimes";
        }
        break;
      case "Oth":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "What were you wearing?";
        } else {
          document.getElementById("link11").innerHTML = "What were you wearing?";
        }
        break;
      default:
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Gear1";
        } else {
          document.getElementById("link11").innerHTML = "Gear2";
        }
    }
  } else if (role == "Tank") {
    switch (variable) {
      case "SPC":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "SPC uptimes";
        } else {
          document.getElementById("link11").innerHTML = "SPC uptimes";
        }
        break;
      case "VoO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "VoO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "VoO uptimes";
        }
        break;
      case "HT":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "HT uptimes";
        } else {
          document.getElementById("link11").innerHTML = "HT uptimes";
        }
        break;
      case "RO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "RO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "RO uptimes";
        }
        break;
      case "JG":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "JG uptimes";
        } else {
          document.getElementById("link11").innerHTML = "JG uptimes";
        }
        break;
      case "STO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "STO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "STO uptimes";
        }
        break;
      case "MK":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "MK uptimes";
        } else {
          document.getElementById("link11").innerHTML = "MK uptimes";
        }
        break;
      case "Oth":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "What were you wearing?";
        } else {
          document.getElementById("link11").innerHTML = "What were you wearing?";
        }
        break;
      default:
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Gear1";
        } else {
          document.getElementById("link11").innerHTML = "Gear2";
        }
    }
  } else if (role == "DPS") {
    switch (variable) {
      case "SPC":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "SPC uptimes";
        } else {
          document.getElementById("link11").innerHTML = "SPC uptimes";
        }
        break;
      case "VoO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "VoO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "VoO uptimes";
        }
        break;
      case "HT":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "HT uptimes";
        } else {
          document.getElementById("link11").innerHTML = "HT uptimes";
        }
        break;
      case "RO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "RO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "RO uptimes";
        }
        break;
      case "JG":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "JG uptimes";
        } else {
          document.getElementById("link11").innerHTML = "JG uptimes";
        }
        break;
      case "STO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "STO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "STO uptimes";
        }
        break;
      case "MK":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "MK uptimes";
        } else {
          document.getElementById("link11").innerHTML = "MK uptimes";
        }
        break;
      case "Oth":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "What were you wearing?";
        } else {
          document.getElementById("link11").innerHTML = "What were you wearing?";
        }
        break;
      default:
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Gear1";
        } else {
          document.getElementById("link11").innerHTML = "Gear2";
        }
    }
  }
}

function setGearRows() {
  var gear1 = document.getElementById("gear1").value;
  var gear2 = document.getElementById("gear2").value;
  switchIt(gear1, "1");
  switchIt(gear2, "2");
}

function addListeners() {
  for (let i = 1; i < 15; i++) {
    document.getElementById('notes' + i).addEventListener('focusout', function (e) {
      closeNotepad(i);
    });
  }
}

function pageInit() {
  changeRole();
  setGearRows();
  addListeners();
}