let validator = {
    validateTypeOf: (value, prop, type) => {
        if (typeof value !== type) {
            throw Error(prop + ' is not a ' + type);
        }
    },
    validateIfUndefinedOrNull: (value, prop) => {
        if (value === undefined || value === null) {
            throw Error(prop + ' is undefined or null');
        }
    }
};

export { validator };