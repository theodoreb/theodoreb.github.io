---
layout: post
title: "Fixing contrib javascript"
summary: "Helping contrib point the gun away from it's foot since 2012"
comments: 'issues/5'
date: 2014-01-15 03:40:00 +0100
tags: dev drupal-planet javascript
---

In my previous post about [javascript maintainership] [last],
I stated that <q cite="{% post_url 2014-01-12-life-of-js-maintainer %}">If
core JS doesn't get in your way, as far as I'm concerned,
I did my job</q>. While true, it's pretty much Level&nbsp;0 of my ambition. I
do have an overreaching _Evil plan_<sup id="fnref:1"><a href="#fn:1" class="footnote">1</a></sup> <sup id="fnref:2"><a href="#fn:2" class="footnote">2</a></sup>
and first I want to talk about where it comes from.


## Backstory

I started contributing to Drupal in 2011, I'd been using it for a couple of
years but didn't really run into problems. Then I got a job to work on a
website for a pretty big brand and with some fairly complex mapping
functionalities. They needed to draw lines on a map so I used the OpenaLayer
module and a ton of custom code. The Drupal integration of the OpenLayers
library does some pretty wierd stuff and I wasn't really happy about it so I
send a few patches and eventually became maintainer of the module — and found
out that it's hard to maintain a big module with lots of users.

Those maps were showing up in views, [ajax views] [kalenji-ajax] (it looks
broken, probably is, no idea). I ran into various javascript bugs of the
ctools module. Sent patches. Thankfully most of them made it in so I
didn't have to worry about a patched ctools. The jQuery UI patch for ctools
modal was the most fun, had a solution that [monkey-patched the JS all over the
place]
[ctools-dialog].

At that point I was pretty horrified by the quality of javascript code
in contrib and there were a number of problems I would see in pretty much
every contrib module I'd use. So I looked into core javascript — originally
to understand why is OpenLayers [recursively calling
<code>Drupal.attachBehaviors</code>] [openlayers-madness] — it became
obvious that all the modules copy pasted some piece of core JS and tweaked it.

To fix contrib, core had to be fixed.


## Evil plan

Drupal powers some huge sites out there so improving Drupal actually improves
the web. My real ambition is to use Drupal to make the web a better place and
stop seeing horrible javascript everywhere.

Originally the plan was for Drupal 9 because there was a huge amount of work.
That's until my [first big clean-up patch] [closest] was committed by Dries 14
days after I opened the issue. Seeing how quickly that got in,
there was hope and the plan was put in motion.

### Achieve Good

The very first thing is to gain people's trust, and the best way to do that
in Drupal is to fix [critical bugs] [crits] and [write change notices]
[changenote]. Recruit a minion and make him work on a complex [major
performance bug] [deps], refresh the aging JS and get it to follow best
practices or help out a [review-starved team] [spark] so they owe you — don't
worry they know how to "Friendly blackmail" too.

### Plant Evil

Now you have some opportunities to push for and use _trojan patches_[^3]:

- The very first [standalone JS script] [installer],
look Ma! no jQuery! and very soon a no-jQuery script will be available to
[add the `active` class on links] [active].
- Replace collapsible fieldsets with the `<details>` element and use that
to [take out the horribly annoying javascript animation of collapsible
fieldsets] [collapse] in our polyfill because after all,
Chrome doesn't animate `<details>`. It was also causing a bug in this case.


## New world order

In the end, what does it mean for contrib? Here is what I hope contrib
authors will do:

1. **[run JSHint] [jshint] and fix every. single. error.**

there is not _2._, I know you guys are just as lazy as me. JSHint will
find bugs and it will make you a better JS developer. I'm not shooting for
perfect, I only wish that one day I'll be able to say <q>Drupal javascript?
It's not just good, it's good enough!</q>. For the smartypants™ that already
run JSHint, there is a follow-up post talking about jQuery,
[Vanilla JS] [vanillajs] and what you can do if you have time to spare.

### Run JSHint. If you don't know how to fix a JSHint error, ping me.

Help Drupal make the web a better place, thank you.



<div class="footnotes">
  <ol>
    <li id="fn:1">
      <p>It&#8217;s not really an &#8220;Evil plan&#8221;, it&#8217;s because &#8220;Good plan&#8221; just doesn&#8217;t sound as good. <a href="#fnref:1" class="reversefootnote">&#8617;</a></p>
    </li>
    <li id="fn:2">
      <p>Sure, trust that guy <sup id="fnref:1:1"><a href="#fn:1" class="footnote">1</a></sup>, see what happens. <a href="#fnref:2" class="reversefootnote">&#8617;</a></p>
    </li>
    <li id="fn:3">
      <p>Better known as <q>excuse to be able to say <q>but look we&#8217;re already doing it like that there, it&#8217;s for consistency</q></q> patch. <a href="#fnref:3" class="reversefootnote">&#8617;</a></p>
    </li>
  </ol>
</div>

[last]: {% post_url 2014-01-12-life-of-js-maintainer %} "Life of a JS maintainer"
[kalenji-ajax]: http://www.kalenji-running.com/fr-FR/calendrier-des-courses
[ctools-dialog]: https://drupal.org/node/1397370#comment-5520722 "Make modal.js use jQuery dialog"
[openlayers-madness]: http://drupalcode.org/project/openlayers.git/blob/f0eadcdf046ecdc70de4bdc72423f0d1df6d12e9:/js/openlayers.js#l95 "openlayers.js:95"
[closest]: https://drupal.org/node/1400310 "Issue #1400310: Use of .parents() is really .closest()"
[jshint]: https://drupal.org/node/1955232 "JSHint settings"
[changenote]: https://groups.drupal.org/node/394113 "Learn more about Drupal 8 and help the wider Drupal community by writing up a Change Record"
[crits]: https://drupal.org/project/issues/search/drupal?version[0]=8.x&status[0]=1&status[1]=4&status[2]=8&status[3]=13&status[4]=14&status[5]=15&priorities[0]=400&categories[0]=1 "Drupal 8 critical bugs"
[deps]: https://drupal.org/node/1279226#comment-6363796 "Issue #1279226: jQuery and Drupal JavaScript libraries and settings are output even when no JS is added to the page"
[spark]: https://drupal.org/community-initiatives/drupal-core/spark "Spark: Authoring Experience++ in Drupal 8 core"
[installer]: http://drupalcode.org/project/drupal.git/blob/c478bf4062e910357c2dd89c9dd069ffd2d959a2:/core/themes/seven/js/mobile.install.js "seven/js/mobile.install.js"
[active]: https://drupal.org/node/1979468 "Issue #1979468: '.active' from linkGenerator(), l() and theme_links() forces an upper limit of per-page caching for all content containing links"
[vanillajs]: http://vanilla-js.com/ "Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications."
[collapse]: https://drupal.org/node/1851414#comment-7935105 "Issue #1851414: Convert Views to use the abstracted dialog modal"
