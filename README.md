# Google Personal/Shared Drive Index

[![Year](https://data.jsdelivr.com/v1/package/npm/@googledrive/index/badge/rank)](https://www.jsdelivr.com/package/npm/@googledrive/index)
[![Year](https://data.jsdelivr.com/v1/package/npm/@googledrive/index/badge/year)](https://www.jsdelivr.com/package/npm/@googledrive/index)
[![Month](https://data.jsdelivr.com/v1/package/npm/@googledrive/index/badge/month)](https://www.jsdelivr.com/package/npm/@googledrive/index)
[![Week](https://data.jsdelivr.com/v1/package/npm/@googledrive/index/badge/week)](https://www.jsdelivr.com/package/npm/@googledrive/index)
[![Day](https://data.jsdelivr.com/v1/package/npm/@googledrive/index/badge/day)](https://www.jsdelivr.com/package/npm/@googledrive/index)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://gitlab.com/ParveenBhadooOfficial/Google-Drive-Index&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://www.npmjs.com/package/@googledrive/index)

## Full White label and Customizable Index | One of a kind

* Supports Both My and Team/Shared Drives with Dark Mode.
* Click https://bdi-generator.hashhackers.com to make yours or watch https://youtu.be/Ihk4Gm3DPvg.

## Read Wiki of Index before asking How to Do What...

* [Getting-Started-with-Google-Drive-Index](https://gitlab.com/ParveenBhadooOfficial/Google-Drive-Index/-/wikis/Getting-Started-with-Google-Drive-Index)

[![Screenshot](https://gitlab.com/ParveenBhadooOfficial/Google-Drive-Index/-/raw/master/images/themes/vapor.png)](https://youtu.be/Ihk4Gm3DPvg)

[![Screenshot](https://gitlab.com/ParveenBhadooOfficial/Google-Drive-Index/-/raw/master/images/themes/darkly.png)](https://youtu.be/Ihk4Gm3DPvg)


## How to

* Stable Release `2.1.8`
* Latest Index is faster than before, but backup before making new, and report if I missed something in issues. :)
* Beta Version (Latest) - [bdi-generator](https://bdi-generator.hashhackers.com) (For Dark Theme use darkly)
* If you want to deploy main drive leave the option ROOT as it is.
* If you want to deploy your Team Drive/Shared Drive/Folder then copy the ID and replace it with ROOT.
* Eg. if you open this shared drive `https://drive.google.com/drive/u/0/folders/0AOM2i7Mi3uWIUk9PVA` - `0AOM2i7Mi3uWIUk9PVA` is its ID.
* Authenticate and copy the code from Google and paste it into Authorization Code Box.
* Click on Get Code to Generate Code and Copy it for later use.
* Now Create Cloud flare account and verify email or login with existing account.
* Find Workers and Open it.
* Create your sub-domain or continue if already done.
* Select the Free Plan.
* Click on Create a Worker.
* You can rename the workers at top of the page.
* Now paste the code you copied before.
* Click on Save and Deploy.
* Done. (May take time for some users due to new account or cache issues)
* [Watch Video](https://youtu.be/Ihk4Gm3DPvg)

## Use Case and Workers needs to be used

* If you're new and noob, just use [this](https://bdi-generator.hashhackers.com). Search doesn't support FOLDER ID, use root or Shared Drive ID.
* worker-super.js is Current and Main Workers File, use this if you have one or more drives. This can also be used to display drive links while searching all drives your account is associated with (optional, recommended for closed index).

#### More Options

* workers-legacy.js is older version, less fast because of API requests it makes to check drive types, if you've too many drives, don't use this one.
* worker-multiple-drives.js should be used when you have more than one shared drives and you want to search in all of them and get index links in search.
* worker-second-domain-non-video.js is for using as second domain but doesn't support video files, instead it'll redirect to main index. Good to avoid video streaming ban by cloudflare.
* worker-second-domain.js is for using in second domain worker.
* worker-super-api.js is just API for Static Site. You can host API on Cloudflare as Backend, and serve Frontend on any platform, protects your workers account from being suspended as this one works in background and doesn't consume much resources.
* worker-super-read-only.js is for making a read only Index site. This can be used to showcase your drive files, disabling download or streaming permanently.
* worker-generator.js is the code used on our Index Generation Site mentioned above.

## Drive ID Types

* My Drive is `root`, eg. Drive of Simple Gmail Account.
* Shared Drive ID is Team/Shared Drive IDs Root.
* Folder ID is those which are not root and you create a folder and use it's ID. If you use this, this will work good in legacy as it'll not display search because Google Drive doesn't support Folder Only search. AVOID USING FOLDER IDs.

## Steps for Making Search All Drives Index

1. Copy Code from workers folder, choose multiple drives worker file.
2. Make a Single Service Account (Fresh and New)
3. Add that SA Email to drives, only to those, which you want to Index. and change "service_account": false, to "service_account": true,
4. Add that Service Account to Index
5. In domains_for_dl = ['']; enter your Index URL, that you're making now. eg. `https://example.com`
6. Add your Drive IDs in Index Code

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

* Add this code for each drive. see cloud flare workers code for more info. (requires common sense)

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

* In Latest Release, you can rebrand the Index as per your needs. Read the workers file to change UI and config.

## Auth0 Integration  

* Please Note that auth0.com Free Plan allows 7000 active members per month only. Active members are those who have logged in once in that particular month.
* Cloudflare KV is used by this method, in Free Workers Plan, it's very limited and you cannot use it much, to avoid this ask your users to login and not clear the site cookies unless important. We suggest you upgrade to 5 USD plan of Workers if you face quota exceeded error on Cloudflare.
* Make a auth0.com account and while signup select advanced settings so you can edit the tenant name.
* Tenant Name looks like this hashhackers.auth0.com where you can have your own sub-domain on auth0.com, then verify your email.
* In Applications, Make New App, and select `Regular Web Applications`.
* In the app, go to settings and from there you can copy your client id and secret to be used on Cloudflare.
* Scroll down and see option `Allowed Callback URLs`, enter your website or workers URL that you will use for Index in following manner.
* `https://example.com/auth`, make sure you enter `https://` and `/auth`.
* Scroll down and see option `Allowed Logout URLs`, enter your website address where you would like to redirect when user logs out.
* Now In Authentication, Go to Database and open the Database that is shown there, You will see option `Disable Sign Ups` to stop username and password signup option when needed.
* In Authentication, you can go to `Social` and setup social login.
* To disable signup using Social Networks, if you wish to do that one day, go to `Auth Pipeline` and then `Rules`. Create New Rule, and find the Rule Template for `Disable social signups`. Add your App Client ID in the line number 2, then save it.
* Now come back to Cloudflare, and in Index code, enable auth0 with option true.
* Now enter Tenant Domain, make sure to use `https://` eg. https://example.auth0.com
* Enter your Client Id, Secret, Index Callback URL with `/auth` and Logout URL.
* Now in Cloudflare, there is a option for `Workers KV`, Create Namespace with any name, suggested is `AUTH_STORE_NS`.
* Now go to your worker for index, Click on Settings, then Click on Variables, at the end of the page you'll see `KV Namespace Bindings`, Enter variable name `AUTH_STORE` and then select the Name Space you created and Save it.
* It's done. If you face any problem, Go to [Index Discussion Group](https://t.me/+u-KpgiLT4r82Yzhh) and ask your question with full details, where you're stuck. Before that please try doing this yourself.

## Second Domain Systems

* set second_domain_for_dl to `true` first in UI Config.
* set domains_for_dl and video_domains_for_dl to your new index you're going to make below in top config near service accounts.
* then make separate index on different Cloudflare account with second-domain workers code.
* change only refresh_token or SA and Drive IDs, don't touch anything else.
* It's done.

## arc.io Integration

* arc.io is embedded in code to support gdi.js.org
* if you have approved arc.io account, use your code.
* incase you don't have arc account and want to support us, please keep our arc.io code in your index.
* if anyone doesn't want to support us and want to remove arc, remove the arc code from the workers code.

## Themes

* There are 25 Themes from [bootswatch](https://github.com/thomaspark/bootswatch) official [Bootstrap](https://getbootstrap.com) Themes.
* You can check Theme from [bootswatch.com](https://bootswatch.com) before selecting.
* To Change theme, first generate the code, paste in Cloud flare Workers and then select one theme code from below and paste it in line 61 of worker script.

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
* Search won't work or the bar won't appear if you're using Folder ID inside from root or Shared Drive. In Newer versions bar will appear but search won't work.

## Sorting by Name or Modified Time

* Find `params.orderBy` in workers code L623 and L710.
* use `params.orderBy = 'folder,name,modifiedTime desc';` to sort by File and Folder Name.
* use `params.orderBy = 'folder,modifiedTime desc,name';` to sort by Modified Time.
* A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.

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
* Add your email id you want to use as test user, up to 100 emails maximum. (Because you are not verified)
* In [Credentials Page](https://console.developers.google.com/apis/credentials) Click `Create Credentials` and then Click `OAuth Client ID`.
* Select Desktop App.
* Now you have your own CLIENT ID and CLIENT SECRET.
* Copy your details and save for future use.
* Copy worker-generator.js code.
* Replace Line 20 and 21 with your own CLIENT ID and CLIENT SECRET.
* Paste this code in Cloud flare Workers and follow the site.

## Upcoming Changes

* Adding More Features from other Indexes.

## Other Indexes

* List of Few [Indexes](https://github.com/alx-xlx/goindex)

## Credits

* Base Source: [maple3142](https://github.com/maple3142/GDIndex) and [yanzai](https://github.com/yanzai/goindex)
* CSS: [Bootstrap](https://getbootstrap.com) and [Bootswatch](https://bootswatch.com)
* API: [Google Drive API](https://developers.google.com/drive/api)
* [jQuery](https://jquery.com)
* PDF Viewer: [pdf.js](https://github.com/mozilla/pdf.js)
* Audio and Video Player: [plyr.io](https://github.com/sampotts/plyr)
* CDN: [jsDelivr](https://www.jsdelivr.com)
* Minified JS: [Toptal](https://www.toptal.com/developers/javascript-minifier) and [JavaScript Minify Tool]()
* Obfuscator: [JavaScript Obfuscator Tool](https://obfuscator.io)
* Hosting: [Gitlab](https://gitlab.com) and [npm](https://www.npmjs.com)
* Website Hosting: [js.org](https://js.org) and [GitHub](https://github.com)
* Dev Editor Used: [ATOM](https://atom.io)
* Made for: [Cloudflare Workers](https://workers.cloudflare.com)
* Several Different Fixes by [SpEcHiDe](https://github.com/SpEcHiDe), [Adnan Ahmad](https://gitlab.com/viperadnan), [Prashanth C A](https://github.com/Achrou/goindex-theme-acrou/pull/176), [cheems](https://github.com/cheems/goindex-extended/blob/master/index.js#L553), [iSumitBot](https://t.me/isumitbot) and Unmentioned Forgotten Contributors.

## Disclaimer

* This project is not associated with Google, this project uses Google Drive API to Index Files and Folders.
* These Index's are written by someone else, possibly by donva and [maple3142](https://github.com/maple3142/GDIndex).
* Beta Version is redesigned using Bootstrap from Alpha Version by [Parveen Bhadoo](https://twitter.com/ParveenBhadoo).
* This Repo was imported from [yanzai](https://github.com/yanzai/goindex) and then modified for personal use.

## Support this Project

[![Support](https://cdn.buymeacoffee.com/buttons/v2/default-white.png)](https://www.buymeacoffee.com/bhadoo)

* Contribute to this project or improve this README.

### Donate by Crpto

* ETH `0xaf25cdc7967213172a745453a64e8a0b59686729`
* BTC `3BgSznxLB5u4WiuVERb1dKWeTqSSwK9NPW`
* BAT `0xaf25cdc7967213172a745453a64e8a0b59686729`
