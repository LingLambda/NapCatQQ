const _0x4ddfe1=_0x282d;(function(_0xb13515,_0x3275f7){const _0x461c50=_0x282d,_0x659cfb=_0xb13515();while(!![]){try{const _0x4c9a3a=parseInt(_0x461c50(0x114))/0x1*(-parseInt(_0x461c50(0x10a))/0x2)+-parseInt(_0x461c50(0x11e))/0x3*(-parseInt(_0x461c50(0x10d))/0x4)+parseInt(_0x461c50(0x10f))/0x5*(-parseInt(_0x461c50(0x109))/0x6)+-parseInt(_0x461c50(0x11d))/0x7*(parseInt(_0x461c50(0x10b))/0x8)+parseInt(_0x461c50(0x110))/0x9+parseInt(_0x461c50(0x10c))/0xa+-parseInt(_0x461c50(0x11a))/0xb*(-parseInt(_0x461c50(0x11b))/0xc);if(_0x4c9a3a===_0x3275f7)break;else _0x659cfb['push'](_0x659cfb['shift']());}catch(_0x283f9d){_0x659cfb['push'](_0x659cfb['shift']());}}}(_0x2dc1,0x68bf6));import{logError}from'@/common/utils/log';function _0x2dc1(){const _0x1b695c=['704784LXDPrF','expired_time','635sKwLei','1250667lMXlcA','获取rkey失败','serverUrl','refreshRkey','2177jiIFps','http://napcat-sign.wumiao.wang:2082/rkey','njexn','nYTzB','GET','HttpGetJson','2354PiPswV','42144yfuZDM','jSiaN','2198147iwhkwg','3oYerfx','rkeyData','getRkey','isExpired','getTime','qiQBv','2118XbkysD','738amerUu','8blKemm','5244840DVUcLU'];_0x2dc1=function(){return _0x1b695c;};return _0x2dc1();}import{RequestUtil}from'@/common/utils/request';function _0x282d(_0x49b8e6,_0x4af628){const _0x2dc106=_0x2dc1();return _0x282d=function(_0x282dbb,_0x22a77b){_0x282dbb=_0x282dbb-0x109;let _0x4740c0=_0x2dc106[_0x282dbb];return _0x4740c0;},_0x282d(_0x49b8e6,_0x4af628);}class RkeyManager{[_0x4ddfe1(0x112)]='';[_0x4ddfe1(0x11f)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x4aeebc){const _0x2857a3=_0x4ddfe1;this[_0x2857a3(0x112)]=_0x4aeebc;}async[_0x4ddfe1(0x120)](){const _0x23387f=_0x4ddfe1,_0x3a7256={'njexn':function(_0x2da2d6,_0x1623ff,_0x7f6b3d){return _0x2da2d6(_0x1623ff,_0x7f6b3d);},'qiQBv':_0x23387f(0x111)};if(this['isExpired']())try{await this[_0x23387f(0x113)]();}catch(_0x423c9c){_0x3a7256[_0x23387f(0x116)](logError,_0x3a7256[_0x23387f(0x123)],_0x423c9c);}return this[_0x23387f(0x11f)];}[_0x4ddfe1(0x121)](){const _0x348292=_0x4ddfe1,_0x5663ec={'jSiaN':function(_0x38b829,_0x195ac0){return _0x38b829/_0x195ac0;},'nYTzB':function(_0x25aad6,_0x4c7034){return _0x25aad6>_0x4c7034;}},_0x139f87=_0x5663ec[_0x348292(0x11c)](new Date()[_0x348292(0x122)](),0x3e8);return _0x5663ec[_0x348292(0x117)](_0x139f87,this[_0x348292(0x11f)][_0x348292(0x10e)]);}async['refreshRkey'](){const _0x486807=_0x4ddfe1;this[_0x486807(0x11f)]=await RequestUtil[_0x486807(0x119)](this[_0x486807(0x112)],_0x486807(0x118));}}export const rkeyManager=new RkeyManager(_0x4ddfe1(0x115));