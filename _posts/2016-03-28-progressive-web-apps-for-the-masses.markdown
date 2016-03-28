---
layout: post
title: "Progressive Web Apps for the masses"
summary: "ServiceWorker, no tips required ; HTTPS is though"
comments: "issues/15"
date: 2016-03-28 20:42:00 +0200
tags: frontend drupal-planet pwa mobile serviceworker
---

Much like web components, progressive web apps
(<abbr title="Progressive web app">PWA</abbr>) refers to a set of browser 
features designed to allow websites to behave more like native 
applications on mobile devices. As far as features are concerned we're talking 
about: **Offline**, **OS integration**, **push notifications**, and **background 
synchronization**. To control those features the relatively new *serviceworker* 
API is provided, with which the addition of a *manifest file* will make the 
website installable on some devices. 

<div class="p-highlight"><p>
HTTPS is required for serviceworker to be available, 
<a href="https://letsencrypt.org/">let's encrypt</a> can help with 
that<small><sup><a href="#sup1">1</a></sup></small> 
</p></div>


### Offline & caching

Good rule of thumb: if the browser implement serviceworker it can do offline, 
and choose how it's done, much better than the old [ApplicationCache] 
[appcache]. This is
possible because serviceworker acts as a proxy for all requests made from 
the website: requesting an image? a CSS file? some Ajax request? all going 
through the serviceworker. Controlling requests means controlling responses: 
their origin (cache or network) and their contents. Any request or response
can be altered, redirected or replaced. One obvious benefit is that any response
can be put in cache. When the user is offline and his request fails, he'll see 
a fallback page instead. 

Let's take an example: You're preparing for an event, browsing the 
[conference website] [pwa]. The website uses a serviceworker that cache all 
visited pages as well as a few extra pages in the background, such as the 
schedule page and the homepage. When the network during the event
inevitably goes down, the schedule can still be accessed. And when an unseen 
page is requested, the serviceworker can catch the failing request and serve a 
default *offline* page, which is better than a browser error.  

Another issue that come up every once in a while is websites failing to load 
because one third party asset used for ads or analytics is down. Twitter down? 
page down. To prevent this all third party assets can be served from cache, or 
there can be a timeout after which a cached version of the asset — or nothing 
at all — will be served. **The serviceworker can enforce a timeout for network 
events as short as needed regardless of browser or server settings.** 
Want your page to load under 300ms? As long as it doesn't matter what it looks 
like, it's possible.

Another example is if your users are in an area where data is expensive, a 
very aggressive caching strategy can be put in place: fetching all required 
assets when the serviceworker is installed and only allowing document requests 
to hit the networks. Fonts, images, CSS and JS will always come from cache. 
There are many strategies on how to handle requests, I would point to the very 
well made [offline cookbook] [cookbook] for a good idea of what's possible. 
In a follow-up post I'll talk about a strategy that should suit CMSs,
involving different caching strategies based on the type of resource requested.
  

## OS integration

Creating a manifest file — a json file with a handful of keys — and linking to 
it through a meta tag is the only thing needed on top of a serviceworker to be 
able to install a website like an app on android and using chrome. 
Once the website is *installed* an icon is placed at the same level as the other
apps and will open a standalone browser window — which can be configured to open 
fullscreen without the URL bar. For now it only works on Android using 
the Chrome browser but there is potential.
 
For our [conference website] [pwas] what we want is a manifest file that will 
tell android to use the event logo as an icon and make the schedule page the 
default when opening the website from the new shortcut. The install bar shows 
up under certain conditions, these days a website needs to be opened twice in 
under 5&nbsp;min for the install bar to show up. Chrome controls when it shows up, 
there is no API to force it to show, thankfully. There is one to prevent the 
install bar from appearing though.

## Extras

### Push notifications

I won't talk about the lifecycle of a serviceworker here, for now
just keep in mind that once the browser is closed, the serviceworker is still 
active and can receive server events. With OS integration of push notifications 
it means messages can be sent to users even when the website is closed. On the 
user side the notification will appear like any other app notification. 

This is still early days for this feature. For 
Chrome their push server has to be used to send messages, while Firefox has 
it's own (and open) server implementation. Eventually once the W3C get a spec 
sorted out things should improve. To see it in action check out [the push 
notification demo] [push], and the more up to date [push notification tutorial] 
[pushcode].
 
 
### Background sync

Another exicing feature, even less ready than notifications, no demos are in 
working order yet. Now that the user can access our conference website 
offline, he might want to rate the sessions while taking the train home. With 
background sync all his ratings can be logged and once back online, the event 
queue can be replayed to save all his feedback.


### Some technical details

* To implement serviceworker a browser needs `fetch` and `Promise` APIs, and when 
they have it, they also have most [ES6 features] [es6] implemented as well. 
In the serviceworker scope, modern JS can be used without breaking anything, 
no build tool required.

* On the implementation, Chrome is leading the charge followed closely by 
Firefox. The others are showing an interest with Edge having started 
implementation, Safari plans are unknown but at least they didn't say no, and 
I couldn't find infos on UC Browser plans. There are more details about which 
browser implement which subset on [Is Serviceworker Ready?]
[browsers] 


## Conclusion

The exicing part of <abbr title="Progressive web app">PWA</abbr>s for me is not 
the app part. I don't care about the competition of native vs. web apps, it's
probably going to end up like flash, and I'm betting on the web however long
it'll take. What's exciting is the amount of control we now have on page 
loading and the control we keep on our websites once users are out of reach. 

Want to make a page that self-destruct after 5&nbsp;min of a user being offline?
It's possible. 


### Drupal

Being a Drupal developer and Drupal being a CMS that would hugely benefit from 
this kind of feature<small><sup>[2](#sup2)</sup></small>, I wrote the 
[Progressive web app] [pwamodule] module 
that currently implements the *Offline* and *OS integration* part of this blog 
post. The code is still rough but working. A demo of the Drupal 
<abbr title="Progressive web app">PWA</abbr> can be seen on the 
"[conference website] [pwa]", to fully appreciate it turn on airplaine mode 
once it's been loaded.

A more technical post is coming, presenting code from the 
<abbr title="Progressive web app">pwa</abbr> module that is needed to make all 
this work in real life. Also some feedback and tips for developing with 
serviceworker since things gets very weird, very fast when your async javascript 
proxy is acting up.





<ol class="footnotes">
<li><p id="sup1">
How funny would it be that let's encrypt is already compromised by the NSA? 
Anyone else thinking of The Wire and the police selling burner phones to 
suspects? 
</p></li>
<li><p id="sup2">
I said on twitter that this was bigger than frontend frameworks for Drupal, and 
still think that. Using frameworks can help PWAs compete with native but it's 
not required and, to me, not even the point.

PWAs are about mobile and offline, I like that it gets us back to 
the mobile-first mentality that was there for most of Drupal 8 development 
cycle. PWAs allows us to explore new grounds that are relevant for all types of 
users. It's not just one subset of the community that will eventually benefit. 
</p></li>
</ol>





[appcache]: http://alistapart.com/article/application-cache-is-a-douchebag
[browsers]: https://jakearchibald.github.io/isserviceworkerready/
[pwa]: https://pwa.theodoreb.net/
[pwas]: https://pwa.theodoreb.net/drupal-pwa/schedule/2016-03-28
[pwamodule]: https://www.drupal.org/project/pwa
[push]: https://simple-push-demo.appspot.com/
[pushcode]: https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en
[es6]: https://kangax.github.io/compat-table/es6
[cookbook]: https://jakearchibald.com/2014/offline-cookbook/
