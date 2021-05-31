# Google Personal/Shared Drive Index 

[![](https://data.jsdelivr.com/v1/package/gh/ParveenBhadooOfficial/Google-Drive-Index/badge/year)](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/Google-Drive-Index)
[![](https://data.jsdelivr.com/v1/package/gh/ParveenBhadooOfficial/Google-Drive-Index/badge/month)](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/Google-Drive-Index) 
[![](https://data.jsdelivr.com/v1/package/gh/ParveenBhadooOfficial/Google-Drive-Index/badge/week)](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/Google-Drive-Index) 
[![](https://data.jsdelivr.com/v1/package/gh/ParveenBhadooOfficial/Google-Drive-Index/badge/day)](https://www.jsdelivr.com/package/gh/ParveenBhadooOfficial/Google-Drive-Index) 
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FParveenBhadooOfficial%2FGoogle-Drive-Index&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://github.com/ParveenBhadooOfficial/Google-Drive-Index)


# [READ THIS TO FIX ISSUES](https://github.com/ParveenBhadooOfficial/Google-Drive-Index/wiki/Getting-Started-with-gdi.js.org)

## Full Whitelabel and Customizable Index | One of a kind

## IMPORTANT UPDATE

* If your index stopped working, that means you're using old config, please generate new code with features and bug fixes.

### [Generate Code](https://gdi.js.org/build)

* Discuss Problems here at [Discussions](https://github.com/ParveenBhadooOfficial/Google-Drive-Index/discussions)
* Supports Both My and Team/Shared Drives with Dark Mode.
* Click https://generator.driveindex.ga to make yours or watch https://youtu.be/Ihk4Gm3DPvg.

[![](https://opengraph.githubassets.com/cc723ada47a587e6a6de9850ee06dc5e6eeeb8a33560e9313cafdebc4c18bb42/ParveenBhadooOfficial/Google-Drive-Index)](https://github.com/ParveenBhadooOfficial/Google-Drive-Index)

[![Screenshot](https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@master/images/themes/vapor.png)](https://youtu.be/Ihk4Gm3DPvg)

[![Screenshot](https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@master/images/themes/darkly.png)](https://youtu.be/Ihk4Gm3DPvg)

`Note: The Changes in your workers config can effect later due to cache. Use incognito mode everytime to open the worker URL to overcome that issue.`

## Project Website

* [gdi.js.org](https://gdi.js.org) by [js.org](https://js.org)

## Demo Site

* [testing.fetchgoogleapi.workers.dev/](https://testing.fetchgoogleapi.workers.dev/)

## How to

* Stable Release `2.0.18` on generator.driveindex.ga
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
* [Watch Video](https://youtu.be/Ihk4Gm3DPvg)

## Basic Config

````
    "roots":[
      {
          "id": "root",
          "name": "Drive One",
          "protect_file_link": false,
         // "auth": {"username":"password"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};
````

## Multiple ID Config

* Add this code for each drive. see cloudflare workers code for more info. (requires common sense)

````
    "roots":[
      {
          "id": "root",
          "name": "Drive One",
          "protect_file_link": false,
         // "auth": {"username":"password"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "root",
          "name": "Drive Two",
          "protect_file_link": false,
         // "auth": {"username":"password", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};
````

## Service Account

* Multiple Service Accounts are supported.
* set `"service_account": false` to `"service_account": true`
* Replace {} with data from service account `file.json`

## Multiple Users Password

* For single user

````
            // "auth": {"username":"password"} /** remove double slash at starting of this line to use password. */
````

* For multiple users (unlimited users)

````
      {
          "id": "",
          "name": "Drive Two",
          "protect_file_link": false,
          // "auth": { "user1":"pass1", "user2":"pass2", }  /** remove double slash at starting of this line to use password. */
      },
````

* where `"user1":"pass1"` and `"user2":"pass2"` are combinations.
* if users adds `"auth":{"":""}` empty values then the site will ask for authentication but user can enter without entering any data by clicking submit.

## Use of .password File

* This is directory encryption added by the original author.
* Add a .password file your required password in your folder which you want to protect, each folder should have its own .password file.
* The password is stored inside the Google Drive Folder, not the index and the .password file is hidden an cannot be accessed using Index.
* Example use https://bit.ly/3tBxXJN and password is `thispassword`

## Brand Customization

* In Latest Release, you can rebrand the Index as per your needs.
* Each line has its own custom feature. Edit as per your needs.
* You can remove credit option but we request you not to.
* See Below code to understand Customization.

````
const uiConfig = {
    "theme": "slate", // switch between themes, default set to vapor, select from https://github.com/ParveenBhadooOfficial/Google-Drive-Index#themes
    "version": "2.0.18", // don't touch this one. get latest code using generator at https://generator.driveindex.ga
    // If you're using Image then set to true, If you want text then set it to false
    "logo_image": true, // true if you're using image link in next option.
    "logo_height": "", // only if logo_image is true
    "logo_width": "100px", // only if logo_image is true
    "favicon": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@2.0.17-alpha.7/images/favicon.ico",
    // if logo is true then link otherwise just text for name
    "logo_link_name": "https://cdn.jsdelivr.net/gh/jscdn/svg@1.0.3/bhadoo-cloud-logo-white.svg",
    "fixed_header": true, // If you want the footer to be flexible or fixed.
    "header_padding": "60", // Value 60 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
    "fixed_footer": false, // If you want the footer to be flexible or fixed.
    "header_style_class": "navbar-dark bg-primary", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
    "footer_style_class": "bg-primary", // bg-primary || bg-dark || bg-light
    "css_a_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "css_p_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "folder_text_color": "white", // Color Name or Hex Code eg. #ffffff
    "loading_spinner_class": "text-light", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
    "search_button_class": "btn-outline-success", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
    "path_nav_alert_class": "alert alert-primary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_view_alert_class": "alert alert-danger", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_count_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "contact_link": "https://telegram.dog/Telegram", // Link to Contact Button on Menu
    "copyright_year": "2050", // year of copyright, can be anything like 2015 - 2020 or just 2020
    "company_name": "gdi.js.org", // Name next to copyright
    "company_link": "https://telegram.dog/Telegram", // link of copyright name
    "credit": true, // Set this to true to give us credit
    "display_size": true, // Set this to false to hide display file size
    "display_time": false, // Set this to false to hide display modified time for folder and files
    "display_download": true, // Set this to false to hide download icon for folder and files on main index
    "disable_player": false, // Set this to true to hide audio and video players
    "custom_srt_lang": "", // Subtitle Language Code for Custom .vtt language.
    "disable_video_download": false, // Remove Download, Copy Button on Videos
    "second_domain_for_dl": false, // If you want to display other URL for Downloading to protect your main domain.
    "downloaddomain": "https://testing.fetchgoogleapi.workers.dev", // If "second_domain_for_dl": true then enter downloaddomain otherwise keep empty. eg. https://workers.workersname.workers.dev No Trailing '/'
    "poster": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@2.0.10/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
    "audioposter": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index@2.0.10/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/gh/ParveenBhadooOfficial/Google-Drive-Index", // If Project is Forked, then enter your Github repo
    "render_head_md": true, // Render Head.md
    "render_readme_md": true, // Render Readme.md
    "display_drive_link": false, // This will add a Link Button to Google Drive of that particular file.
    "plyr_io_version": "3.6.4", // Change plyr.io version in future when needed.
    "plyr_io_video_resolution": "16:9" // For reference, visit: https://github.com/sampotts/plyr#options
    "unauthorized_owner_link": "https://telegram.dog/Telegram", // Unauthorized Error Page Link to Owner
    "unauthorized_owner_email": "abuse@telegram.org", // Unauthorized Error Page Owner Email
    "arc_code": "jfoY2h19" // arc.io Integraion Code, get yours from https://portal.arc.io
};
````

## arc.io Integration

* arc.io is embedded in code to support gdi.js.org
* if you have approved arc.io account, use your code.
* incase you don't have arc account and want to support us, please keep our arc.io code in your index.
* if anyone doesn't want to support us and want to remove arc, remove [this](https://github.com/ParveenBhadooOfficial/Google-Drive-Index/blob/master/worker/worker-beta.js#L133) line from workers code.

## Themes

* There are 25 Themes from [bootswatch](https://github.com/thomaspark/bootswatch) official [Bootstrap](https://getbootstrap.com) Themes.
* You can check Theme from [bootswatch.com](https://bootswatch.com) before selecting.
* To Change theme, first generate the code, paste in Cloudflare Workers and then select one theme code from below and paste it in line 56 of worker script.

| Themes    |         |         |         |        |          |
|-----------|---------|---------|---------|--------|----------|
| cerulean  | cosmo   | cyborg  | darkly  | flatly | journal  |
| litera    | lumen   | lux     | materia | minty  | pulse    |
| sandstone | simplex | sketchy | slate   | solar  | spacelab |
| superhero | united  | yeti    | vapor   | morph  | quartz   |    
| zephyr    |

## Audio and Video

* Poster for Video is added as default.
* Fetch Video Poster from Google Drive, uses default if none available.

## Search Limitations

* Search only works if you use Shared Drive ID or root.
* Search won't work or the bar won't appear if you're using Folder ID inside from root or Shared Drive.

## Sorting by Name or Modified Time

* Find `params.orderBy` in workers code L623 and L710.
* use `params.orderBy = 'folder,name,modifiedTime desc';` to sort by File and Folder Name.
* use `params.orderBy = 'folder,modifiedTime desc,name';` to sort by Modified Time.
* A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.

## Making your own repo, editing and making changes

* Fork this Repo or Import.
* Make your changes in `app.js` and `workers-beta.js` files.
* Make a new release in Github.
* Change jsDelivr CDN URL and version code in `workers-beta.js`.
* Deploy in Cloudflare Workers.

## Get Google_Client_ID and Secret and Generate Token

* Open [Google Dev Credentials Site](https://console.developers.google.com/apis/credentials).
* Create a Project, name as you like.
* Enable [Drive API](https://console.developers.google.com/apis/library/drive.googleapis.com)
* In [Credentials Page](https://console.developers.google.com/apis/credentials) Click `Create Credentials` and then Click `OAuth Client ID`.
* Click Configure Consent Screen.
* Select External.
* Fill your APP Details
* Select Scope as `https://www.googleapis.com/auth/drive` (wait few hours if Google Drive is not showing up if you've just enabled the scope) or
* You can also enter manual scope `https://www.googleapis.com/auth/drive` and click on add to table and then save or update.
* Proceed with Save and Continue.
* Add your email id you want to use as test user, upto 100 emails maximum. (Because you are not verified)
* In [Credentials Page](https://console.developers.google.com/apis/credentials) Click `Create Credentials` and then Click `OAuth Client ID`.
* Select Desktop App.
* Now you have your own CLIENT ID and CLIENT SECRET.
* Copy your details and save for future use.
* Copy [this](https://github.com/ParveenBhadooOfficial/Google-Drive-Index/blob/master/worker/worker-generator.js) code.
* Replace Line 6 and 7 with your own CLIENT ID and CLIENT SECRET.
* Paste this code in Cloudflare Workers and follow the site.

## Upcoming Changes

* Adding More Features from other Indexes.

## Other Indexes

* [Edited Version](https://gist.github.com/ParveenBhadooOfficial/52ffbfcfa24e53f8afad4851618307fc) based on [goindex-theme-acrou](https://github.com/Achrou/goindex-theme-acrou)
* List of Few [Indexes](https://github.com/alx-xlx/goindex)

## Credits

* Source: [maple3142](https://github.com/maple3142/GDIndex)
* Source: [yanzai](https://github.com/yanzai/goindex)
* New Design: [Bootstrap](https://getbootstrap.com)
* Cloudflare: Workers

## Disclaimer

* This project is not associated with Google, this project uses Google Drive API to Index Files and Folders.
* These Index's are written by someone else, possibly by donva and [maple3142](https://github.com/maple3142/GDIndex).
* Beta Version is redesigned using Bootstrap from Alpha Version by @ParveenBhadooOfficial.
* This Repo was imported from [yanzai](https://github.com/yanzai/goindex) and then modified for personal use. After requests from many users made public with user requirements.

## Privacy Policy

* [Privacy Policy](https://gdi.js.org/privacy)
* [LICENSE](https://github.com/ParveenBhadooOfficial/Google-Drive-Index/blob/master/LICENSE)

## Support this Project

[![Support](https://cdn.buymeacoffee.com/buttons/v2/default-white.png)](https://www.buymeacoffee.com/bhadoo)

### Donate by Crpto

* ETH `0xaf25cdc7967213172a745453a64e8a0b59686729`
* BTC `3BgSznxLB5u4WiuVERb1dKWeTqSSwK9NPW`
* BAT `0xaf25cdc7967213172a745453a64e8a0b59686729`
