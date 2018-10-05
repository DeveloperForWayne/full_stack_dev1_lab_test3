function is_array(arr) {
    return Array.isArray(arr);
}

function array_Clone(arr) {
    return arr.slice(0);
}

function first(arr, n) {
    let arrTmp = new Array();
    let m;
    if (n == undefined) {
        return arr[0];
    } else {
        if (n > arr.length) {
            m = arr.length;
        } else {
            m = n;
        }
        for (let i = 0, j = 0; i < m; i++) {
            arrTmp[j] = arr[i];
            j++;
        }
        return arrTmp;
    }
}

function last(arr, n) {
    let m;
    if (n == undefined) {
        return arr[arr.length - 1];
    } else {
        if (n > arr.length) {
            m = arr.length;
        } else {
            m = n;
        }
        return arr.slice(arr.length - m);
    }
}

function joinElements(arr) {
    let outStr = "";
    for (let i = 0; i < arr.length; i++) {
        outStr += arr[i];
        if (i < arr.length - 1) {
            outStr += ",";
        }
    }
    return outStr;
}

function insertDashes(num) {
    let tmp = num.toString();
    let outStr = "";
    for (let i = 0; i < tmp.length; i++) {
        outStr += tmp.charAt(i);
        let n = parseInt(tmp.charAt(i));
        if (i < tmp.length) {
            let m = parseInt(tmp.charAt(i + 1));
            if (n % 2 == 0 && m % 2 == 0) {
                outStr += "-";
            }
        }
    }
    return outStr;
}

function sortArray(arr) {
    var arrTmp = array_Clone(arr);
    for (let i = 0; i < arrTmp.length; i++) {
        for (let j = 0; j < arrTmp.length - i; j++) {
            if (arrTmp[j] > arrTmp[j + 1]) {
                let temp = arrTmp[j];
                arrTmp[j] = arrTmp[j + 1];
                arrTmp[j + 1] = temp;
            }
        }
    }
    return arrTmp;
}

function mostFrequent(arr) {
    let m = 0;
    let n = 1;
    let item;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j])
                m++;
            if (n < m) {
                n = m;
                item = arr[i];
            }
        }
        m = 0;
    }
    return item + " ( " + n + " times ) ";
}