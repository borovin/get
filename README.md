<h1>

    get

    <a target="_blank" href="https://travis-ci.org/borovin/get"><img src="https://travis-ci.org/borovin/get.svg?branch=master" /></a>
    <a target="_blank" href="https://codecov.io/gh/borovin/get"><img src="https://codecov.io/gh/borovin/get/branch/master/graph/badge.svg" /></a>
    <a target="_blank" href="https://www.bithound.io/github/borovin/get"><img src="https://www.bithound.io/github/borovin/get/badges/score.svg"></a>

</h1>

Smart property getter

<h3>Install</h3>
<pre>
  npm install @basket/get --save
</pre>

<h3>Usage</h3>
<pre>
  const get = require('@basket/get');
  const object = {a: {b: {c: 'value'}}};
  const path = 'a.b.c';

  const value = get(object, path);
  // => 'value'
</pre>

Gets the value at <code>path</code> of <code>object</code>. If some segment of the <code>path</code> is <code>undefined</code> or <code>null</code> the result value will be <code>undefined</code>.

<pre>
  const get = require('@basket/get');
  const object = {};
  const path = 'a.b.c';

  const value = get(object, path);
  // => undefined
</pre>

If some segment of the <code>path</code> is function it will be invoked with <code>object</code> context and returned value will be used.

<pre>
  const get = require('@basket/get');
  const object = {a: b() {return {c: 'value'}}};
  const path = 'a.b.c';

  const value = get(object, path);
  // => 'value'
</pre>
