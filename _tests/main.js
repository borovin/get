import get from '../index';

describe('Get function main tests', () => {
  it('Get undefined', () => {
    const object = {};

    expect(get(object, 'a.b')).toBeUndefined();
  });

  it('Get boolean', () => {
    const object = {
      a: {
        b: false,
      },
    };

    expect(get(object, 'a.b')).toBeFalsy();
  });

  it('Get number', () => {
    const object = {
      a: {
        b: 1,
      },
    };

    expect(get(object, 'a.b')).toBe(1);
  });

  it('Get string', () => {
    const object = {
      a: {
        b: 'b',
      },
    };

    expect(get(object, 'a.b')).toBe('b');
  });

  it('Get function result', () => {
    const object = {
      a: {
        b() {
          return 'result';
        },
      },
    };

    expect(get(object, 'a.b')).toBe('result');
  });
});
