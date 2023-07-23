
function checkSpecial(data) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return format.test(data);
}

function checkUpper(data) {
    var format = /[A-Z]/;
    return format.test(data);
}

function checkLower(data) {
    var format = /[a-z]/;
    return format.test(data);
}

function checkNumber(data) {
    var format = /[0-9]/;
    return format.test(data);
}

const check_password = (req,res,next) => {
    const password = req.body.password;
    const confirm = req.body.confirm;

    if (password !== confirm) {
        res.status(200).json({ error: 'Password does not match' });
        return;
    }

    else if (password.length < 8) {
        res.status(200).json({ error: 'Password must be at least 8 characters long' });
        return;
    }

    else if (!checkUpper(password) || !checkLower(password) || !checkNumber(password) || !checkSpecial(password)) {
        res.status(200).json({ error: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character' });
        return;
    }
    next();

    // if (password.length >= 8 && password === confirm) {
    //     if (checkUpper(password) && checkLower(password) && checkNumber(password) && checkSpecial(password)) {
    //         next()
    //     }
    //     else{
    //         res.status(200).json({error:'Password must be one uppercaae,one lower case , at least 1 number and one special char and length is greater than 8'});
    //     }
    // }
    // else {
    //     res.status(200).json({error:'Password Not Match'});
    // }


}
module.exports = { check_password }

// function checkSpecial(data) {
//     // var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
//     var format = /[^\W]/

//     if (data.match(format)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkUpper(data) {
//     var format = /[A-Z]/

//     if (data.match(format)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkLower(data) {

//     var format = /[a-z]/

//     if (data.match(format)) {
//         return true;
//     } else {
//         return false;
//     }

// }

// function checkNumber(data) {
//     var format = /[0-9]/

//     if (data.match(format)) {
//         return true;
//     } else {
//         return false;
//     }
// }




// const check_password = (req,res,next) => {
//     const password = req.body.password;
//     const confirm = req.body.confirm;
//     if (password.length >= 8 && password === confirm) {
//         if (checkUpper(password) && checkLower(password) && checkNumber(password) && checkSpecial(password)) {
//             next()
//         }
//         else{

//              res.status(200).json({error:'Password Not Match'});
       
//             }
//     }
//     else {
//         res.status(200).json({error:'Password Not Match'});
//     }


// }
// module.exports = { check_password }

