const _get = require('lodash.get');

function get(object, path) {
    if (!object || !path) {
        return object;
    }

    let result = _get(object, path);

    if (typeof result === 'function') {
        result = result.apply(object);
    }

    return result;
}

module.exports = get;
