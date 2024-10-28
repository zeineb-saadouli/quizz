document.addEventListener('DOMContentLoaded',function(){
    function checkAnswer(){
        const answers=document.getElementsByName('answer');
        let score=0;
        let selectedAnswer=null;
        for (const x of answers){
            if (x.checked){
                selectedAnswer = x.value;
                break;
            }
        }
        if (selectedAnswer === null ){
            alert("sélectionner une réponse");
            return
        }
        switch (selectedAnswer) 
        {case "26": score+=1;
        break;
        case"21": score=0;

        }
    
    }
})



