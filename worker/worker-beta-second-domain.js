/*  ░██████╗░██████╗░██╗░░░░░░░░██╗░██████╗░░░░█████╗░██████╗░░██████╗░
    ██╔════╝░██╔══██╗██║░░░░░░░░██║██╔════╝░░░██╔══██╗██╔══██╗██╔════╝░
    ██║░░██╗░██║░░██║██║░░░░░░░░██║╚█████╗░░░░██║░░██║██████╔╝██║░░██╗░
    ██║░░╚██╗██║░░██║██║░░░██╗░░██║░╚═══██╗░░░██║░░██║██╔══██╗██║░░╚██╗
    ╚██████╔╝██████╔╝██║██╗╚█████╔╝██████╔╝██╗╚█████╔╝██║░░██║╚██████╔╝
    ░╚═════╝░╚═════╝░╚═╝╚═╝░╚════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
                             v 2.0.24
A Script Redesigned by Parveen Bhadoo from GOIndex at https://www.npmjs.com/package/@googledrive/index */

// add multiple serviceaccounts as {}, {}, {}, random account will be selected by each time app is opened.
const serviceaccounts = [
{}
];
const randomserviceaccount = serviceaccounts[Math.floor(Math.random()*serviceaccounts.length)];
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
    "enable_cors_file_down": true,
    "enable_password_file_verify": true, // support for .password file
    "roots":[
      {
          "id": "root",
          "name": "Drive One",
          "protect_file_link": false,
          "auth": {"username":"password"} /* Remove double slash before "auth" to activate id password protection */
      },
      {
          "id": "root",
          "name": "Drive Two",
          "protect_file_link": false,
          "auth": {"username":"password", "username1":"password1"} /* Remove double slash before "auth" to activate id password protection */
      },
    ]};

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

const uiConfig = {
    "version": "2.0.24", // don't touch this one. get latest code using generator at https://bdi-generator.hashhackers.com
    "jsdelivr_cdn_src": "https://cdn.jsdelivr.net/npm/@googledrive/index", // If Project is Forked, then enter your GitHub repo
};

// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING
var gds = [];

function html(current_drive_order = 0, model = {}) {
    return `<!DOCTYPE html>
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
      </script>`;
};

const unauthorized = `
<!DOCTYPE html>
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
  </script>
`

const not_found = `
<!DOCTYPE html>
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
  </script>
`

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
        share_drive: 1,
        sub_folder: 2
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

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const region = request.headers.get('cf-ipcountry').toUpperCase();
    const asn_servers = request.cf.asn;
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

    function redirectToIndexPage() {
        return new Response('', {
            status: 301,
            headers: {
                'Location': `${url.origin}/0:/`
            }
        });
    }

    if (path == '/') return redirectToIndexPage();
    if (path.toLowerCase() == '/arc-sw.js') {
        return fetch("https://arc.io/arc-sw.js")
    } else if (path.toLowerCase() == '/admin') {
        return Response.redirect("https://www.npmjs.com/package/@googledrive/index", 301)
    } else if (blocked_region.includes(region)) {
        return new Response(asn_blocked, {
                headers: {
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
    } else if (blocked_asn.includes(asn_servers)) {
        return new Response(asn_blocked, {
                headers: {
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
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
            const obj = await this.getShareDriveObjById(root_id);
            this.root_type = obj ? types.share_drive : types.sub_folder;
        }
    }

    basicAuthResponse(request) {
        const auth = this.root.auth || '',
            _401 = new Response(unauthorized, {
                headers: {
                    'content-type': 'text/html;charset=UTF-8'
                },
                status: 401
            });
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
        return _401;
    }

    async down(id, range = '', inline = false) {
        let url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media`;
        let requestOption = await this.requestOption();
        requestOption.headers['Range'] = range;
        let res = await fetch(url, requestOption);
        if (res.ok) {
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
            const res = await fetch(`${uiConfig.jsdelivr_cdn_src}@${uiConfig.version}/assets/DownloadError.html`);
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
        params.q = `'${parent}' in parents and name = '${name}' and trashed = false`;
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
        params.q = `'${parent}' in parents and trashed = false AND name !='.password'`;
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

    async getShareDriveObjById(any_id) {
        if (!any_id) return null;
        if ('string' !== typeof any_id) return null;

        let url = `https://www.googleapis.com/drive/v3/drives/${any_id}`;
        let requestOption = await this.requestOption();
        let res = await fetch(url, requestOption);
        let obj = await res.json();
        if (obj && obj.id) return obj;

        return null
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
        params.q = `trashed = false AND name !='.password' AND (${name_search_str})`;
        params.fields = "nextPageToken, files(id, name, mimeType, size , modifiedTime)";
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
