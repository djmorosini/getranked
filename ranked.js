function changeRole() {
  var healerList = ["Elemental Drain uptime", "Combat Prayer usage & uptime", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Situational Awareness", "Rotation", "Bar setup"];
  var tankList = ["Elemental Drain uptime", "Brittle uptimes", "Adds debuffed", "Apporpriate Ultimate usage", "Callouts, including Warhorns", "Positioning", "Situational Awareness", "Holding taunt", "Blocking properly"];
  var dpsList = ["Full Rotations", "Survivability", "Appropriate Mob Focus", "Ultimate Usage/Callout", "Proper Bar Setup", "Mechanics Knowledge", "Situational Awareness", "Appropriate resurrections", "Bonus: Extra DPS Mechanic"];

  if (document.getElementById("roleSelect").value == "Healer") {
    for (let i = 0; i < 9; i++) {
      document.getElementById("link" + (i + 1)).innerHTML = healerList[i];
    }
    document.getElementById("drop9").onchange = function(){updatePoints(this, 'score9', 10)};
  } else if (document.getElementById("roleSelect").value == "Tank") {
    for (let i = 0; i < 9; i++) {
      document.getElementById("link" + (i + 1)).innerHTML = tankList[i];
    }
    document.getElementById("drop9").onchange = function(){updatePoints(this, 'score9', 10)};
  } else if (document.getElementById("roleSelect").value == "DPS") {
    for (let i = 0; i < 9; i++) {
      document.getElementById("link" + (i + 1)).innerHTML = dpsList[i];
    }
    document.getElementById("drop9").onchange = function(){updatePoints(this, 'score9', 20)};
  }
  document.getElementById("link12").innerHTML = "";
  document.getElementById("link14").innerHTML = "";
  addListeners();
  clearNotes();
  classChanged();
  setColors();
  setGearDropdowns();
  setGearRows();
  setTrialSelect();
}

function addListeners() {
  for (let i = 1; i < 15; i++) {
    document.getElementById('notes' + i).addEventListener('focusout', function (e) {
      closeNotepad(i);
    });
  }
}

function clearNotes() {
  for(let i = 1; i < 15; i++) {
    document.getElementById("notes" + i).value = "";
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
      document.getElementById("link13").innerHTML = "Engulfing (every 14 seconds)";
    } else if (characterClass == "Necromancer") {
      document.getElementById("link13").innerHTML = "Boneyard (on add pulls)";
    } else if (characterClass == "Nightblade") {
      document.getElementById("link13").innerHTML = "Merciless Resolve/Bow proc";
    } else if (characterClass == "Sorcerer") {
      document.getElementById("link13").innerHTML = "Minor Prophecy (every 20 seconds)";
    } else if (characterClass == "Templar") {
      document.getElementById("link13").innerHTML = "Minor Sorcery (every 20 seconds)";
    } else if (characterClass == "Warden") {
      document.getElementById("link13").innerHTML = "Fletcherflies (every 10 seconds)";
    }
  }
  document.getElementById("notes13").value = "";
  document.getElementById("link14").innerHTML = "";
  document.getElementById("notes14").value = "";
}

function setColors() {
  var role = document.getElementById("roleSelect").value;
  if (role == "Healer") {
    actuallySetColors("#54178A", "#8649C3", "#A98BC8", "#D3BAEC");
  } else if (role == "Tank") {
    actuallySetColors("#0E1B44", "#2d448c", "#7b94e0", "#99ace8");
  } else if (role == "DPS") {
    actuallySetColors("#660000", "#990000", "#e06666", "#ea9999");
  }
}

function actuallySetColors(background, header, row1, row2) {
  document.body.style.backgroundColor = background;
  document.getElementById("roleSelect").style.backgroundColor = background;
  document.getElementById("psn").style.backgroundColor = row2;
  document.getElementById("classSelect").style.backgroundColor = row2;
  document.getElementById("allNotes").style.backgroundColor = row1;
  document.getElementById("bottomButton1").style.backgroundColor = row2;
  document.getElementById("bottomButton2").style.backgroundColor = row2;
  document.getElementById("trialSelect").style.backgroundColor = row2;
  document.getElementById("gear1").style.backgroundColor = row2;
  document.getElementById("gear2").style.backgroundColor = row2;
  for (let i = 1; i < 6; i++) {
    document.getElementById("table" + i).style.backgroundColor = row1;
  }
  for (let i = 1; i < 15; i++) {
    document.getElementById("notes" + i).style.backgroundColor = row2;
    document.getElementById("notepad" + i).style.backgroundColor = row1;
    if ((i % 2) == 0) {
      document.getElementById("drop" + i).style.backgroundColor = row2;
    } else {
      document.getElementById("drop" + i).style.backgroundColor = row1;
    }
    if (document.getElementById("innerNote" + i)) {
      document.getElementById("innerNote" + i).style.backgroundColor = row1;
    }
  }
  for (let i = 1; i < 10; i++) {
    document.getElementById("tableHead" + i).style.backgroundColor = header;
  }
  for (let i = 1; i < 11; i++) {
    document.getElementById("tableRow" + i).style.backgroundColor = row2;
  }
}

function setGearDropdowns() {
  var role = document.getElementById("roleSelect").value;
  if(role == "Healer") {
    document.getElementById("gear1").innerHTML = "<option selected='selected'>SPC</option><option>VoO</option><option>HT</option><option>RO</option><option>JG</option><option>STO</option><option>MK</option><option>Zen</option><option>Oth</option><option>Non</option>";
    document.getElementById("gear2").innerHTML = "<option>SPC</option><option>VoO</option><option selected='selected'>HT</option><option>RO</option><option>JG</option><option>STO</option><option>MK</option><option>Oth</option><option>Non</option>";
  } else if(role == "Tank") {
    document.getElementById("gear1").innerHTML = "<option selected='selected'>CoY</option><option>AoG</option><option>WR</option><option>CO</option><option>PA</option><option>Sax</option><option>Oth</option><option>Non</option>";
    document.getElementById("gear2").innerHTML = "<option>CoY</option><option>AoG</option><option selected='selected'>WR</option><option>CO</option><option>PA</option><option>Sax</option><option>Oth</option><option>Non</option>";
  } else if(role == "DPS") {
    document.getElementById("gear1").innerHTML = "<option selected='selected'>BM</option><option>MA</option><option>EC</option><option>Zen's</option><option>MK</option><option>Oth</option><option>Non</option>";
    document.getElementById("gear2").innerHTML = "<option>BM</option><option>MA</option><option>EC</option><option>Zen's</option><option>MK</option><option selected='selected'>Oth</option><option>Non</option>";
  }
}

function setGearRows() {
  var gear1 = document.getElementById("gear1").value;
  var gear2 = document.getElementById("gear2").value;
  switchIt(gear1, "1");
  switchIt(gear2, "2");
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
          document.getElementById("link10").innerHTML = "Olo placement";
        } else {
          document.getElementById("link11").innerHTML = "Olo placement";
        }
        break;
      case "HT":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Stayed alive";
        } else {
          document.getElementById("link11").innerHTML = "Stayed alive";
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
          document.getElementById("link10").innerHTML = "Stayed alive";
        } else {
          document.getElementById("link11").innerHTML = "Stayed alive";
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
      case "Zen":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Zen uptimes";
        } else {
          document.getElementById("link11").innerHTML = "Zen uptimes";
        }
        break;
      case "Oth":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "What were you wearing?";
        } else {
          document.getElementById("link11").innerHTML = "What were you wearing?";
        }
        break;
      case "Non":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Not shown";
        } else {
          document.getElementById("link11").innerHTML = "Not shown";
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
      case "AoG":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Empowered uptimes";
        } else {
          document.getElementById("link11").innerHTML = "Empowered uptimes";
        }
        break;
      case "CoY":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "CoY uptimes";
        } else {
          document.getElementById("link11").innerHTML = "CoY uptimes";
        }
        break;
      case "CO":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "CO uptimes";
        } else {
          document.getElementById("link11").innerHTML = "CO uptimes";
        }
        break;
      case "PA":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "PA uptimes";
        } else {
          document.getElementById("link11").innerHTML = "PA uptimes";
        }
        break;
      case "Sax":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Sax usage";
        } else {
          document.getElementById("link11").innerHTML = "Sax usage";
        }
        break;
      case "WR":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Worm uptimes";
        } else {
          document.getElementById("link11").innerHTML = "Worm uptimes";
        }
        break;
      case "Non":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Not shown";
        } else {
          document.getElementById("link11").innerHTML = "Not shown";
        }
        break;
      case "Oth":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Proper gear?";
        } else {
          document.getElementById("link11").innerHTML = "Proper gear?";
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
      case "MA":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "MA uptimes";
        } else {
          document.getElementById("link11").innerHTML = "MA uptimes";
        }
        break;
      case "EC":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "EC uptimes";
        } else {
          document.getElementById("link11").innerHTML = "EC uptimes";
        }
        break;
      case "MK":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "MK uptimes";
        } else {
          document.getElementById("link11").innerHTML = "MK uptimes";
        }
        break;
      case "Zen's":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Zen's uptimes";
        } else {
          document.getElementById("link11").innerHTML = "Zen's uptimes";
        }
        break;
      case "BM":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Kept low mag (below 50%)";
        } else {
          document.getElementById("link11").innerHTML = "Kept low mag (below 50%)";
        }
        break;
      case "Non":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Not shown";
        } else {
          document.getElementById("link11").innerHTML = "Not shown";
        }
        break;
      case "Oth":
        if(myRow == "1") {
          document.getElementById("link10").innerHTML = "Good burn";
        } else {
          document.getElementById("link11").innerHTML = "Good burn";
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
  var role = document.getElementById("roleSelect").value;
  for (let i = 1; i < 15; i++) {
    if (!isNaN(parseInt(document.getElementById("score" + i).innerHTML))) {
      totalScore = parseInt(totalScore) + parseInt(document.getElementById('score' + i).innerHTML);
      if((role == "DPS" && i == 9)){
        possiblePoints = parseInt(possiblePoints);
      } else if (!document.getElementById("drop" + i).classList.contains("lwcls")) {
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

function setTrialSelect() {
  var role = document.getElementById("roleSelect").value;
  if (role == "Healer") {
    document.getElementById("trialSelect").innerHTML = "<option>vAA</option><option>vHRC</option><option>vMOL Twins</option><option>vSS Ice</option><option selected='selected'>vCR+0 kite</option><option>vCR+1 kite</option><option>vRG Bahsei kite</option><option>vASHM FK</option><option>vCRHM kite</option><option>vKAHM Falgravn</option><option>vSSHM Dragons</option><option>Other</option>";
  } else if (role == "Tank") {
    document.getElementById("trialSelect").innerHTML = "<option selected='selected'>vCR MT</option><option>vCR HM</option><option>vAS OT</option><option>vSS OT</option><option>vRG</option><option>vKA HM</option><option>vSS HM</option><option>Oth</option>";
  } else if (role == "DPS") {
    document.getElementById("trialSelect").innerHTML = "<option selected='selected'>vSS HM</option><option>vSS HM(Portal)</option><option>vAS HM</option><option>vAS HM(Interrupt)</option><option>vCR HM</option><option>vCR HM(Portal)</option><option>vKA HM</option><option>vRG HM</option><option>vRG HM(Portal)</option><option>vRG HM(Kite)</option>";
  }
}