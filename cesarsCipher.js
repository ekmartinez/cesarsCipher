function rot13(str) {

    let result = "";

    let abc = {"A":"N", "B":"O", "C":"P", "D":"Q", "E":"R", "F":"S", "G":"T", 
                "H":"U", "I":"V", "J":"W", "K":"X", "L":"Y", "M":"Z","N":"A", 
                "O":"B", "P":"C", "Q":"D", "R":"E", "S":"F", "T":"G", 
                "U":"H", "V":"I", "W":"J", "X":"K", "Y":"L", "Z":"M"}

    for (let x = 0; x < str.length; x++) {
        if (abc.hasOwnProperty(str[x]) === false) {
            result += str[x];
        }
        else {
            result += abc[str[x]];
        }
    }

    return result; 
}

console.log(rot13("SERR CVMMN!"));
