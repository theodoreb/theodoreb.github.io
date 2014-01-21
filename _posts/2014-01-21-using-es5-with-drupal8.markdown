---
layout: post
title: "Using ES5 with Drupal 8"
summary: 'For core and contrib, the important and safe to use ES5 features'
comments: 'issues/6'
date: 2014-01-21 05:20:00 +0100
tags: dev drupal-planet javascript
---

In [fixing contrib javascript] [fixingcontrib] I mentioned that as a contrib
maintainer or developer you could do a bit more than just run JSHint. This is
because Drupal 8 will not support IE8, meaning that core and contrib are
free to go crazy! The incredibly useful **caniuse.com** website holds
[extensive compatibility tables] [caniuse] for the fancy new HTML/JS/SVG
features in the works. But talking about ES5 specifically,
the [ECMAScript 5 compatibility table] [es5comp] is what you're looking for
to know what you can rely on.

For core and contrib, here is a peak at what's coming to a future near you.

## Safe

By safe I mean that those are features that won't bite you horribly. Some of
them are already used in Drupal 8 core or are in a patch that'll be committed
soon enough.

### `"use strict"`

This is actually enforced by JSHint — you know the thing that you should be
running on your JS — while we're not relying on the advanced features of the
[strict mode] [strict] it is used to make sure there are no leaking variable.
I've seen too many strays variable in contrib and projects. To use,
put `"use strict";` at the top of the file-closure.

    (function ($, Drupal, drupalSettings) {

      "use strict";

      // Your code.

    })(jQuery, Drupal, drupalSettings);

### `Function.prototype.bind`

It is the native version of the basic usage of [`jQuery.proxy()`] [jqproxy].

#### Before

    var handler = $.proxy(callback, this);

#### After

    var handler = callback.bind(this);

### `Array.prototype.forEach`

Looping is a rather large topic so we'll stick with the basics. Given the
following array:

    var valueList = [
      'a', 'e', 'i',
      'o', 'u', 'y'
    ];

#### Before

    var i = 0;
    var il = valueList.length;
    for (; i < il; i += 1) {

    }

#### After

    function callback (value, index) {}
    valueList.forEach(callback);


### `Object.keys`

This one combined with `forEach` allow you to do painless [filtered for each]
[foreach] if we take the following object:

    var snacks = {
      banana: 0,
      chips: 1000
    };

#### Before

    for (var snack in snacks) {
      if (snacks.hasOwnProperty(snack)) {

      }
    }

#### After

    function eatSnacks (snack) {}
    Object.keys(snacks).forEach(eatSnacks);


And that looks much better than the first example. Giving a name to your
function gives you extra info on what is it the loop is doing without having
to comment it too much. Also makes profiling easier since you'll have data on
the callback function.

Now you'll probably ask why not use [`jQuery.each`] [jqeach] in both cases?
or even [`_.each`] [ueach]. First it's native so there is no need for an extra
library. I'm not talking about speed — if your bottleneck is how you do your
loops, you don't need to read all this, otherwise go profile your DOM
manipulations. jQuery each doesn't filter with `hasOwnProperty` which means
that is some script on your page extends either `Object.prototype` or
`Array.prototype` — on top of breaking jQuery — you're gonna have a bad time.
Underscore does filter properly so it's fine using that if you have the
library on the page anyway.

## I still need IE8 support

Does [Drupal 8 dropping IE: 6, 7, 8] [dropie8] means you can't use it in a
market like china or big administrations where IE8 is still the default and
supported browser?

### IE8 module

The [IE8 module] [ie8] was started to introduce IE8 compatibility back to
Drupal 8 — in fact it was started to help take the decision to drop IE8.
While the level of support is still undecided the goal is to allow people who
develop for IE8 to be able to use Drupal 8. We'll see what that means when
that time comes. For now you can use the [**ie8** tag] [ie8tag] in the issue
queue to help up see what'll go wrong on IE8.

There is a lot more good stuff we can use such as `localStorage`,
`document.querySelector` but those are DOM-related and have nothing to do
with ES5 so expect a follow-up post on those.




[fixingcontrib]: {% post_url 2014-01-15-fixing-contrib-javascript %} "Helping contrib point the gun away from it's foot since 2012"
[dropie8]: https://drupal.org/node/1569578 "Internet Explorer 6, 7 and 8 no longer fully supported"
[caniuse]: http://beta.caniuse.com/#compare=ie+9,ie+10,ie+11,ie_mob+10 "List of supported features on IE: 8, 9, 10 + (mobile), 11"
[es5comp]: http://kangax.github.io/es5-compat-table/ "ECMAScript 5 compatibility table"
[ie8]: https://drupal.org/project/ie8 "MY YES, I DO LIKE PAIN!"
[jqproxy]: http://api.jquery.com/jquery.proxy/ "jQuery.proxy()"
[foreach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#Example:_Itarate_over_properties_not_considering_inherited_properties "Example: Iterating over the properties of an object"
[jqeach]: http://api.jquery.com/jquery.each/ "jQuery.each()"
[ueach]: http://underscorejs.org/#each "Collection Functions (Arrays or Objects)"
[strict]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode "Strict mode"
[ie8tag]: https://drupal.org/project/issues/search/drupal?text=&assigned=&submitted=&participant=&issue_tags_op=%3D&issue_tags=ie8 "ie8 tag search"
