// variable
const prompt = require('prompt-sync') ();
let list = [];
let choose;
let back;
// Function needed to show multiple times list TODO
function listFunction(){
    let number = 0;
    for(let listElements of list){
        
        number = number + 1
        console.log(`${number}. ${listElements}`)
    }
}

// Fuction needed to multiples times back
function backFunction(){
    back = prompt('Jeżeli chcesz wrócić do menu wyboru wpisz "back": ')
}


// choose option
do{
    // Returns first Value of back
    back = null; 

    
    do{
    
    console.log('\nWybierz co chcesz zrobic:\n1. Wyświetlić liste TODO\n2. Dodać punkt na liste.\n3. Usunąć plik z listy. \n4. Zapisać listę. \n5. Wczytać listę.\n')
    choose  = prompt('Wybierasz opcję: ')
    console.log(' ')
}while(choose != 1 && choose != 2 && choose != 3 && choose != 4 && choose != 5 && choose != 'end');

// Show TODO list
if(choose == 1){
    // If list is empty
    if(list == ''){
        do{
        console.log('Lista jest pusta. ')
        backFunction()
        }while(back != 'back')
    // If is anything on the list
    }else{
        do{
        console.log('Lista rzeczu do zrobienia: ')
        listFunction()
        backFunction()
        }while(back != 'back')
    }
    // Add your personal element to TODO list
}else if(choose == 2){
    
    do{
    add = prompt('Jaki element chciałbyś dodać na listę? ')
    list.push(add)
    listFunction()
    backFunction()
    }while(back != 'back')
}else if(choose == 3){
    limit = list.length
    do{
    console.log('\nLista: ')
    listFunction()
    
    remove = parseInt(prompt('Wybierz numer z listy który chciałbyś usunąć: '))
    }while(remove > limit || remove < 1)
    remove = remove - 1;
    list.splice(remove, 1)
    backFunction()
}else if(choose == 4){
    console.log('Już niedługo');
    backFunction();
}else if(choose == 5){
    console.log('Już niedługo');
    backFunction();
}

}while(back == 'back');
