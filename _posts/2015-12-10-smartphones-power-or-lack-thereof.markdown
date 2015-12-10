---
layout: post
title: "Smartphones' power, or lack thereof"
summary: "Most people don't have an octo-core smartphone"
comments: "issues/13"
date: 2015-12-10 09:42:00 +0100
tags: smartphone drupal-planet
---

Drupal 8 just got out and many people are looking at it to power their 
decoupled website. There is a lot of noise about Angular, Ember, and React. 
Somewhere along the way, we started to forget what mobile first meant. All 
of this  makes right now the perfect time to take a bad decision. After my
[Frontend Thunderdome] [thunder] session at DrupalCamp Vienna I wanted to 
contribute to the discussion and highlight a recurrent issue with blog posts 
popping up about frameworks and mobile devices. 

<div class="p-highlight">
<p>
<strong>TL;DR:</strong> In articles discussing mobile web performance there is 
usually a variation of: <q>users probably don't have a device as powerful as  
what I used. Imagine how bad it'd be with cheap hardware!</q>. 
It's lazy, there is no excuse to omit low-spec smartphone testing.
</p>

<p>
By nature those devices are dirt cheap. $50 will get you a 
<strong>2 × 1&thinsp;GHz CPU</strong> and <strong>512&thinsp;MiB RAM</strong>
smartphone, go buy one, install UC browser in proxy mode, and use it to test 
everything you're building. Knowing the <em>size</em> of the performance gap 
is important.
</p> 
</div>

Before getting into the *why* I'd like to frame the reasoning with a piece of 
wisdom from [Stevey's Google Platforms Rant] [googlerant]:
            
> I'm not really sure how Bezos came to this realization -- the insight that
> he can't build one product and have it be right for everyone. But it 
> doesn't matter, because he gets it. There's actually a formal name for this 
> phenomenon. It's called Accessibility, and it's the most important thing in 
> the computing world.
> 
> The. Most. Important. Thing.

It's accessibility in a broad sense, in the sense that you can access the
content or service at all, before any usual assisting technology comes in.
With smartphone and the web there are three major components that can prevent 
access: **connectivity**, **hardware**, and **software**. I won't be talking 
about connectivity here since this is what most of thoses who cared about 
mobile first are currently caring about: offline-first with service workers. 
There are a few blind spots when it comes to the two other topics. 


## Hardware

First is [The Cost of Frameworks] [cost] from Paul Lewis: 

> **“A Nexus 5 / iPhone 5S isn’t what our users use.”** That’s also probably 
> true. I have the privilege of using good hardware, and I would imagine that
> many people don’t have access to top end phones, so I’d expect these numbers
> to be even worse in those cases.
 
*How much worse* is critical to know, it can't just be swept under the rug. 
After using a cheap smartphone for a while I'm convinced everyone working with 
the web needs to experience first hand the slowness, the crazy viewing angles, 
the bad quality touchscreen to truly understand what it means for most people
to browse the web. What came out of  the data I researched for my previous 
post is that very soon a large number of people will be getting online with 
those devices exclusively. They won't be able to check something on their 
computer later at home. A cheap smartphone is all they have to access
the web.

Take refugees coming to europe, many articles have been written about 
their [use of smartphones] [refugee] to keep safe and stay in 
contact. If you look at the pictures from the article, you can see a couple of 
recent ones but most are old models. It is not responsible to footnote cheap 
hardware performance. By 2020 6 billions smartphones are expected to be 
online. That's about the number of people that don't live in poverty. Of 
those 6 billions I'm pretty sure most can't afford a high-end device.
  
What *cheap* gets you is surprisingly a lot. There are octo-cores for less 
than $200. After looking at many, many smartphones prices in Europe, India 
and what I could from China what I found is that anything under $50 will be 
crap and anything above $80 starts to have at least one good spec. Either a 
quad-core, octo-core, or a decent screen. What $50 gets you in 2015 is a 
dual-core and less than 1&thinsp;GB RAM. This is about the right combination 
of specs because what $200 get you is too far from the specs of other devices
that will end up on the net.
   

### Internet of *weak* Things   

If we step out of smartphones for a second, consider the [Raspberry Pi Zero]
[zero] that you can buy for $5. Same specs as a 5 years old high-end 
smartphone and people make media centers and servers out of those things. 
Tiny computers are not the only devices roaming the internet.
Consider  a Wii U, Xbox, even TVs that will end up on the web with their 
punny specs. Remember, it's all about *accessibility*.  

 
   
## Software
   

In [JavaScript Frameworks and Mobile Performance] [ember] Tom Dale talks 
about the benefits of frameworks in managing complexity, maintainability and 
velocity. I'm sensitive to his argument, especially because we used backbone 
in Drupal 8 for the exact purpose of taming complexity and improving 
maintainability:

> The bottom line is that I don’t think “reduce the amount of code” is a 
> reasonable lesson for the average developer to follow. Much better to let 
> developers write as much code as they need for the cool apps they want to 
> build, and then have tool vendors figure out how to make that fast.

As browsing a Drupal 8 site shows, the new toolbar is much too expensive to 
render on every page, in part  because it depends on backbone and it's render
pipeline and another part because of a menu tree that is very expensive to 
render. For [our toolbar problem] [toolbar] no amount of tooling will help, 
the architecture needs to change to make it fast. Backbone for the toolbar is
not worth it *anymore* because it's much simpler than it was planned to be, 
as is usually the case. On the other side we have quickedit, which I
wouldn't want to write or maintain outside of a framework, but which is less 
mobile-critical. 

The amount of <q>cool</q> needed is often highly overestimated by clients — 
I've done enough site audits to know — they overwhelmingly choose something 
that works over something cool. Unless the framework used is geared towards 
performance and provides tools and concepts that are, by nature, performance
friendly the <q>cool</q> factor needs to be toned way down to make something 
*accessible*. Of the popular frameworks React with redux are those that do 
the most. 

There is another side of software, client software, namely web browsers. To
know how a cheap smartphone is used  we only need to look at what China is
doing. It's the biggest market, they're not the richest consumers and the
most popular browser is [UC] [uc]. As shown in [my presentation] [slides], 
using this browser in proxy mode transforms a cheap device into a high-end 
one as far as page loading is concerned. There is a reason why it's the most 
popular browser is because it's optimized for cheap hardware, and about [46% 
of all smartphones are cheap] [smart2015] — for some definition of cheap. The
same way you can't forget about cheap smartphones you can't forget about 
proxy browsers.  



## Conclusion


At our level caring about cheap smartphones and proxy browsers is an act of 
solidarity. There is no reason to exclude them from what you're building. I'm
not saying that if you use Angular, Ember, or React in their current state 
you don't care about people, I'm simply writing it. If your problem is 
that you can't run your profiling rig on cheap smartphones, it's not
a problem since you'll be looking at time on the second order of magnitude, 
and you're not a sloth, a stopwatch will do the trick. 

By coincidence Dries just posted [Should we decouple Drupal with a 
client-side framework?] [dries], my answer should be pretty clear by now but it 
deserve it's own post to answer with all the appropriate nuances. After 
writing most of my post I stumbled upon the very detailed [The viability of 
JS frameworks on mobile] [woot] which talk about this issue with a focus on 
the *how*, worthy read.


[thunder]: https://2015.drupalcamp.at/session/frontend-thunderdome
[landscape]: http://read.theodoreb.net/2015/smartphone-landscape-2015.html
[cost]: https://aerotwist.com/blog/the-cost-of-frameworks/
[ember]: http://tomdale.net/2015/11/javascript-frameworks-and-mobile-performance/
[viability]: https://joreteg.com/blog/viability-of-js-frameworks-on-mobile
[smart2015]: smartphone-landscape-2015.html
[googlerant]: https://plus.google.com/+RipRowan/posts/eVeouesvaVX
[uc]: http://www.ucweb.com/ucbrowser/
[dries]: http://buytaert.net/should-we-decouple-drupal-with-a-client-side-framework
[zero]: https://www.raspberrypi.org/products/pi-zero/
[slides]: http://www.slideshare.net/theodorebiadala/frontend-thunderdome
[refugee]: http://qz.com/500062/the-most-crucial-item-that-migrants-and-refugees-carry-is-a-smartphone/
[woot]: https://joreteg.com/blog/viability-of-js-frameworks-on-mobile
[toolbar]: https://www.drupal.org/node/1847792
