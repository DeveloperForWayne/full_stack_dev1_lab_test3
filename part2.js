function base_convert(num, baseFrom, baseTo) {
    if ((baseFrom && baseTo) > 2 && (baseFrom && baseTo) < 36) {
        return parseInt(num + '', baseFrom).toString(baseTo);
        return num.parseInt(baseTo);
    } else {
        return "Both bases must be between 2 and 36.";
    }
}


function bin_to_dec(num) {
    let tmp = num.toString().replace(/[^01]/gi, '');
    let dec = parseInt(tmp, 2);
    return dec;
}


function dec_to_bho(num, base) {
    if (base == "B") {
        return parseInt(num, 10).toString(2);
    } else if (base == "H") {
        return parseInt(num, 10).toString(16);
    }
    else if (base == "O") {
        return parseInt(num, 10).toString(8);
    }
}


function rand(min, max) {
    if (min == null && max == null)
        return 0;
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}


function decimals(num, place) {
    var tmp = parseFloat(num) || 0;
    return tmp.toFixed(place);
}


function max(arr) {
    return Math.max.apply(null, arr);
}


function min(arr) {
    return Math.min.apply(null, arr);
}


function gcd_more_than_two_numbers(input) {
    let a, b;
    a = input[0];
    for (let i = 1; i < input.length; i++) {
        b = input[i];
        a = gcd_two_numbers(a, b);
    }
    return a;
}

function gcd_two_numbers(num1, num2) {
    let x = Math.abs(num1);
    let y = Math.abs(num2);
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}


function lcm_more_than_two_numbers(arr) {
    let m = 0, n = 0;
    let len = arr.length;
    for (i = 0; i < len; i++) {
        m = arr[i] % arr[i + 1];
        if (m === 0) {
            arr[i + 1] = (arr[i] * arr[i + 1]) / arr[i + 1];
        }
        else {
            n = arr[i + 1] % m;
            if (n === 0) {
                arr[i + 1] = (arr[i] * arr[i + 1]) / m;
            }
            else {
                arr[i + 1] = (arr[i] * arr[i + 1]) / n;
            }
        }
    }
    return arr[len - 1];
}