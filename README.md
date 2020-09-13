# Google Personal/Shared Drive Index

* Supports Both My and Team/Shared Drives with Dark Mode.

[![Screenshot](https://raw.githubusercontent.com/ParveenBhadooOfficial/Bhadoo-Drive-Index/master/images/beta-light-screenshot.png)](https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index)

[![Screenshot](https://raw.githubusercontent.com/ParveenBhadooOfficial/Bhadoo-Drive-Index/master/images/beta-dark-screenshot.png)](https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index)

## How to

* https://light-demo.ve.workers.dev
* https://dark-demo.ve.workers.dev
* Current Version `2.0`
* Beta Version (Latest) - https://generator.driveindex.ga (Dark Theme Available)
* If you want to deploy main drive leave the option ROOT as it is.
* If you want to deploy your Team Drive/Shared Drive/Folder then copy the ID and replace it with ROOT.
* Eg. if you open [this shared drive](https://drive.google.com/drive/u/0/folders/0AOM2i7MQiuWIUk9PVA) 0AOM2i7MQiuWIUk9PVA is its ID.
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

## Brand Customization and Dark Mode

* In Latest Release, you can rebrand the Index as per your needs.
* Line 57 will help you select light or dark theme where false is light and true will be dark theme.
* After that each line has its own custom feature. Edit as per your needs.
* You can remove credit option but we request you not to.

## Known Bugs

* Unable to Display Markdown Files (for now avoid MD files)
* Current Path at File Destination shows / which shouldn't appear.

## Upcoming Changes

* Clear Path to Navigate inside Previous Folders (currenty shows inside menu)

## Staging Site

* https://staging.hashhackers.workers.dev (Changes here are unstable, Testing New Bug Fixes and Development)

## Credits

* Source: [maple3142](https://github.com/maple3142/GDIndex)
* Source: [yanzai](https://github.com/yanzai/goindex)
* New Design: [Bootstrap](https://getbootstrap.com)
* Cloudflare: Workers

## Disclaimer

* These Index's are written by someone else, possibly by donva and maple3142.
* Beta Version is redesigned using Bootstrap from Alpha Version by @ParveenBhadooOfficial.
* This Repo was imported from [yanzai](https://github.com/yanzai/goindex) and then modified for personal use. After requests from many users made compatible with user requirements.
