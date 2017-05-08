import "jquery";
import toastr from 'toastr';
import { load as loadTemplate } from 'templates';
import { validator } from 'validator';
import { userRequester } from 'userRequester';

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
                                }),
                                $('#login').addClass("hidden"),
                                $('#register').addClass("hidden"),
                                $('#logout').removeClass("hidden");
                        })
                        .catch(() => {
                            toastr.error('Invalid username or password!');
                        });
                })
            })

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
                            toastr.success(`Hi ${username}, your registration is successfull!`);
                            loadTemplate('home')
                                .then((template) => {
                                    $('#app-container').html(template());
                                }),
                                 $('#login').addClass("hidden"),
                                $('#register').addClass("hidden"),
                                $('#logout').removeClass("hidden");
                        })
                        .catch((errorMsg) => {
                            toastr.error(errorMsg);
                        });

                })
            })
    }
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
    
}

const userController = new UserController();

export { userController };