// variable
const prompt = require('prompt-sync') ();
const fs = require('fs');
let list = [];
let choose;
let back;
// Fuction needed to show multiple times list TODO
function listFunction(){
    let number = 0;
    for(let listElements of list){
        
        number = number + 1
        console.log(`${number}. ${listElements}`)
    }
}

// Function needed to multiples times back
function backFunction(){
    back = prompt('Jeżeli chcesz wrócić do menu wyboru wpisz "back": ')
}


// choose option
do{
    // Returns first Value of back
    back = null; 

    
    do{
    
    console.log('\nWybierz co chcesz zrobic:\n1. Wyświetlić liste TODO\n2. Dodać punkt na liste.\n3. Usunąć plik z listy. \n4. Zapisać listę. \n5. Wczytać listę.\nJeżeli chcesz wyłączyć program wpisz "end".\n')
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
    // Remove element from list
}else if(choose == 3){
    do{
    limit = list.length
    do{
    console.log('\nLista: ')
    listFunction()
    
    remove = parseInt(prompt('Wybierz numer z listy który chciałbyś usunąć: '))
    }while(remove > limit || remove < 1)
    remove = remove - 1;
    list.splice(remove, 1)
    backFunction()
}while(back != 'back')
    // Saving file
}else if(choose == 4){
    do{
    let name = prompt('Jak chcesz nazwać plik? (Wpisz bez rozszerzeń) ')
    fs.writeFileSync(`./saves/${name}.txt`, `${list}`)
    console.log(`Zapisano plik o nazwie ${name}.txt`)
    backFunction();
}while(back != 'back')
    // Import file
}else if(choose == 5){
    do{
    let filess = fs.readdirSync('./saves');
    number = 0
    console.log('Z jakiego pliku chcesz wczytać liste? Podaj nazwę bez rozszerzeń: ');
    for(let filessElements of filess){
        number = number + 1
        console.log(`${number}. ${filessElements}`)
    }
    file = prompt()
    names = fs.readFileSync(`./saves/${file}.txt`, 'utf8');
    names = names.toString().split(',')
    for(let namesElements of names){
        list.push(namesElements)
    console.log(`Wczytano liste ${file}.txt`)
    }
    backFunction();
    }while(back != 'back')
}

}while(back == 'back');