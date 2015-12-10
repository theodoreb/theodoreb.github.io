---
layout: post
title: "Smartphone landscape in 2015"
summary: "Android devices are churning along"
comments: "issues/12"
date: 2015-12-08 00:42:00 +0100
tags: smartphone drupal-planet
---


Recently I've been digging up data about smartphone use worldwide for a 
presentation and found out a few things that surprised me, let me share them.
The data comes from several sources: *TomiAhonen Almanac*, *IDC*, *Gartner*, 
*Statista*. Exact references can be found at the end. 


## Quantitative data

From 2010–2014 the data comes from measurements, 2015—2019 is forecast 
data. Shipment data is the most accurate. I've extrapolated the usage data 
for 2015—2019 based on little information so take it with a grain of salt, 
if you know of more accurate predictions, let me know and I'll update here.

<figure>
<figcaption>
Smartphone shipments by OS and total smartphone usage for 2010—2019
</figcaption>
<a class="hide" href="http://read.theodoreb.net/2015/smartphone-landscape-2015.html">
<img id="chart-main-fallback" src="http://read.theodoreb.net/assets/2015-12/smartphone-landscape-2015.png" alt="Graph of smartphone shipments and usage for the 2010—2015 period">
</a>
<div id="chart-main"></div>
</figure>


In short Android and IOS won, Windows has negligible market share, and Firefox
 OS doesn't even show up in the data. The bump in Others before 2013 correspond 
to Nokia devices (running Symbian) and Blackberry, both disappeared. The dip in
 shipments in 2015—2016 is because of a market growth slowdown. 
     
### Mathemagic     

This is interesting in itself but we can go
further with the data. Let's assume we treat smartphone usage like 
a subscription, every year you renew your subscription with your device, or 
not. Within that model we can use some math to get the attrition rate and 
deduct the average time a device is used before being replaced. Now over the 
first 4 years, Apple devices had a modest growth and their regular iPhone 
release allows us to check that the data and this calculation is not going all 
over the place. 

<p class="highlight">
The average life of an iPhone is <strong>1 year and 3 months</strong> over 
the 2010–2014 period.
</p>

Looking good so far, as Wikipedia warns, getting the attrition rate for a 
fast-growing population doesn't make sense and we don't have ganular enough 
data to compensate. That sounds about right because if we calculate 
the average life of an Android device in the same time period, we get 
**3&nbsp;months**. Since the market is slowing down, we'll have a better luck of 
calculating device life over the 2015–2019 period: 
 
<div class="p-highlight">
<p>Over the 2015–2019 period the average life of a device:</p>
<ul>
<li>Android: <strong>1 year and 1 month</strong></li>
<li>iPhone: <strong>1 year and 5 months</strong></li>
</ul>
</div>

This looks more reasonable. I don't think Apple would want to slow down the 
release rate, getting their product a few months before christmas is pretty 
perfect timing so either one year they won't release a new iPhone or get one
out so bad most won't want it (as if). Could be that my data is wrong too.
 
## Qualitative data


<figure>
<figcaption>
Price range of smartphones by OS in Q2 2014
</figcaption>
<a class="hide" href="http://read.theodoreb.net/2015/smartphone-landscape-2015.html">
<img id="chart-price-fallback" src="http://read.theodoreb.net/assets/2015-12/smartphone-landscape-2015-price.png" alt="Graph of smartphone price distribution">
</a>
<div id="chart-price"></div>
</figure>


This is starting to explain explaining why Android devices exploded and why 
the churn rate will be higher than iPhones. Android and Windows devices are 
way cheaper. 

<p class="highlight">
Given Android marketshare <strong>48% of all smartphones were sold for less 
than $200</strong> in 2014.
</p>

Future price data is only available for 2017 where the average price of a 
smartphone will be $265 globally. One curious fact is that 
while average smartphone prices drops everywhere below $300 in north america 
price goes up to $567. Americans would probably be optimist enough to think 
that they'll all be rich and buy only high-end smartphones, I just 
think they'll get milked by vendors. 


## Conclusion

All this data will be put to good use in the next post. All of this 
 was compiled to have data to go along with my mobile javascript rant and how 
 [$10 smartphones] [cheapo] are actually really important to the web.  


## References

Where the data comes from as well as interesting related pages.

* [Smartphone Year 2014 Final Stats: Brand Top 10, OS Top 4, Installed Base, Regional Split; and Bloodbath Q4 Results (Updated)](http://communities-dominate.blogs.com/brands/2015/02/smarphone-year-2014-final-stats-brand-top-10-os-top-5-installed-base-regional-split-and-bloodbath-q4.html)
* [Smartphone Bloodbath 2010: Now Final Numbers Q4 and Full Year 2010 - and each rival awarded their final grades](http://communities-dominate.blogs.com/brands/2011/02/smartphone-bloodbath-2010-now-final-numbers-q4-and-full-year-2010-and-each-rival-awarded-their-final.html)
* [Final Q4 Numbers and Full Year 2012 Stats for Smartphone Market Shares: Top 10 Manufacturers, Top OS Platforms, Top Installed Bases (Revised & Corrected)](http://communities-dominate.blogs.com/brands/2013/02/final-q4-numbers-and-full-year-2012-stats-for-smartphone-market-shares-top-10-manufacturers-top-os-p.html)
* [Lets Understand the Mobile Phone Market, installed base and smartphones vs dumbphones](http://communities-dominate.blogs.com/brands/2010/12/lets-understand-the-mobile-phone-market-installed-base-and-smartphones-vs-dumbphones.html)
* [Worldwide Smartphone Market Will See the First Single-Digit Growth Year on Record, According to IDC](https://www.idc.com/getdoc.jsp?containerId=prUS40664915)
* [Global Smartphone Growth Expected to Slow to 11.3% in 2015 as Market Penetration Increases in Top Markets, According to IDC](https://www.idc.com/getdoc.jsp?containerId=prUS25641615)
* [Worldwide Smartphone Growth Expected to Slow to 10.4% in 2015, Down From 27.5% Growth in 2014, According to IDC](https://www.idc.com/getdoc.jsp?containerId=prUS25860315)
* [How Smartphone Prices Differ Across Platforms](http://www.statista.com/chart/2586/how-smartphone-prices-differ-across-platforms/)
* [Forecasted unit shipments of smartphones worldwide in 2014 and 2018 (in million units), by operating system](http://www.statista.com/statistics/309448/global-smartphone-shipments-forecast-operating-system/)
* [Global smartphone shipments forecast from 2010 to 2019 (in million units)*](http://www.statista.com/statistics/263441/global-smartphone-shipments-forecast/)
* [Smartphone unit shipments worldwide from 2013 to 2015 (in million units), by region](http://www.statista.com/statistics/412108/global-smartphone-shipments-global-region/)
* [Gartner Says By 2018, More Than 50 Percent of Users Will Use a Tablet or Smartphone First for All Online Activities](https://www.gartner.com/newsroom/id/2939217)
* [Churn rate](https://en.wikipedia.org/wiki/Churn_rate)

------

### 2015-12-08: Updated

Updated total smartphone usage data based on [Ericsson Mobility Report](http://www.ericsson.com/res/docs/2015/ericsson-mobility-report-june-2015.pdf) data.
It's a little optimistic but the shipment data combined with the average device
lifespan supports the 6 billions number.


<div style="display:none">
  <link rel="stylesheet" href="/assets/2015-12/c3.min.css">
  <style>
    #chart-main {width: 100%; height: 600px;}
    .c3 pattern circle {fill: #fff; fill-opacity: 1}
    .c3-line {stroke-width: 6px; z-index:100; }
    .c3 pattern path {stroke: #ddd; stroke-opacity: 1}
    .c3-area {opacity: 1}
  </style>
  <script src="/assets/2015-12/d3.v3.min.js"></script>
  <script src="/assets/2015-12/textures.min.js"></script>
  <script src="/assets/2015-12/c3.min.js"></script>
  <script src="/assets/2015-12/smartphones.js"></script>
</div>


[cheapo]: http://arstechnica.com/gadgets/2015/12/a-review-of-the-10-walmart-phone-better-than-nothing-but-not-by-much/
