# Google Personal/Shared Drive Index

[![Year](https://data.jsdelivr.com/v1/package/gh/rokibhasansagar/BhadooGDIndex/badge/rank)](#)
[![Year](https://data.jsdelivr.com/v1/package/gh/rokibhasansagar/BhadooGDIndex/badge/year)](#)
[![Month](https://data.jsdelivr.com/v1/package/gh/rokibhasansagar/BhadooGDIndex/badge/month)](#)
[![Week](https://data.jsdelivr.com/v1/package/gh/rokibhasansagar/BhadooGDIndex/badge/week)](#)
[![Day](https://data.jsdelivr.com/v1/package/gh/rokibhasansagar/BhadooGDIndex/badge/day)](#)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/rokibhasansagar/BhadooGDIndex&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=NPM%20Hits&edge_flat=false)](https://www.jsdelivr.com/package/gh/rokibhasansagar/BhadooGDIndex)

## Full White label and Customizable Index | One of a kind

* Supports Both My and Team/Shared Drives with Dark Mode.
* Click https://bhadoogen.phantomzone.workers.dev to make yours or watch https://youtu.be/Ihk4Gm3DPvg.

## Read Wiki of Index before asking How to Do What...

* [Getting-Started-with-Google-Drive-Index](https://gitlab.com/GoogleDriveIndex/Google-Drive-Index/-/wikis/Getting-Started-with-Google-Drive-Index)

[![Screenshot](https://cdn.jsdelivr.net/gh/rokibhasansagar/BhadooGDIndex@2.2.0/images/themes/vapor.png)](https://youtu.be/Ihk4Gm3DPvg)

[![Screenshot](https://cdn.jsdelivr.net/gh/rokibhasansagar/BhadooGDIndex@2.2.0/images/themes/darkly.png)](https://youtu.be/Ihk4Gm3DPvg)

## How to

* Stable Release `2.2.0`
* Latest Index is faster than before, but backup before making new, and report if I missed something in issues. :)
* Beta Version (Latest) - [bdi-generator](https://bhadoogen.phantomzone.workers.dev) (For Dark Theme use darkly)
* If you want to deploy main drive leave the option ROOT as it is.
* If you want to deploy your Team Drive/Shared Drive/Folder then copy the ID and replace it with ROOT.
* Eg. if you open this shared drive `https://drive.google.com/drive/u/0/folders/0AOM2i7Mi3uWIUk9PVA` - `0AOM2i7Mi3uWIUk9PVA` is its ID.
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

## Use Case and Workers needs to be used

* If you're new and noob, just use [this](https://bhadoogen.phantomzone.workers.dev). Search doesn't support FOLDER ID, use root or Shared Drive ID.
* [worker-super.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-super.js) is Current and Main Workers File, use this if you have one or more drives. This can also be used to display drive links while searching all drives your account is associated with (optional, recommended for closed index).

### More Options

* [worker-legacy.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-legacy.js) is older version, less fast because of API requests it makes to check drive types, if you've too many drives, don't use this one.
* [worker-multiple-drives.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-multiple-drives.js) should be used when you have more than one shared drives and you want to search in all of them and get index links in search.
* [worker-second-domain-non-video.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-second-domain-non-video.js) is for using as second domain but doesn't support video files, instead it'll redirect to main index. Good to avoid video streaming ban by cloudflare.
* [worker-second-domain.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-second-domain.js) is for using in second domain worker.
* [worker-super-api.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-super-api.js) is just API for Static Site. You can host API on Cloudflare as Backend, and serve Frontend on any platform, protects your workers account from being suspended as this one works in background and doesn't consume much resources.
* [worker-super-read-only.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-super-read-only.js) is for making a read only Index site. This can be used to showcase your drive files, disabling download or streaming permanently.
* [worker-generator.js](https://github.com/rokibhasansagar/BhadooGDIndex/blob/2.2.0/worker/worker-generator.js) is the code used on our Index Generation Site mentioned above.

## Drive ID Types

* My Drive is `root`, eg. Drive of Simple Gmail Account.
* Shared Drive ID is Team/Shared Drive IDs Root.
* Folder ID is those which are not root and you create a folder and use it's ID. If you use this, this will work good in legacy as it'll not display search because Google Drive doesn't support Folder Only search. AVOID USING FOLDER IDs.

## Steps for Making Search All Drives Index

1. Copy Code from workers folder, choose multiple drives worker file
2. Make a Single Service Account (Fresh and New)
3. Add that SA Email to drives, only to those, which you want to Index. and change `"service_account": false,` to `"service_account": true,`
4. Add that Service Account to Index
5. In `domains_for_dl = [''];` enter your Index URL, that you're making now. eg. `https://example.com`
6. Add your Drive IDs in Index Code

## Basic Config

```
    "roots":[
      {
          "id": "root",
          "name": "Drive One",
          "protect_file_link": false,
         // "auth": {"username":"password"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};
```

## Multiple ID Config

* Add this code for each drive. see cloud flare workers code for more info. (requires common sense)

```
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
```

## Service Account

* Multiple Service Accounts are supported.
* set `"service_account": false` to `"service_account": true`
* Replace `{}` with data from service account json file

## Multiple Users Password

* For single user

```
            // "auth": {"username":"password"} /** remove double slash at starting of this line to use password. */
```

* For multiple users (unlimited users)

```
      {
          "id": "",
          "name": "Drive Two",
          "protect_file_link": false,
          // "auth": { "user1":"pass1", "user2":"pass2", }  /** remove double slash at starting of this line to use password. */
      },
```

* where `"user1":"pass1"` and `"user2":"pass2"` are combinations.
* if users adds `"auth":{"":""}` empty values then the site will ask for authentication but user can enter without entering any data by clicking submit.

## Use of .password File

* This is directory encryption added by the original author.
* Add a `.password` file your required password in your folder which you want to protect, each folder should have its own `.password` file.
* The password is stored inside the Google Drive Folder, not the index and the `.password` file is hidden an cannot be accessed using Index.
* Example use https://bit.ly/3tBxXJN and password is `thispassword`

## Brand Customization

* In Latest Release, you can rebrand the Index as per your needs. Read the workers file to change UI and config.

## Second Domain Systems

* set `second_domain_for_dl` to `true` first in UI Config.
* set `domains_for_dl` and `video_domains_for_dl` to your new index you're going to make below in top config near service accounts.
* then make separate index on different Cloudflare account with second-domain workers code.
* change only `refresh_token` or SA and Drive IDs, don't touch anything else.
* It's done.

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

* Find `params.orderBy` in workers code (around L1006 and L1092).
* use `params.orderBy = 'folder,name,modifiedTime desc';` to sort by File and Folder Name.
* use `params.orderBy = 'folder,modifiedTime desc,name';` to sort by Modified Time.
* A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.

## Get Google Client_ID & Client_Secret and Generate Token

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
* Select Web App.
* Now you have your own CLIENT ID and CLIENT SECRET.
* Copy your details and save for future use.
* Copy `worker-generator.js` code.
* Replace Line 6 and 7 with your own CLIENT ID and CLIENT SECRET.
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
* Minified JS: [Toptal](https://www.toptal.com/developers/javascript-minifier)
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

## Legal Disclaimer

* [Hash Hackers](https://gitlab.com/HashHackers) or Bhadoo Cloud or [Parveen Bhadoo](https://gitlab.com/ParveenBhadooOfficial) or [I](https://github.com/rokibhasansagar) do not own the websites created using this software. The Software is under MIT License and Free to use for everyone personally or commercially. If any site is found using the name in title as the project or related names, shouldn't be assumed to be associated with us. The Software provides full configuration to the user to update and change the names of title, contact information for the published website using this software.
* As an open-source Software, it can be used by good and bad actors both, eg. the use of [YT-DL](https://youtube-dl.org), read full post [here](https://github.blog/2020-11-16-standing-up-for-developers-youtube-dl-is-back/).

## Support the Original Project

[![Support](https://cdn.buymeacoffee.com/buttons/v2/default-white.png)](https://www.buymeacoffee.com/bhadoo)

* Contribute to this project or improve this README.

## License

* [MIT License](https://github.com/rokibhasansagar/BhadooGDIndex/blob/master/LICENSE)

### Donate by Crpto to the Original Author

* ETH `0xaf25cdc7967213172a745453a64e8a0b59686729`
* BTC `3BgSznxLB5u4WiuVERb1dKWeTqSSwK9NPW`
* BAT `0xaf25cdc7967213172a745453a64e8a0b59686729`
