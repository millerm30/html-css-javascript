'use strict';

function showPass() {
    const x = document.querySelector('#passWord');
    if (x.type === 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}