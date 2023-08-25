function addUser()
{
    jogador_1= document.getElementById("player1NameInput").value;
    jogador_2= document.getElementById("player2NameInput").value;
    
    localStorage.setItem("jogador_1",jogador_1)
    localStorage.setItem("jogador_2",jogador_2)
    
    window.location ="game_page.html"
}