
const camelLetters = (str) =>{
    let rs = ''
    if(str.length > 0){
        for (let i = 0; i < str.length; i++) {
            if(i % 2 === 0){
               rs += str[i].toUpperCase();
            }else{
               rs += str[i].toLowerCase();
            }
        }
    }else{
        rs ='-1';
    }

    return rs;
};

console.log(camelLetters('juan marcos4444'));


const closeTag = (str) =>{
    let rs = '';
    //
    if(str.length > 0){
        
    }


    return rs;

}

//<div></div>

