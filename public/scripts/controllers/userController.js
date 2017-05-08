import "jquery";
import  toastr from 'toastr';
import {load as loadTemplate} from 'templates';
import {validator} from 'validator';
import {userRequester} from 'userRequester';

class UserController {

    login() {

        loadTemplate('login')
            .then((template) => {
                $('#app-container').html(template());

                $('#btn-login').on("click", function () {
                    const username = $('#username-input').val().trim(),
                        password = $('#password-input').val().trim();

                    const user = {
                        username,
                        password,
                    };

                    userRequester.userLogin(user)
                        .then((data) => {
                            toastr.success(`Hi ${username}, you logged successfully!`);
                            loadTemplate('home')
                                .then((template) => {
                                    $('#app-container').html(template());
                                });
                            if ($("#remember").is(':checked')) {
                                localStorage.setItem("username", username);
                                localStorage.setItem("password", password);
                            }
                            else {
                                sessionStorage.setItem("username", username);
                                sessionStorage.setItem("password", password);
                            }
                            $('#login').addClass("hidden");
                            $('#register').addClass("hidden");
                            $('#logout').removeClass("hidden");
                        })
                        .catch(() => {
                            toastr.error('Invalid username or password!');
                        });
                })

            });
    }
    register() {
        loadTemplate('register')
            .then((template) => {
                $('#app-container').html(template());

                $('#btn-register').on("click", function () {
                    const username = $('#tb-user').val().trim(),
                        password = $('#tb-pass').val().trim(),
                        confirmPassword = $('#tb-conf-pass').val().trim();

                    const user = {
                        username,
                        password,
                    };

                    const promises = [
                        validator.isValidUsername(username),
                        validator.arePasswordsMatching(password, confirmPassword),
                        validator.isValidPassword(password),
                    ];

                    Promise.all(promises)
                        .then(() => {
                            return userRequester.userRegister(user);
                        })
                        .then(() => {
                            toastr.success(`Hi ${username}, your registration is successful!`);
                            loadTemplate('home')
                                .then((template) => {
                                    $('#app-container').html(template());
                                });
                            sessionStorage.setItem("username", username);
                            sessionStorage.setItem("password", password);

                            $('#login').addClass("hidden");
                            $('#register').addClass("hidden");
                            $('#logout').removeClass("hidden");
                        })
                        .catch((errorMsg) => {
                            toastr.error(errorMsg);
                        });

                });

            })
    }

    logout(){
        $("#logout").on("click", function () {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");

            $('#login').removeClass("hidden");
            $('#register').removeClass("hidden");
            $('#logout').addClass("hidden");

            toastr.success('You successfully logout!');
        })
    }
    sights(){
        loadTemplate('sights')
            .then((template) => {
                $('#app-container').html(template());
                    userRequester.getSights()
                        .then((data) => console.log(data))
                        .catch(() => {
                            toastr.error('PROBLEM!');
                        });
                })
            

    }
}

$(window).ready(function () {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    let user = {
        username,
        password,
    };

    if (username && password) {
        userRequester.userLogin(user)
            .then((data) => {
                toastr.success(`Hi ${username}, you logged successfully!`);
                loadTemplate('home')
                    .then((template) => {
                        $('#app-container').html(template());
                    });
                if ($("#remember").is(':checked')) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                }
                else {
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("password", password);
                }
                $('#login').addClass("hidden");
                $('#register').addClass("hidden");
                $('#logout').removeClass("hidden");
            })
            .catch(() => {
                toastr.error('Invalid username or password!');
            });
    } else {
        console.log("Nothing is localstored!");
    }

});

const userController = new UserController();

export {userController};

    /*
    sights(){
        loadTemplate('sights')
            .then((template) => {
                $('#app-container').html(template());

             

                    userRequester.getSights(user)
                        .then((data) => {
                            toastr.success(`Hi ${username}, you logged successfully!`);
                            loadTemplate('home')
                                .then((template) => {
                                    $('#app-container').html(template());
                                }),
                                $('#login').addClass("hidden"),
                                $('#register').addClass("hidden"),
                                $('#logout').removeClass("hidden");
                        })
                        .catch(() => {
                            toastr.error('Please register or log-in to see the content!');
                        });
                })
            

    }
    
    */

