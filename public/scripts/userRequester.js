import { requester } from 'requester';

class UserRequester {
    constructor() {
        this.baseServiceUrl = "https://baas.kinvey.com";
        this.appId = "kid_By7HTRjkb";
        this.appSecret = "26301ce0be5e4d5d9c3011f55abe3c70";
        this._guestCredentials = "e512b4db-c694-4857-9fbf-3f769bfaea47.3AEKPjzf8qigMP7iu04DQwOBsmvalZSqp9agZqmEMDU=";
        this._appCredentials = btoa(this.appId + ":" + this.appSecret);
    }

    userLogin(user) {
        const headers = {
            Authorization: `Basic ${btoa(this.appId + ":" + this.appSecret)}`,
        };

        user.password = CryptoJS.SHA1(user.password).toString();

        return requester.post(`${this.baseServiceUrl}/user/${this.appId}/login`, user, headers);

    }

    //TODO: Logout

    userRegister(user) {
        const headers = {
            Authorization: `Basic ${btoa(this.appId + ":" + this.appSecret)}`
        };

        user.password = CryptoJS.SHA1(user.password).toString();

        return requester.post(`${this.baseServiceUrl}/user/${this.appId}`, user, headers);
    }
    /*getSights() {
        let authBase64 = btoa(this.appId + ":" + this.appSecret);
        let loginURL = this.baseServiceUrl + 'appdata/' + this.appId + '/online';

        var sights = new Promise(function (resolve, reject) {
            $.ajax({
                url: loginURL,
                method: "GET",
                headers: { "Authorization": "Basic " + authBase64 },
                success: function (data) {
                    resolve(data);
                }
            });
        });
        console.log(sights);
        return sights;
    }*/
}
const userRequester = new UserRequester();


export { userRequester }