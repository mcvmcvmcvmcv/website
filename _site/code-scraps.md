
Can use this with my plugin to spit out the date that a particular page was modified. But, for now I am just gonna use site.date to capture site-wide updates 

	Last update: {% capture lastmod_date %}{% last_modified index.html %}{% endcapture %}{{ lastmod_date | date: "%b %Y" }} 


Spit out an article sitting in the data folder. I think it's a little bit much for now, like I don't have so much data that I *need* to use this feature.

	{% for article in site.articles reversed %}
			<p><a href="{{article.link}}">{{ article.content }} ({{ article.date | date: "%b %Y" }})</a></p>
		{% endfor %}