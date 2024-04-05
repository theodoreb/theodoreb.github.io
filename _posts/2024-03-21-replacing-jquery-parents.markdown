---
layout: post
title: "Replacing jQuery parents() with CSS :has()"
summary: "CSS is awesome"
comments: "issues/20"
date: 2024-03-21 23:30:00 +0100
tags: drupal-planet community
---

CSS has been on a roll for a few years and we keep getting great things to use. In the process of [removing jQuery from
Drupal core] [jquery core], we're running into the problem of [replacing jQuery `.parents()`] [jquery parents] method 
by something else. In certain conditions it is very easy to use CSS selectors to replace this method. Given the 
following HTML:

```html
<html>
   <body>
      <main>
         <article id="article-19"></article>
      </main>
   </body>
</html>
```

To select all the parents of the article tag with jQuery you could do: 

```javascript
// This returns: main, body, html
$('#article-19').parents(); 

// This returns: body 
$('#article-19').parents('body');
```

The typical way of doing this is with a while loop looking at the `parentElement` and building the array manually. 
Now with `:has()` it becomes much easier: 

```javascript
// This returns: html, body, main
document.querySelectorAll(':has(#article-19)');

// To return the same order as jQuery:
Array.from(
  document.querySelectorAll(':has(#article-19)')
).reverse();

// This returns: body
document.querySelectorAll('body:has(#article-19)');
```

The only limitation is that a unique identifier needs to exist to build the CSS selector, that's easy enough to generate
if necessary.

Use the platform. When it's good, it's really good.

[jquery core]: https://www.drupal.org/project/drupal/issues/3238306
[jquery parents]: https://www.drupal.org/project/drupal/issues/3238868

