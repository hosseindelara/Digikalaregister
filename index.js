document.getElementById('registe').addEventListener('click', function () {
    const mobile_input = document.getElementById('mobile-login').value;
    const pattenr = new RegExp(/^(0|0098|\+98)9\d{9}$/);
    const password_input = document.getElementById('kalameobor-login');
    const pattenr_password = new RegExp(/^[a-z Z-a 0-9].+$/);
    if (!pattenr.test(mobile_input) || !pattenr_password.test(password_input)) {
        
        return
    } else {
        return Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'فرم ثبت شد',
            showConfirmButton: false,
            timer: 1500
        })
    }
});