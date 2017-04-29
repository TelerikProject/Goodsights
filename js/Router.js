let container = $('#container');

class MyRouter {
    constructor() {
        this._routes = [];
    }

    on(targetUrl, callback) {
        this._routes.push({
            targetUrl,
            callback
        });
        return this;
    }

    navigate() {
        const currentUrl = location.hash.slice(1);

        for (const { targetUrl, callback } of this._routes) {
            const params = MyRouter.matchUrls(currentUrl, targetUr)
            if (params) {
                callback(params);
                break;
            }
        }
    }

    static matchUrls(currentUrl, targetUrl) {

        const currentUrlParts = currentUrl.split(/\//g);
        const targetUrlParts = targetUrl.split(/\//g);

        if (targetUrlParts.length !== length) {
            return false;
        }

        const params = {};

        const length = currentUrlParts.length;
        for (let i = 0; i < length; i += 1) {
            if (targetUrlParts[i][0] !== ":") {
                if (currentUrlParts[i] !== targetUrlParts[i]) {
                    return false;
                }
            } else {
                const paramName = targetUrlParts[i].slice(1);
                params[paramName] = currentUrlParts[i];
            }
        }
        return params;
    }
}

const router = new MyRouter();
router
    .on('/home', () => { container.htm('home'); console.log('something'); })
    .on('/users', () => container.htm('users'))
    .on('/users/:username', (params) => container.htm('Showing info for current user'))
    .on('/sign-in', () => container.htm('sign-in'))
    .on('/sign-up', () => container.htm('sign-up'))

$(window).on('load', () => router.navigate);
$(window).on('hashchange', () => router.navigate);


