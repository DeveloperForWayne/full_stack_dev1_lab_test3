function is_string(str) {
    return (Object.prototype.toString.call(str) === '[object String]');
}

function is_Blank(str) {
    if (str.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

function string_to_array(str) {
    return str.trim().split(" ");
}

function truncate_string(str, length) {
    return str.slice(0, length);
}

function abbrev_name(str) {
    let splitedNames = str.trim().split(" ");
    if (splitedNames.length > 1) {
        return (splitedNames[0] + " " + splitedNames[1].charAt(0) + ".");
    }
    return splitedNames[0];
}

function protect_email(email) {
    let avgLen, splitted, part1, part2;
    splitted = email.split("@");
    part1 = splitted[0];
    avgLen = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avgLen));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}

function capitalize_Words(str) {
    var splitedStr = str.split(" ");
    for (var i = 0; i < splitedStr.length; i++) {
        splitedStr[i] = splitedStr[i].charAt(0).toUpperCase() + splitedStr[i].substring(1);     
    }
    return splitedStr.join(" "); 
}
