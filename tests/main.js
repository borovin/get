define(function(require, exports, module) {
    //requirements
    var get = require('../get');

    describe(module.id, function(){

        it('Получение неопределенного свойства', function(){

            var object = {};

            expect(get(object, 'a.b')).toBeUndefined();

        });

        it('Получение булева свойства', function(){

            var object = {
                a: {
                    b: false
                }
            };

            expect(get(object, 'a.b')).toBeFalsy();

        });

        it('Получение числового свойства', function(){

            var object = {
                a: {
                    b: 1
                }
            };

            expect(get(object, 'a.b')).toBe(1);

        });

        it('Получение строки', function(){

            var object = {
                a: {
                    b: 'b'
                }
            };

            expect(get(object, 'a.b')).toBe('b');

        });

        it('Получение значения функции', function(){

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
});