var get = require('../index');

describe(module.id, function(){

    it('Get undefined', function(){

        var object = {};

        expect(get(object, 'a.b')).toBeUndefined();

    });

    it('Get boolean', function(){

        var object = {
            a: {
                b: false
            }
        };

        expect(get(object, 'a.b')).toBeFalsy();

    });

    it('Get number', function(){

        var object = {
            a: {
                b: 1
            }
        };

        expect(get(object, 'a.b')).toBe(1);

    });

    it('Get string', function(){

        var object = {
            a: {
                b: 'b'
            }
        };

        expect(get(object, 'a.b')).toBe('b');

    });

    it('Get function result', function(){

        var object = {
            a: {
                b: function(){
                    return 'result';
                }
            }
        };

        expect(get(object, 'a.b')).toBe('result');

    });

});