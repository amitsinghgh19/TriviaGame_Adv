

//  Global Variables
var timeRemaning= 15;
var correctAns=0;
var incorrectAns=0;
var unAns=0;
var qusNo=1;
var refreshIntervalId= null;

//Hide Jombotron after selecting START GAME
$(document).ready(function() {
    $("#startBtn").click(function(){
    $("#welcomeContainer").hide();
    $("#qus1").show();
    $("#Q1Card1, #Q1Card2, #Q1Card3, #Q2Card1, #Q2Card2, #Q2Card3, #Q3Card1, #Q3Card2, #Q3Card3, #Q4Card1, #Q4Card2, #Q4Card3, #Q5Card1, #Q5Card2, #Q5Card3, #Q6Card1, #Q6Card2, #Q6Card3, #Q7Card1, #Q7Card2, #Q7Card3, #Q8Card1, #Q8Card2, #Q8Card3, #Q9Card1, #Q9Card2, #Q9Card3, #Q10Card1, #Q10Card2, #Q10Card3").hide();
    $("#timerDiv").show();
    $("#resultContainer").hide();
    startCountdown();
    })
   
});

$("input").click(function(){
    getResult();
    clearInterval(refreshIntervalId);
    qusNo++;
    })



// Counts down and displays the time to the user
function countdown(){

    // Decrement the timeRemaning, down from 15 seconds
    timeRemaning--;

    // Display the timeRemaning to the user in the DOM
    $('#timeRemaning').html(timeRemaning + " Seconds");
    console.log(timeRemaning);
   
    /* if timeRemaning <=0 then stop the timer */
    if(timeRemaning <= 0){
        clearInterval(refreshIntervalId);
        getResult();
        qusNo++;
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
    
    
    //*********************************************************************************************************************************    
    // Determine the right/wrong/unanswered counts 
    function ansQus1(){

    if(Q1 == undefined){
        console.log("Q1 is =="+Q1);
        unAns++;
        $("#qus1Div").hide();
        $("#Q1Card3").show();
        setTimeout(
            function() 
            {
                $("#qus2").show();
                console.log("passing qus 2 show");
                $("#Q1Card3").hide();
                $("#Q2Card1,#Q2Card2,#Q2Card3,#resultContainer").hide();
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
                $("#Q1Card1").hide();
                $("#Q2Card1,#Q2Card2,#Q2Card3,#resultContainer").hide();
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
                $("#Q1Card2").hide();
                $("#Q2Card1,#Q2Card2,#Q2Card3,#resultContainer").hide();
                $("#qus1").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
            }, 3000);
    }
    }


 //*********************************************************************************************************************************   
    function ansQus2(){
    if(Q2 == undefined){
        unAns++;
        $("#qus2Div").hide();
        $("#Q2Card3").show();
        setTimeout(
            function() 
            {
                $("#qus3").show();
                $("#Q2Card3").hide();
                $("#Q3Card1,#Q3Card2,#Q3Card3,#resultContainer").hide();
                $("#qus2").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
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
                $("#Q2Card1").hide();
                $("#Q3Card1,#Q3Card2,#Q3Card3,#resultContainer").hide();
                $("#qus2").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
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
                $("#Q2Card2").hide();
                $("#Q3Card1,#Q3Card2,#Q3Card3,#resultContainer").hide();
                $("#qus2").hide();
                timeRemaning= 15;
                $('#timeRemaning').html(timeRemaning + " Seconds");
                startCountdown();
            }, 3000);
    }
    }
 //*********************************************************************************************************************************   
    function ansQus3(){
    if(Q3 == undefined){
        unAns++;
        $("#qus3Div").hide();
        $("#Q3Card3").show();
        setTimeout(
        function() 
        {
            $("#qus4").show();
            $("#Q3Card3").hide();
            $("#Q4Card1,#Q4Card2,#Q4Card3,#resultContainer").hide();
            $("#qus3").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q3Card1").hide();
            $("#Q4Card1,#Q4Card2,#Q4Card3,#resultContainer").hide();
            $("#qus3").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q3Card2").hide();
            $("#Q4Card1,#Q4Card2,#Q4Card3,#resultContainer").hide();
            $("#qus3").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    }

 //*********************************************************************************************************************************   
    function ansQus4(){
    if(Q4 == undefined){
        unAns++;
        $("#qus4Div").hide();
        $("#Q4Card3").show();
        setTimeout(
        function() 
        {
            $("#qus5").show();
            $("#Q4Card3").hide();
            $("#Q5Card1,#Q5Card2,#Q5Card3,#resultContainer").hide();
            $("#qus4").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q4Card1").hide();
            $("#Q5Card1,#Q5Card2,#Q5Card3,#resultContainer").hide();
            $("#qus4").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q4Card2").hide();
            $("#Q5Card1,#Q5Card2,#Q5Card3,#resultContainer").hide();
            $("#qus4").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    }
   
 //*********************************************************************************************************************************   
    function ansQus5(){
    if(Q5 == undefined){
        unAns++;
        $("#qus5Div").hide();
        $("#Q5Card3").show();
        setTimeout(
        function() 
        {
            $("#qus6").show();
            $("#Q5Card3").hide();
            $("#Q6Card1,#Q6Card2,#Q6Card3,#resultContainer").hide();
            $("#qus5").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q5Card1").hide();
            $("#Q6Card1,#Q6Card2,#Q6Card3,#resultContainer").hide();
            $("#qus5").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q5Card2").hide();
            $("#Q6Card1,#Q6Card2,#Q6Card3,#resultContainer").hide();
            $("#qus5").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    }
   
 //*********************************************************************************************************************************   
    function ansQus6(){
    if(Q6 == undefined){
        unAns++;
        $("#qus6Div").hide();
        $("#Q6Card3").show();
        setTimeout(
        function() 
        {
            $("#qus7").show();
            $("#Q6Card3").hide();
            $("#Q7Card1,#Q7Card2,#Q7Card3,#resultContainer").hide();
            $("#qus6").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q6Card1").hide();
            $("#Q7Card1,#Q7Card2,#Q7Card3,#resultContainer").hide();
            $("#qus6").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q6Card2").hide();
            $("#Q7Card1,#Q7Card2,#Q7Card3,#resultContainer").hide();
            $("#qus6").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    }

 //*********************************************************************************************************************************   

    function ansQus7(){
    if(Q7 == undefined){
        unAns++;
        $("#qus7Div").hide();
        $("#Q7Card3").show();
        setTimeout(
        function() 
        {
            $("#qus8").show();
            $("#Q7Card3").hide();
            $("#Q8Card1,#Q8Card2,#Q8Card3,#resultContainer").hide();
            $("#qus7").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q7Card1").hide();
            $("#Q8Card1,#Q8Card2,#Q8Card3,#resultContainer").hide();
            $("#qus7").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q7Card2").hide();
            $("#Q8Card1,#Q8Card2,#Q8Card3,#resultContainer").hide();
            $("#qus7").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    }
 //*********************************************************************************************************************************   

    function ansQus8(){
    if(Q8 == undefined){
        unAns++;
        $("#qus8Div").hide();
        $("#Q8Card3").show();
        setTimeout(
        function() 
        {
            $("#qus9").show();
            $("#Q8Card3").hide();
            $("#Q9Card1,#Q9Card2,#Q9Card3,#resultContainer").hide();
            $("#qus8").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q8Card1").hide();
            $("#Q9Card1,#Q9Card2,#Q9Card3,#resultContainer").hide();
            $("#qus8").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q8Card2").hide();
            $("#Q9Card1,#Q9Card2,#Q9Card3,#resultContainer").hide();
            $("#qus8").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    
    }

 //*********************************************************************************************************************************   
    function ansQus9(){
    if(Q9 == undefined){
        unAns++;
        $("#qus9Div").hide();
        $("#Q9Card3").show();
        setTimeout(
        function() 
        {
            $("#qus10").show();
            $("#Q9Card3").hide();
            $("#Q10Card1,#Q10Card2,#Q10Card3,#resultContainer").hide();
            $("#qus9").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q9Card1").hide();
            $("#Q10Card1,#Q10Card2,#Q10Card3,#resultContainer").hide();
            $("#qus9").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
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
            $("#Q9Card2").hide();
            $("#Q10Card1,#Q10Card2,#Q10Card3,#resultContainer").hide();
            $("#qus9").hide();
            timeRemaning= 15;
            $('#timeRemaning').html(timeRemaning + " Seconds");
            startCountdown();
        }, 3000);
    }
    }
   
 //*********************************************************************************************************************************   
    function ansQus10(){
    if(Q10 == undefined){
        unAns++;
        $("#qus10Div").hide();
        $("#Q10Card3").show();
        setTimeout(
        function() 
        {
            $("#resultContainer").show();
            $("#Q10Card3").hide();
            $("#qus10").hide();
            stopCountdown();
        }, 3000);
    }
    else if(Q10 == "Quirrell, Lockhart, Lupin, Moody, Umbridge, Snape"){
        correctAns++;
        $("#qus10Div").hide();
        $("#Q10Card1").show();
        setTimeout(
        function() 
        {
            $("#resultContainer").show();
            $("#Q10Card1").hide();
            $("#qus10").hide();
            stopCountdown();
        }, 3000);
    }
    else{
        incorrectAns++;
        $("#qus10Div").hide();
        $("#Q10Card2").show();
        setTimeout(
        function() 
        {
            $("#resultContainer").show();
            $("#Q10Card2").hide();
            $("#qus10").hide();
            stopCountdown();
        }, 3000);
    }
    }
   
//*********************************************************************************************************************************   
    //call functionQ1-Q2 according to the current question number displayed 
    if(qusNo === 1)
    {
       ansQus1();
       console.log("qusNo is: "+qusNo);
       console.log("calling function-ansQus1");
       console.log("Correct answer="+correctAns);
       console.log("incorrect answer="+incorrectAns);
       console.log("unanswered="+unAns);
    }
    else if(qusNo === 2)
        {
        console.log("qusNo is: "+qusNo);
        ansQus2();
        console.log("calling function-ansQus2");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 3)
        {
        console.log("qusNo is: "+qusNo);
        ansQus3();
        console.log("calling function-ansQus3");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 4)
        {
        console.log("qusNo is: "+qusNo);
        ansQus4();
        console.log("calling function-ansQus4");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 5)
        {
        console.log("qusNo is: "+qusNo);
        ansQus5();
        console.log("calling function-ansQus5");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 6)
        {
        console.log("qusNo is: "+qusNo);
        ansQus6();
        console.log("calling function-ansQus6");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 7)
        {
        console.log("qusNo is: "+qusNo);
        ansQus7();
        console.log("calling function-ansQus7");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 8)
        {
        console.log("qusNo is: "+qusNo);
        ansQus8();
        console.log("calling function-ansQus8");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 9)
        {
        console.log("qusNo is: "+qusNo);
        ansQus9();
        console.log("calling function-ansQus9");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
        }
    else if(qusNo === 10)
    {
        console.log("qusNo is: "+qusNo);
        ansQus10();
        console.log("calling function-ansQus10");
        console.log("Correct answer="+correctAns);
        console.log("incorrect answer="+incorrectAns);
        console.log("unanswered="+unAns);
    }
    else{
        console.log("no more questions!"); 
    }
    
 //*********************************************************************************************************************************   
    // After answers are validated, display the score results
    $('#correct-ans').html(correctAns);
    $('#incorrect-ans').html(incorrectAns);
    $('#un-ans').html(unAns);
 //*********************************************************************************************************************************   
    
}

//*********************************************************************************************************************************   
//Hide result after selecting start Over Button 
//and reset the variables value
//then play again
$("#startOverBtn").click(function(){
    //location.reload();

     // Remove the value saved previously by Checked values of Radio Buttons
     $('input[name="q1"]').prop('checked', false);
     $('input[name="q2"]').prop('checked', false);
     $('input[name="q3"]').prop('checked', false);
     $('input[name="q4"]').prop('checked', false);
     $('input[name="q5"]').prop('checked', false);
     $('input[name="q6"]').prop('checked', false);
     $('input[name="q7"]').prop('checked', false);
     $('input[name="q8"]').prop('checked', false);
     $('input[name="q9"]').prop('checked', false);
     $('input[name="q10"]').prop('checked', false);


    timeRemaning= 15;
    correctAns=0;
    incorrectAns=0;
    unAns=0;
    qusNo=1;
    refreshIntervalId= null;
     $('#timeRemaning').html(timeRemaning + " Seconds");
    $("#resultContainer").hide();
    $("#qus1").css("display", "block");
    $("#qus1Div, #qus2Div , #qus3Div , #qus4Div , #qus5Div , #qus6Div , #qus7Div , #qus8Div , #qus9Div , #qus10Div" ).show();
    $("#timerDiv").show();
    startCountdown();
});
//*********************************************************************************************************************************   

