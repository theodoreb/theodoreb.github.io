---
layout: post
title: "Drupal gets a feature request out of the blue"
summary: "But not really out of the blue"
comments: "issues/14"
date: 2016-01-10 10:42:00 +0100
tags: frontend framework drupal-planet
---


Word is that Drupal is getting a frontend framework. From the multiple options 
it seems EmberJS is currently a little ahead of Angular and React. 
As said in [Dries original post] [front] as well as in the [drupal core issue] 
[do] created, nothing is final and everyone interested is asked to check that 
the set of library in the comparison is sufficient and more importantly that 
the criteria used for evaluation are relevant. 

Discussing those details is not what this post is about, like others I've been 
questioning the move from Dries. Since many of us are professionals, let's put 
this in a professional setting and pretend that Dries is just  another client 
making a feature request seemingly out of the blue. To him the problem and
solution is clear — obvious even — and it is the only way to achieve his 
vision. Let's check. 


## Client side (pun intended)

> Drupal's user interfaces for content modeling (Field UI), layout management 
> (Panels), and block management would benefit from no page refreshes, instant 
> previews, and interface previews. These traits could also enrich the 
> experience of site visitors; Drupal's commenting functionality could 
> similarly gain from these characteristics and resemble an experience more 
> like the commenting experience found in Facebook.
>
> — [Should we decouple Drupal with a client-side framework?] [should].

Pretty weak set of reasons. What is described later in the post can be 
achieved though regular Ajax and some resonable amount of javascript. Hardly a 
need for a frontend framework… until you remember what else Dries has been 
writing about. 

> As the Drupal community, we need to stop thinking of Drupal as a "content 
> management platform" and start looking at it as a "digital experience 
> platform" used to create ideal visitor experiences.
> 
> — [From content management to digital experience management] [dem].

*Ideal* as in *enriched* as in, for example, Acquia Lift. Don't get 
your pitchforks just now, there is no hidden agenda, just finish reading.


### How serious is the client

Sometimes [features can be swept under the rug] [rug] and everyone will feel 
better in the long term. Sometimes the client does not let it go. So how 
serious is Dries about this? The two posts 
directly related to frameworks contain 3&#8239;387 words and if you include the 
related posts you can add 10&#8239;394 more words. A busy person doesn't write
a short story just for fun. So I'd say he is pretty serious about this, and if 
you read [the trail of posts] [trail] this is not going away. 


## Client needs

We know a few things about what the client is trying to address: 

1. He expects the web to be completely different in 10 years.
1. Most sites will need personalization. 
1. Better UX is crucial.
1. One solution fitting core and contrib.

Since there needs to be one solution, it has to be in core from the start 
because contrib is not disciplined enough (by design) to come up with one 
homogeneous solution in less than 10 years.

### A little extrapolation

If you have in mind all the posts Dries has been writting on the topic for the 
past two years it makes sense that web components or websockets 
do not address the issue of rich interfaces the way a frontend framework would, 
also in this discussion any PHP-based solution is off-topic. It looks to me 
that Dries is trying to get the community as well as Drupal ready for what he 
believes is coming. I deeply disagree on what the future holds for the web but 
it doesn't mean nothing should be done, just in case. At worst we'll burn 
the new people who came to help us switch to the new framework. 


## Solution

All in all, I would agree that under those assumptions, a framework is a valid 
tool to be using. Putting my JS maintainer hat on I would suggest to 
jQueryUI-it. Put it in core and use it anecdotally, and hope contrib will pick 
it up. Also we should chose the framework with the strongest opinion on how to 
do things. Because Drupal back-end is rather strongly opinionated about what 
the PHP should look like. It makes sense the JS should be the same. 



### On Acquia bashing

I've spent more than 2 years as an Acquia consultant, working closely with the 
Office of the CTO on several big D8 improvements so I've seen how the community 
is treated from the inside and I've only seen good will towards it. Sometimes 
things are downplayed, not out of malice, but out of concern for the issue at 
hand. Which is why I think Dries didn't explicitly mentioned Acquia Lift 
— but still hinted to it — to not get dragged in an argument about Acquia's 
influence. There is nothing wrong with that since compared to the fears 
expressed during D8 cycle, we're far from the worst scenario possible.  

On that topic, when people say that Acquia, big companies or startups are 
influencing Drupal I think they're taking a shortcut. It's more like Acquia 
clients are influencing Dries, and in turn he steers Drupal to what he thinks 
is right. But don't forget that between clients and Drupal there is a filter, 
it's Dries. So far I think we can agree he's been pretty great at Dictatoring 
Drupal. So let's at least give him the benefit of the doubt.

**Put your pitchforks back and grab some paint, [there is a bikeshed to paint] 
[bike].**


[bike]: https://www.drupal.org/node/2645250
[trail]: http://buytaert.net/tag/the-future
[dem]: http://buytaert.net/from-content-management-to-digital-experience-management
[rug]: https://www.drupal.org/node/1741498
[front]: http://buytaert.net/selecting-a-client-side-framework-for-drupal
[do]: https://www.drupal.org/node/2645250 
[should]: http://buytaert.net/should-we-decouple-drupal-with-a-client-side-framework
