const every = require('lodash/every');

function get(object, path) {
    let attr;

    if (!object || !path) {
        return object;
    }

    attr = object;

    const segments = path.split('.');

    every(segments, (segment) => {
        if (typeof attr[segment] === 'function') {
            attr = attr[segment].apply(object);
        } else {
            attr = attr[segment];
        }

        return attr;
    });

    return attr;
}

module.exports = get;
