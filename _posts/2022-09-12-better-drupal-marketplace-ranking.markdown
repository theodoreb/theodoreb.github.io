---
layout: post
title: "A better Drupal marketplace ranking"
summary: "Stop using labor as ranking"
comments: "issues/18"
date: 2022-09-12 15:00:00 +0200
tags: drupal-planet community
---

For a few years now I've been quite unhappy with the atmosphere of discussions regarding Drupal credit system. It turns 
_very_ ugly, _very_ fast. As an example, what's being discussed on the [DA blog] [credit value] lately is not healthy to 
me. Talking about "high" and "low" value contribution is looking at the problem from the wrong end. The main reason 
we're having those discussions is because the [Drupal marketplace] [marketplace] ranking is directly 
impacted by getting or not getting contribution credit.

I'll be talking about an alternative ranking method and I'd like to have some feedback from agency owners/executives 
on the assumptions I'm making and their feeling in general with changing how the ranking is done.

## Why do we need a ranking?

There are many Drupal companies and introducing a ranking is an opportunity to get more money for the DA, encourage 
contribution, reward companies that give back a lot, that sort of things. 

The order of the companies in the link above is controlled by an algorithm. The [algorithm] [ranking] itself is not 
secret. What is secret is the relative weights given to the various components. There has been a lot of investment
in building the credit system and _weighted issue credits_ is the first item on the list so it's safe to say that issue 
credit is a very important part of this ranking (and I empirically confirmed this a few years ago,
might have changed since, more below).

### What is a contribution credit?

When an issue is opened, people contribute and come to a resolution by writing comments. Every time a comment is created
we have the ability to say that the comment is made on behalf a company, or a client, or as a volunteer. When the 
maintainer is happy with the resolution they mark the issue _fixed_ and decide which users have been helpful in solving
the issue. At this point users gain contribution credit, as well as all the companies they attributed work to, and 
that shows up in the company profile on drupal.org. One fun implementation detail is that you gain that credit only when 
the issue is fixed, so if the issue is 10 years old, the company you worked for 10 years ago is going to gain a credit 
for that today.

So a credit is essentially a recognition of helpfulness for an issue that got solved. That issue could be fixing a bug, 
it could also be organizing a whole event, attending a meeting, everything and anything you could think of to recognize
someone for their work. 

There is no concept of how much time, skills, knowledge, patience, or commitment it took to get an issue fixed. Your 
work, big or small, earns you 1 contribution credit for each issue every time. 


### Ranking on result, what could go wrong?

So we have companies (partly) ranked based on the **_result_ of contribution people do on their behalf**. It means we are _not_ 
ranking companies, we're currently ranking the output of a group of people attributing some work to a company. Module 
maintainers being the ones judging who gets credit because they are the ones who can say who has been helpful and who 
has not according to what the module maintainer needs. In this situation companies are pushed to earn credit, 
regardless of how they obtain it, aka. gaming the system. This can create many unhelpful attempts to gain credit from 
contributors and that puts pressure on module maintainers to police contribution credit.

This whole situation is where it goes wrong for me. In discussions I mentioned at the start, I can sum up what was said
by: <q>it's not fair that this contributor gets the same credit as me for this very little amount 
of work they did.</q> In that case what I hear is: <q>This person did very little work and it's helping their company rank as much as my credit
that I earned by spending days, weeks of my time on this issue.</q> or even: <q>Without my work this issue would never
have been solved, and nobody would have had credit, I should get more/they should get less.</q> 

To be clear I'm not suggesting to 
add a contribution credit weight to capture the time, skills, etc. necessary to solve
the issue. This would create more problems that it hopes to solve.

### Improving your company ranking despite your company

Before going further I wanted to share a little experience working at a company and dealing with credit and ranking.

I used to be in a company that is very open-source focused and use that heavily in their marketing and yet it was not 
easy to get them to sponsor work in the community and it was even harder to make them [sponsor the DA] [sponsor] even 
the lower tier of $1000/year, which can be compensated by not having a couple of pointless meetings every year.

We personally cared about the ranking, the company didn't, and the way the credit system is/was set up, 
we could compensate for that! So that's what we did the next few months, we improved the ranking significantly and 
ended up on the second page only through contribution credit — core credit was very effective — and writing 
case studies.

The rules made is possible for people to compensate the lack of involvement of the company. And us doing this work, 
meant the company didn't need to care about this because the end result is a better ranking and they didn't have to 
change anything. It's just on our end that we did extra work and unpaid hours to improve the situation. 


## Wait, isn't it companies we're ranking? 

So, we're using the output of workers to rank companies and we have no regard for how the output is created, and we 
do not take into account the fact that the company as an entity is helping the community or if it's just the employees
doing extra. 

If we're ranking companies, we should be using company metrics and make sure that what is rewarded are things we really 
need from _companies_. And what we want from companies is mainly money for the DA, and sponsoring full time contributor.

### Some ground rules

Ranking should be based on what the company is providing the community, not on what the group of people they pay is 
achieving. 

I think is important is that it should not be possible for individuals to compensate for a company that does
not care about it's ranking. I would help prevent people getting invested in something that is not rewarded at their 
company. 

### What is important?

I have 4 layers in mind:

1. Is the company a DA sponsor? simple yes/no, doesn't matter how much money you're supporting the DA with because for 
   some businesses $1000 is a lot and for some $25000 is nothing.
2. Did the company post a contribution pledge? A text from the higher ups that describe how the company plans to 
   contribute to the community in a general sense.
3. A score based on the module the company is actively sponsoring. Weighted by module usage. We want our module well
   maintained and that takes time. This attribution is controlled by the modules maintainers. The module maintainer is
   the one that can say a company sponsors their module.
4. For each user they sponsor, a score based on the % of work time sponsored/paid to do contributions. The rules can get a bit complex there are 
   some examples in [the drupal.org issue] [#3086885]. In short, as a user you can say that a percent of your time is 
   spent doing contribution and this will affect the ranking of the company. 

And the ordering is done with something like: 
```sql
ORDER BY 
  da_sponsor DESC, 
  contrib_plege DESC, 
  module_sponsor_score DESC,
  contrib_time_sponsor DESC  
```

That way we rank companies on things they can do relatively easily, give money, write a blog post, and set time for 
their employees to work on contribution. As an employee if you see that the company can't be bothered to spend a few hours 
to write a short text or give $1000/year, it means the time you are spending contributing is worth even less than that for your 
company — and it's likely you're doing overtime for that.

The nice thing about counting contribution time % here is that whether your time is spent coding, writing documentation, 
or organizing events, it's counted the same toward the ranking. So if you organize a huge event you're probably going 
to be working 90% of your time on it and it'll show in the ranking.


## Changes 

**The main change I'm looking for is that people stop feeling that someone else getting credit is _unfair_ for some 
reason. Everyone's time is worth the same, some people make particularly unhelpful contributions but we don't need to 
feel like them or their employers should be _punished_ for that.**

And for each layer what I'm hoping for:

1. Companies give more money to the DA, or that the ones on the fence commit to spending some money on this, and start 
   the process of actually committing to supporting the project they make money off. Many $1000 sponsors can add up.  
   Or maybe we need an even lower tier to facilitate. Ten $300 sponsors are better than zero $1000 :) 
2. We'll get a bunch of content saying companies want to help open-source and Drupal in particular, and it should be 
   large enough that it's talked about outside our community, so that would help with Drupal awareness at a minimum. 
   And it's a tool for employees to help keep the company accountable and help resolve any offset between what they said 
   and what's happening.
3. More focused sponsoring for module maintenance, may help with reducing issue queues length overall and showing that
   the work they do as maintainers is valued, and that the burden is recognized by people making money off it.
4. With the various score boost based on the amount of time spent on contribution, hopefully we'll start to see people 
   with more time to contribute instead of many people with very little time. It's sustained contribution that makes it
   possible to improve Drupal.

There are still ways to game the system, but the verification can be done by a DA employee (since the marketplace is a 
service they provide), and we can stop relying on module maintainer labor to arbitrate company rankings.

The credit system stays in place and continues to be used, it just stops being used for gaming and simplify maintainers
tasks of crediting people.

In that situation if there is no pledge written and no new DA sponsorships then we can discuss the usefulness of the 
ranking itself and at least leave maintainers and contributors alone since ranking doesn't matter as much as we thought. 


## Continuing the discussion

On drupal.org there is a lot of discussion on the topic and this post is an attempt to frame the alternative approach
I've suggested on the issue [#3086885: Marketplace ranking Algorithm: Weights & Measures] [#3086885]. The link has 
details on how to come up with contribution % and also talks about how it applies to freelancers.

I realize the real solution is something in the middle where we have mainly company metrics and some sort of use of
credit. It's always a balance, my point is that the current balance is [making things toxic] [droptime] and we should hold companies
accountable for their own ranking if they're making use of that marketplace ranking instead of arguing amongst each others trying to find ways
to compensate. 





[credit value]: https://www.drupal.org/association/blog/helping-maintain-high-value-drupal-contributions
[ranking]: https://git.drupalcode.org/project/drupalorg/-/blob/cd0739f44b183ae6f01593b21b15500df2a2d7f8/drupalorg/drupalorg.drush.inc#L165
[marketplace]: https://www.drupal.org/drupal-services
[sponsor]: https://www.drupal.org/association/supporters
[droptime]: https://www.thedroptimes.com/9418/how-overcome-gaming-issue-credit-system
[#3086885]:https://www.drupal.org/project/drupalorg/issues/3086885#comment-14686626
