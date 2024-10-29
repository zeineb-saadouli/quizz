document.addEventListener('DOMContentLoaded',function(){//lien entre DOM et js
    function checkAnswer(){// fonction à exécuter lorsque on clique sur le bouton 
        const answers=document.getElementsByName('answer');// selectionner toute les balises ayant name= answer
        let score=0;
        let selectedAnswer=null;
        let correctAnswer=["26","Hyper Text Markup Language","3.14"]// le tableau contenant les bonnes réponses 
        for (const x of answers){// parcourir les réponses de l'utilisateur
            if (x.checked){// si x  ayant name= answer est sélectionné
                selectedAnswer=x.value;// la valeur de x
              if (correctAnswer.includes(selectedAnswer) ){// vérifier si la réponse sélectionnée est dans correctAnswer
                score+=1;// incrimenter le score
              } 
            
            }
        }
    if (score===0){// tester si le score=0, il renvoie la réponse est fausse
        alert("la réponse est fausse");
        
    }else {
        alert(" votre score est :"+ score);// si non afficher le score
    }
    }
    document.getElementById('btn').addEventListener("click",checkAnswer);
})