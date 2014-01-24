---
layout: post
title: "Critical gaps in Drupal core JS"
summary: "Everything is not fine in ninjavascript land"
comments: 'issues/7'
date: 2014-01-25 00:10:00 +0100
tags: dev drupal-planet javascript
---

Here are the main problems with Drupal javascript:

1. [no testing](#testing),
2. [no visible documentation](#docs).

## <span id="testing">Testing</span>

This one is a maintainer nightmare. We refactor away and break eveything in
the process. Thankfully we can't break the [overlay] [overlay] anymore,
but we have Views UI to break now! As well as various surprising
components all over the place. Long story short, we need front-end testing.

There was a core conversation at the last DrupalCon prague about [javascript
testing] [jstest] where jessebeach, seutje and me talked about what was wrong
and how we could get that going. The take away is that we need to find a
framework to work with to set up our tests. If anyone has experience with a
framework that might work with Drupal and the contrib space to write tests
with, please let me know.

It really is the main pain point right now, let us know your thoughts in the
[javascript testing issue] [jstestqueue].

## <span id="docs">Documentation</span>

Next big issue is documentation. It is currently non-existant for javascript.
There are comments in the code, but it's just not fun to read and we can't
see the whole picture. There have been many discussions and arguments about
what and how to do. A few weeks ago I spend a whole sunday writing [Drupal
javascript with jsdoc] [jsdoc] and comming up with a [JSDoc theme]
[jsdoctemp] suitable for Drupal.

All that work ended up online at the [**Drupal JS API**] [drupaljsdoc] site.
And it is looking pretty damn good. For example, you can see everything
contained in the [`Drupal`] [djsd] JS object. Ever wondered what was the
list of all the [`Drupal.behaviors`] [djsb] in core? Or what exactly
are objects created from the [`Drupal.ProgressBar`] [djsp] constructor? Of course
there are lots of adjustments to make but it's a start.

Right now it's pretty much patch worthy. There is still a couple of issues
that would be nice to get in for easier documentation: [Split up
`contextual.toolbar.js`] [splitct] and [Split up `ckeditor.admin.js`]
[splitca]. Once those are in I'll make the patch so we can use JSDoc to
generate documentation while we wait for a [Drupal API integration with JSDoc]
[dapijs] and finally get some javascript documentation on `api.drupal.org`.


There is still a long way to go for Drupal to become a javascript heaven. We
can use all the help we can get to make that sooner rather than later.


[overlay]: https://drupal.org/node/2088121 "Issue #2088121: Remove Overlay"
[jstest]: https://prague2013.drupal.org/session/javascript-testing "DrupalCon Prague: javascript testing"
[jstestqueue]: https://drupal.org/node/237566 "Issue #237566: Automated JavaScript unit testing framework"
[jsdoc]: https://drupal.org/sandbox/nod_/2161937 "Sandbox: Write all JS according to JSDoc standard."
[jsdoctemp]: https://github.com/theodoreb/drupal-js-api "JSDoc template for Drupal"
[drupaljsdoc]: http://read.theodoreb.net/drupal-jsapi/ "Drupal JS API"
[djsd]: http://read.theodoreb.net/drupal-jsapi/Drupal.html "Drupal — Drupal JS API"
[djsb]: http://read.theodoreb.net/drupal-jsapi/Drupal.behaviors.html "Drupal.behaviors — Drupal JS API"
[djsp]: http://read.theodoreb.net/drupal-jsapi/Drupal.ProgressBar.html "Drupal.ProgressBar — Drupal JS API"
[splitct]: https://drupal.org/node/2162837 "Issue #2162837: Split up contextual.toolbar.js"
[splitca]: https://drupal.org/node/2174589 "Issue #2174589: Split up ckeditor.admin.js"
[dapijs]: https://drupal.org/node/1337022#comment-6977250 "Issue #1337022-80: Create/adopt JavaScript docs standards compatible with a JS documentation parser"
