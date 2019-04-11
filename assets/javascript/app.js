

//  Global Variables
var timeRemaning= 15;
var correctAns=0;
var incorrectAns=0;
var unAns=0;

var refreshIntervalId= null;

//Hide Jombotron after selecting START GAME
$(document).ready(function() {

    $("#startBtn").click(function(){
    $("#welcomeContainer").hide();
    $("#qus1").show();
    $("#Q1Card1, #Q1Card2, #Q1Card3, #Q2Card1, #Q2Card2, #Q2Card3, #Q3Card1, #Q3Card2, #Q3Card3, #Q4Card1, #Q4Card2, #Q4Card3, #Q5Card1, #Q5Card2, #Q5Card3, #Q6Card1, #Q6Card2, #Q6Card3, #Q7Card1, #Q7Card2, #Q7Card3, #Q8Card1, #Q8Card2, #Q8Card3, #Q9Card1, #Q9Card2, #Q9Card3, #Q10Card1, #Q10Card2, #Q10Card3").hide();
    // $("#submitBtn").show();
    $("#timerDiv").show();
    $("#resultContainer").hide();
    startCountdown();
    })
   
});

$("input").click(function(){
    // $("#timerDiv").hide();
    // $("#resultContainer").show();
    getResult();
    clearInterval(refreshIntervalId);
    })

$("#startOverBtn").click(function(){
    location.reload();
    })

// Counts down and displays the time to the user
function countdown(){

    // Decrement the timeRemaning, down from 120 seconds
    timeRemaning--;

    // Display the timeRemaning to the user in the DOM
    $('#timeRemaning').html(timeRemaning + " Seconds");
    console.log(timeRemaning);
   
    /* if timeRemaning <=0 then stop the timer */
    if(timeRemaning <= 0){
        clearInterval(refreshIntervalId);
        //$("#gameContainer").hide();
        //$("#doneBtn").hide();
        //$("#resultContainer").show();
        getResult();
        $("#qus1Div, #qus2Div, #qus3Div, #qus4Div, #qus5Div, #qus6Div, #qus7Div, #qus8Div, #qus9Div, #qus10Div, #resultContainer").hide();
    }
}

// Show the countdown, increment is 1 second
function startCountdown(){
    refreshIntervalId = setInterval(countdown, 1000);
}

// Stop the countdown
function stopCountdown(){
    clearInterval(refreshIntervalId);
}

//Get Result
function getResult(){

    // Checked values of Radio Buttons
    var Q1 = $('input:radio[name="q1"]:checked').val();
    // console.log("Value of Q1 is : "+Q1);
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();
    var Q6 = $('input:radio[name="q6"]:checked').val();
    var Q7 = $('input:radio[name="q7"]:checked').val();
    var Q8 = $('input:radio[name="q8"]:checked').val();
    var Q9 = $('input:radio[name="q9"]:checked').val();
    var Q10 = $('input:radio[name="q10"]:checked').val();
    //console.log("Value of Q10 is:"+Q10+".");

    // var Q1 = $('input[name="q1"]:radio:checked').val();
    // console.log("Value of Q1 is : "+Q1);
    // var Q1 = $('input[name="q2"]:radio:checked').val();
    // var Q2 = $('input[name="q3"]:radio:checked').val();
    // var Q3 = $('input[name="q4"]:radio:checked').val();
    // var Q4 = $('input[name="q5"]:radio:checked').val();
    // var Q5 = $('input[name="q6"]:radio:checked').val();
    // var Q6 = $('input[name="q7"]:radio:checked').val();
    // var Q7 = $('input[name="q8"]:radio:checked').val();
    // var Q8 = $('input[name="q9"]:radio:checked').val();
    // var Q9 = $('input[name="q10"]:radio:checked').val();
    //*********************************************************************************************************************************    
    // Determine the right/wrong/unanswered counts 
    function ansQus1(){

   
    if(Q1 == undefined){
        unAns++;
        $("#qus1Div").hide();
        $("#Q1Card3").show();
        setTimeout(
            function() 
            {
                //$("#qus2").show();
                //$("#qus1, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
                $("#Q1Card3").hide();
                $("#Q2Card1,#Q2Card2,#Q2Card3,#resultContainer").hide();
                //clearInterval(refreshIntervalId);
                $("#qus1").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
            }, 3000);
    }
    else if(Q1 == "Treacle tart"){
        correctAns++;
        $("#qus1Div").hide();
        $("#Q1Card1").show();
        setTimeout(
            function() 
            {
                $("#qus2").show();
                //$("#qus1, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
                $("#Q1Card1").hide();
                $("#Q2Card1,#Q2Card2,#Q2Card3,#resultContainer").hide();
                //clearInterval(refreshIntervalId);
                $("#qus1").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
            }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus1Div").hide();
        $("#Q1Card2").show();
        setTimeout(
            function() 
            {
                $("#qus2").show();
                //$("#qus1, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
                $("#Q1Card2").hide();
                $("#Q2Card1,#Q2Card2,#Q2Card3,#resultContainer").hide();
                //clearInterval(refreshIntervalId);
                $("#qus1").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
            }, 3000);
    }
    }

    if(Q1 == undefined || Q1 == "Lemon drops" || Q1 == "Pumpkin juice" || Q1 == "Mrs Weasley's fudge" || Q1 == "Treacle tart" )
    {
       ansQus1();
    }
    //ansQus1();
 //*********************************************************************************************************************************   
    function ansQus2(){
    // $("#qusDiv1").hide();
    //startCountdown();
    if(Q2 == undefined){
        unAns++;
        //$("#qus2Div").hide();
        $("#Q2Card3").show();
        setTimeout(
            function() 
            {
                //$("#qus3").show();
                //$("#qus1, #qus2, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
                $("#Q2Card3").hide();
                $("#Q3Card1,#Q3Card2,#Q3Card3,#resultContainer").hide();
                // timeRemaning= 15;
                // $('#timeRemaning').html(timeRemaning + " Seconds");
                // startCountdown();
            }, 3000);
    }
    else if(Q2 == "Filius Flitwick"){
        correctAns++;
        $("#qus2Div").hide();
        $("#Q2Card1").show();
        setTimeout(
            function() 
            {
                $("#qus3").show();
                //$("#qus1, #qus2, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
                $("#Q2Card1").hide();
                $("#Q3Card1,#Q3Card2,#Q3Card3,#resultContainer").hide();
                // timeRemaning= 15;
                // $('#timeRemaning').html(timeRemaning + " Seconds");
                // startCountdown();
            }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus2Div").hide();
        $("#Q2Card2").show();
        setTimeout(
            function() 
            {
                $("#qus3").show();
                //$("#qus1, #qus2, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
                $("#Q2Card2").hide();
                $("#Q3Card1,#Q3Card2,#Q3Card3,#resultContainer").hide();
                // timeRemaning= 15;
                // $('#timeRemaning').html(timeRemaning + " Seconds");
                // startCountdown();
            }, 3000);
    }
    }
    if(Q2 == undefined || Q2 == "Minerva McGonagall" || Q2 == "Severus Snape" || Q2 == "Filius Flitwick" || Q2 == "Horace Slughorn" )
    {
       ansQus2();
    }
    //ansQus2();
 //*********************************************************************************************************************************   
    function ansQus3(){
    if(Q3 == undefined){
        unAns++;
        //$("#qus3Div").hide();
        $("#Q3Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus4").show();
            //$("#qus1, #qus2, #qus3, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q3Card3").hide();
            $("#Q4Card1,#Q4Card2,#Q4Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q3 == "The dungeons"){
        correctAns++;
        $("#qus3Div").hide();
        $("#Q3Card1").show();
        setTimeout(
        function() 
        {
            $("#qus4").show();
           // $("#qus1, #qus2, #qus3, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q3Card1").hide();
            $("#Q4Card1,#Q4Card2,#Q4Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus3Div").hide();
        $("#Q3Card2").show();
        setTimeout(
        function() 
        {
            $("#qus4").show();
            //$("#qus1, #qus2, #qus3, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q3Card2").hide();
            $("#Q4Card1,#Q4Card2,#Q4Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q3 == undefined || Q3 == "Next to the kitchens" || Q3 == "In the West Tower" || Q3 == "The dungeons" || Q3 == "Below the Great Hall" )
    {
       ansQus3();
    }
    //ansQus3();
 //*********************************************************************************************************************************   
    function ansQus4(){
    if(Q4 == undefined){
        unAns++;
        //$("#qus4Div").hide();
        $("#Q4Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus5").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q4Card3").hide();
            $("#Q5Card1,#Q5Card2,#Q5Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q4 == "Secrets of the Darkest Art"){
        correctAns++;
        $("#qus4Div").hide();
        $("#Q4Card1").show();
        setTimeout(
        function() 
        {
            $("#qus5").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q5Card1").hide();
            $("#Q5Card1,#Q5Card2,#Q5Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus4Div").hide();
        $("#Q4Card2").show();
        setTimeout(
        function() 
        {
            $("#qus5").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q4Card2").hide();
            $("#Q5Card1,#Q5Card2,#Q5Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q4 == undefined || Q4 == "Magik Moste Evil" || Q4 == "Secrets of the Darkest Art" || Q4 == "A Guide to Medieval Sorcery" || Q4 == "Moste Potente Potions" )
    {
       ansQus4();
    }
    //ansQus4();

 //*********************************************************************************************************************************   
    function ansQus5(){
    if(Q5 == undefined){
        unAns++;
        //$("#qus5Div").hide();
        $("#Q5Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus6").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q5Card3").hide();
            $("#Q6Card1,#Q6Card2,#Q6Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q5 == "The Fat Friar"){
        correctAns++;
        $("#qus5Div").hide();
        $("#Q5Card1").show();
        setTimeout(
        function() 
        {
            $("#qus6").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q6Card1").hide();
            $("#Q6Card1,#Q6Card2,#Q6Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus5Div").hide();
        $("#Q5Card2").show();
        setTimeout(
        function() 
        {
            $("#qus6").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus7, #qus8, #qus9, #qus10").hide();
            $("#Q5Card2").hide();
            $("#Q6Card1,#Q6Card2,#Q6Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q5 == undefined || Q5 == "Cuthbert Binns" || Q5 == "Sir Patrick Delaney-Podmore" || Q5 == "The Fat Friar" || Q5 == "The Grey Lady" )
    {
       ansQus5();
    }
    //ansQus5();


 //*********************************************************************************************************************************   
    function ansQus6(){
    if(Q6 == undefined){
        unAns++;
        //$("#qus6Div").hide();
        $("#Q6Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus7").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus8, #qus9, #qus10").hide();
            $("#Q6Card3").hide();
            $("#Q7Card1,#Q7Card2,#Q7Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q6 == "Thestrals"){
        correctAns++;
        $("#qus6Div").hide();
        $("#Q6Card1").show();
        setTimeout(
        function() 
        {
            $("#qus7").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus8, #qus9, #qus10").hide();
            $("#Q7Card1").hide();
            $("#Q7Card1,#Q7Card2,#Q7Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus6Div").hide();
        $("#Q6Card2").show();
        setTimeout(
        function() 
        {
            $("#qus7").show();
           // $("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus8, #qus9, #qus10").hide();
            $("#Q6Card2").hide();
            $("#Q7Card1,#Q7Card2,#Q7Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q6 == undefined || Q6 == "Hippogriffs" || Q6 == "Thestrals" || Q6 == "Centaurs" || Q6 == "Manticores" )
    {
       ansQus6();
    }
   //ansQus6();


 //*********************************************************************************************************************************   

    function ansQus7(){
    if(Q7 == undefined){
        unAns++;
        //$("#qus5Div").hide();
        $("#Q7Card3").show();
        setTimeout(
        function() 
        {
           // $("#qus8").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus9, #qus10").hide();
            $("#Q7Card3").hide();
            $("#Q8Card1,#Q8Card2,#Q8Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q7 == "The Room of Requirement"){
        correctAns++;
        $("#qus7Div").hide();
        $("#Q7Card1").show();
        setTimeout(
        function() 
        {
            $("#qus8").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus9, #qus10").hide();
            $("#Q8Card1").hide();
            $("#Q8Card1,#Q8Card2,#Q8Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus7Div").hide();
        $("#Q7Card2").show();
        setTimeout(
        function() 
        {
            $("#qus8").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus9, #qus10").hide();
            $("#Q7Card2").hide();
            $("#Q8Card1,#Q8Card2,#Q8Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q7 == undefined || Q7 == "The Restricted Section of the Library" || Q7 == "The girls bathroom on the first floor" || Q7 == "The Prefect's Bathroom" || Q7 == "The Room of Requirement" )
    {
       ansQus7();
    }
    //ansQus7();
 //*********************************************************************************************************************************   

    function ansQus8(){
    if(Q8 == undefined){
        unAns++;
        //$("#qus8Div").hide();
        $("#Q8Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus9").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus10").hide();
            $("#Q8Card3").hide();
            $("#Q9Card1,#Q9Card2,#Q9Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q8 == "Armando Dippet"){
        correctAns++;
        $("#qus8Div").hide();
        $("#Q8Card1").show();
        setTimeout(
        function() 
        {
            $("#qus9").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus10").hide();
            $("#Q9Card1").hide();
            $("#Q9Card1,#Q9Card2,#Q9Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus8Div").hide();
        $("#Q8Card2").show();
        setTimeout(
        function() 
        {
            $("#qus9").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus10").hide();
            $("#Q8Card2").hide();
            $("#Q9Card1,#Q9Card2,#Q9Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q8 == undefined || Q8 == "Armando Dippet" || Q8 == "Albus Dumbledore" || Q8 == "Phineas Nigellus Black" || Q7 == "The Room of Requirement" )
    {
       ansQus8();
    }
    //ansQus8();

 //*********************************************************************************************************************************   
    function ansQus9(){
    if(Q9 == undefined){
        unAns++;
        //$("#qus9Div").hide();
        $("#Q9Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus10").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9").hide();
            $("#Q9Card3").hide();
            $("#Q10Card1,#Q10Card2,#Q10Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q9 == "142"){
        correctAns++;
        $("#qus9Div").hide();
        $("#Q9Card1").show();
        setTimeout(
        function() 
        {
            $("#qus10").show();
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9").hide();
            $("#Q10Card1").hide();
            $("#Q10Card1,#Q10Card2,#Q10Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus9Div").hide();
        $("#Q9Card2").show();
        setTimeout(
        function() 
        {
            $("#qus10").show();
           //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9").hide();
            $("#Q9Card2").hide();
            $("#Q10Card1,#Q10Card2,#Q10Card3,#resultContainer").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q9 == undefined || Q9 == "142" || Q9 == "143" || Q9 == "163" || Q9 == "152" )
    {
       ansQus9();
    }
    //ansQus9();
 //*********************************************************************************************************************************   
    function ansQus10(){
    if(Q10 == undefined){
        unAns++;
        //$("#qus9Div").hide();
        $("#Q10Card3").show();
        setTimeout(
        function() 
        {
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            //$("#resultContainer").show();
            $("#Q10Card3").hide();
            $("#Q11Card1,#Q11Card2,#Q11Card3").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else if(Q10 == "Quirrell, Lockhart, Lupin, Moody, Umbridge, Snape"){
        correctAns++;
        $("#qus10Div").hide();
        $("#Q10Card1").show();
        setTimeout(
        function() 
        {
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#resultContainer").show();
            $("#Q11Card1").hide();
            $("#Q11Card1,#Q11Card2,#Q11Card3").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus10Div").hide();
        $("#Q10Card2").show();
        setTimeout(
        function() 
        {
            //$("#qus1, #qus2, #qus3, #qus4, #qus5, #qus6, #qus7, #qus8, #qus9, #qus10").hide();
            $("#resultContainer").show();
            $("#Q10Card2").hide();
            $("#Q11Card1,#Q11Card2,#Q11Card3").hide();
            // timeRemaning= 15;
            // $('#timeRemaning').html(timeRemaning + " Seconds");
            // startCountdown();
        }, 3000);
    }
    }
    if(Q10 == undefined || Q10 == "Quirrell, Lockhart, Lupin, Moody, Umbridge, Snape" || Q10 == "Quirrell, Lockhart, Lupin, Moody, Umbridge, Slughorn" || Q10 == "Quirrell, Lockhart, Lupin, Umbridge, Moody, Snape" || Q10 == "Quirrell, Lockhart, Lupin, Moody, Snape, Carrow" )
    {
       ansQus10();
    }
   //ansQus10();

 //*********************************************************************************************************************************   
    // After answers are validated, display the score results
    $('#correct-ans').html(correctAns);
    $('#incorrect-ans').html(incorrectAns);
    $('#un-ans').html(unAns);
    
}

