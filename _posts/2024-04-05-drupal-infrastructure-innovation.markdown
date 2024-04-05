---
layout: post
title: "Drupal needs infrastructure innovation"
summary: "Wait, what?"
comments: "issues/21"
date: 2024-04-05 12:30:00 +0200
tags: drupal-planet community
---

Drupal is pretty expensive to host and maintain. There is already work well under way to address this with 
automatic updates and project browser. It's great, and it's not enough. What if we could ship drupal with a 
production-ready webserver that can handle real-time features? What if we could make HTTPS certificate management 
easier? What if we could significantly improve the performance of Drupal?

Exactly 2 years ago I started to talk about [how can drupal scale down] [scale] and in 2 years things have changed!
Last week I attended the very interesting (and well organized) [Drupalcamp Rennes 2024] [rennes] where I saw 
[Kévin Dunglas] [kd] give a talk about [FrankenPHP] [frankenphp]: <q>The Modern PHP App Server, written in Go</q>. 
Turns out the last two point on my "drupal scale down" have a solution: it can replace apache/php-fpm and be 
distributed as a single executable. I haven't tested it yet, it's possible to bundle server and application code to 
ship everything in one executable.

Drupal has always been about giving people more power than they expect (or even want in some cases…). On the content 
management side of things we're very, very advanced, even if some interfaces and interactions can look and feel a bit 
dated. Defining content types, creating custom fields, workflows, content listing, layouts, decoupled, media library, 
and more we've been doing that for a long time, we have a very wide range of modules for practically any use case you 
can think of. And the vast majority of the modules work together without conflicts, and they're all free.

What I would like to see is Drupal using FrankenPHP in the worker mode as the default way to put Drupal on 
production. This will make it possible to host Drupal more easily. Hook the included webserver to a 
startup/monitoring script (we'll give examples) and you're ready to serve the website. No need to install apache, nginx, 
or even PHP! 

Now you can use the server to power your [real-time] [mercure] features, without having to write or 
maintain a separate nodejs server, all in PHP. If we make sure Drupal can work in the [worker mode] [worker-doc], 
there won't be a performance issue for this either. Without doing anything you'll get a performance boost for all your 
users thanks to [early hints] [early-hints], your CSS and JS will start loading before the HTML even arrives from the 
server. To get there we need a few steps: 

1. Create a configuration file suited to Drupal: [#3437187: Add Caddyfile configuration] [caddyfile]
2. Include FrankenPHP as a webserver option in DDEV: [Feature request: FrankenPHP Support #5655] [ddev franken]
3. Add a FrankenPHP runner to the gitlab testbots: [#3438767: Support FrankenPHP as a webserver] [drupalci]
4. At this point if Drupal tests pass we're ready to go, with a bonus step to increase performance.
6. **Bonus** make Drupal work in the "worker mode": [#2218651: [meta] Make Drupal compatible with persistent app servers like ReactPHP, PHP-PM, PHPFastCGI, FrankenPHP, Swoole] [worker]
5. Implement early hints for CSS/JS assets in Drupal (issue to be open, proof of concept in the [caddyfile issue] [caddyfile])


Right now I need help making the DDEV integration work well with the recommended version of FrankenPHP, and making this 
available to the Drupal testbot. If you have a Drupal website using DDEV you can already try it out with
`ddev get theodoreb/ddev-frankenphp-drupal && ddev restart` and it should mostly work (with some https problems for now).
I would love to know what you think, leave a comment or let's chat in #drupal slack.

If you're interested in [sponsoring] [sponsor] me to work on this or other Drupal things, that would be great!



[scale]: https://read.theodoreb.net/2022/can-drupal-scale-down.html
[rennes]: https://rennes2024.drupalcamp.fr/
[kd]: https://dunglas.dev/
[frankenphp]: https://frankenphp.dev/
[ddev]: https://ddev.com/
[caddyfile]: https://www.drupal.org/project/drupal/issues/3437187
[ddev franken]: https://github.com/ddev/ddev/issues/5655
[drupalci]: https://www.drupal.org/project/drupalci_environments/issues/3438767
[worker]: https://www.drupal.org/project/drupal/issues/2218651
[mercure]: https://frankenphp.dev/docs/mercure/
[worker-doc]: https://frankenphp.dev/docs/worker/
[early-hints]: https://developer.chrome.com/docs/web-platform/early-hints
[sponsor]: https://tresbien.tech/drupal-contribution/?from=blog
