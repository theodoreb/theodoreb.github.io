---
layout: post
title: "Sponsored Drupal Contribution"
summary: "2 months in, it's going very well"
comments: "issues/22"
date: 2024-05-29 21:00:00 +0200
tags: drupal-planet community
---

Back in March I started to look at sponsors for the time I'm spending working on the Drupal core issue queue. It's 
been a few months and I wanted to go back on all the sponsored commits I made as a Frontend Framework Manager, to 
show how the sponsorships helped Drupal for the past few months. 

The [sponsorship offer] [contrib1] is simple: you send me a fixed monthly fee of 2500€, and I share the issue credit
of every Drupal core commit that I make. I'm very thankful to [Palantir.net] [palantir] and [OPTASY] [optasy]
who are sponsoring me. Thanks to them I was able to increase the amount of commits I can make to Drupal core. In the 
last 3 months I committed 61 issues (worth 610 weighted issue credits) and the more sponsors I have, 
the more time I can spend reviewing and committing issues.


<ol id="issues">
<li><a href="https://www.drupal.org/project/drupal/issues/3389317">Differentiate visually dragging with and without hierarchy</a> A nice improvement for editors working a lot with lists and trees</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3432298">Sticky table header is not sticky if --drupal-displace-offset-top is not defined</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3432151">[jQuery 4] ajax.js and jquery.form.js use deprecated function $.parseJSON()</a> Preparing for the next release of jQuery 4 with some cleanup.</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3432249">cspell check is broken in commit-code-check.sh</a> Sometimes we break the CI and it needs to be fixed 🤷</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3270139">CKEditor admin toolbar config buttons using ::before to add content: have invalid screen reader text</a> It takes dedication to land those accessibility fixes, kudos to our accessibility contributors.</li>
<li><a href="https://www.drupal.org/project/drupal/issues/2893568">Linking in CKEditor 5: URLs with top-level domain but without protocol should get a protocol added automatically</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3354998">#states disable property has stopped working for submit button and other elements</a> Sometimes when we clean-up code, we clean too much and break some other parts of the code</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3418863">Setting width for sticky-header is broken</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/2966656">Negotiate max width/height of oEmbed assets more intelligently</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/1149078">States API doesn't work with multiple select fields</a> This was a <strong>a 13 years old issue!</strong> It _always_ feels good to close an issue that old.</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3432601">Add deprecation/bc support for library-overrides when files are moved</a> Making sure backwards compatibility is working and useful</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3436761">Remove default event from collpased nav-tabs button</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3364884">[DrupalHtmlEngine] HTML-reserved characters (>, &lt;, &) in &lt;script> and &lt;style> tag are converted to HTML entities</a> It happens that we fix things for uses cases that stretch the reasonable (like having whole script tags in a WYSIWYG field)</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3404663">Olivero: Show content preview checkbox is not center aligned with the layout builder buttons.</a> Even a minor issue of a misaligned text by a few pixels is worth fixing</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3426514">Drupal.theme.progressBar() does not escape output correctly</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3421843">filter_autop should ignore twig.config debug html comments</a> Making sure Developer experience doesn't impact regular users</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3419621">tablePositionSticky should not be called on a non-array variable</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3436963">CKEditor 5 table cell vertical align "middle" doesn't work</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3432183">Move system/base component CSS to respective libraries where they exist</a> A surprising performance improvement. There are still some low hanging fruits to improve the default frontend performance of Drupal</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3439439">Remove country setting from the installer</a> When you don't need a piece of data, just don't collect it</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3272629">Media Library widget display doesn't return to first page on applying filters</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3303557">Deprecate and remove the AJAX replace method</a> That was a leftover D7 era deprecation</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3436936">Claro should use libraries-extend for views_ui.css</a> Even in core it happens that we don't use the right way to do something</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3296098">Removal :tabbable usage in dialog.js</a> Some more jQuery 4 preparation</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3440959">Close icon is ovrlapping the title text in modal in claro</a> Yes, typos can make it in the commit log</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3365367">Convert Olivero's teaser into a single directory component</a> Slowly but surely we're adding Single directory components to Drupal core</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3239139">Refactor (if feasible) uses of the jQuery animate function to use Vanilla/native</a> More CSS awesomeness making JavaScript code disapear</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3411839">[11.x] Update to jQuery 4.0.x beta</a> Drupal staying on the bleading edge of frontend developement :)</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3238868">Refactor some uses of the jQuery parents function to use vanillaJS</a> Did a small post earlier about this, CSS is really very good</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3409505">[regression] Uncaught TypeError: Cannot read properties of null (reading 'style') (toolbar.js)</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3441782">JSDoc for ajax command "changed" is incorrect</a> There was a bunch of documentation fixes around this time</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3443899">menu_heading_id variable is not set in menu-region--footer.html.twig</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3443867">Add @file documentation to navigation.html.twig layout template</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3443869">Add @file documentation to menu-region--footer.html.twig template</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3441124">Views UI action buttons create janky layout shift on page load</a> Polishing the loading of pages with heavy JS usage is important to show we care about UX</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3440220">Remove bottom radius on hover state of expanded sub menu item</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3443527">Setting empty URL when making embedded media a link in CKEditor5 causes JS errors</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3440226">Update color of submenu title text</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3432632">Collapsed nav-tabs status not exposed to screen reader</a> There is a good number of accessibility fixes after this one, always nice to commit</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3440223">Incorrect padding on child menu items</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3266299">Claro: Form labels that are disabled have too low color contrast</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3282598">Claro should not hardcode decimal list style type for &lt;ol></a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3439646">Some of string comparisons should use String.prototype.startsWith() or String.prototype.endsWith()</a> Removing regular expressions as much as we can is a noble goal</li>
<li><a href="https://www.drupal.org/project/drupal/issues/2990766">Location of "Skip to Main" link below admin toolbar in Claro is problematic for screen magnifier users</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3191727">Focus states on mobile second level navigation items can get cut off in Olivero</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3443559">Regression: Shortcuts menu flickers when the page is loaded</a> Those toolbar flickering issues are tricky. Thankfully the new navigation module code is simpler than the existing Toolbar code, so it's much much easier to deal with</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3443461">escapeAdmin.js functionality should be removed(it not used anymore)</a> Removed the feature that removed the overlay… for now, escapeAdmin will be back one way or another)</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3445274">Navigation module offsets the Olivero skip link element</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3439017">Umami page.tpl.php breaks block placeholders</a> Sometime themes can break really nice Drupal features (like bigpipe)</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3374464">Claro CSS for dropbutton items adds large gap of white space</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3445033">Replace dialogContentResize jQuery event with CustomEvent</a> Those events issues are really exciting, we're moving away slowly from jQuery for event management</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3425104">Umami views should use responsive grid</a> Another case of core not using the awesome features we provide, not anymore :)</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3424162">Claro highlighted row not communicated to keyboard users</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3446357">Fix overflow visibility for wrapper content in navigation CSS</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3298580">Claro details component does not have the right class</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3439580">Make drupal.tableheader only use CSS for sticky table headers</a> I will always welcome CSS-removing-JS patches</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3446504">Mismatch between implementation and description for Drupal.Message.prototype.remove().</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3350947">"Skip to main content" link skips over content that is essential to the page, banner role should be for global content</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3447206">Add pdureau as a co-maintainer for the Theme API with a focus on SDC</a> Adding new maintainers is too rare. In this case the community is better for having him around</li>
<li><a href="https://www.drupal.org/project/drupal/issues/3418489">Choose an icon for the Announcements link</a></li>
<li><a href="https://www.drupal.org/project/drupal/issues/3449469">Remove deprecated moved_files entries in core</a></li>
</ol>


Many of these issues are maintenance focused, it's not shiny, it's not exciting, and it needs to be done. 
Sponsoring big initiatives like Starshot is exciting, let's not forget the unexciting day to day that keeps things 
running. If you're interested in supporting my work on Drupal core and keep the frontend fixes coming, 
consider [sponsoring me] [contrib2]. 


[contrib1]: https://tresbien.tech/drupal-contribution/?f=b&pos=1
[contrib2]: https://tresbien.tech/drupal-contribution/?f=b&pos=2
[palantir]: https://www.drupal.org/palantirnet
[optasy]: https://www.drupal.org/optasy
