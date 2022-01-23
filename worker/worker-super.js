/*  ░██████╗░██████╗░██╗░░░░░░░░██╗░██████╗░░░░█████╗░██████╗░░██████╗░
    ██╔════╝░██╔══██╗██║░░░░░░░░██║██╔════╝░░░██╔══██╗██╔══██╗██╔════╝░
    ██║░░██╗░██║░░██║██║░░░░░░░░██║╚█████╗░░░░██║░░██║██████╔╝██║░░██╗░
    ██║░░╚██╗██║░░██║██║░░░██╗░░██║░╚═══██╗░░░██║░░██║██╔══██╗██║░░╚██╗
    ╚██████╔╝██████╔╝██║██╗╚█████╔╝██████╔╝██╗╚█████╔╝██║░░██║╚██████╔╝
    ░╚═════╝░╚═════╝░╚═╝╚═╝░╚════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
                             v 2.1.5
A Script Redesigned by Parveen Bhadoo from GOIndex at https://gitlab.com/ParveenBhadooOfficial/Google-Drive-Index */

// WARNING WARNING WARNING
// This Script doesn't support Folder ID, use root or Shared Drive ID only

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.
const serviceaccounts = [
{}
];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)]; // DO NOT TOUCH THIS
const domains_for_dl = ['']; // add multiple cloudflare addresses to balance the load on download/stream servers, eg. ['https://testing.fetchgoogleapi.workers.dev', 'https://testing2.fetchgoogleapi2.workers.dev']
const domain_for_dl = domains_for_dl[Math.floor(Math.random()*domains_for_dl.length)]; // DO NOT TOUCH THIS
const video_domains_for_dl = ['']; // add multiple cloudflare addresses to balance the load on download/stream servers, eg. ['https://testing.fetchgoogleapi.workers.dev', 'https://testing2.fetchgoogleapi2.workers.dev']
const video_domain_for_dl = video_domains_for_dl[Math.floor(Math.random()*domains_for_dl.length)]; // DO NOT TOUCH THIS
const blocked_region = ['']; // add regional codes seperated by comma, eg. ['IN', 'US', 'PK']
const blocked_asn = []; // add ASN numbers from http://www.bgplookingglass.com/list-of-autonomous-system-numbers, eg. [16509, 12345]
const authConfig = {
    "siteName": "Bhadoo Drive Index", // Website name
    "client_id": "746239575955-oao9hkv614p8glrqpvuh5i8mqfoq145b.apps.googleusercontent.com", // Client id from Google Cloud Console
    "client_secret": "u5a1CSY5pNjdD2tGTU93TTnI", // Client Secret from Google Cloud Console
    "refresh_token": "", // Authorize token
    "service_account": false, // true if you're using Service Account instead of user account
    "service_account_json": randomserviceaccount, // don't touch this one
    "files_list_page_size": 50,
    "search_result_list_page_size": 50,
    "enable_cors_file_down": false,
    "enable_password_file_verify": true, // support for .password file
    "direct_link_protection": false, // protects direct links with Display UI
    "lock_folders": false, // keeps folders and search locked if auth in on, and allows individual file view
    "enable_auth0_com": false, // follow guide to add auth0.com to secure index with powerful login based system
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

    const auth0 = {
          domain: "", // Tenent Domain from auth0.com website
          clientId: "", // App Client ID from auth0.com website
          clientSecret: "", // App Client Secret from auth0.com website
          callbackUrl: "", // your domain with /auth at the end. eg. https://example.com/auth, add this in auth0.com too
          logoutUrl: "", // your domain logout page eg. https://example.com, add this in auth0.com too
    }

/*
███████╗██████╗░██╗████████╗  ████████╗██╗░░██╗███████╗░██████╗███████╗
██╔════╝██╔══██╗██║╚══██╔══╝  ╚══██╔══╝██║░░██║██╔════╝██╔════╝██╔════╝
█████╗░░██║░░██║██║░░░██║░░░  ░░░██║░░░███████║█████╗░░╚█████╗░█████╗░░
██╔══╝░░██║░░██║██║░░░██║░░░  ░░░██║░░░██╔══██║██╔══╝░░░╚═══██╗██╔══╝░░
███████╗██████╔╝██║░░░██║░░░  ░░░██║░░░██║░░██║███████╗██████╔╝███████╗
╚══════╝╚═════╝░╚═╝░░░╚═╝░░░  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚══════╝

██╗░░░██╗░█████╗░██╗░░░░░██╗░░░██╗███████╗░██████╗
██║░░░██║██╔══██╗██║░░░░░██║░░░██║██╔════╝██╔════╝
╚██╗░██╔╝███████║██║░░░░░██║░░░██║█████╗░░╚█████╗░
░╚████╔╝░██╔══██║██║░░░░░██║░░░██║██╔══╝░░░╚═══██╗
░░╚██╔╝░░██║░░██║███████╗╚██████╔╝███████╗██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░╚═════╝░╚══════╝╚═════╝░*/

const uiConfig = {
    "theme": "slate", // switch between themes, default set to slate, select from https://gitlab.com/ParveenBhadooOfficial/Google-Drive-Index
    "version": "2.1.5", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
    // If you're using Image then set to true, If you want text then set it to false
    "logo_image": true, // true if you're using image link in next option.
    "logo_height": "", // only if logo_image is true
    "logo_width": "100px", // only if logo_image is true
    "favicon": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.1.5/images/favicon.ico",
    // if logo is true then link otherwise just text for name
    "logo_link_name": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.1.5/images/bhadoo-cloud-logo-white.svg",
    "fixed_header": true, // If you want the footer to be flexible or fixed.
    "header_padding": "60", // Value 60 for fixed header, Value 20 for flexible header. Required to be changed accordingly in some themes.
    "nav_link_1": "Home", // change navigation link name
    "nav_link_3": "Current Path", // change navigation link name
    "nav_link_4": "Contact", // change navigation link name
    "show_logout_button": false, // shows logout button if auth0.com is active
    "fixed_footer": false, // If you want the footer to be flexible or fixed.
    "hide_footer": true, // hides the footer from site entirely.
    "header_style_class": "navbar-dark bg-primary", // navbar-dark bg-primary || navbar-dark bg-dark || navbar-light bg-light
    "footer_style_class": "bg-primary", // bg-primary || bg-dark || bg-light
    "css_a_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "css_p_tag_color": "white", // Color Name or Hex Code eg. #ffffff
    "folder_text_color": "white", // Color Name or Hex Code eg. #ffffff
    "loading_spinner_class": "text-light", // https://getbootstrap.com/docs/5.0/components/spinners/#colors
    "search_button_class": "btn btn-danger", // https://getbootstrap.com/docs/5.0/components/buttons/#examples
    "path_nav_alert_class": "alert alert-primary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_view_alert_class": "alert alert-danger", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "file_count_alert_class": "alert alert-secondary", // https://getbootstrap.com/docs/4.0/components/alerts/#examples
    "contact_link": "https://telegram.dog/Telegram", // Link to Contact Button on Menu
    "copyright_year": "2050", // year of copyright, can be anything like 2015 - 2020 or just 2020
    "company_name": "Bhadoo Cloud", // Name next to copyright
    "company_link": "https://telegram.dog/Telegram", // link of copyright name
    "credit": true, // Set this to true to give us credit
    "display_size": true, // Set this to false to hide display file size
    "display_time": false, // Set this to false to hide display modified time for folder and files
    "display_download": true, // Set this to false to hide download icon for folder and files on main index
    "disable_player": false, // Set this to true to hide audio and video players
    "custom_srt_lang": "", // Subtitle Language Code for Custom .vtt language.
    "disable_video_download": false, // Remove Download, Copy Button on Videos
    "second_domain_for_dl": false, // If you want to display other URL for Downloading to protect your main domain.
    "downloaddomain": domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
    "videodomain": video_domain_for_dl, // Ignore this and set domains at top of this page after service accounts.
    "poster": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.1.5/images/poster.jpg", // Video poster URL or see Readme to how to load from Drive
    "audioposter": "https://cdn.jsdelivr.net/npm/@googledrive/index@2.1.5/images/music.jpg", // Video poster URL or see Readme to how to load from Drive
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/npm/@googledrive/index", // If Project is Forked, then enter your GitHub repo
    "render_head_md": true, // Render Head.md
    "render_readme_md": true, // Render Readme.md
    "display_drive_link": false, // This will add a Link Button to Google Drive of that particular file.
    "plyr_io_version": "3.6.4", // Change plyr.io version in future when needed.
    "plyr_io_video_resolution": "16:9", // For reference, visit: https://github.com/sampotts/plyr#options
    "unauthorized_owner_link": "https://telegram.dog/Telegram", // Unauthorized Error Page Link to Owner
    "unauthorized_owner_email": "abuse@telegram.org", // Unauthorized Error Page Owner Email
    "arc_code": "jfoY2h19", // arc.io Integration Code, get yours from https://portal.arc.io
    "search_all_drives": false // gives gdrive links on search and searches all drives on that account, doesn't require adding
};


/*
██████╗░░█████╗░  ███╗░░██╗░█████╗░████████╗  ███████╗██████╗░██╗████████╗
██╔══██╗██╔══██╗  ████╗░██║██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██║╚══██╔══╝
██║░░██║██║░░██║  ██╔██╗██║██║░░██║░░░██║░░░  █████╗░░██║░░██║██║░░░██║░░░
██║░░██║██║░░██║  ██║╚████║██║░░██║░░░██║░░░  ██╔══╝░░██║░░██║██║░░░██║░░░
██████╔╝╚█████╔╝  ██║░╚███║╚█████╔╝░░░██║░░░  ███████╗██████╔╝██║░░░██║░░░
╚═════╝░░╚════╝░  ╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░  ╚══════╝╚═════╝░╚═╝░░░╚═╝░░░

██████╗░███████╗██╗░░░░░░█████╗░░██╗░░░░░░░██╗
██╔══██╗██╔════╝██║░░░░░██╔══██╗░██║░░██╗░░██║
██████╦╝█████╗░░██║░░░░░██║░░██║░╚██╗████╗██╔╝
██╔══██╗██╔══╝░░██║░░░░░██║░░██║░░████╔═████║░
██████╦╝███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░
╚═════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░*/

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];

function html(current_drive_order = 0, model = {}) {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
  <title>${authConfig.siteName}</title>
  <script async src="https://arc.io/widget.min.js#${uiConfig.arc_code}"></script>
  <meta name="robots" content="noindex" />
  <link rel="icon" href="${uiConfig.favicon}">
  <script>
    window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
    window.MODEL = JSON.parse('${JSON.stringify(model)}');
    window.current_drive_order = ${current_drive_order};
    window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
  </script>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <link rel="stylesheet" href="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/${uiConfig.theme}/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  <style>a{color:${uiConfig.css_a_tag_color};}p{color:${uiConfig.css_p_tag_color};}</style>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/js/app.obf.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/marked@4.0.0/marked.min.js"></script>
</head>
<body>
</body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
  <script src="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.polyfilled.js"></script>
</html>`;
};

const homepage = `<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
      <title>${authConfig.siteName}</title>
      <meta name="robots" content="noindex">
      <link rel="icon" href="${uiConfig.favicon}">
      <script>
          window.drive_names = JSON.parse('${JSON.stringify(authConfig.roots.map(it => it.name))}');
          window.UI = JSON.parse('${JSON.stringify(uiConfig)}');
      </script>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
      <link rel="stylesheet" href="https://cdn.plyr.io/${uiConfig.plyr_io_version}/plyr.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/${uiConfig.theme}/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
      <style>a{color:${uiConfig.css_a_tag_color};}p{color:${uiConfig.css_p_tag_color};}</style>
   </head>
   <body>
      <header>
         <div id="nav">
            <nav class="navbar navbar-expand-lg${uiConfig.fixed_header ?' fixed-top': ''} ${uiConfig.header_style_class}">
               <div class="container-fluid">
                 <a class="navbar-brand" href="/">${uiConfig.logo_image ? '<img border="0" alt="'+uiConfig.company_name+'" src="'+uiConfig.logo_link_name+'" height="'+uiConfig.height+'" width="'+uiConfig.logo_width+'">' : uiConfig.logo_link_name}</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link" href="/">${uiConfig.nav_link_1}</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Current Path</a>
                           <div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="/">&gt; ${uiConfig.nav_link_1}</a></div>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="${uiConfig.contact_link}" target="_blank">${uiConfig.nav_link_4}</a>
                        </li>
                        ${uiConfig.show_logout_button ?'<li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>': ''}
                     </ul>
                     <form class="d-flex" method="get" action="/0:search">
                        <input class="form-control me-2" name="q" type="search" placeholder="Search" aria-label="Search" value="" required="">
                        <button class="btn btn btn-danger" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>
                     </form>
                  </div>
               </div>
            </nav>
         </div>
      </header>
      <div>
         <div id="content" style="padding-top: ${uiConfig.header_padding}px;">
            <div class="container">
               <div class="alert alert-primary d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">
                  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                     <ol class="breadcrumb" id="folderne">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                     </ol>
                  </nav>
               </div>
               <div id="list" class="list-group text-break">

               </div>
               <div class="${uiConfig.file_count_alert_class} text-center" role="alert" id="count">Total <span id="n_drives" class="number text-center"></span> drives</div>
            </div>
         </div>
         <div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="SearchModelLabel"></h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true"></span>
                     </button>
                  </div>
                  <div class="modal-body" id="modal-body-space">
                  </div>
                  <div class="modal-footer" id="modal-body-space-buttons">
                  </div>
               </div>
            </div>
         </div>
         <br>
         <footer class="footer mt-auto py-3 text-muted ${uiConfig.footer_style_class}" style="${uiConfig.fixed_footer ?'position: fixed; ': ''}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;${uiConfig.hide_footer ? ' display:none;': ' display:block;'}"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-end"> <a href="#">Back to top</a> </p> ${uiConfig.credit ? '<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p>' : ''} <p>© ${uiConfig.copyright_year} - <a href=" ${uiConfig.company_link}" target="_blank"> ${uiConfig.company_name}</a>, All Rights Reserved.</p> </div> </footer>
      </div>
   </body>
  <script src="${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/homepage.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
</html>`

const unauthorized = `<html>
   <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <title>Sign in - ${authConfig.siteName}</title>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <meta name="robots" content="noindex, nofollow">
      <meta name="googlebot" content="noindex, nofollow">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" href="${uiConfig.favicon}">
      <script type="text/javascript" src="//code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <style id="compiled-css" type="text/css">.login,.image{min-height:100vh}.bg-image{background-image:url('https://cdn.jsdelivr.net/gh/logingateway/images@1.0/background.jpg');background-size:cover;background-position:center center}#error-message{display:none}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Palette+Mosaic&display=swap" rel="stylesheet">
      <style>
         .logo {
         font-family: 'Orbitron', sans-serif;
         color: #007bff;
         }
      </style>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      <script>
         $(document).ready(function()
         {
           $('form').submit(function()
           {
             var username = $('#email').val();
             var password = $('#password').val();

             $.ajax(
               {
                 'password' : password,
                 'username' : username,
                 'url'      : '',
                 'type'     : 'GET',
                 'success'  : function(){ window.location = ''; },
                 'error'    : function(){document.getElementById('error').innerHTML = 'Invalid Login Details, Retry or Contact Admin.';},
               }
             );

             return false;
           });
         });
      </script>
   </head>
   <body>
      <div class="container-fluid">
         <div class="row no-gutter">
            <div class="col-md-6 d-none d-md-flex bg-image"></div>
            <div class="col-md-6 bg-light">
               <div class="login d-flex align-items-center py-5">
                  <div class="container">
                     <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                           <h3 class="logo">${authConfig.siteName}</h3>
                           <p class="text-muted mb-4">Requires Common Sense...</p>
                           <div id="error-message" class="alert alert-danger"></div>
                           <form onsubmit="return false;" method="post">
                                <p id="error" style="color:red;"></p>
                              <div class="form-group mb-3">
                                 <input id="email" type="text" placeholder="Username" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" required>
                              </div>
                              <div class="form-group mb-3">
                                 <input id="password" type="password" placeholder="Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" required>
                              </div>
                              <button id="btn-login" type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
                              <hr class="solid">
                              <center>
                                 <p id="hidereset">
                                    <marquee>No Signup Process Available, contact your administrator for id and password at ${uiConfig.unauthorized_owner_email} or visit ${uiConfig.unauthorized_owner_link}.</marquee>
                                 </p>
                              </center>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <center>
                  <p>
                     &copy; <script>document.write(new Date().getFullYear())</script> ${uiConfig.company_name}
                  </p>
               </center>
            </div>
         </div>
      </div>
   </body>
</html>`

const not_found = `<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p id="status"></p>

  <script>
  document.getElementById("status").innerHTML =
"The requested URL <code>" + window.location.pathname + "</code> was not found on this server.  <ins>That’s all we know.</ins>";
  </script>`

  const asn_blocked = `<html>
  <head>
  <title>Access Denied</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
  <style>
  body{
      margin:0;
      padding:0;
      width:100%;
      height:100%;
      color:#b0bec5;
      display:table;
      font-weight:100;
      font-family:Lato
  }
  .container{
      text-align:center;
      display:table-cell;
      vertical-align:middle
  }
  .content{
      text-align:center;
      display:inline-block
  }
  .message{
      font-size:80px;
      margin-bottom:40px
  }
  a{
      text-decoration:none;
      color:#3498db
  }

  </style>
  </head>
  <body>
  <div class="container">
  <div class="content">
  <div class="message">Access Denied</div>
  </div>
  </div>
  </body>
  </html>`

  const directlink = `
  <html>
  <head>
  <title>Direct Link - Access Denied</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
  <style>
  body{
      margin:0;
      padding:0;
      width:100%;
      height:100%;
      color:#b0bec5;
      display:table;
      font-weight:100;
      font-family:Lato
  }
  .container{
      text-align:center;
      display:table-cell;
      vertical-align:middle
  }
  .content{
      text-align:center;
      display:inline-block
  }
  .message{
      font-size:80px;
      margin-bottom:40px
  }
  a{
      text-decoration:none;
      color:#3498db
  }

  </style>
  </head>
  <body>
  <div class="container">
  <div class="content">
  <div class="message">Access Denied</div>
  <center><a href=""><button id="goto">Click Here to Proceed!</button></a></center>
  </div>
  </div>
  </body>
  </html>
  `

const SearchFunction = {
    formatSearchKeyword: function(keyword) {
        let nothing = "";
        let space = " ";
        if (!keyword) return nothing;
        return keyword.replace(/(!=)|['"=<>/\\:]/g, nothing)
            .replace(/[,，|(){}]/g, space)
            .trim()
    }

};

const DriveFixedTerms = new(class {
    default_file_fields = 'parents,id,name,mimeType,modifiedTime,createdTime,fileExtension,size';
    gd_root_type = {
        user_drive: 0,
        share_drive: 1
    };
    folder_mime_type = 'application/vnd.google-apps.folder';
})();

const JSONWebToken = {
    header: {
        alg: 'RS256',
        typ: 'JWT'
    },
    importKey: async function(pemKey) {
        var pemDER = this.textUtils.base64ToArrayBuffer(pemKey.split('\n').map(s => s.trim()).filter(l => l.length && !l.startsWith('---')).join(''));
        return crypto.subtle.importKey('pkcs8', pemDER, {
            name: 'RSASSA-PKCS1-v1_5',
            hash: 'SHA-256'
        }, false, ['sign']);
    },
    createSignature: async function(text, key) {
        const textBuffer = this.textUtils.stringToArrayBuffer(text);
        return crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, textBuffer)
    },
    generateGCPToken: async function(serviceAccount) {
        const iat = parseInt(Date.now() / 1000);
        var payload = {
            "iss": serviceAccount.client_email,
            "scope": "https://www.googleapis.com/auth/drive",
            "aud": "https://oauth2.googleapis.com/token",
            "exp": iat + 3600,
            "iat": iat
        };
        const encPayload = btoa(JSON.stringify(payload));
        const encHeader = btoa(JSON.stringify(this.header));
        var key = await this.importKey(serviceAccount.private_key);
        var signed = await this.createSignature(encHeader + "." + encPayload, key);
        return encHeader + "." + encPayload + "." + this.textUtils.arrayBufferToBase64(signed).replace(/\//g, '_').replace(/\+/g, '-');
    },
    textUtils: {
        base64ToArrayBuffer: function(base64) {
            var binary_string = atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        },
        stringToArrayBuffer: function(str) {
            var len = str.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes.buffer;
        },
        arrayBufferToBase64: function(buffer) {
            let binary = '';
            let bytes = new Uint8Array(buffer);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
        }
    }
};

// auth0.com functions obfuscated
const gdiauth_0x22c4ad=gdiauth_0x24fd;(function(_0x3ea7b7,_0x1a8660){const _0x57ea41=gdiauth_0x24fd,_0x420603=_0x3ea7b7();while(!![]){try{const _0x13311e=parseInt(_0x57ea41(0xcd))/0x1*(-parseInt(_0x57ea41(0xc2))/0x2)+parseInt(_0x57ea41(0xb5))/0x3+parseInt(_0x57ea41(0xbd))/0x4+-parseInt(_0x57ea41(0xa7))/0x5+parseInt(_0x57ea41(0xbf))/0x6*(parseInt(_0x57ea41(0xb8))/0x7)+-parseInt(_0x57ea41(0xe1))/0x8*(parseInt(_0x57ea41(0xca))/0x9)+parseInt(_0x57ea41(0xce))/0xa;if(_0x13311e===_0x1a8660)break;else _0x420603['push'](_0x420603['shift']());}catch(_0x25a1d3){_0x420603['push'](_0x420603['shift']());}}}(gdiauth_0x506f,0xb3a35));const AUTH0_DOMAIN=auth0['domain'],AUTH0_CLIENT_ID=auth0[gdiauth_0x22c4ad(0xc1)],AUTH0_CLIENT_SECRET=auth0['clientSecret'],AUTH0_CALLBACK_URL=auth0[gdiauth_0x22c4ad(0xe2)],AUTH0_LOGOUT_URL=auth0['logoutUrl'],SALT=gdiauth_0x22c4ad(0xd5),cookieKey='AUTH0-AUTH',generateStateParam=async()=>{const _0x5a5eb6=gdiauth_0x22c4ad,_0x14018c=await fetch('https://csprng.xyz/v1/api'),{Data:_0x2e1dd5}=await _0x14018c[_0x5a5eb6(0xc6)]();return await AUTH_STORE['put'](_0x5a5eb6(0xeb)+_0x2e1dd5,!![],{'expirationTtl':0x3c}),_0x2e1dd5;},exchangeCode=async _0x26a684=>{const _0x5eded4=gdiauth_0x22c4ad,_0x33e447=JSON[_0x5eded4(0xaf)]({'grant_type':_0x5eded4(0xed),'client_id':auth0[_0x5eded4(0xc1)],'client_secret':auth0['clientSecret'],'code':_0x26a684,'redirect_uri':auth0[_0x5eded4(0xe2)]});return persistAuth(await fetch(AUTH0_DOMAIN+_0x5eded4(0xb0),{'method':_0x5eded4(0xc5),'headers':{'content-type':_0x5eded4(0xc0)},'body':_0x33e447}));},decodeJWT=function(_0x50db3d){const _0x3685f9=gdiauth_0x22c4ad;var _0x57dc08=_0x50db3d['split']('.')[0x1][_0x3685f9(0xe4)](/-/g,'+')[_0x3685f9(0xe4)](/_/g,'/');switch(_0x57dc08[_0x3685f9(0xa8)]%0x4){case 0x0:break;case 0x2:_0x57dc08+='==';break;case 0x3:_0x57dc08+='=';break;default:throw'Illegal\x20base64url\x20string!';}const _0x140d7f=atob(_0x57dc08);try{return decodeURIComponent(escape(_0x140d7f));}catch(_0x4e7d48){return console[_0x3685f9(0xb6)](_0x4e7d48),_0x140d7f;}},validateToken=_0x359e38=>{const _0x3c1b03=gdiauth_0x22c4ad;try{const _0x110b8=_0x78e445=>Math[_0x3c1b03(0xd6)](Number(_0x78e445)/0x3e8),_0x282d79=new Date();let _0x519979=_0x359e38[_0x3c1b03(0xb3)];_0x519979=_0x519979[_0x3c1b03(0xc8)]('/')?_0x519979[_0x3c1b03(0xd8)](0x0,-0x1):_0x519979;if(_0x519979!==AUTH0_DOMAIN)throw new Error(_0x3c1b03(0xa2)+_0x519979+_0x3c1b03(0xdc)+AUTH0_DOMAIN+')');if(_0x359e38['aud']!==AUTH0_CLIENT_ID)throw new Error(_0x3c1b03(0xb1)+_0x359e38[_0x3c1b03(0xe8)]+')\x20doesn\x27t\x20match\x20AUTH0_CLIENT_ID\x20('+AUTH0_CLIENT_ID+')');if(_0x359e38['exp']<_0x110b8(_0x282d79))throw new Error(_0x3c1b03(0xea));_0x282d79[_0x3c1b03(0xcf)](_0x282d79[_0x3c1b03(0xb9)]()-0x1);if(_0x359e38[_0x3c1b03(0xc7)]<_0x110b8(_0x282d79))throw new Error(_0x3c1b03(0xa6));return!![];}catch(_0x4384f5){return console['log'](_0x4384f5[_0x3c1b03(0xd1)]),![];}},persistAuth=async _0x2691a1=>{const _0x134a8b=gdiauth_0x22c4ad,_0x416162=await _0x2691a1[_0x134a8b(0xc6)]();if(_0x416162[_0x134a8b(0xcc)])throw new Error(_0x416162['error']);const _0x60009f=new Date();_0x60009f[_0x134a8b(0xcf)](_0x60009f[_0x134a8b(0xb9)]()+0x1);const _0x313a0c=JSON['parse'](decodeJWT(_0x416162[_0x134a8b(0xd7)])),_0x30b4a0=validateToken(_0x313a0c);if(!_0x30b4a0)return{'status':0x191};const _0x5403fe=new TextEncoder()[_0x134a8b(0xac)](SALT+'-'+_0x313a0c['sub']),_0x5b9c02=await crypto[_0x134a8b(0xae)][_0x134a8b(0xd4)]({'name':_0x134a8b(0xc9)},_0x5403fe),_0x137aa7=new Uint8Array(_0x5b9c02),_0xf7249b=btoa(String[_0x134a8b(0xbe)][_0x134a8b(0xbb)](null,_0x137aa7));await AUTH_STORE[_0x134a8b(0xd3)](_0xf7249b,JSON['stringify'](_0x416162));const _0x4b100b={'Location':'/','Set-cookie':cookieKey+'='+_0xf7249b+_0x134a8b(0xa3)+_0x60009f[_0x134a8b(0xdb)]()};return{'headers':_0x4b100b,'status':0x12e};},redirectUrl=_0x32dc85=>auth0[gdiauth_0x22c4ad(0xe0)]+gdiauth_0x22c4ad(0xbc)+auth0[gdiauth_0x22c4ad(0xc1)]+gdiauth_0x22c4ad(0xda)+auth0[gdiauth_0x22c4ad(0xe2)]+'&scope=openid%20profile%20email&state='+encodeURIComponent(_0x32dc85),handleRedirect=async _0x240490=>{const _0x27bddc=gdiauth_0x22c4ad,_0x59ed6a=new URL(_0x240490[_0x27bddc(0xb2)]['url']),_0x520a37=_0x59ed6a[_0x27bddc(0xd0)][_0x27bddc(0xe9)]('state');if(!_0x520a37)return null;const _0x19715c=await AUTH_STORE[_0x27bddc(0xe9)](_0x27bddc(0xeb)+_0x520a37);if(!_0x19715c)return null;const _0x351a6=_0x59ed6a['searchParams']['get'](_0x27bddc(0xa1));if(_0x351a6)return exchangeCode(_0x351a6);return null;};function getCookie(_0x1b5ed0,_0x51d92a){const _0x32d846=gdiauth_0x22c4ad;var _0x33dfc0=_0x51d92a+'=',_0x5bf9ae=_0x1b5ed0[_0x32d846(0xec)](';');for(var _0x48cb4f=0x0;_0x48cb4f<_0x5bf9ae[_0x32d846(0xa8)];_0x48cb4f++){var _0x1e332c=_0x5bf9ae[_0x48cb4f];while(_0x1e332c[_0x32d846(0xad)](0x0)=='\x20')_0x1e332c=_0x1e332c['substring'](0x1,_0x1e332c[_0x32d846(0xa8)]);if(_0x1e332c[_0x32d846(0xd9)](_0x33dfc0)==0x0)return _0x1e332c[_0x32d846(0xa5)](_0x33dfc0['length'],_0x1e332c[_0x32d846(0xa8)]);}return null;}async function getAssetFromKV(_0x12f3cf){return null;}const verify=async _0xf20977=>{const _0x4ef88c=gdiauth_0x22c4ad,_0x2c7bed=_0xf20977[_0x4ef88c(0xb2)][_0x4ef88c(0xe5)]['get'](_0x4ef88c(0xba));if(_0x2c7bed&&_0x2c7bed[_0x4ef88c(0xb7)](cookieKey)){if(!getCookie(_0x2c7bed,cookieKey))return{};const _0xc96836=getCookie(_0x2c7bed,cookieKey),_0xbe62df=await AUTH_STORE['get'](_0xc96836);if(!_0xbe62df)return{};let _0x2c103a;try{_0x2c103a=JSON[_0x4ef88c(0xc3)](_0xbe62df);}catch(_0x41209d){throw new Error(_0x4ef88c(0xe7));}const {access_token:_0x1f864b,id_token:_0x26908d}=_0x2c103a,_0x121d0e=JSON[_0x4ef88c(0xc3)](decodeJWT(_0x26908d));return{'accessToken':_0x1f864b,'idToken':_0x26908d,'userInfo':_0x121d0e};}return{};},authorize=async _0x50e138=>{const _0xe11d63=gdiauth_0x22c4ad,_0x1f03ab=await verify(_0x50e138);if(_0x1f03ab[_0xe11d63(0xab)])return[!![],{'authorization':_0x1f03ab}];else{const _0x95b9b5=await generateStateParam();return[![],{'redirectUrl':redirectUrl(_0x95b9b5)}];}},hydrateState=(_0x1b1941={})=>({'element':_0x418358=>{const _0x457e5d=gdiauth_0x22c4ad;_0x418358[_0x457e5d(0xa4)](JSON[_0x457e5d(0xaf)](_0x1b1941));}}),config={'hydrateState':!![],'originless':!![]};function gdiauth_0x24fd(_0x34d741,_0x130460){const _0x506f81=gdiauth_0x506f();return gdiauth_0x24fd=function(_0x24fd5f,_0x3d8365){_0x24fd5f=_0x24fd5f-0xa0;let _0x1afa34=_0x506f81[_0x24fd5f];return _0x1afa34;},gdiauth_0x24fd(_0x34d741,_0x130460);}async function loginHandleRequest(_0x25e988){const _0x4c4b61=gdiauth_0x22c4ad;try{let _0x1428b2=_0x25e988[_0x4c4b61(0xb2)];const [_0x41271b,{authorization:_0x1c445e,redirectUrl:_0x4d5f50}]=await authorize(_0x25e988),_0x47e4da=new URL(_0x25e988[_0x4c4b61(0xb2)][_0x4c4b61(0xa9)]);if(_0x47e4da[_0x4c4b61(0xe6)]==='/auth'){const _0x58a5cf=await handleRedirect(_0x25e988);if(!_0x58a5cf){let _0x3318bb=new Headers();return _0x3318bb['set'](_0x4c4b61(0xc4),'1;\x20url='+auth0[_0x4c4b61(0xdf)]),_0x3318bb[_0x4c4b61(0xa0)](_0x4c4b61(0xdd),cookieKey+_0x4c4b61(0xcb)),new Response(_0x4c4b61(0xd2),{'status':0x12e,'headers':_0x3318bb});}return response=new Response(_0x1428b2['body'],{'request':_0x1428b2,..._0x58a5cf}),response;}if(!_0x41271b)return Response[_0x4c4b61(0xee)](_0x4d5f50);if(_0x47e4da[_0x4c4b61(0xe6)]===_0x4c4b61(0xde)){let _0x3368be=new Headers();return _0x3368be['set'](_0x4c4b61(0xb4),auth0[_0x4c4b61(0xe0)]+_0x4c4b61(0xaa)+auth0[_0x4c4b61(0xc1)]+_0x4c4b61(0xe3)+auth0['logoutUrl']),_0x3368be[_0x4c4b61(0xa0)](_0x4c4b61(0xdd),cookieKey+'=\x22\x22;\x20HttpOnly;\x20Secure;\x20SameSite=Lax;'),new Response('',{'status':0x12e,'headers':_0x3368be});}return null;}catch(_0x5005ba){return new Response(_0x5005ba['toString']());}}function gdiauth_0x506f(){const _0x3dc5b0=['SHA-256','22014GnkdbA','=\x22\x22;\x20HttpOnly;\x20Secure;\x20SameSite=Lax;','error','8039jhVkbk','5151660KImUEN','setDate','searchParams','message','Unauthorized\x20-\x20Redirecting','put','digest','keys565','ceil','id_token','slice','indexOf','&redirect_uri=','toUTCString',')\x20doesn\x27t\x20match\x20AUTH0_DOMAIN\x20(','Set-cookie','/logout','logoutUrl','domain','1272NoSshO','callbackUrl','&returnTo=','replace','headers','pathname','Unable\x20to\x20parse\x20auth\x20information\x20from\x20Workers\x20KV','aud','get','Token\x20exp\x20value\x20is\x20before\x20current\x20time','state-','split','authorization_code','redirect','set','code','Token\x20iss\x20value\x20(',';\x20Secure;\x20HttpOnly;\x20SameSite=Lax;\x20Expires=','setInnerContent','substring','Token\x20was\x20issued\x20before\x20one\x20day\x20ago\x20and\x20is\x20now\x20invalid','7311335mSnVkO','length','url','/v2/logout?client_id=','accessToken','encode','charAt','subtle','stringify','/oauth/token','Token\x20aud\x20value\x20(','request','iss','Location','4200462FUofTO','log','includes','176554OqfsBM','getDate','Cookie','apply','/authorize?response_type=code&client_id=','2645636WFpxDU','fromCharCode','12TJxRyt','application/json','clientId','10gwDYaw','parse','Refresh','POST','json','iat','endsWith'];gdiauth_0x506f=function(){return _0x3dc5b0;};return gdiauth_0x506f();}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request, event));
});

async function handleRequest(request, event) {
    var loginCheck = await loginHandleRequest(event)
    if(authConfig['enable_auth0_com'] && loginCheck != null){return loginCheck}
    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const asn_servers = request.cf.asn;
    const referer = request.headers.get("Referer");
    if (gds.length === 0) {
        for (let i = 0; i < authConfig.roots.length; i++) {
            const gd = new googleDrive(authConfig, i);
            await gd.init();
            gds.push(gd)
        }
        let tasks = [];
        gds.forEach(gd => {
            tasks.push(gd.initRootType());
        });
        for (let task of tasks) {
            await task;
        }
    }

    let gd;
    let url = new URL(request.url);
    let path = url.pathname;
    let hostname = url.hostname;

    function redirectToIndexPage() {
        return new Response('', {
            status: 307,
            headers: {
                'Location': `${url.origin}/0:/`
            }
        });
    }

    if (path == '/') {
        return new Response(homepage, {
            status: 200,
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        })
    }
    if (path.toLowerCase() == '/arc-sw.js') {
        return fetch("https://arc.io/arc-sw.js")
    } else if (path.toLowerCase() == '/admin') {
        return Response.redirect("https://www.npmjs.com/package/@googledrive/index", 301)
    } else if (blocked_region.includes(region)) {
        return new Response(asn_blocked, {
            status: 403,
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        })
    } else if (blocked_asn.includes(asn_servers)) {
        return new Response(asn_blocked, {
                headers: {
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
    }

    if (authConfig['direct_link_protection']) {
      if (referer == null){
          return new Response(directlink, {
                  headers: {
                      'content-type': 'text/html;charset=UTF-8'
                  },
                  status: 401
              });
          console.log("Refer Null");
      } else if (referer.includes(hostname)) {
          console.log("Refer Detected");
      } else {
          return new Response(directlink, {
                  headers: {
                      'content-type': 'text/html;charset=UTF-8'
                  },
                  status: 401
              });
          console.log("Wrong Refer URL");
      }
    }

    const command_reg = /^\/(?<num>\d+):(?<command>[a-zA-Z0-9]+)(\/.*)?$/g;
    const match = command_reg.exec(path);
    if (match) {
        const num = match.groups.num;
        const order = Number(num);
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
        for (const r = gd.basicAuthResponse(request); r;) return r;
        const command = match.groups.command;
        if (command === 'search') {
            if (request.method === 'POST') {
                return handleSearch(request, gd);
            } else {
                const params = url.searchParams;
                return new Response(html(gd.order, {
                    q: params.get("q").replace(/'/g, "").replace(/"/g, "") || '',
                    is_search_page: true,
                    root_type: gd.root_type
                }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'text/html; charset=utf-8'
                    }
                });
            }
        } else if (command === 'id2path' && request.method === 'POST') {
            return handleId2Path(request, gd)
        }
    }

    const common_reg = /^\/\d+:\/.*$/g;
    try {
        if (!path.match(common_reg)) {
            return redirectToIndexPage();
        }
        let split = path.split("/");
        let order = Number(split[1].slice(0, -1));
        if (order >= 0 && order < gds.length) {
            gd = gds[order];
        } else {
            return redirectToIndexPage()
        }
    } catch (e) {
        return redirectToIndexPage()
    }

    const basic_auth_res = gd.basicAuthResponse(request);

    path = path.replace(gd.url_path_prefix, '') || '/';
    if (request.method == 'POST') {
        return basic_auth_res || apiRequest(request, gd);
    }

    let action = url.searchParams.get('a');

    if (path.substr(-1) == '/' || action != null) {
        return basic_auth_res || new Response(html(gd.order, {
            root_type: gd.root_type
        }), {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    } else {
      try {
      if (path.split('/').pop().toLowerCase() == ".password") {
          return basic_auth_res || new Response("", {
              status: 404
          });
      }
      let file = await gd.file(path);
      let range = request.headers.get('Range');
      const inline_down = 'true' === url.searchParams.get('inline');
      if (gd.root.protect_file_link && basic_auth_res) return basic_auth_res;
      return gd.down(file?.id, range, inline_down);
      }
      catch {
              return new Response(not_found, {
                  status: 404,
                  headers: {
                      "content-type": "text/html;charset=UTF-8",
                  },
              })
      }

    }
}

function gdiencode(str) {
    var gdijsorg_0x40df = ['1KzJBAK', '1697708zMrtEu', '295396TasIvj', '21011Eyuayv', '1217593CxovUD', 'fromCharCode', '143062xekFCR', 'replace', '74bcHwvq', '73939wlqHSM', '2CBdqkc', '1712527AcNPoP'];
    var gdijsorg_0x5556bb = gdijsorg_0x56b1;
    (function(_0x3f3911, _0x38bce9) {
        var _0x32440e = gdijsorg_0x56b1;
        while (!![]) {
            try {
                var _0x2cab6f = -parseInt(_0x32440e(0xb3)) + -parseInt(_0x32440e(0xb7)) * -parseInt(_0x32440e(0xb6)) + -parseInt(_0x32440e(0xaf)) * -parseInt(_0x32440e(0xad)) + -parseInt(_0x32440e(0xb1)) + parseInt(_0x32440e(0xae)) + parseInt(_0x32440e(0xac)) + parseInt(_0x32440e(0xb0)) * -parseInt(_0x32440e(0xb5));
                if (_0x2cab6f === _0x38bce9) break;
                else _0x3f3911['push'](_0x3f3911['shift']());
            } catch (_0x34d506) {
                _0x3f3911['push'](_0x3f3911['shift']());
            }
        }
    }(gdijsorg_0x40df, 0xe5038));

    function gdijsorg_0x56b1(_0x1ccc20, _0x1596c4) {
        _0x1ccc20 = _0x1ccc20 - 0xac;
        var _0x40df0f = gdijsorg_0x40df[_0x1ccc20];
        return _0x40df0f;
    }
    return btoa(encodeURIComponent(str)[gdijsorg_0x5556bb(0xb4)](/%([0-9A-F]{2})/g, function toSolidBytes(_0xe8cc7f, _0x12410f) {
        var _0x1cce23 = gdijsorg_0x5556bb;
        return String[_0x1cce23(0xb2)]('0x' + _0x12410f);
    }));
}

async function apiRequest(request, gd) {
    let url = new URL(request.url);
    let path = url.pathname;
    path = path.replace(gd.url_path_prefix, '') || '/';

    let option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }

    if (path.substr(-1) == '/') {
        let form = await request.formData();
        let deferred_list_result = gd.list(path, form.get('page_token'), Number(form.get('page_index')));

        if (authConfig['enable_password_file_verify']) {
            let password = await gd.password(path);
            // console.log("dir password", password);
            if (password && password.replace("\n", "") !== form.get('password')) {
                let html = `Y29kZWlzcHJvdGVjdGVk=0Xfi4icvJnclBCZy92dzNXYwJCI6ISZnF2czVWbiwSMwQDI6ISZk92YisHI6IicvJnclJyeYmFzZTY0aXNleGNsdWRlZA==`;
                return new Response(html, option);
            }
        }

        let list_result = await deferred_list_result;
        return new Response(rewrite(gdiencode(JSON.stringify(list_result), option)));
    } else {
        let file = await gd.file(path);
        let range = request.headers.get('Range');
        return new Response(rewrite(gdiencode(JSON.stringify(file))));
    }
}

// deal with search
async function handleSearch(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let search_result = await
    gd.search(form.get('q') || '', form.get('page_token'), Number(form.get('page_index')));
    return new Response(rewrite(gdiencode(JSON.stringify(search_result), option)));
}

async function handleId2Path(request, gd) {
    const option = {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
    let form = await request.formData();
    let path = await gd.findPathById(form.get('id'));
    return new Response(path || '', option);
}

class googleDrive {
    constructor(authConfig, order) {
        this.order = order;
        this.root = authConfig.roots[order];
        this.root.protect_file_link = this.root.protect_file_link || false;
        this.url_path_prefix = `/${order}:`;
        this.authConfig = authConfig;
        this.paths = [];
        this.files = [];
        this.passwords = [];
        this.id_path_cache = {};
        this.id_path_cache[this.root['id']] = '/';
        this.paths["/"] = this.root['id'];
    }
    async init() {
        await this.accessToken();
        if (authConfig.user_drive_real_root_id) return;
        const root_obj = await (gds[0] || this).findItemById('root');
        if (root_obj && root_obj.id) {
            authConfig.user_drive_real_root_id = root_obj.id
        }
    }

    async initRootType() {
        const root_id = this.root['id'];
        const types = DriveFixedTerms.gd_root_type;
        if (root_id === 'root' || root_id === authConfig.user_drive_real_root_id) {
            this.root_type = types.user_drive;
        } else {
            this.root_type = types.share_drive;
        }
    }

    basicAuthResponse(request) {
        let url = new URL(request.url);
        let path = url.pathname;
        const auth = this.root.auth || '',
            _401 = new Response(unauthorized, {
                headers: {
                    'WWW-Authenticate': `Basic realm="goindex:drive:${this.order}"`,
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
        if (authConfig['lock_folders']) {
            if (auth && path.endsWith("/") || path.endsWith("search")) {
                const _auth = request.headers.get('Authorization')
                if (_auth) {
                    const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
                    if (auth.hasOwnProperty(received_user)) {
                        if (auth[received_user] == received_pass) {
                            return null;
                        } else return _401;
                    } else return _401;
                }
            } else return null;
        } else {
                if (auth) {
                    const _auth = request.headers.get('Authorization')
                    if (_auth) {
                        const [received_user, received_pass] = atob(_auth.split(' ').pop()).split(':');
                        if (auth.hasOwnProperty(received_user)) {
                            if (auth[received_user] == received_pass) {
                                return null;
                            } else return _401;
                        } else return _401;
                    }
                } else return null;
        }
        return _401;
    }

    async down(id, range = '', inline = false) {
        let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
        let requestOption = await this.requestOption();
        requestOption.headers['Range'] = range;
        let res = await fetch(url, requestOption);
        const second_domain_for_dl = `${uiConfig.second_domain_for_dl}`
        if (second_domain_for_dl == 'true') {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/disable_download.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
        else if (res.ok) {
            const {
                headers
            } = res = new Response(res.body, res)
            this.authConfig.enable_cors_file_down && headers.append('Access-Control-Allow-Origin', '*');
            inline === true && headers.set('Content-Disposition', 'inline');
            return res;
        }
        else if(res.status == 404){
            return new Response(not_found, {
                status: 404,
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
        else {
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/download_error.html`);
            return new Response(await res.text(), {
                headers: {
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        }
    }

    async file(path) {
        if (typeof this.files[path] == 'undefined') {
            this.files[path] = await this._file(path);
        }
        return this.files[path];
    }

    async _file(path) {
        let arr = path.split('/');
        let name = arr.pop();
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        let dir = arr.join('/') + '/';
        // console.log(name, dir);
        let parent = await this.findPathId(dir);
        // console.log(parent);
        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and name = '${name}' and trashed = false and mimeType != 'application/vnd.google-apps.shortcut'`;
        params.fields = "files(id, name, mimeType, size ,createdTime, modifiedTime, iconLink, thumbnailLink)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        // console.log(obj);
        return obj.files[0];
    }

    async list(path, page_token = null, page_index = 0) {
        if (this.path_children_cache == undefined) {
            // { <path> :[ {nextPageToken:'',data:{}}, {nextPageToken:'',data:{}} ...], ...}
            this.path_children_cache = {};
        }

        if (this.path_children_cache[path] &&
            this.path_children_cache[path][page_index] &&
            this.path_children_cache[path][page_index].data
        ) {
            let child_obj = this.path_children_cache[path][page_index];
            return {
                nextPageToken: child_obj.nextPageToken || null,
                curPageIndex: page_index,
                data: child_obj.data
            };
        }

        let id = await this.findPathId(path);
        let result = await this._ls(id, page_token, page_index);
        let data = result.data;
        if (result.nextPageToken && data.files) {
            if (!Array.isArray(this.path_children_cache[path])) {
                this.path_children_cache[path] = []
            }
            this.path_children_cache[path][Number(result.curPageIndex)] = {
                nextPageToken: result.nextPageToken,
                data: data
            };
        }

        return result
    }


    async _ls(parent, page_token = null, page_index = 0) {

        if (parent == undefined) {
            return null;
        }
        let obj;
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and trashed = false AND name !='.password' and mimeType != 'application/vnd.google-apps.shortcut'`;
        params.orderBy = 'folder,name,modifiedTime desc';
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.files_list_page_size;

        if (page_token) {
            params.pageToken = page_token;
        }
        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        obj = await response.json();

        return {
            nextPageToken: obj.nextPageToken || null,
            curPageIndex: page_index,
            data: obj
        };
    }

    async password(path) {
        if (this.passwords[path] !== undefined) {
            return this.passwords[path];
        }

        let file = await this.file(path + '.password');
        if (file == undefined) {
            this.passwords[path] = null;
        } else {
            let url = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
            let requestOption = await this.requestOption();
            let response = await this.fetch200(url, requestOption);
            this.passwords[path] = await response.text();
        }

        return this.passwords[path];
    }

    async search(origin_keyword, page_token = null, page_index = 0) {
        const types = DriveFixedTerms.gd_root_type;
        const is_user_drive = this.root_type === types.user_drive;
        const is_share_drive = this.root_type === types.share_drive;
        const search_all_drives = `${uiConfig.search_all_drives}`
        const empty_result = {
            nextPageToken: null,
            curPageIndex: page_index,
            data: null
        };

        if (!is_user_drive && !is_share_drive) {
            return empty_result;
        }
        let keyword = SearchFunction.formatSearchKeyword(origin_keyword);
        if (!keyword) {
            return empty_result;
        }
        let words = keyword.split(/\s+/);
        let name_search_str = `name contains '${words.join("' AND name contains '")}'`;
        let params = {};
        if (is_user_drive) {
            if (search_all_drives == 'true') {
                params.corpora = 'allDrives';
                params.includeItemsFromAllDrives = true;
                params.supportsAllDrives = true;
            }
            else {
                params.corpora = 'user';
            }
        }
        if (is_share_drive) {
            if (search_all_drives == 'true') {
                params.corpora = 'allDrives';
            }
            else {
                params.corpora = 'drive';
                params.driveId = this.root.id;
            }
            params.includeItemsFromAllDrives = true;
            params.supportsAllDrives = true;
        }
        if (page_token) {
            params.pageToken = page_token;
        }
        params.q = `trashed = false AND mimeType != 'application/vnd.google-apps.shortcut' AND name !='.password' AND (${name_search_str})`;
        params.fields = "nextPageToken, files(id, driveId, name, mimeType, size , modifiedTime)";
        params.pageSize = this.authConfig.search_result_list_page_size;
        params.orderBy = 'folder,name,modifiedTime desc';

        let url = 'https://www.googleapis.com/drive/v3/files';
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let res_obj = await response.json();

        return {
            nextPageToken: res_obj.nextPageToken || null,
            curPageIndex: page_index,
            data: res_obj
        };
    }

    async findParentFilesRecursion(child_id, contain_myself = true) {
        const gd = this;
        const gd_root_id = gd.root.id;
        const user_drive_real_root_id = authConfig.user_drive_real_root_id;
        const is_user_drive = gd.root_type === DriveFixedTerms.gd_root_type.user_drive;
        const target_top_id = is_user_drive ? user_drive_real_root_id : gd_root_id;
        const fields = DriveFixedTerms.default_file_fields;
        const parent_files = [];
        let meet_top = false;

        async function addItsFirstParent(file_obj) {
            if (!file_obj) return;
            if (!file_obj.parents) return;
            if (file_obj.parents.length < 1) return;
            let p_ids = file_obj.parents;
            if (p_ids && p_ids.length > 0) {
                const first_p_id = p_ids[0];
                if (first_p_id === target_top_id) {
                    meet_top = true;
                    return;
                }
                const p_file_obj = await gd.findItemById(first_p_id);
                if (p_file_obj && p_file_obj.id) {
                    parent_files.push(p_file_obj);
                    await addItsFirstParent(p_file_obj);
                }
            }
        }

        const child_obj = await gd.findItemById(child_id);
        if (contain_myself) {
            parent_files.push(child_obj);
        }
        await addItsFirstParent(child_obj);

        return meet_top ? parent_files : null
    }

    async findPathById(child_id) {
        if (this.id_path_cache[child_id]) {
            return this.id_path_cache[child_id];
        }

        const p_files = await this.findParentFilesRecursion(child_id);
        if (!p_files || p_files.length < 1) return '';

        let cache = [];
        // Cache the path and id of each level found
        p_files.forEach((value, idx) => {
            const is_folder = idx === 0 ? (p_files[idx].mimeType === DriveFixedTerms.folder_mime_type) : true;
            let path = '/' + p_files.slice(idx).map(it => it.name).reverse().join('/');
            if (is_folder) path += '/';
            cache.push({
                id: p_files[idx].id,
                path: path
            })
        });

        cache.forEach((obj) => {
            this.id_path_cache[obj.id] = obj.path;
            this.paths[obj.path] = obj.id
        });
        return cache[0].path;
    }

    async findItemById(id) {
        const is_user_drive = this.root_type === DriveFixedTerms.gd_root_type.user_drive;
        let url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${DriveFixedTerms.default_file_fields}${is_user_drive ? '' : '&supportsAllDrives=true'}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        return await res.json()
    }

    async findPathId(path) {
        let c_path = '/';
        let c_id = this.paths[c_path];

        let arr = path.trim('/').split('/');
        for (let name of arr) {
            c_path += name + '/';

            if (typeof this.paths[c_path] == 'undefined') {
                let id = await this._findDirId(c_id, name);
                this.paths[c_path] = id;
            }

            c_id = this.paths[c_path];
            if (c_id == undefined || c_id == null) {
                break;
            }
        }
        return this.paths[path];
    }

    async _findDirId(parent, name) {
        name = decodeURIComponent(name).replace(/\'/g, "\\'");
        if (parent == undefined) {
            return null;
        }

        let url = 'https://www.googleapis.com/drive/v3/files';
        let params = {
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true
        };
        params.q = `'${parent}' in parents and mimeType = 'application/vnd.google-apps.folder' and name = '${name}'  and trashed = false`;
        params.fields = "nextPageToken, files(id, name, mimeType)";
        url += '?' + this.enQuery(params);
        let requestOption = await this.requestOption();
        let response = await fetch(url, requestOption);
        let obj = await response.json();
        if (obj.files[0] == undefined) {
            return null;
        }
        return obj.files[0].id;
    }

    async accessToken() {
        console.log("accessToken");
        if (this.authConfig.expires == undefined || this.authConfig.expires < Date.now()) {
            const obj = await this.fetchAccessToken();
            if (obj.access_token != undefined) {
                this.authConfig.accessToken = obj.access_token;
                this.authConfig.expires = Date.now() + 3500 * 1000;
            }
        }
        return this.authConfig.accessToken;
    }

    async fetchAccessToken() {
        console.log("fetchAccessToken");
        const url = "https://www.googleapis.com/oauth2/v4/token";
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        var post_data;
        if (this.authConfig.service_account && typeof this.authConfig.service_account_json != "undefined") {
            const jwttoken = await JSONWebToken.generateGCPToken(this.authConfig.service_account_json);
            post_data = {
                grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: jwttoken,
            };
        } else {
            post_data = {
                client_id: this.authConfig.client_id,
                client_secret: this.authConfig.client_secret,
                refresh_token: this.authConfig.refresh_token,
                grant_type: "refresh_token",
            };
        }

        let requestOption = {
            'method': 'POST',
            'headers': headers,
            'body': this.enQuery(post_data)
        };

        const response = await fetch(url, requestOption);
        return await response.json();
    }

    async fetch200(url, requestOption) {
        let response;
        for (let i = 0; i < 3; i++) {
            response = await fetch(url, requestOption);
            console.log(response.status);
            if (response.status != 403) {
                break;
            }
            await this.sleep(800 * (i + 1));
        }
        return response;
    }

    async requestOption(headers = {}, method = 'GET') {
        const accessToken = await this.accessToken();
        headers['authorization'] = 'Bearer ' + accessToken;
        return {
            'method': method,
            'headers': headers
        };
    }

    enQuery(data) {
        const ret = [];
        for (let d in data) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
    }

    sleep(ms) {
        return new Promise(function(resolve, reject) {
            let i = 0;
            setTimeout(function() {
                console.log('sleep' + ms);
                i++;
                if (i >= 2) reject(new Error('i>=2'));
                else resolve(i);
            }, ms);
        })
    }
}

function rewrite(str) {
    var gdijsorg_0x4e46 = ['join', 'YmFzZTY0aXNleGNsdWRlZA==', '377943YNHRVT', '133527xcoEHq', '138191tQqett', '4JgyeDu', '299423DYjNuN', '622qCMSPH', 'reverse', 'split', '950361qrHraF', '1PjZtJR', '120619DeiSfH', '1153ekVsUn'];

    function gdijsorg_0x276f(_0x37674d, _0x2582b3) {
        _0x37674d = _0x37674d - 0x162;
        var _0x4e46db = gdijsorg_0x4e46[_0x37674d];
        return _0x4e46db;
    }
    var gdijsorg_0x3f8728 = gdijsorg_0x276f;
    (function(_0x4d8ef8, _0x302a25) {
        var _0x83f66b = gdijsorg_0x276f;
        while (!![]) {
            try {
                var _0x396eb3 = parseInt(_0x83f66b(0x16c)) * -parseInt(_0x83f66b(0x164)) + -parseInt(_0x83f66b(0x162)) * -parseInt(_0x83f66b(0x163)) + -parseInt(_0x83f66b(0x16b)) + -parseInt(_0x83f66b(0x167)) + -parseInt(_0x83f66b(0x169)) * -parseInt(_0x83f66b(0x16a)) + parseInt(_0x83f66b(0x168)) + parseInt(_0x83f66b(0x16f));
                if (_0x396eb3 === _0x302a25) break;
                else _0x4d8ef8['push'](_0x4d8ef8['shift']());
            } catch (_0x2dc29f) {
                _0x4d8ef8['push'](_0x4d8ef8['shift']());
            }
        }
    }(gdijsorg_0x4e46, 0x588f3));
    var sa = str[gdijsorg_0x3f8728(0x16e)](''),
        ra = sa[gdijsorg_0x3f8728(0x16d)](),
        ja = ra[gdijsorg_0x3f8728(0x165)](''),
        aj = 'Y29kZWlzcHJvdGVjdGVk' + ja + gdijsorg_0x3f8728(0x166);
    return aj;
}

String.prototype.trim = function(char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};
