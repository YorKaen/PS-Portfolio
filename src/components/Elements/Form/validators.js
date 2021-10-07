//Валидация email
var email = function(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Валидация телефона
var phone = function(phone) {
    const re = /^\+7 \(\d\d\d\) \d\d\d-\d\d\d\d$/;
    return re.test(String(phone));
}

//Валидация даты
var date = function(date) {
    const re = /^\d\d.\d\d.\d\d\d\d$/;

    if (!re.test(date)) {
        return false;
    }

    var parts = date.split('.');
    var dd = parseInt(parts[0]);
    var mm = parseInt(parts[1]);
    var yyyy = parseInt(parts[2]);

    if (dd <= 0 || dd > 31 || mm <= 0 || mm > 12) {
        return false;
    }

    if (yyyy < 1900 || yyyy > 2100) {
        return false;
    }

    return true;
}

//Валидация года
var year = function(year) {
    const re = /^\d\d\d\d$/;
    var yyyy = parseInt(year);

    if (!re.test(year)) {
        return false;
    }

    if (yyyy < 1900 || yyyy > 2100) {
        return false;
    }

    return true;
}

//Проверка на пустоту
var noempty = function(string) {
    return string !== '' && string !== null;
}

export { email, phone, date, year, noempty }
