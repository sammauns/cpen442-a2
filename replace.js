let cipher = "TUPPRHYXBHRDPGAURYHUCKUPJAYLLDDJRUCKXAHDJDPPDKRHGKAYLLDGKHDPPRHGESEYRHGEBYJRXLVPGEBQYTEKRDGCKHYTVCDZURHUOPPDPPRHGESLUDRHYLUTHOAYLLDGTYXPQERKDODEORHGEBDVYXRGRAYLLDUZUEGJGJUPPYJJRHURYMYJRHUHYXKUTHGAHTDKZUCOPGSUPORCXUQYRQYTEAYLLDQYTEAYLLDQYTEQYRTYXPQRHUJDPPEUZUCAYLURYDEUEQGTYEQUCHYTLDEOLGPUKGZUJDPPUEVORHGKRGLUKHUKDGQDPYXQQYRGLXKRVUBURRGEBKYLUTHUCUEUDCRHUAUERCUYJRHUUDCRHQYRPURLUKUURHDRTYXPQVUJYXCRHYXKDEQLGPUKQYTEAYLLDGRHGESJYCAYLLDOYXKUUAYLLDDPGAUHDQPUDCERKUZUCDPRHGEBKYJRHGKKYCRGEHUCPUKKYEKGERHUKAHYYPCYYLAYLLDDEQRHYXBHRHGKTDKEYRDZUCOBYYQYMMYCRXEGROJYCKHYTGEBYJJHUCSEYTPUQBUAYLLDDKRHUCUTDKEYYEURYPGKRUERYHUCAYLLDKRGPPGRTDKBYYQMCDARGAURYKDOGRYZUCOUKAYLLDRHDRKDVYXRRHUCGBHRQGKRDEAUVXRRHUEGTYEQUCTHDRPDRGRXQUYCPYEBGRXQUGZUBYRRYDPGAUHDQEYGQUDTHDRPDRGRXQUTDKAYLLDYCPYEBGRXQUUGRHUCAYLLDVXRRHYXBHRRHUOTUCUEGAUBCDEQTYCQKRYKDO";

let new_cipher = ""

for (let i = 0; i < cipher.length; i++) {
    switch (cipher[i]) {
        case 'A':
            new_cipher = new_cipher + 'C';
            break;
        case 'B':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'C':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'D':
            new_cipher = new_cipher + 'A'
            break;
        case 'E':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'F':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'G':
            new_cipher = new_cipher + 'N'
            break;
        case 'H':
            new_cipher = new_cipher + "H"
            break;
        case 'I':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'J':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'K':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'L':
            new_cipher = new_cipher + 'M'
            break;
        case 'M':
            new_cipher = new_cipher + 'K'
            break;
        case 'N':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'O':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'P':
            new_cipher = new_cipher + 'L'
            break;
        case 'Q':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'R':
            new_cipher = new_cipher + 'T'
            break;
        case 'S':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'T':
            new_cipher = new_cipher + 'W'
            break;
        case 'U':
            new_cipher = new_cipher + 'E'
            break;
        case 'V':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'W':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'X':
            new_cipher = new_cipher + cipher[i]
            break;
        case 'Y':
            new_cipher = new_cipher + 'O'
            break;
        case 'Z':
            new_cipher = new_cipher + cipher[i]
            break;
    }
}

console.log(new_cipher)