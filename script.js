function submitAnswers(){
    
    var total = 5;
    var score =0;
    var i;
       var q1 = document.forms["quizForm"]["q1"].value;
       var q2 = document.forms["quizForm"]["q2"].value;
       var q3 = document.forms["quizForm"]["q3"].value;
       var q4 = document.forms["quizForm"]["q4"].value;
       var q5 = document.forms["quizForm"]["q5"].value;
    
    
       //alert(q1);
    
    for(i=1;i<=total;i++){    
    
        if( eval('q'+i)==null || eval('q'+i)=='')

        {

            alert("You missed Question no." + i);
            return false;
        }
        
    }

    var answers=["a","a","d","b","a"];
    
    
    for(i=1;i<=total;i++)
    {
        var j= i-1;
            if(eval('q'+i) == answers[j])
            {

                score++;

            } 
    }
    
    var results = document.getElementById('results');
    results.innerHTML='<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3';
    //alert("You scored " + score + " out of "+total);
    
    
    
    
    return false;
    
    
}