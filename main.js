function choiceANumber(){
    attemps = 1;
    choicedNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    document.getElementById('message').innerHTML = 'Escolha um número!';
    for (i=0;i<=9; i++){
        document.getElementsByTagName('li')[i].setAttribute('onclick', `selectedNumber(${i+1})`);
    }
    document.getElementsByTagName('button')[0].setAttribute('onclick', ' ');
}

function selectedNumber(number){
    if (attemps < 3) {
        if (number == choicedNumber){
                document.getElementsByTagName('li')[number - 1].setAttribute('class', 'rightNumber');
                document.getElementById('message').innerHTML = 'Parabéns! Você acertou! <a class="tryAgain" onclick="clearAll()">Jogar novamente</a>';
                for(i=0; i<=9;i++){
                    document.getElementsByTagName('li')[i].setAttribute('onclick', ' ')
                }
                
            }else{
                document.getElementsByTagName('li')[number - 1].setAttribute('class', 'wrongNumber');
                document.getElementsByTagName('li')[number - 1].setAttribute('onclick', '');
                if (number > choicedNumber){
                    document.getElementById('message').innerHTML = `O número pensado é menor! Escolha um novo número <strong>[${attemps}/3]</strong>`;
                }else if(number < choicedNumber){
                    document.getElementById('message').innerHTML = `O número pensado é maior! Escolha um novo número <strong>[${attemps}/3]</strong>`;
                }
                attemps++;
            }
        }else{
            if (number == choicedNumber){
                document.getElementsByTagName('li')[choicedNumber - 1].setAttribute('class', 'rightNumber');
                document.getElementById('message').innerHTML = 'Parabéns! Você acertou! <a class="tryAgain" onclick="clearAll()">Jogar novamente</a>';
            }else{
                document.getElementsByTagName('li')[choicedNumber - 1].setAttribute('class', 'rightNumber');
                document.getElementsByTagName('li')[number - 1].setAttribute('class', 'wrongNumber');
                document.getElementById('message').innerHTML = 'Suas tentativas acabaram... <a class="tryAgain" onclick="clearAll()">Jogar novamente</a>';
            }
            
            for(i=0; i<=9;i++){
                document.getElementsByTagName('li')[i].setAttribute('onclick', ' ');
            }
                      
        }
    }
    
    
function clearAll(){
    for (i=0;i<=9; i++){
        document.getElementsByTagName('li')[i].setAttribute('class', 'number');
    }
    document.getElementById('message').innerHTML = 'Clique em começar!';
    document.getElementsByTagName('button')[0].setAttribute('onclick', 'choiceANumber()');

}