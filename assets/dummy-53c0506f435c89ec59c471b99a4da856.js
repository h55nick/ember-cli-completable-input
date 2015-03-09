define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,a,t,n,s){"use strict";a["default"].MODEL_FACTORY_INJECTIONS=!0;var r=a["default"].Application.extend({modulePrefix:s["default"].modulePrefix,podModulePrefix:s["default"].podModulePrefix,Resolver:t["default"]});n["default"](r,s["default"].modulePrefix),e["default"]=r}),define("dummy/components/completable-input",["exports","ember","ember-cli-completable-input/components/completable-input"],function(e,a,t){"use strict";e["default"]=t["default"].extend({})}),define("dummy/controllers/application",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Controller.extend({isHome:function(){return"home"===this.get("currentRouteName")}.property("currentRouteName"),isDebugDemo:function(){return"debug-demo"===this.get("currentRouteName")}.property("currentRouteName"),isWithStyle:function(){return"with-style"===this.get("currentRouteName")}.property("currentRouteName")})}),define("dummy/controllers/debug-demo",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Controller.extend({potentialComplements:[],completableValue:null,minForComplement:3,complements:"Afghanistan,    Albania,    Algeria,    Andorra,    Angola,    Antigua & Deps,    Argentina,    Armenia,    Australia,    Austria,    Azerbaijan,    Bahamas,    Bahrain,    Bangladesh,    Barbados,    Belarus,    Belgium,    Belize,    Benin,    Bhutan,    Bolivia,    Bosnia Herzegovina,    Botswana,    Brazil,    Brunei,    Bulgaria,    Burkina,    Burundi,    Cambodia,    Cameroon,    Canada,    Cape Verde,    Central African Rep,    Chad,    Chile,    China,    Colombia,    Comoros,    Congo,    Congo {Democratic Rep},    Costa Rica,    Croatia,    Cuba,    Cyprus,    Czech Republic,    Denmark,    Djibouti,    Dominica,    Dominican Republic,    East Timor,    Ecuador,    Egypt,    El Salvador,    Equatorial Guinea,    Eritrea,    Estonia,    Ethiopia,    Fiji,    Finland,    France,    Gabon,    Gambia,    Georgia,    Germany,    Ghana,    Greece,    Grenada,    Guatemala,    Guinea,    Guinea-Bissau,    Guyana,    Haiti,    Honduras,    Hungary,    Iceland,    India,    Indonesia,    Iran,    Iraq,    Ireland {Republic},    Israel,    Italy,    Ivory Coast,    Jamaica,    Japan,    Jordan,    Kazakhstan,    Kenya,    Kiribati,    Korea North,    Korea South,    Kosovo,    Kuwait,    Kyrgyzstan,    Laos,    Latvia,    Lebanon,    Lesotho,    Liberia,    Libya,    Liechtenstein,    Lithuania,    Luxembourg,    Macedonia,    Madagascar,    Malawi,    Malaysia,    Maldives,    Mali,    Malta,    Marshall Islands,    Mauritania,    Mauritius,    Mexico,    Micronesia,    Moldova,    Monaco,    Mongolia,    Montenegro,    Morocco,    Mozambique,    Myanmar (Burma),    Namibia,    Nauru,    Nepal,    Netherlands,    New Zealand,    Nicaragua,    Niger,    Nigeria,    Norway,    Oman,    Pakistan,    Palau,    Panama,    Papua New Guinea,    Paraguay,    Peru,    Philippines,    Poland,    Portugal,    Qatar,    Romania,    Russian Federation,    Rwanda,    St Kitts & Nevis,    St Lucia,    Saint Vincent & the Grenadines,    Samoa,    San Marino,    Sao Tome & Principe,    Saudi Arabia,    Senegal,    Serbia,    Seychelles,    Sierra Leone,    Singapore,    Slovakia,    Slovenia,    Solomon Islands,    Somalia,    South Africa,    South Sudan,    Spain,    Sri Lanka,    Sudan,    Suriname,    Swaziland,    Sweden,    Switzerland,    Syria,    Taiwan,    Tajikistan,    Tanzania,    Thailand,    Togo,    Tonga,    Trinidad & Tobago,    Tunisia,    Turkey,    Turkmenistan,    Tuvalu,    Uganda,    Ukraine,    United Arab Emirates,    United Kingdom,    United States,    Uruguay,    Uzbekistan,    Vanuatu,    Vatican City,    Venezuela,    Vietnam,    Yemen,    Zambia,    Zimbabwe".split(",").map(function(e){return e.trim()}),possibleComplements:function(e,a){var t;return arguments.length>1&&(t=a.replace(",","\n").split("\n"),this.set("complements",t)),t=this.get("complements"),t.join("\n")}.property("complements"),currentCompletionObserver:function(){a["default"].Logger.info("currentCompletion -> ",this.get("currentCompletion"))}.observes("currentCompletion").on("init"),actions:{completableEnterPressed:function(){a["default"].Logger.debug("Enter was pressed on the completable input!"),a["default"].Logger.debug("the current Completion is -> ",this.get("currentCompletion")),a["default"].Logger.debug("the completableValue is -> ",this.get("completableValue"))}}})}),define("dummy/controllers/home",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Controller.extend({mdText:function(){return markdown.toHTML(this.get("model"))}.property("model"),complements:"Afghanistan,    Albania,    Algeria,    Andorra,    Angola,    Antigua & Deps,    Argentina,    Armenia,    Australia,    Austria,    Azerbaijan,    Bahamas,    Bahrain,    Bangladesh,    Barbados,    Belarus,    Belgium,    Belize,    Benin,    Bhutan,    Bolivia,    Bosnia Herzegovina,    Botswana,    Brazil,    Brunei,    Bulgaria,    Burkina,    Burundi,    Cambodia,    Cameroon,    Canada,    Cape Verde,    Central African Rep,    Chad,    Chile,    China,    Colombia,    Comoros,    Congo,    Congo {Democratic Rep},    Costa Rica,    Croatia,    Cuba,    Cyprus,    Czech Republic,    Denmark,    Djibouti,    Dominica,    Dominican Republic,    East Timor,    Ecuador,    Egypt,    El Salvador,    Equatorial Guinea,    Eritrea,    Estonia,    Ethiopia,    Fiji,    Finland,    France,    Gabon,    Gambia,    Georgia,    Germany,    Ghana,    Greece,    Grenada,    Guatemala,    Guinea,    Guinea-Bissau,    Guyana,    Haiti,    Honduras,    Hungary,    Iceland,    India,    Indonesia,    Iran,    Iraq,    Ireland {Republic},    Israel,    Italy,    Ivory Coast,    Jamaica,    Japan,    Jordan,    Kazakhstan,    Kenya,    Kiribati,    Korea North,    Korea South,    Kosovo,    Kuwait,    Kyrgyzstan,    Laos,    Latvia,    Lebanon,    Lesotho,    Liberia,    Libya,    Liechtenstein,    Lithuania,    Luxembourg,    Macedonia,    Madagascar,    Malawi,    Malaysia,    Maldives,    Mali,    Malta,    Marshall Islands,    Mauritania,    Mauritius,    Mexico,    Micronesia,    Moldova,    Monaco,    Mongolia,    Montenegro,    Morocco,    Mozambique,    Myanmar (Burma),    Namibia,    Nauru,    Nepal,    Netherlands,    New Zealand,    Nicaragua,    Niger,    Nigeria,    Norway,    Oman,    Pakistan,    Palau,    Panama,    Papua New Guinea,    Paraguay,    Peru,    Philippines,    Poland,    Portugal,    Qatar,    Romania,    Russian Federation,    Rwanda,    St Kitts & Nevis,    St Lucia,    Saint Vincent & the Grenadines,    Samoa,    San Marino,    Sao Tome & Principe,    Saudi Arabia,    Senegal,    Serbia,    Seychelles,    Sierra Leone,    Singapore,    Slovakia,    Slovenia,    Solomon Islands,    Somalia,    South Africa,    South Sudan,    Spain,    Sri Lanka,    Sudan,    Suriname,    Swaziland,    Sweden,    Switzerland,    Syria,    Taiwan,    Tajikistan,    Tanzania,    Thailand,    Togo,    Tonga,    Trinidad & Tobago,    Tunisia,    Turkey,    Turkmenistan,    Tuvalu,    Uganda,    Ukraine,    United Arab Emirates,    United Kingdom,    United States,    Uruguay,    Uzbekistan,    Vanuatu,    Vatican City,    Venezuela,    Vietnam,    Yemen,    Zambia,    Zimbabwe".split(",").map(function(e){return e.trim()}),actions:{completableEnterPressed:function(){a["default"].Logger.debug("Enter was pressed on the completable input!"),a["default"].Logger.debug("the current Completion is -> ",this.get("currentCompletion")),a["default"].Logger.debug("the completableValue is -> ",this.get("completableValue"))}}})}),define("dummy/controllers/with-style",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Controller.extend({mdText:function(){return markdown.toHTML(this.get("model"))}.property("model"),complements:"EmberAddons, EmberJS, Ember-cli, Discourse".split(",").map(function(e){return e.trim()}),actions:{completableEnterPressed:function(){a["default"].Logger.debug("Enter was pressed on the completable input!"),a["default"].Logger.debug("the current Completion is -> ",this.get("currentCompletion")),a["default"].Logger.debug("the completableValue is -> ",this.get("completableValue"))}}})}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,a,t){"use strict";var n=t["default"].String.classify;e["default"]={name:"App Version",initialize:function(e,s){var r=n(s.toString());t["default"].libraries.register(r,a["default"].APP.version)}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,a,t){"use strict";function n(e,n){var s=a["default"].String.classify(t["default"].modulePrefix);t["default"].exportApplicationGlobal&&!window[s]&&(window[s]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,a,t){"use strict";var n=a["default"].Router.extend({location:t["default"].locationType});n.map(function(){this.route("home",{path:"/"}),this.route("with-style"),this.route("debug-demo")}),e["default"]=n}),define("dummy/routes/debug-demo",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Route.extend({})}),define("dummy/routes/home",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Route.extend({model:function(){return a["default"].$.ajax("./README.md")}})}),define("dummy/routes/with-style",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Route.extend({model:function(){return a["default"].$.ajax("./with-style.md")}})}),define("dummy/templates/application",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Handlebars.template(function(e,t,n,s,r){function i(e,a){a.buffer.push("Home")}function o(e,a){a.buffer.push("Debug / demo")}function l(e,a){a.buffer.push("With style")}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a["default"].Handlebars.helpers),r=r||{};var u,p,m,c="",d=this.escapeExpression,h=this,f=n.helperMissing;return r.buffer.push('<nav class="navbar navbar-default">\r\n  <div class="container-fluid">\r\n    <div class="navbar-header">\r\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\r\n        <span class="sr-only">Toggle navigation</span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n        <span class="icon-bar"></span>\r\n      </button>\r\n      <a class="navbar-brand" href="#">Completable-input</a>\r\n    </div>\r\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n      <ul class="nav navbar-nav">\r\n        <li '),r.buffer.push(d(n["bind-attr"].call(t,{hash:{"class":"isHome:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:r}))),r.buffer.push(">\r\n          "),p=n["link-to"]||t&&t["link-to"],m={hash:{},hashTypes:{},hashContexts:{},inverse:h.noop,fn:h.program(1,i,r),contexts:[t],types:["STRING"],data:r},u=p?p.call(t,"home",m):f.call(t,"link-to","home",m),(u||0===u)&&r.buffer.push(u),r.buffer.push("\r\n        </li>\r\n        <li "),r.buffer.push(d(n["bind-attr"].call(t,{hash:{"class":"isDebugDemo:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:r}))),r.buffer.push(">\r\n          "),p=n["link-to"]||t&&t["link-to"],m={hash:{},hashTypes:{},hashContexts:{},inverse:h.noop,fn:h.program(3,o,r),contexts:[t],types:["STRING"],data:r},u=p?p.call(t,"debug-demo",m):f.call(t,"link-to","debug-demo",m),(u||0===u)&&r.buffer.push(u),r.buffer.push("\r\n        </li>\r\n        <li "),r.buffer.push(d(n["bind-attr"].call(t,{hash:{"class":"isWithStyle:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:r}))),r.buffer.push(">\r\n          "),p=n["link-to"]||t&&t["link-to"],m={hash:{},hashTypes:{},hashContexts:{},inverse:h.noop,fn:h.program(5,l,r),contexts:[t],types:["STRING"],data:r},u=p?p.call(t,"with-style",m):f.call(t,"link-to","with-style",m),(u||0===u)&&r.buffer.push(u),r.buffer.push('\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n<div class="container">\r\n  '),u=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(u||0===u)&&r.buffer.push(u),r.buffer.push("\r\n</div>\r\n"),c})}),define("dummy/templates/components/completable-input",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Handlebars.template(function(e,t,n,s,r){function i(e,a){var t,s="";return a.buffer.push("\r\n      <div "),a.buffer.push(m(n["bind-attr"].call(e,{hash:{"class":":completion-candidate candidate.isActive:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},contexts:[],types:[],data:a}))),a.buffer.push("\r\n        "),a.buffer.push(m(n.action.call(e,"selectComplement","candidate",{hash:{},hashTypes:{},hashContexts:{},contexts:[e,e],types:["STRING","ID"],data:a}))),a.buffer.push(">\r\n        "),t=n._triageMustache.call(e,"candidate.value",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:a}),(t||0===t)&&a.buffer.push(t),a.buffer.push("\r\n      </div>\r\n    "),s}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a["default"].Handlebars.helpers),r=r||{};var o,l,u,p="",m=this.escapeExpression,c=n.helperMissing,d=this;return r.buffer.push(m((l=n.input||t&&t.input,u={hash:{type:"text","class":"inputClassNames",value:"value",placeholder:"placeholder",enter:"enterPressed"},hashTypes:{type:"STRING","class":"ID",value:"ID",placeholder:"ID",enter:"STRING"},hashContexts:{type:t,"class":t,value:t,placeholder:t,enter:t},contexts:[],types:[],data:r},l?l.call(t,u):c.call(t,"input",u)))),r.buffer.push("\r\n\r\n\r\n\r\n  <div "),r.buffer.push(m(n["bind-attr"].call(t,{hash:{"class":":completion-list showCompletions:show:hide"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:r}))),r.buffer.push('>\r\n  <!--<div class="completion-list">-->\r\n    '),o=n.each.call(t,"candidate","in","potentialComplements",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,i,r),contexts:[t,t,t],types:["ID","ID","ID"],data:r}),(o||0===o)&&r.buffer.push(o),r.buffer.push("\r\n  </div>\r\n\r\n"),p})}),define("dummy/templates/debug-demo",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Handlebars.template(function(e,t,n,s,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a["default"].Handlebars.helpers),r=r||{};var i,o,l,u="",p=n.helperMissing,m=this.escapeExpression;return r.buffer.push('<h1> welcome to the demo/test page! </h1>\n\n\n<fieldset>\n  <legend>The actual component</legend>\n  <p class="text-center">\n    Enter something:\n    '),r.buffer.push(m((o=n["completable-input"]||t&&t["completable-input"],l={hash:{value:"completableValue",placeholder:"start typing and completion will appear",complements:"complements",selectedCompletion:"currentCompletion",enter:"completableEnterPressed",minForComplement:"minForComplement",potentialComplements:"potentialComplements",inFocus:"inFocus",activeComplement:"activeComplement"},hashTypes:{value:"ID",placeholder:"STRING",complements:"ID",selectedCompletion:"ID",enter:"STRING",minForComplement:"ID",potentialComplements:"ID",inFocus:"ID",activeComplement:"ID"},hashContexts:{value:t,placeholder:t,complements:t,selectedCompletion:t,enter:t,minForComplement:t,potentialComplements:t,inFocus:t,activeComplement:t},contexts:[],types:[],data:r},o?o.call(t,l):p.call(t,"completable-input",l)))),r.buffer.push('\n  </p>\n</fieldset>\n\n\n<form>\n  <fieldset>\n    <legend>parameters</legend>\n    <label for="minForComplement">Minimal number of character before showing up completions?</label><br/>\n    '),r.buffer.push(m((o=n.input||t&&t.input,l={hash:{type:"number",min:0,value:"minForComplement",id:"minForComplement"},hashTypes:{type:"STRING",min:"INTEGER",value:"ID",id:"STRING"},hashContexts:{type:t,min:t,value:t,id:t},contexts:[],types:[],data:r},o?o.call(t,l):p.call(t,"input",l)))),r.buffer.push('<br/>\n    <label for="possibleComplements">Place complements here, separate by a comma or a new line (pre-filled by the list of countries from <a href="http://openconcept.ca/blog/mgifford/text-list-all-countries-world">here</a>)</label><br/>\n    '),r.buffer.push(m((o=n.textarea||t&&t.textarea,l={hash:{value:"possibleComplements",rows:8,id:"possibleComplements"},hashTypes:{value:"ID",rows:"INTEGER",id:"STRING"},hashContexts:{value:t,rows:t,id:t},contexts:[],types:[],data:r},o?o.call(t,l):p.call(t,"textarea",l)))),r.buffer.push("<br/>\n  </fieldset>\n</form>\n\n<div>\n  <fieldset>\n    <legend>debug zone</legend>\n\n    <p>\n      showCompletions? "),i=n._triageMustache.call(t,"showCompletions",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push(" <br/>\n      potentialComplements.length?  "),i=n._triageMustache.call(t,"potentialComplements.length",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push(" <br/>\n      inFocus? "),i=n._triageMustache.call(t,"inFocus",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("<br/>\n      activeComplement? "),i=n._triageMustache.call(t,"activeComplement.value",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\n    </p>\n  </fieldset>\n</div>\n\n\n\n"),u})}),define("dummy/templates/home",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Handlebars.template(function(e,t,n,s,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a["default"].Handlebars.helpers),r=r||{};var i,o,l,u="",p=this.escapeExpression,m=n.helperMissing;return r.buffer.push("<div>\r\n  "),r.buffer.push(p(n._triageMustache.call(t,"mdText",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:t},contexts:[t],types:["ID"],data:r}))),r.buffer.push('\r\n</div>\r\n\r\n<p class="center">\r\n  Pick your country:\r\n  '),r.buffer.push(p((o=n["completable-input"]||t&&t["completable-input"],l={hash:{value:"completableValue",placeholder:"start typing and completion will appear",complements:"complements",enter:"completableEnterPressed",minForComplement:3,selectedCompletion:"selectedCompletion"},hashTypes:{value:"ID",placeholder:"STRING",complements:"ID",enter:"STRING",minForComplement:"INTEGER",selectedCompletion:"ID"},hashContexts:{value:t,placeholder:t,complements:t,enter:t,minForComplement:t,selectedCompletion:t},contexts:[],types:[],data:r},o?o.call(t,l):m.call(t,"completable-input",l)))),r.buffer.push("\r\n  <br/>\r\n  Value: "),i=n._triageMustache.call(t,"completableValue",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push(" <br/>\r\n  Selected completion: "),i=n._triageMustache.call(t,"selectedCompletion",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:r}),(i||0===i)&&r.buffer.push(i),r.buffer.push("\r\n</p>\r\n\r\n"),u})}),define("dummy/templates/with-style",["exports","ember"],function(e,a){"use strict";e["default"]=a["default"].Handlebars.template(function(e,t,n,s,r){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a["default"].Handlebars.helpers),r=r||{};var i,o,l="",u=n.helperMissing,p=this.escapeExpression;return r.buffer.push('\r\n<p class="custom text-center">\r\n  Select something cool:\r\n  '),r.buffer.push(p((i=n["completable-input"]||t&&t["completable-input"],o={hash:{placeholder:"start typing and completion will appear",complements:"complements",enter:"completableEnterPressed",minForComplement:0},hashTypes:{placeholder:"STRING",complements:"ID",enter:"STRING",minForComplement:"INTEGER"},hashContexts:{placeholder:t,complements:t,enter:t,minForComplement:t},contexts:[],types:[],data:r},i?i.call(t,o):u.call(t,"completable-input",o)))),r.buffer.push('\r\n</p>\r\n\r\n<!--<div class="jumbotron">-->\r\n  '),r.buffer.push(p(n._triageMustache.call(t,"mdText",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:t},contexts:[t],types:["ID"],data:r}))),r.buffer.push("\r\n<!--</div>-->\r\n\r\n\r\n\r\n"),l})}),define("dummy/config/environment",["ember"],function(e){var a="dummy";try{var t=a+"/config/environment",n=e["default"].$('meta[name="'+t+'"]').attr("content"),s=JSON.parse(unescape(n));return{"default":s}}catch(r){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-completable-input",version:"0.1.1.af4f4388"});