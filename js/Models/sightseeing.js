import { validator } from './validator.js';

let sightseeing = (function() {
    class Sightseeing {
        constructor(name, country, category, description, imageSrc, id) {
            this.name = name;
            this.country = country;
            this.category = category;
            this.description = description;
            this.imageSrc = imageSrc;
            this.id = id;
        }

        get name() {
            return this.name;
        }

        set name(value) {
            validator.validateIfUndefinedOrNull(value, "name");
            validator.validateTypeOf(value, "name", "string");
            this._name = value;
        }


        get country() {
            return this._country;
        }

        set publisher(value) {
            validator.validateIfUndefinedOrNull(value, "country");
            validator.validateTypeOf(value, "country", "string");
            this._country = value;
        }

        get category() {
            return this._category;
        }

        set category(value) {
            validator.validateIfUndefinedOrNull(value, "category");
            validator.validateTypeOf(value, "category", "string");
            this._category = value;
        }

        get description() {
            return this._description;
        }

        set description(value) {
            validator.validateIfUndefinedOrNull(value, "description");
            validator.validateTypeOf(value, "description", "string");
            this._description = value;
        }

        get imageSrc() {
            return this._imageSrc;
        }

        set imageSrc(value) {
            validator.validateIfUndefinedOrNull(value, "imageSrc");
            validator.validateTypeOf(value, "imageSrc", "string");
            this._imageSrc = value;
        }

        get id() {
            return this._id;
        }

        set id(value) {
            validator.validateIfUndefinedOrNull(value, "id");
            validator.validateTypeOf(value, "id", "string");
            this._id = value;
        }
    }

    return Sightseeing;
})();

export { sightseeing };