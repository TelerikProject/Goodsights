class UserRequester {
    constructor(baseServiceUrl, appId, appSecret, guestUserCredentials) {
        this.baseServiceUrl = baseServiceUrl;
        this.appId = appId;
        this.appSecret = appSecret;
        this._guestCredentials = guestUserCredentials;
        this._appCredentials = btoa(appId + ":" + appSecret);
    }

    userLogin(user) {
        const headers = {
            Authorization: `Basic ${btoa(appId + ":" + appSecret)}`,
        };

        user.password = CryptoJS.SHA1(user.password).toString();

        return requester.post(`${baseServiceUrl}/user/${appId}/login`, user, headers);

    }

    //TODO: Logout

    userRegister(user) {
        const headers = {
            Authorization: `Basic ${btoa(appId + ":" + appSecret)}`
        };

        user.password = CryptoJS.SHA1(user.password).toString();

        return requester.post(`${baseServiceUrl}/user/${appId}`, user, headers);
    }

}

export { UserRequester }