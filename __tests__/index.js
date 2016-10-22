const get = require('../index');

it('should return undefined if nothing is passed', () => {
    expect(get()).toBeUndefined();
});

it('should return object if path is not passed', () => {
    expect(get({a: 1})).toEqual({a: 1});
});

it('should get undefined', () => {
    const object = {};

    expect(get(object, 'a.b')).toBeUndefined();
});

it('should get boolean', () => {
    const object = {
        a: {
            b: false,
        },
    };

    expect(get(object, 'a.b')).toBeFalsy();
});

it('should get number', () => {
    const object = {
        a: {
            b: 1,
        },
    };

    expect(get(object, 'a.b')).toBe(1);
});

it('should get string', () => {
    const object = {
        a: {
            b: 'b',
        },
    };

    expect(get(object, 'a.b')).toBe('b');
});

it('should get function result', () => {
    const object = {
        a: {
            b() {
                return 'result';
            },
        },
    };

    expect(get(object, 'a.b')).toBe('result');
});

