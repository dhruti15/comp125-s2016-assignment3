/* main JavaScript file */
/*
* Author: Patel DHRUTI
* Student Number: 300857555
* Date: June 3, 2016
* Date Modified: June 9, 2016
* Description: The main javascript file for my potifolio
* Website: http://comp125-assignment1-summer.azurewebsites.net
* Version: Final Varsion
*/
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    


     function fetchJSONFile(path, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    var data = JSON.parse(httpRequest.responseText);
                    if (callback) callback(data);
                }
            }
        };
        httpRequest.open('GET', path);
        httpRequest.send();
    }
         // this requests the file and executes a callback with the parsed result once
    //   it is available
    fetchJSONFile('content.json', function (data) {
        // do something with your data
        console.log(data);

        var paragraphIDs = ["paraone", "paratwo", "parathree", "parafour", "parafive","parasix","paraseven","paraeig","paranine","paraten","paraele","paratwe","parathi","paraft","parafif","parasis","dh","parao"];
        for (var i = 0; i < paragraphIDs.length; i++) {
            var p = document.getElementById(paragraphIDs[i]);
            p.innerHTML = data.content[i].data;

        }
    });



    var paragraphOne = document.getElementById("paraone");
    var paragraphTwo = document.getElementById("paratwo");
    var paragraphThree = document.getElementById("parathree");
    var paragraphFour = document.getElementById("parafour");
    var paragraphFive = document.getElementById("parafive");
     var paragraphSix = document.getElementById("parasix");
     var paragraphSeven = document.getElementById("paraseven");
     var paragraphEight = document.getElementById("paraeig");
     var paragraphNine = document.getElementById("paranine");
     var paragraphTen = document.getElementById("paraten");
     var paragraphEleven = document.getElementById("paraele");
     var paragraphTwelve = document.getElementById("paratwe");
     var paragraphThirteen = document.getElementById("parathi");
     var paragraphFourteen = document.getElementById("paraft");
     var paragraphFifteen = document.getElementById("parafif");
     var paragraphSixteen = document.getElementById("parasis");
     var paragraphSeventeen = document.getElementById("dh");
      var paragraphEighteen = document.getElementById("parao");
        // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
     var firstName = document.getElementById("firstName");
     var lastName = document.getElementById("lastName");
     var emal = document.getElementById("email");
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    
    
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("Last Name:"+  lastName.value);
        console.log("Email:" + email.value);
        console.log("Contact:" + contactNumber.value);
        console.log("Message:" + message.value)
        
        console.log("++++++++++++++++++++++++++++++++");
    }
    //define your paragraphs array;
    var paragraphs = [];
    //data for my pages 
    
    //second way to define an array;
    //var paragraphs = new Array();
    
    if (paragraphOne){
        paragraphOne.textContent = paragraphs[0];
    }
        if (paragraphTwo){
        paragraphTwo.textContent = paragraphs[1];
    }
    if (paragraphThree)
    {
        paragraphThree.textContent = paragraphs[2];
        
      }

     if (paragraphFour)
    {
        paragraphFour.textContent = paragraphs[3];
    }
     
    if (paragraphFive)
    {
        paragraphFive.textContent = paragraphs[4];
    }
    if (paragraphSix)
    {
        paragraphSix.textContent = paragraphs[5];
    }
    if (paragraphSeven)
    {
        paragraphSeven.textContent = paragraphs[6];
    }
      if (paragraphEight)
    {
        paragraphEight.textContent = paragraphs[7];
    }
     if (paragraphNine)
    {
        paragraphNine.textContent = paragraphs[8];
    }
       if (paragraphTen)
    {
        paragraphTen.textContent = paragraphs[9];
    }
       if (paragraphEleven)
    {
        paragraphEleven.textContent = paragraphs[10];
    }
      if (paragraphTwelve)
    {
        paragraphTwelve.textContent = paragraphs[11];
    }  
    
     if (paragraphThirteen)
    {
        paragraphThirteen.textContent = paragraphs[12];
    }
    if (paragraphFourteen)
    {
        paragraphFourteen.textContent = paragraphs[13];
    }
     if (paragraphFifteen)
    {
        paragraphFifteen.textContent = paragraphs[14];
    }
       if (paragraphSixteen)
    {
        paragraphSixteen.textContent = paragraphs[15];
    }
    if (paragraphSeventeen)
    {
        paragraphSeventeen.textContent = paragraphs[16];
    }
      if (paragraphEighteen)
    {
        paragraphEighteen.textContent = paragraphs[17];
    }
    
    
    


})();