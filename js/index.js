var values = [
    ["Moka gets scared or startled"],
    ["'Sawr'"],
    ["'I don't get it' / 'Is that a meme?'"],
    ["Laughs at small-brained dumb 'funny' thing"],
    ["Any mentions of breeding / pregnancy"],
    ["Moka hits / hurts herself"],
    ["Moka can't English"],
    ["Moka tells a sexual story"],
    ["'I'm not old, Im 21'"],
    ["'Im old'"],
    ["Moka derails the stream"],
    ["Yells or Screams"],
    ["'I'm Moka. Im dog'"],
    ["Stream starts with TTS on"],
    ["Any forms of the words 'cum' or 'squirt' are said"],
    ["Moka gets lost or confused in a game"],
    ["Moka gushing over Commy"],
    ["Any forms of the word 'piss' is said"],
    ["Drunk Moka"],
    ["Moka does or says something 'sus'"],
    ["Brobie speaks"],
    ["Bouncing booba"],
    ["Moka fails a puzzle / challenge"],
    ["Tired / has a headache"],
    ["Moka forgets what she said or did"],
    ["Moka embraces her killer instinct"],
    ["Something malfunctions"],
    ["Moka goes crazy / malds"],
    ["Moka claims to be seiso"],
    ["'BRRROBIES'"],
    ["Chat is blamed for Moka's actions"],
    ["Moka spills or chokes on drink"],
    ["Hiccups"],
    ["Toxic Moka"],
    ["WAYTOODANK (audio too loud)"],
    ["Moka burps (lol never gonna happen, unless?)"],
    ["Grogu is mentioned"],
    ["Stream starts with 2D model"],
    ["Stream starts with 3D model"],
    ["Moka gives a demonstration"],
    ["Moka's appearance changes during stream"],
    ["Stream gets raided"],
    ["Moka tells a joke"],
    ["Moka does an impression"],
    ["Moka wants help"],
    ["Moka sings / hums"],
    ["Moka tells a nonsexual story"],
    ["Any forms of the words 'dick, balls, or pussy' are said"],
    ["Feet"],
    ["Moka whispers or speaks softly"],
    ["Chat explains a joke / meme to Moka"],
    ["Moka drinks alcohol"],
    ["Moka drinks water or tea"],
    ["Misogynist Moka"],
    ["Moka apologizes for something"]
];


function update() {
    var i;
    for (i = 0; i < values.length; i++) {
        var cell = document.getElementById("div"+i);
        cell.firstChild.nodeValue = values[i][0];
        
    }
}

function randomize() {
    var num = values.length;
    var middle = Math.floor(values.length/2);
    
    for(i=0; i<(5*num); i++) {
        var src = Math.floor(Math.random() * num);
        var dst = Math.floor(Math.random() * num);

        if( src!=middle && dst!=middle) {
            var tmp = values[src];
            values[src] = values[dst];
            values[dst] = tmp;
        }
    }
    update(); 
    reset();
}



  function reset() {
  var element = document.getElementById("cell0");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell1();
}
function unmarkCell1() {
  var element = document.getElementById("cell1");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell2();
}
function unmarkCell2() {
  var element = document.getElementById("cell2");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell3();
}
function unmarkCell3() {
  var element = document.getElementById("cell3");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell4();
}
function unmarkCell4() {
  var element = document.getElementById("cell4");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell5();
}
function unmarkCell5() {
  var element = document.getElementById("cell5");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell6();
}
function unmarkCell6() {
  var element = document.getElementById("cell6");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell7();
}
function unmarkCell7() {
  var element = document.getElementById("cell7");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell8();
}
function unmarkCell8() {
  var element = document.getElementById("cell8");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell9();
}
function unmarkCell9() {
  var element = document.getElementById("cell9");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell10();
}
function unmarkCell10() {
  var element = document.getElementById("cell10");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell11();
}
function unmarkCell11() {
  var element = document.getElementById("cell11");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell12();
}
function unmarkCell12() {
  var element = document.getElementById("cell12");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell13();
}
function unmarkCell13() {
  var element = document.getElementById("cell13");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell14();
}
function unmarkCell14() {
  var element = document.getElementById("cell14");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell15();
}
function unmarkCell15() {
  var element = document.getElementById("cell15");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell16();
}
function unmarkCell16() {
  var element = document.getElementById("cell16");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell17();
}
function unmarkCell17() {
  var element = document.getElementById("cell17");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell18();
}
function unmarkCell18() {
  var element = document.getElementById("cell18");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell19();
}
function unmarkCell19() {
  var element = document.getElementById("cell19");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell20();
}
function unmarkCell20() {
  var element = document.getElementById("cell20");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell21();
}
function unmarkCell21() {
  var element = document.getElementById("cell21");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell22();
}
function unmarkCell22() {
  var element = document.getElementById("cell22");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell23();
}
function unmarkCell23() {
  var element = document.getElementById("cell23");
  element.style.backgroundColor = "#1d1c1a";
  unmarkCell24();
}
function unmarkCell24() {
  var element = document.getElementById("cell24");
  element.style.backgroundColor = "#1d1c1a";
  update();
}




function showRules() {
    var ruleVis = document.getElementById("rules").style.visibility;
    var rulesText = document.getElementById("rulesButton").value;
    if( ruleVis == "hidden" ) {
        ruleVis = "visible";
        rulesText = "Hide Rules";
    } else {
        ruleVis = "hidden";
        rulesText = "Show Rules";
    }
    document.getElementById("rules").style.visibility = ruleVis;
    document.getElementById("rulesButton").value = rulesText;
}

function markCell0() {
  var element = document.getElementById("cell0");
  element.style.backgroundColor = "#008080";
}
function markCell1() {
  var element = document.getElementById("cell1");
  element.style.backgroundColor = "#008080";
}
function markCell2() {
  var element = document.getElementById("cell2");
  element.style.backgroundColor = "#008080";
}
function markCell3() {
  var element = document.getElementById("cell3");
  element.style.backgroundColor = "#008080";
}
function markCell4() {
  var element = document.getElementById("cell4");
  element.style.backgroundColor = "#008080";
}
function markCell5() {
  var element = document.getElementById("cell5");
  element.style.backgroundColor = "#008080";
}
function markCell6() {
  var element = document.getElementById("cell6");
  element.style.backgroundColor = "#008080";
}
function markCell7() {
  var element = document.getElementById("cell7");
  element.style.backgroundColor = "#008080";
}
function markCell8() {
  var element = document.getElementById("cell8");
  element.style.backgroundColor = "#008080";
}
function markCell9() {
  var element = document.getElementById("cell9");
  element.style.backgroundColor = "#008080";
}
function markCell10() {
  var element = document.getElementById("cell10");
  element.style.backgroundColor = "#008080";
}
function markCell11() {
  var element = document.getElementById("cell11");
  element.style.backgroundColor = "#008080";
}
function markCell12() {
  var element = document.getElementById("cell12");
  element.style.backgroundColor = "#008080";
}
function markCell13() {
  var element = document.getElementById("cell13");
  element.style.backgroundColor = "#008080";
}
function markCell14() {
  var element = document.getElementById("cell14");
  element.style.backgroundColor = "#008080";
}
function markCell15() {
  var element = document.getElementById("cell15");
  element.style.backgroundColor = "#008080";
}
function markCell16() {
  var element = document.getElementById("cell16");
  element.style.backgroundColor = "#008080";
}
function markCell17() {
  var element = document.getElementById("cell17");
  element.style.backgroundColor = "#008080";
}
function markCell18() {
  var element = document.getElementById("cell18");
  element.style.backgroundColor = "#008080";
}
function markCell19() {
  var element = document.getElementById("cell19");
  element.style.backgroundColor = "#008080";
}
function markCell20() {
  var element = document.getElementById("cell20");
  element.style.backgroundColor = "#008080";
}
function markCell21() {
  var element = document.getElementById("cell21");
  element.style.backgroundColor = "#008080";
}
function markCell22() {
  var element = document.getElementById("cell22");
  element.style.backgroundColor = "#008080";
}
function markCell23() {
  var element = document.getElementById("cell23");
  element.style.backgroundColor = "#008080";
}
function markCell24() {
  var element = document.getElementById("cell24");
  element.style.backgroundColor = "#008080";
}


function singleunmarkCell0() {
  var element = document.getElementById("cell0");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell1() {
  var element = document.getElementById("cell1");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell2() {
  var element = document.getElementById("cell2");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell3() {
  var element = document.getElementById("cell3");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell4() {
  var element = document.getElementById("cell4");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell5() {
  var element = document.getElementById("cell5");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell6() {
  var element = document.getElementById("cell6");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell7() {
  var element = document.getElementById("cell7");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell8() {
  var element = document.getElementById("cell8");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell9() {
  var element = document.getElementById("cell9");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell10() {
  var element = document.getElementById("cell10");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell11() {
  var element = document.getElementById("cell11");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell12() {
  var element = document.getElementById("cell12");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell13() {
  var element = document.getElementById("cell13");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell14() {
  var element = document.getElementById("cell14");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell15() {
  var element = document.getElementById("cell15");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell16() {
  var element = document.getElementById("cell16");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell17() {
  var element = document.getElementById("cell17");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell18() {
  var element = document.getElementById("cell18");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell19() {
  var element = document.getElementById("cell19");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell20() {
  var element = document.getElementById("cell20");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell21() {
  var element = document.getElementById("cell21");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell22() {
  var element = document.getElementById("cell22");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell23() {
  var element = document.getElementById("cell23");
  element.style.backgroundColor = "#1d1c1a";
}
function singleunmarkCell24() {
  var element = document.getElementById("cell24");
  element.style.backgroundColor = "#1d1c1a";
}

document.getElementById("rules").style.visibility = "hidden";
window.onbeforeprint = function() {
    document.getElementById("randButton").style.visibility = "hidden";
    document.getElementById("rulesButton").style.visibility = "hidden";
    document.getElementById("printButton").style.visibility = "hidden";
};
window.onafterprint = function() {
    document.getElementById("randButton").style.visibility = "visible";
    document.getElementById("rulesButton").style.visibility = "visible";
    document.getElementById("printButton").style.visibility = "visible";
};


randomize();
update();