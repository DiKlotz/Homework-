let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
        
let rainbow = hero.concat(native, destination);
    rainbow.reverse();
    rainbow.splice(0, 2, 'Richard');
    rainbow.pop()
    rainbow.push('Gave', 'Battle', 'In', 'Vain');
    console.log(rainbow); // ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']
    
    rainbow.forEach(function(data) {
        switch(true) {
            case (data === 'Richard'): {
                background = 'red';
                break;
            }
            case (data === 'Of'): {
                background = 'orange';
                break;
            }
            case (data === 'York'): {
                background = 'yellow';
                break;
            }
            case (data === 'Gave'): {
                background = 'yellowgreen';
                break;
            }
            case (data === 'Battle'): {
                background = 'cornflowerblue';
                break;
            }
            case (data === 'In'): {
                background = 'mediumblue';
                break;
            }
            case (data === 'Vain'): {
                background = 'mediumorchid';
                break;
            }
            };
            document.write(`<p style="float:left; padding: 0 30px 0 30px; text-align:center;"><span style="display:block; height:60px; width:60px; border-radius: 60px; background-color: ${background}; margin: 20px auto; "></span>${data}</p>`);   
    });