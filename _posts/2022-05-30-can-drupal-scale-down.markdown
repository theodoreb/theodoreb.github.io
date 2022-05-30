---
layout: post
title: "Can Drupal scale down?"
summary: "Drupal can scale up, how far down can it go?"
comments: "issues/17"
date: 2022-05-30 16:00:00 +0200
tags: drupal-planet javascript
---

Over the years we've heard of massive Drupal websites, site factories, traffic spikes, etc. Which is impressive that 
it's possible to do with Drupal, although with enough time, money, and hardware that's to be expected to some extend.

On the other side of the scale (pun intended), when you have little time, money, and hardware I would have a hard 
time recommending Drupal, even if it was the best fit with it's content modeling capabilities, extensibility, etc. 
It's still kinda expensive to host and maintain a Drupal website. That brings me to what I think would be a good 
thing to work towards. 

I liked the latest [Driesnote] a lot, from the [re-focus on sitebuilders] [sb] to the [composable core] [cc] 
strategy it all builds towards a future where I can see people enjoy playing with Drupal again. In that spirit I'd 
like to talk a bit about a few things I had in mind for a while. 

**Static by default**: We have the chance of having a great static generation module in Drupal called [Tome]. It 
makes it possible to use a regular Drupal site and publish the resulting site as static HTML. I worked on an 
implementation of Tome for a fairly big website a few years ago and Drupal as a static generator works very well. We 
have unique capabilities that makes this way of working very efficient and very relevant. See [#3230448] for 
discussion. It'd be nice to have Drupal on the back for site editors that push changes to a  simple HTML hosting to 
publish their website. Cheap and secure.

**Default to SQLite**: Setting up and administering a SQL server is not very fun, and SQLite is very performant. I 
would love know how big a site can get using SQLite before starting to run into performance issues. I'm betting as 
long as you're not saving the file over a network share it should hold pretty well. I don't have an issue number for 
that one, maybe it only takes a few good case studies to start pointing people towards this as a solution for 
hosting a real Drupal website? 

**Server included**: In JS-land nodejs can be the whole application server, no apache/nginx proxy of some kind. If you 
have nodejs installed, your application can be served. There have been a bunch of [attempts] [roadrunner] at an 
embeddable PHP server, wouldn't it be nice to "composer require" the server, run it and you're done? It will take some 
work to make Drupal ready to be used this way but nothing impossible, see [#2218651]. I got roadrunner to serve a 
few pages from the Umami profile a year ago, cookies didn't work but overall it went better than expected.  

**Drupal.exe**: Could we possibly package Drupal (or parts of it) in a single file that makes it easier to update? 
would be harder to apply patches to that but maybe it wouldn't be impossible? Makes it easy to update core when it's 
just a file to change. It's a nice idea to think about, even if a bit impractical today. In any case discussion can be 
picked up at [#2910136].


If we put all this together, assuming you don't have authenticated traffic, the experience of a Drupal at small 
scale could be: 

1. Download the Drupal executable from drupal.org
2. Run the Drupal executable, it creates the sqlite DB, config files, upload folder, static export folder
3. Point your server to the static export folder, or FTP that to your static file server
4. Run the Drupal executable as a service (or run it only when you need to work on your site really) to serve the 
   admin interface and the HTML generation tool
5. Update your site and whenever changes are made, the HTML export is updated.

If you have a few authenticated users, or a few dynamic things like a contact form or some API callback, it's the 
same thing except instead of pointing to the static generation folder, you're pointing to whatever port you're 
running the service at. Since the server is included, it can be used to serve the static pages from the static 
export folder when possible. 


All of this to say, I'd love to be able to use Drupal for myself but it's too heavy for the things I would want to 
use it for, even if it's features are perfectly suited for the job. 



[Driesnote]: https://www.youtube.com/watch?v=Ig676RzJbLo
[sb]: https://dri.es/drupal-is-for-ambitious-site-builders
[cc]: https://dri.es/a-plan-for-drupal-11 
[Tome]: https://www.drupal.org/project/tome
[roadrunner]: https://roadrunner.dev/
[#2218651]: https://www.drupal.org/project/drupal/issues/2218651 "[meta] Make Drupal compatible with persistent app servers like ReactPHP, PHP-PM, PHPFastCGI"
[#3230448]: https://www.drupal.org/project/ideas/issues/3230448 "Add a static generation tool to core"
[#2910136]: https://www.drupal.org/project/drupal/issues/2910136 "Experiment: package PHP libraries in a single Phar file"
