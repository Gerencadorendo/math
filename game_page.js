player1Name = localStorage.getItem("jogador_1");
player2Name = localStorage.getItem("jogador_2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2)
    
    question_number = "<h4>" + number1 + "X" + number2 + "<h4>"
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}


questionTurn = "player1";
answerTurn = "player2";


function check()
{
	getAnswer = document.getElementById("inputCheckBox").value
    answer = getAnswer.toLowerCase()
    if(answer == word)
    {
        if(answerTurn == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score
        }
        else{
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score
        }
    }
    if(questionTurn == "player1")
    {
        questionTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: " + player2Name + "!"
    }
    else{
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: " + player1Name + "!"
    }

    if(answerTurn == "player1")
    {
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta: " + player2Name + "!"
    }
    else{
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta: " + player1Name + "!"
    }
    document.getElementById("output").innerHTML = ""
}
