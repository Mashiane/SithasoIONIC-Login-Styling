var _banano_si7login1=new banano_si7login1();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_si7login1_pghome=new banano_si7login1_pghome();var _banano_si7login1_pgindex=new banano_si7login1_pgindex();
/* App */
function banano_si7login1_pghome() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._name="home";this._title="Login";this._icon="home-outline";this._path="/";this._color="";this._home= new banano_sithasoionic7_shiontab();this._imgholder= new banano_sithasoionic7_shlabel();this._avatarimage= new banano_sithasoionic7_shimg();this._signcard= new banano_sithasoionic7_shlabel();this._lblsignin= new banano_sithasoionic7_shlabel();this._detailsholder= new banano_sithasoionic7_shlabel();this._email= new banano_sithasoionic7_shioninput();this._password= new banano_sithasoionic7_shioninput();this._logindiv= new banano_sithasoionic7_shlabel();this._btnsignin= new banano_sithasoionic7_shionbutton();this._lblforgot= new banano_sithasoionic7_shlabel();this._lblforgot1= new banano_sithasoionic7_shlabel();this._homecontentstyle= new banano_sithasoionic7_sithasostyle();this._passwordstyle= new banano_sithasoionic7_sithasostyle();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._home.initialize(_B,"home","home");_B._home.setparentid("mainpagetabs");_B._home.settitle("Login");_B._home.setpageicon("home-outline");_B._home.settab("home");_B._home.setmenuid("mainmenu");_B._home.sethasmenubutton(true);_B._home.setmenubuttonautohide(false);_B._home.setcontentionpadding(true);_B._home.setshowindrawerlist(true);_B._home.setdrawerlistname("mainmenulist");_B._home.settabbarname("mainpagetabbar");_B._home.addtoparent("mainpagetabs",_B._home._custprops);_B._name=_B._home.getpgname();_B._title=_B._home.getpgtitle();_B._icon=_B._home.getpgicon();_B._path=_B._home.getpgpath();_B._color=_B._home.getpgiconcolor();_B._imgholder.initialize(_B,"imgholder","imgholder");_B._imgholder.setparentid("homecontent");_B._imgholder.setsize("div");_B._imgholder.setdisplay("flex");_B._imgholder.setalignitems("ion-align-items-center");_B._imgholder.setjustifycontent("ion-justify-content-center");_B._imgholder.setrawstyles("width: 100px; z-index: 3; position: relative; top:95px; margin-left: 35%;   background: white; border-radius: 50%; border:solid; border-color: #488aff;");_B._imgholder.addtoparent("homecontent",_B._imgholder._custprops);_B._avatarimage.initialize(_B,"avatarimage","avatarimage");_B._avatarimage.setparentid("imgholder");_B._avatarimage.setsrc("./assets/avatar.jpg");_B._avatarimage.setheight("100px");_B._avatarimage.setwidth("100px");_B._avatarimage.setborderradius("50%");_B._avatarimage.setelevation("");_B._avatarimage.setrawstyles("position:relative");_B._avatarimage.addtoparent("imgholder",_B._avatarimage._custprops);_B._signcard.initialize(_B,"signcard","signcard");_B._signcard.setparentid("homecontent");_B._signcard.setsize("div");_B._signcard.setrawstyles("margin-top: 20%; border-radius: 13px; box-shadow: 0px 20px 20px rgba(0,0,0,0.08); background-color: #FFFFFF; z-index:2;");_B._signcard.addtoparent("homecontent",_B._signcard._custprops);_B._lblsignin.initialize(_B,"lblsignin","lblsignin");_B._lblsignin.setparentid("signcard");_B._lblsignin.setsize("h2");_B._lblsignin.settext("Sign In");_B._lblsignin.setionpadding(true);_B._lblsignin.setelevation("");_B._lblsignin.setdisplay("flex");_B._lblsignin.setalignitems("ion-align-items-center");_B._lblsignin.setjustifycontent("ion-justify-content-center");_B._lblsignin.setmarginaxytblr("a=?; x=?; y=?; t=30px; b=?; l=?; r=?");_B._lblsignin.addtoparent("signcard",_B._lblsignin._custprops);_B._detailsholder.initialize(_B,"detailsholder","detailsholder");_B._detailsholder.setparentid("signcard");_B._detailsholder.setsize("div");_B._detailsholder.setionpadding(true);_B._detailsholder.addtoparent("signcard",_B._detailsholder._custprops);_B._email.initialize(_B,"email","email");_B._email.setparentid("detailsholder");_B._email.setautofocus(true);_B._email.setfill("outline");_B._email.sethelpertext("Please enter your email");_B._email.setlabel("Email");_B._email.setlabelplacement("stacked");_B._email.setmode("md");_B._email.setplaceholder("abc@def.com");_B._email.setshape("round");_B._email.settypeof("email");_B._email.addtoparent("detailsholder",_B._email._custprops);_B._password.initialize(_B,"password","password");_B._password.setparentid("detailsholder");_B._password.setfill("outline");_B._password.sethelpertext("Please enter your password");_B._password.setlabel("Password");_B._password.setlabelplacement("stacked");_B._password.setmode("md");_B._password.setplaceholder("********");_B._password.setshape("round");_B._password.settypeof("password");_B._password.addtoparent("detailsholder",_B._password._custprops);_B._logindiv.initialize(_B,"logindiv","logindiv");_B._logindiv.setparentid("detailsholder");_B._logindiv.setsize("div");_B._logindiv.setelevation("");_B._logindiv.setmarginaxytblr("a=?; x=?; y=?; t=20px; b=?; l=?; r=?");_B._logindiv.setrawclasses("ion-padding-horizontal");_B._logindiv.addtoparent("detailsholder",_B._logindiv._custprops);_B._btnsignin.initialize(_B,"btnsignin","btnsignin");_B._btnsignin.setparentid("logindiv");_B._btnsignin.settext("Sign In");_B._btnsignin.setexpand("full");_B._btnsignin.setfill("solid");_B._btnsignin.setshape("round");_B._btnsignin.setrawstyles("--height: 50px; --background: linear-gradient(225deg, #b739f3 0%, #6850fb 100%); --margin-top: 5px;");_B._btnsignin.addtoparent("logindiv",_B._btnsignin._custprops);_B._lblforgot.initialize(_B,"lblforgot","lblforgot");_B._lblforgot.setparentid("detailsholder");_B._lblforgot.setsize("div");_B._lblforgot.setdisplay("flex");_B._lblforgot.setalignitems("ion-align-items-end");_B._lblforgot.setjustifycontent("ion-justify-content-end");_B._lblforgot.setrawclasses("ion-padding-bottom");_B._lblforgot.addtoparent("detailsholder",_B._lblforgot._custprops);_B._lblforgot1.initialize(_B,"lblforgot1","lblforgot1");_B._lblforgot1.setparentid("lblforgot");_B._lblforgot1.settext("Forgot Password?");_B._lblforgot1.addtoparent("lblforgot",_B._lblforgot1._custprops);_B._homecontentstyle.initialize(_B,"homecontentstyle","homecontentstyle");_B._homecontentstyle.settargetid("homecontent");_B._homecontentstyle.setrawstyles("--background: linear-gradient(225deg, #b739f3 0%, #6850fb 100%);");_B._homecontentstyle.addtoparent("homecontent",_B._homecontentstyle._custprops);_B._passwordstyle.initialize(_B,"passwordstyle","passwordstyle");_B._passwordstyle.settargetid("password");_B._passwordstyle.setmarginaxytblr("a=?; x=?; y=?; t=20px; b=?; l=?; r=?");_B._passwordstyle.addtoparent("homecontent",_B._passwordstyle._custprops);_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.getcolor=function() {if (_B==null) _B=this;return _B._color;};this.buildpage=function() {if (_B==null) _B=this;};this.btnsignin_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();};}function banano_si7login1_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._maincontent= new banano_sithasoionic7_shioncontent();this._mainpage= new banano_sithasoionic7_shionpage();this._mainmenu= new banano_sithasoionic7_shionmenu();this.initialize=async function() {if (_B==null) _B=this;_B._app.initialize(_B,"ios");_B._app.addapprouter();_B._maincontent.initialize(_B,"maincontent","maincontent");_B._maincontent.setparentid("app");_B._maincontent.setionpage(false);_B._maincontent.addtoparent("app",_B._maincontent._custprops);_B._mainpage.initialize(_B,"mainpage","mainpage");_B._mainpage.setparentid("maincontent");_B._mainpage.setroutername("");_B._mainpage.setpath("");_B._mainpage.setmenuid("mainmenu");_B._mainpage.sethastabs(true);_B._mainpage.addtoparent("maincontent",_B._mainpage._custprops);_B._mainmenu.initialize(_B,"mainmenu","mainmenu");_B._mainmenu.setparentid("maincontent");_B._mainmenu.setcontentid("mainpage");_B._mainmenu.setmenuid("mainmenu");_B._mainmenu.setswipegesture(true);_B._mainmenu.sethasheader(true);_B._mainmenu.settitle("SithasoIONIC7");_B._mainmenu.sethascontent(true);_B._mainmenu.sethaslist(true);_B._mainmenu.addtoparent("maincontent",_B._mainmenu._custprops);_B._app._pageviewer=_B._mainpage._pagetabsid;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);_banano_si7login1_pghome.show();};this.addpages=function() {if (_B==null) _B=this;_banano_si7login1_pghome.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;};this.addpagetabs=function() {if (_B==null) _B=this;};this.isauthenticated=function(_b) {if (_B==null) _B=this;_B._mainmenu.setvisible(_b);if (_B._mainpage.gethastabs()) {_B._mainpage._pagetabbar.setvisible(_b);}if (_B._mainpage.gethasfooter()) {_B._mainpage._pagefooter.setvisible(_b);}if (_B._mainpage.gethasheader()) {_B._mainpage._pageheader.setvisible(_b);}};this.app_ionroutedidchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteDidChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};this.app_ionroutewillchange=function(_e) {if (_B==null) _B=this;var _frompage,_topage;console.log("app_IonRouteWillChange");_frompage=_B._app.getnavigatingfrom(_e);_topage=_B._app.getnavigatingto(_e);console.log(_frompage);console.log(_topage);switch ("" + _topage) {case "" + "home":break;}};}function banano_si7login1() {var _B;this._appname="sithasoionic7login";this._apptitle="SithasoIONIC7 Login";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_si7login1_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B._path="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_fileobject() {var _B=this;_B._filename="";_B._filedate="";_B._filesize=0;_B._filetype="";_B._status="";_B._fullpath="";_B._filedateonly="";_B._fileok=false;_B._fo=null;_B._extension="";_B.initialize=function() {};}function banano_sithasoionic7_gmaplatlng() {var _B=this;_B._lat=0;_B._lng=0;_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B._value={};_B._isbuilt=false;_B._visible=false;_B._disabled=false;_B.initialize=function() {};}function banano_sithasoionic7_storage() {var _B=this;_B._usage=0;_B._quota=0;_B._percentused=0;_B._remaining=0;_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_si7login1['banano_online']==="function") {_banano_si7login1.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_si7login1['banano_offline']==="function") {_banano_si7login1.banano_offline();}});var BANversion=1701861031566;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_si7login1.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_si7login1['banano_visibilitychanged']==="function") {_banano_si7login1.banano_visibilitychanged(false);}} else {if (typeof _banano_si7login1['banano_visibilitychanged']==="function") {_banano_si7login1.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}window.addEventListener('resize', function(event) {if (typeof _banano_si7login1['banano_resized']==="function") {_banano_si7login1.banano_resized();}}, true);