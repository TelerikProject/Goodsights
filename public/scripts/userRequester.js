import { requester } from 'requester';

const AUTH_TOKEN_STORAGE = 'auth-token';
class UserRequester {
    constructor() {
        this.baseServiceUrl = "https://baas.kinvey.com";
        this.appId = "kid_By7HTRjkb";
        this.appSecret = "26301ce0be5e4d5d9c3011f55abe3c70";
        this._guestCredentials = "e512b4db-c694-4857-9fbf-3f769bfaea47.3AEKPjzf8qigMP7iu04DQwOBsmvalZSqp9agZqmEMDU=";
        this._appCredentials = btoa(this.appId + ":" + this.appSecret);
        this._AUTH_TOKEN_STORAGE = 'auth-token';
    }

    userLogin(user) {
        const headers = {
            Authorization: `Basic ${btoa(this.appId + ":" + this.appSecret)}`,
        };

        user.password = CryptoJS.SHA1(user.password).toString();

        return requester.post(`${this.baseServiceUrl}/user/${this.appId}/login`, user, headers)
        .then((data) => {
                localStorage.setItem(AUTH_TOKEN_STORAGE, data._kmd.authtoken);
            });
        

    }

    //TODO: Logout

  userRegister(user) {
        const headers = {
            Authorization: `Basic ${btoa(this.appId + ":" + this.appSecret)}`
        };

        user.password = CryptoJS.SHA1(user.password).toString();

        return requester.post(`${this.baseServiceUrl}/user/${this.appId}`, user, headers)
            .then((data) => {
                localStorage.setItem(AUTH_TOKEN_STORAGE, data._kmd.authtoken);
            });
    }
     getSights() {

        const headers = {
            Authorization: `Kinvey ${localStorage.getItem(AUTH_TOKEN_STORAGE)}`
        };

        return requester.get(`${this.baseServiceUrl}/appdata/${this.appSecret}/sights`, headers)
            .then(data => console.log(data));
    }
}
const userRequester = new UserRequester();


export { userRequester }