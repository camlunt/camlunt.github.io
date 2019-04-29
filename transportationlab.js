    //string variables
    screenQ = "What are those cool screens with the cars on them?";
    screenA = "The screens show live feeds of Utah highway. We have the capability of viewing 6 different camera views across the state at one time.";
    projectQ = "What type of research projects do you work on?";
    projectA = "We work on a variety of transportation-related projects, most of which have connection to traffic safety. Recent completed theses include topics such as pedestrian walking speeds, and protected left turn thresholds.";
    peopleQ = "How many people work in there?";
    peopleA = "In Winter 2019 there were 6 graduate students and 15 undergraduate students working in here. These students work with one of 2 professors.";
    silverQ = "What is that metal box thing?";
    silverA = "It's a traffic control box.";
    phasingQ = "What is that rectangular box that has mini lights flashing?";
    phasingA = "It's a phasing diagram. It cycles through a stoplight timing system, and we can program it to give longer greens to the main road, shorter left turn times, etc.";

    //paste in the default strings (questions); should happen when page is loaded or refreshed
    document.getElementById("screens").innerHTML=screenQ;
    document.getElementById("projects2").innerHTML=projectQ;
    document.getElementById("people2").innerHTML=peopleQ;
    document.getElementById("silver2").innerHTML=silverQ;
    document.getElementById("phasing2").innerHTML=phasingQ;

    //functions from the onclicks
    //Function 1
    function changeSCREENwords() {
      if (document.getElementById("screens2").innerHTML==screenQ) {
        document.getElementById("screens2").innerHTML=screenA;
      }
      else {
        document.getElementById("screens2").innerHTML=screenQ;
      }
    }
    //Function 2
    function changePROJECTwords() {
      if (document.getElementById("projects2").innerHTML==projectQ) {
        document.getElementById("projects2").innerHTML=projectA;
      }
      else {
        document.getElementById("projects2").innerHTML=projectQ;
      }
    }
    //Function 3
    function changePEOPLEwords() {
      if (document.getElementById("people2").innerHTML==peopleQ) {
        document.getElementById("people2").innerHTML=peopleA;
      }
      else {
        document.getElementById("people2").innerHTML=peopleQ;
      }
    }
    //Function 4
    function changeSILVERwords() {
      if (document.getElementById("silver2").innerHTML==silverQ) {
        document.getElementById("silver2").innerHTML=silverA;
      }
      else {
        document.getElementById("silver2").innerHTML=silverQ;
      }
    }
    //Function 5
    function changePHASINGwords() {
      if (document.getElementById("phasing2").innerHTML==phasingQ) {
        document.getElementById("phasing2").innerHTML=phasingA;
      }
      else {
        document.getElementById("phasing2").innerHTML=phasingQ;
      }
    }
