---
layout: post
title: "JavaScript management in Non-JavaScript CMS"
summary: "Wish I had PHP solutions to JS problems"
comments: "issues/16"
date: 2022-05-24 21:45:00 +0200
tags: drupal-planet javascript
---

I wrote this post from scratch about 7 times over the last few months, and I'm not getting anywhere so I'll write up 
something, it's not perfect, I took a few shortcuts but having a discussion going is more important than a perfect post.

## Situation

**JavaScript development went from widget-based add-ons for functional HTML pages to being responsible for HTML 
page assembly and even basic browser interactions (such as navigation, form submission, etc.)**

In the first case, the JS files are standalone-ish, they usually depend on a bigger library (like jQuery) and 
sticking them on the page with a script tag is enough for things to work. Makes it easy to assemble pages at runtime 
based on the original JS source. Additional processing can be done on the JS file to minify or gzip it but it 
doesn't go much further than this. This is what Drupal and most other CMSs that have been around for a while do very 
well.

This worked well until the push for better UX shifted more and more responsibilities to the frontend. More 
responsibilities translate to more code sent, minification wasn't enough and JS libraries got bigger and became 
frameworks with smarter tools, we began to see an optimization or build step to transform development code into 
running code. This is around the time where CMSs started to get left behind I'd say.

Fast forward to now where the whole site/application is in JavaScript and the framework needs to build the application 
before it can even be loaded. It's not really possible to add or remove functionality at runtime, if there is a 
change in the application, the whole application needs to be built again. On top of this frameworks are now 
competing in server side rendering capabilities.


## Problem

**How to accommodate JS as it is written today with the CMSs way of consuming it?**

### Drupal

Essentially, transform a monolithic JS application in a set of files that are optional and can be loaded at runtime 
without the need of a build step. One partially successful example of this is how CKEditor 5 has been integrated into 
Drupal by using the relatively new [Webpack DllPlugin], instead of building a single JS file with all the WYSIWYG tools,
each tool is packaged in it's own file that can be loaded at runtime without fuss. This solution still needs a build 
step but at least the result of the build step can be used dynamically. 

### Wordpress

In the case of Wordpress they solved the problem simply by going all JS with [Gutenberg]: a whole new repo,
only JS/React code, very little PHP in sight, and a great opportunity to generate engagement by creating a new way of 
doing things. It seems to be working well for them. 

### Symfony

Symfony went with a Yaml API around nodejs tooling with [Webpack Encore]. Still need nodejs installed and all it 
comes with.

### Another way?

Personally I would like to explore an alternative path before considering to move all-in on the JS way of doing 
things, and require nodejs for hosting a Drupal website, a path that can help mitigate some of the pain of JS tooling. 
There is no reason for JS tooling to be written only in JS, there is already a bunch of tools written in rust, as 
long as you can read the file, you can make the same transformations in any language.

**I'd like to see a set of PHP-based tools that helps manage JS**, in a way that the build step is actually handled by 
the CMS so that people writing Drupal code do not need to care about nodejs, tooling, package updates, etc. For 
example I would love to write JavaScript modules and have the dependencies automatically picked up and declared in 
Drupal and at the same time, have Drupal aggregate all those modules in a single file. Something that is 
surprisingly impossible to do natively [for now] [module bundle] hopefully. Until then I'm itching to use [peast] to 
transform JS from PHP and start making tools that _remove_ problems for PHP developers.


## What do you think?

As as said in the beginning this post is a bit messy, I'm not comparing the same things or define what it is that 
the build step should be doing or not doing, but I'm happy to just talk about the topic and see what others think.



[Webpack DllPlugin]: https://webpack.js.org/plugins/dll-plugin/
[Gutenberg]: https://github.com/WordPress/gutenberg
[module bundle]: https://github.com/tc39/proposal-module-fragments
[peast]: https://github.com/mck89/peast
[Webpack Encore]: https://github.com/symfony/webpack-encore-bundle
