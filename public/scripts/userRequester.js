import { requester } from 'requester';

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
                localStorage.setItem(this._AUTH_TOKEN_STORAGE, data._kmd.authtoken);
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
                localStorage.setItem(this._AUTH_TOKEN_STORAGE, data._kmd.authtoken);
            });
    }
     getSights() {
        const headers = {
            Authorization: `Kinvey ${localStorage.getItem('auth-token')}`
        };
        return requester.getJSON(`${this.baseServiceUrl}/appdata/${this.appId}/sights`, headers);
            //.then(data => console.log(data));
    }
    getBeaches() {
        const headers = {
            Authorization: `Kinvey ${localStorage.getItem('auth-token')}`
        };
        return requester.getJSON(`${this.baseServiceUrl}/appdata/${this.appId}/beaches`, headers);
            //.then(data => console.log(data));
    }
    getWaterfalls() {
        const headers = {
            Authorization: `Kinvey ${localStorage.getItem('auth-token')}`
        };
        return requester.getJSON(`${this.baseServiceUrl}/appdata/${this.appId}/waterfalls`, headers);
            //.then(data => console.log(data));
    }
    getCaves() {
        const headers = {
            Authorization: `Kinvey ${localStorage.getItem('auth-token')}`
        };
        return requester.getJSON(`${this.baseServiceUrl}/appdata/${this.appId}/caves`, headers);
            //.then(data => console.log(data));
    }
    getMountains() {
        const headers = {
            Authorization: `Kinvey ${localStorage.getItem('auth-token')}`
        };
        return requester.getJSON(`${this.baseServiceUrl}/appdata/${this.appId}/mountains`, headers);
            //.then(data => console.log(data));
    }
}
const userRequester = new UserRequester();


export { userRequester }