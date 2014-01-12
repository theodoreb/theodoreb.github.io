---
layout: post
title: "Life of a JS maintainer"
summary: "A personal review of two years of JS maintainership in Drupal core"
comments: 'issues/4'
date: 2014-01-12 12:30:00
tags: dev drupal-planet javascript
---

Back in Drupal 7 dev cycle, there was no single person that took ownership of
Drupal JS as a whole, which lead to many inconsistencies in the code base or
straight up syntax errors in point releases. It is not that nobody cared,
it's that nobody cared _enough_ to take ownership. We've been using JS for
more than 8 years, there is a lot to do.

Do what exactly? Let's look at the [list of responsibilities] [coremaint] from
the Drupal core maintainers page. I'll talk about how that applies to JS and
what it's like day-to-day.


## Maintainer tasks

### Queue monitoring

>
> Monitoring their subsystem's issue queue (also known as "issue queue farming").
> When a new issue is submitted, this involves verifying that it's a valid issue
> and taking appropriate action (tag as "Novice", change the status if more
> information is needed or if it's not really a bug, change other issue
> parameters, move it to a different issue queue, etc.).
>

Issues can be assigned to the [**javascript component**] [jscomp] and in
real life, there are very few issues that you can assign to javascript.
Usually it's an issue that needs to be assigned to CKEditor or Views UI or
some other module. Hence there is a [**JavaScript**] [jstag] tag for tracking
JS-related issues.

When I started I would often read the core queue and tag whatever issue is
related. I still do it from time to time though I don't _need_ to anymore,
most people working in the core queue know that any patch touching a JS file
needs to have the JavaScript tag if they want a timely review from the JS
team. Otherwise there is no way for us to find the issue.

Overall there isn't much trouble managing the JS issue queue. It's pretty
clear when it's a JS issue since it usually ends up as an error in the
browser console. The problem is getting people to tag their issues.

If your patch changes a JS file in any way, please tag it **JavaScript**,
even if the change is trivial.

### Contributor monitoring

>
> Mentoring new contributors who are working on issues related to that subsystem.
>

There aren't many people so it's not too overwhelming. I'm really happy with
the results I got while working with a couple of contributors. I don't think
I'm doing a terrific job overall though. My current excuse is that the state
of JS was so far from acceptable and I just wanted things fixed so I didn't
take the time to mentor people. If you need something rationalized,
let me know, I can be pretty good at it.

The mentoring is often about JS but sometime it's only about the core process.
Maintainers exists to get stuff done — I'll get back to it a bit further.
There are people who know JS and don't contribute to core. If you're in that
position, reach out to me on IRC or by [mail] [contact], I'm here to help out.

I'll start to make more time to take this part more seriously and hopefully
increase the number of JS contributors. That's part of the reason why I
started writing again.

### Point of contact

>
> Being the point of contact for that subsystem's contributors.
>

I'll take this one as _point of contact […] with outside projects_ and it
isn't always a lot of fun. Between Aloha, CreateJS it looks like Drupal is
good at both bikeshedding and alienating outside projects.

I'm to blame for most of the friction with the jQuery and jQuery UI team. We
cleared things up but the fact that it happened a couple of times is on me. I
haven't been really good at making outside projects feel welcome in Drupal.
That needs fixing. On of the challenge is the lack of structured decision
making in the core process.

It's stupid to think I can get outside people interested in
Drupal if I don't take care of outside projects.

### Review

>
> Reviewing proposed patches to that subsystem.
>

For a long time most of the patches were mine so I had to find other people
to review. It started to changed a few months ago, Now I have a backlog of
other's people patches to review! Can't tell you how happy — and guilty — that
made me feel the first time I realized I had several people waiting on me to
review patches. It's taking a while for me to adjust since I still have big
patches I want to work on and that takes time away from review.

Hopefully you guys don't get discouraged if I'm late in a review. Ping me on
IRC if that's the case. Would hate to lose people because of that.

### Acting _expert_

>
> Acting as an expert on the workings of that subsystem (answering questions
> that come up, and being involved in discussions of major overhauls and
> re-architecting).
>

On one hand you just have to show up and/or trigger conversations and
contribute to the extend of your knowledge. When the knowledge is not enough,
 learn things or get the relevant people in the conversation.

On the other hand, it's easy to get passionate and a bit crazy about some
topics. It's good to be passionate and Drupal is important. Realistically
though, chances are nobody is going to die because of a technological
decision made in core.

You won't get everything you want, pick your battles.

### Getting things done

>
> Translating strategic thinking about their subsystem into actionable items
> and issues.
>

Early on I took that as "write patches" it works much better as "write
issue summaries and get people to write patches". That way you can review and
RTBC, ensuring you're addressing the real issue: getting patches in core.


## Day to day

The end goal of maintainers is to get things done in core. Here is
how that works for me.

### Day Work

Fortunately, it has nothing to do with javascript. People in need of a Drupal
consultant have performance, security, migration, training or process issues,
not javascript issues. It means that most JS I do is on my free time and
during downtime (doesn't happen anymore).

Acquia is very good to me, sponsoring almost all my trips to Drupal events so
that I can talk to you guys about my hobby.

### Community to maintainer

Outside events, the main feedback I get from the community are bugs. A good
amount of features requests and a little bit of patches. I'm stalking those
two [JS component] [jscomp] and [JS related tags] [jstag] issue pages. They
are always open on my main browser and refresh every 30&nbsp;min (one of many
awesome features of Opera that was dropped in the blink
version). #drupal-contribute is opened in a tab next to it (IRC,
another feature Opera dropped on their blink version). When I'm home I check
that during the day to see if anything interesting came up.

I get the occasional email saying thank you about a particular issue,
those are always nice to get.

### Maintainer to community

I think it's the part that's the most fun for me: [Talking about what we're
doing in core for devs and users] [talks]. Since my first talk at
frontendunited amsterdam in 2012 I've been having sessions all over the place
to talk about JS and Drupal, pretty much one every quarter. It's a lot of fun.

Now I'm starting this and hopefully get in on the Drupal planet to talk about
really cool stuff we're doing in a format more readable than a bunch of 300+
comments issues. Like the back story of the [overlayslayer] [overlayslayer].
Hopefully getting people outside the core queue interested in core JS issues.


### Maintainer to core committer

Getting things in core means getting the core committers to agree a change is
valid and that a specific patch is good. Since none of them are hardcore JS
dev sometime you have to convince them a change is needed. It's fairly
easy since they are great and always ready to hear relevant arguments. I
haven't run into any problems on issues that were properly explained.
And sometimes you get [the occasional break] [rtbc], one more hint that
[DRUPAL IS PEOPLE] [soylent]!

When I started I was surprised how fast [that particular patch] [closest] was
committed. It took only 14 days for a massive JS patch changing a lot of
files to get in (at that point I wasn't yet maintainer). It still took a
couple more months to get the trust of all the committers,
after that things were much easier.

I have to say that sometimes that process gets in the way. On the JS clean-up
issues the overhead of the core process can be almost unbearable when you're
lacking people to review patches.


## At the end of the day

There are two things I'm really proud of:

1. The _visible_ existence of a JS community in Drupal core.
2. The [javascript (spring, summer, autumn, spring) winter clean-up]
[clean-up].


Looking back at those two years, a few low points:

- Relations with external projects.
- DrupalCon Sydney, there was no javascript talk.
- `Drupal.ajax` (horrible DX)
- `Drupal.tableDrag` (too complicated and monolithic)

Of course, many more wins over those past two years:

- The amazingly productive piggy back on the mobile initiative.
- The slow but steady simplification of core JS. I know, but it's true.
- Relations with external projects.
- Getting people from the outside to care about our JS problems.

I'm missing a lot of highlights but you know what? Nobody is going to die if
I don't list them all. Feel free to correct me in the comments if you feel
it's very important to mention something and I'll add it.

**If core JS doesn't get in your way, as far as I'm concerned, I did my job.**


I guess I never really thought about it but what is your opinion of my work
as maintainer? I get many thumbs up at events for the work I'm doing — I love
it, keep them coming — but that's about the technical side of things ; I'm
interested to know what are my shortcomings as a maintainer from your point
of view.



[coreteam]: {% post_url 2014-01-10-core-js-team %}
[coremaint]: https://drupal.org/contribute/core-maintainers#component
[jscomp]: https://drupal.org/project/issues/search/drupal?status%5B%5D=Open&component%5B%5D=ajax+system&component%5B%5D=javascript
[jstag]: https://drupal.org/project/issues/search/drupal?issue_tags=mobile%2C+jQuery%2C+jQuery+UI%2C+Ajax%2C+JavaScript
[talks]: http://lanyrd.com/profile/nod_/
[contact]: https://drupal.org/user/598310/contact "Contact form on drupal.org"
[modernizr]: https://github.com/Modernizr/Modernizr/issues/486
[overlayslayer]: https://drupal.org/node/787896
[closest]: https://drupal.org/node/1400310
[clean-up]: https://drupal.org/node/1415788
[rtbc]: https://drupal.org/comment/8259425#comment-8259425
[soylent]: http://www.youtube.com/watch?v=9IKVj4l5GU4&feature=youtu.be&t=22s
