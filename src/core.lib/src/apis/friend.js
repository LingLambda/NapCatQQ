const _0x54a974=_0x9db2;(function(_0x49fb47,_0x231607){const _0x32af71=_0x9db2,_0x27a806=_0x49fb47();while(!![]){try{const _0x5f0d9f=parseInt(_0x32af71(0x146))/0x1*(-parseInt(_0x32af71(0x148))/0x2)+-parseInt(_0x32af71(0x154))/0x3*(-parseInt(_0x32af71(0x165))/0x4)+parseInt(_0x32af71(0x14a))/0x5*(parseInt(_0x32af71(0x14d))/0x6)+parseInt(_0x32af71(0x15f))/0x7+-parseInt(_0x32af71(0x155))/0x8+-parseInt(_0x32af71(0x147))/0x9*(-parseInt(_0x32af71(0x151))/0xa)+-parseInt(_0x32af71(0x160))/0xb*(parseInt(_0x32af71(0x152))/0xc);if(_0x5f0d9f===_0x231607)break;else _0x27a806['push'](_0x27a806['shift']());}catch(_0x9c49bc){_0x27a806['push'](_0x27a806['shift']());}}}(_0x1df9,0xc4567));function _0x9db2(_0xee4340,_0x29a5d0){const _0x1df950=_0x1df9();return _0x9db2=function(_0x9db2ac,_0x10be7d){_0x9db2ac=_0x9db2ac-0x142;let _0x57c600=_0x1df950[_0x9db2ac];return _0x57c600;},_0x9db2(_0xee4340,_0x29a5d0);}import{BuddyListener,napCatCore}from'@/core';function _0x1df9(){const _0x307a67=['friendUid','RxHgX','mFHnR','handleFriendRequest','fHYEM','uin','XobqP','set','2433151Iawooo','2136222FtDjPE','pITkB','KFBlB','addListener','then','517612fQTQVg','approvalFriendRequest','buddyList','zDGYY','cytqX','获取好友列表完成','373nfsDdT','9OaJiZZ','5150lGhlAP','getFriends','55YdATjr','开始获取好友列表','vkcsH','337608IXDmWD','获取好友列表超时','getBuddyList','onBuddyListChange','12325550eUmias','12tODLsH','push','15ZkGfPn','7097880MTuJmR','getBuddyService'];_0x1df9=function(){return _0x307a67;};return _0x1df9();}import{logDebug}from'@/common/utils/log';import{uid2UinMap}from'@/core/data';import{randomUUID}from'crypto';const buddyChangeTasks=new Map(),buddyListener=new BuddyListener();buddyListener[_0x54a974(0x150)]=_0x18a6f1=>{const _0xef0c3c=_0x54a974,_0x104f9b={'pITkB':function(_0x4154ba,_0x332fea){return _0x4154ba(_0x332fea);}};for(const [_0x2c6990,_0xcf6570]of buddyChangeTasks){_0x104f9b[_0xef0c3c(0x161)](_0xcf6570,_0x18a6f1),buddyChangeTasks['delete'](_0x2c6990);}},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{const _0x5c87db=_0x9db2;napCatCore[_0x5c87db(0x163)](buddyListener);});},0x64);export class NTQQFriendApi{static async[_0x54a974(0x149)](_0x1f1279=![]){const _0x1faf7e=_0x54a974,_0x40f9d6={'vkcsH':function(_0x2d3385,_0x19af58,_0x42038d){return _0x2d3385(_0x19af58,_0x42038d);},'XobqP':_0x1faf7e(0x14b),'gMlLw':function(_0x2b6a67,_0x3d10e6){return _0x2b6a67(_0x3d10e6);},'zDGYY':_0x1faf7e(0x14e),'mFHnR':_0x1faf7e(0x145),'RxHgX':function(_0xdb390d,_0x25f0d8,_0xb6c586){return _0xdb390d(_0x25f0d8,_0xb6c586);},'yppTL':function(_0xad1cc2){return _0xad1cc2();}};return new Promise((_0x59fb0b,_0x4f26ff)=>{const _0x198d2d=_0x1faf7e,_0x21e2e0={'BtxKf':function(_0x205836,_0x4f624b){return _0x40f9d6['gMlLw'](_0x205836,_0x4f624b);},'fHYEM':_0x40f9d6[_0x198d2d(0x143)],'RxAVB':function(_0x1eb0f6,_0x356083){return _0x1eb0f6(_0x356083);},'KFBlB':function(_0x1f8df6,_0x1c1162,_0x42944b){const _0x410bea=_0x198d2d;return _0x40f9d6[_0x410bea(0x14c)](_0x1f8df6,_0x1c1162,_0x42944b);},'cytqX':_0x40f9d6[_0x198d2d(0x159)]};let _0x582f69=![];_0x40f9d6[_0x198d2d(0x158)](setTimeout,()=>{const _0x42e7ea=_0x198d2d;!_0x582f69&&(_0x21e2e0['BtxKf'](logDebug,_0x21e2e0[_0x42e7ea(0x15b)]),_0x21e2e0['RxAVB'](_0x4f26ff,_0x21e2e0[_0x42e7ea(0x15b)]));},0x1388);const _0x3ae3f8=[],_0x3de50c=_0x4c1cfb=>{const _0x30092c=_0x198d2d;for(const _0xe506d9 of _0x4c1cfb){for(const _0x38a629 of _0xe506d9[_0x30092c(0x142)]){_0x3ae3f8[_0x30092c(0x153)](_0x38a629),uid2UinMap[_0x38a629['uid']]=_0x38a629[_0x30092c(0x15c)];}}_0x582f69=!![],_0x21e2e0[_0x30092c(0x162)](logDebug,_0x21e2e0[_0x30092c(0x144)],_0x3ae3f8),_0x21e2e0['RxAVB'](_0x59fb0b,_0x3ae3f8);};buddyChangeTasks[_0x198d2d(0x15e)](_0x40f9d6['yppTL'](randomUUID),_0x3de50c),napCatCore['session'][_0x198d2d(0x156)]()[_0x198d2d(0x14f)](_0x1f1279)[_0x198d2d(0x164)](_0x3c1a15=>{const _0x3481ff=_0x198d2d;_0x40f9d6['vkcsH'](logDebug,_0x40f9d6[_0x3481ff(0x15d)],_0x3c1a15);});});}static async[_0x54a974(0x15a)](_0x358805,_0x34e58d){const _0x21129b=_0x54a974;napCatCore['session'][_0x21129b(0x156)]()?.[_0x21129b(0x166)]({'friendUid':_0x358805[_0x21129b(0x157)],'reqTime':_0x358805['reqTime'],'accept':_0x34e58d});}}