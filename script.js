(function(){
    let userWeapon = '';

    function generateWeapon(){
        let random = Math.floor(Math.random() * 3);
        let weapon;
        switch(random){
            case 0:
                weapon = 'rock';
                break;
            case 1:
                weapon = 'paper';
                break;
            case 2:
                weapon = 'scissors';
                break;
        }
        return weapon;
    } 

    document.getElementById("rock").addEventListener("click", function(){
        userWeapon = 'rock';
    })
    document.getElementById("paper").addEventListener("click", function(){
        userWeapon = 'paper';
    })
    document.getElementById("scissors").addEventListener("click", function(){
        userWeapon = 'scissors';
    })
    document.getElementById("play").addEventListener("click", function(){
        if(userWeapon == ''){
            alert('Please select your weapon.');
        }else{
            let vilainWeapon = generateWeapon();
            let conclusion = '';

            if(userWeapon == 'rock'){
                switch (vilainWeapon) {
                    case 'rock':
                        conclusion = 'Draw';
                        break;
                    case 'paper':
                        conclusion = 'Lose';
                        break;
                    case 'scissors':
                        conclusion = 'Win';
                        break;
                }
            }else if(userWeapon == 'paper'){
                switch (vilainWeapon) {
                    case 'rock':
                        conclusion = 'Win';
                        break;
                    case 'paper':
                        conclusion = 'Draw';
                        break;
                    case 'scissors':
                        conclusion = 'Lose';
                        break;
                }
            }else{
                switch (vilainWeapon) {
                    case 'rock':
                        conclusion = 'Lose';
                        break;
                    case 'paper':
                        conclusion = 'Win';
                        break;
                    case 'scissors':
                        conclusion = 'Draw';
                        break;
                }
            }
            document.write('<p>You ' + conclusion + '</p>');
        }
    })
})();