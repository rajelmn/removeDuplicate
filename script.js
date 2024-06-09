

function aclean(arr) {
    let word;
   const result =  arr.map( (a) => {
        return a.toLowerCase()
    } )
    
    let final = [];
    for(i = 0; i < result.length ; i++) {
         word = result.slice(i, i + 1);
        word = word.join('').split('').sort().join('').split(' ');
        final = final.concat(word);
    }
    const set = new Set(final)
    return set
}

let value = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


console.log(aclean(value))