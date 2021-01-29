# Google Personal/Shared Drive Index [![](https://data.jsdelivr.com/v1/package/gh/ParveenBhadooOfficial/Bhadoo-Drive-Index/badge)](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/Bhadoo-Drive-Index)

* Supports Both My and Team/Shared Drives with Dark Mode.
* Development Paused due to busy schedule.

[![Screenshot](https://raw.githubusercontent.com/ParveenBhadooOfficial/Bhadoo-Drive-Index/master/images/beta-light-screenshot.png)](https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index)

[![Screenshot](https://raw.githubusercontent.com/ParveenBhadooOfficial/Bhadoo-Drive-Index/master/images/beta-dark-screenshot.png)](https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index)

`Note: The Changes in your workers config can effect later due to cache. Use incognito mode everytime to open the worker URL to overcome that issue.`

## Project Website

* [gdi.js.org](https://gdi.js.org) by [js.org](https://js.org)

## Demo Sites

* [light-demo.ve.workers.dev](https://light-demo.ve.workers.dev)
* [dark-demo.ve.workers.dev](https://dark-demo.ve.workers.dev)
* [password-demo.ve.workers.dev](https://password-demo.ve.workers.dev) id and password are `admin` and `admin`

## How to

* Current Version `2.0.7`
* Beta Version (Latest) - [generator.driveindex.ga](https://generator.driveindex.ga) (Dark Theme Available)
* If you want to deploy main drive leave the option ROOT as it is.
* If you want to deploy your Team Drive/Shared Drive/Folder then copy the ID and replace it with ROOT.
* Eg. if you open this shared drive `https://drive.google.com/drive/u/0/folders/0AOM2i7MQiuWIUk9PVA` - `0AOM2i7MQiuWIUk9PVA` is its ID.
* Authenticate and copy the code from Google and paste it into Authorization Code Box.
* Click on Get Code to Generate Code and Copy it for later use.
* Now Create Cloudflare account and verify email or login with existing account.
* Find Workers and Open it.
* Create your sub-domain or continue if already done.
* Select the Free Plan.
* Click on Create a Worker.
* You can rename the workers at top of the page.
* Now paste the code you copied before.
* Click on Save and Deploy.
* Done. (May take time for some users due to new account or cache issues)
* [Watch Video](https://www.youtube.com/watch?v=8WMddzVX1Dw&feature=youtu.be)

## Basic Config

````
"roots": [{
	"id": "root", // shared drive id or folder id
	"name": "Cloud Zero", // name for drive
	"user": "admin", // username for id pass
	"pass": "admin", // password for id pass (works also if their is no username, keep blank if no auth is needed.
	"protect_file_link": true // protects the direct links when true.
}],
````

## Brand Customization and Dark Mode

* In Latest Release, you can rebrand the Index as per your needs.
* Line 57 will help you select light or dark theme where false is light and true will be dark theme.
* After that each line has its own custom feature. Edit as per your needs.
* You can remove credit option but we request you not to.
* See Below code to understand Customization.
````
const uiConfig = {
	"theme": "bhadoo_bootstrap", // Change doesn't works
	"dark_mode": true, // switch between light or dark themes
	"version": "2.0.7", // don't touch this one. get latest code using generator at https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index
	"logo_image": true, // true if you're using image link in next option.
	"logo_height": "", // only if logo_image is true
	"logo_width": "100px", // only if logo_image is true
	"logo_link_name": "https://cdn.jsdelivr.net/gh/jscdn/svg@1.0.3/bhadoo-cloud-logo-white.svg", // if logo is true then link otherwise just text for name
	"contact_link": "https://t.telegram.ind.in/BhadooDiscussion", // Link to Contact Button on Menu
	"copyright_year": "2050", // year of copyright, can be anything like 2015 - 2020 or just 2020
	"company_name": "Bhadoo Cloud", // Name next to copyright
	"company_link": "https://t.telegram.ind.in/BhadooCloud", // link of copyright name
	"credit": true, // Set this to true to give us credit
	"display_size": true, // Set this to false to hide display file size
	"display_time": false, // Set this to false to hide display modified time for folder and files
	"disable_player": false // Set this to true to hide audio and video players
};
````

## Search Limitations

* Search only works if you use Shared Drive ID or root.
* Search won't work or the bar won't appear if you're using Folder ID inside from root or Shared Drive.

## Known Bugs

* Light Mode Text Hover Underline needs to be fixed.

## Upcoming Changes

* Clear Path to Navigate inside Previous Folders (currenty shows inside menu).
* Icons from other Index for better view.
* Adding Links to other Indexes.
* Adding More Features from other Indexes.
* Click to Copy Download Button

## Other Indexes

* [Edited Version](https://gist.github.com/ParveenBhadooOfficial/52ffbfcfa24e53f8afad4851618307fc) based on [goindex-theme-acrou](https://github.com/Achrou/goindex-theme-acrou)

## Credits

* Source: [maple3142](https://github.com/maple3142/GDIndex)
* Source: [yanzai](https://github.com/yanzai/goindex)
* New Design: [Bootstrap](https://getbootstrap.com)
* Cloudflare: Workers

## Disclaimer

* These Index's are written by someone else, possibly by donva and [maple3142](https://github.com/maple3142/GDIndex).
* Beta Version is redesigned using Bootstrap from Alpha Version by @ParveenBhadooOfficial.
* This Repo was imported from [yanzai](https://github.com/yanzai/goindex) and then modified for personal use. After requests from many users made compatible with user requirements.

## Support this Project

[![Support](https://cdn.buymeacoffee.com/buttons/v2/default-white.png)](https://www.buymeacoffee.com/bhadoo)
