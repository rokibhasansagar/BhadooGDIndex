# Static Front End of GDI API

### How?

* Deploy on Pages or cPanel or Any Hosting that supports HTML Pages
* Rename 404.html according to your host, eg. 404.shtml for cPanel Hosts, 404.html works on most hosts without any extra config eg. GitHub Pages, Cloudflare Pages and Netlify.
* Edit index.html and 404.html as per your needs, don't remove important terms or links
* Deploy worker-super-api.js on Cloudflare Workers and add API URL in config at Line 74. Also add your Static Site in config for cors_domain at Line 31.
* URL should not contain trailing i.e. / should not present at end of API or CORS URL.
* This Worker Config is not fully tested.

### Important Note!

* User can use only 1 Drive, if you're using Multiple Drives, then search function will work only if you have followed Multiple Drives Worker Rules.
* Incase of invalid config and using Multiple Drives, you may face problems on search results due to results from Drives which are not added.

### Advice

* Use API on your Cloudflare account. It isn't downloading so It'll not receive any ban from Cloudflare.
* Deploy Static Site Pages on your favorite host, recommend Cloudflare Pages.
