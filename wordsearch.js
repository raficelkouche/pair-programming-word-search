const wordSearch = (letters, word) => { 
    if (letters.length === 0) { return undefined};

    let horizontal = letters.map(ls => ls.join(''));
    if (horizontal.includes(word)) {
        return true;
    }
    //Check if its there vertically
    let j = 0 //keeps track of columns
    while (j < letters[0].length) {
        const col = [];
        for (let row = 0; row < letters.length; row++) {
            col.push(letters[row][j]);
        }
        //[a,s,y,h,w,b,u,o,e]
        let vertical = col.join(''); //[asyhwbuoe]
        if (vertical.includes(word)) {
            return true
        }
        else {
            j++
        }
    }
    return false;
}

module.exports = wordSearch

