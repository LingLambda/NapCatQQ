const _0x1fd5a1=_0x2ced;function _0x2ced(_0x55d8b8,_0x2decfe){const _0x5aafe7=_0x5aaf();return _0x2ced=function(_0x2cedc6,_0x3eacb5){_0x2cedc6=_0x2cedc6-0x1e2;let _0x433b01=_0x5aafe7[_0x2cedc6];return _0x433b01;},_0x2ced(_0x55d8b8,_0x2decfe);}(function(_0x3a4b3f,_0x53b8f3){const _0x5494b3=_0x2ced,_0x5ee359=_0x3a4b3f();while(!![]){try{const _0x20b260=-parseInt(_0x5494b3(0x22b))/0x1+-parseInt(_0x5494b3(0x1fc))/0x2+parseInt(_0x5494b3(0x1ef))/0x3*(-parseInt(_0x5494b3(0x1f9))/0x4)+-parseInt(_0x5494b3(0x23f))/0x5*(parseInt(_0x5494b3(0x1fa))/0x6)+parseInt(_0x5494b3(0x1ee))/0x7+parseInt(_0x5494b3(0x1e4))/0x8*(parseInt(_0x5494b3(0x1ed))/0x9)+parseInt(_0x5494b3(0x1e8))/0xa*(parseInt(_0x5494b3(0x213))/0xb);if(_0x20b260===_0x53b8f3)break;else _0x5ee359['push'](_0x5ee359['shift']());}catch(_0x4eaa24){_0x5ee359['push'](_0x5ee359['shift']());}}}(_0x5aaf,0x35629));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x2b245c}from'node:fs';import _0x587328 from'fluent-ffmpeg';import{NTQQFileApi}from'@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';import _0x461a14 from'./face_config.json';import*as _0x26ed7b from'node:path';import{SignMiniApp}from'../apis';function _0x5aaf(){const _0x425603=['hXURC','find','https://www.bilibili.com/','video','QDes','get','pic','getImageSize','CyfrH','markdown','uoDBP','end','zqzMw','62315qGhgmg','catch','qHjYY','iYkvK','dice','_0.png','Bot\x20Test','text','then','mSwTt','screenshots','2872cwKpJc','TEXT','width','fABjM','121150OrCIiS','dtBbs','语音转换失败,\x20请检查语音文件是否正常','copyFile','AniStickerId','324oUgzMX','891233NKtEeL','1461sGpEbm','sGcYD','AniStickerType','replace','MFACE','FACE','sep','PTTtL','获取视频信息失败','rps','488zFXzlK','162TbnMQc','file','624770Ntrczk','PTT','pRlxs','ARK','PIC','dirname','tHYnq','WoUif','NlHmi','sysface','jpg','https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png','TXehJ','HiRbx','SVyNl','uploadFile','string','Thumb','unlink','writeFile','cEuIp','mface','VIDEO','1034SlfUPi','xUVMt','reply','REPLY','文件异常，大小为0','LKPWu','RPS','[骰子]','AniStickerPackId','error','gJCuI','emoji','SSxCj','stringify','toString','YooJF','height','获取视频封面失败，使用默认封面','MARKDOWN','JUxmE','time','https://tianquan.gtimg.cn/qqAIAgent/item/7/square.png','face','[商城表情]','352088GRaOwi','QrnLf','wtKAi','FILE','gif','mp4','QSid'];_0x5aaf=function(){return _0x425603;};return _0x5aaf();}export const mFaceCache=new Map();export class SendMsgElementConstructor{static[_0x1fd5a1(0x246)](_0x341c9b){return{'elementType':ElementType['TEXT'],'elementId':'','textElement':{'content':_0x341c9b,'atType':AtType['notAt'],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x22e5e3,_0x5469c1,_0x570276,_0x2b8e4b){const _0x3e8e08=_0x1fd5a1;return{'elementType':ElementType[_0x3e8e08(0x1e5)],'elementId':'','textElement':{'content':'@'+_0x2b8e4b,'atType':_0x570276,'atUid':_0x22e5e3,'atTinyId':'','atNtUid':_0x5469c1}};}static[_0x1fd5a1(0x215)](_0x4f6acc,_0x3b2628,_0x25bc69,_0x571ebf){const _0xde6d21=_0x1fd5a1;return{'elementType':ElementType[_0xde6d21(0x216)],'elementId':'','replyElement':{'replayMsgSeq':_0x4f6acc,'replayMsgId':_0x3b2628,'senderUin':_0x25bc69,'senderUinStr':_0x571ebf}};}static async[_0x1fd5a1(0x238)](_0x1beddc,_0x32042f='',_0x4d5fb8=0x0){const _0x942201=_0x1fd5a1,_0x346061={'PTTtL':function(_0x307197,_0x30c15d){return _0x307197===_0x30c15d;},'WoUif':_0x942201(0x217),'DXRGm':function(_0x1e35a1,_0x4dc999){return _0x1e35a1(_0x4dc999);}},{md5:_0x16a556,fileName:_0x22593b,path:_0x1b2ef2,fileSize:_0x184de8}=await NTQQFileApi['uploadFile'](_0x1beddc,ElementType[_0x942201(0x200)],_0x4d5fb8);if(_0x346061[_0x942201(0x1f6)](_0x184de8,0x0))throw _0x346061[_0x942201(0x203)];const _0x5d52a8=await NTQQFileApi[_0x942201(0x239)](_0x1beddc),_0x1baed2={'md5HexStr':_0x16a556,'fileSize':_0x184de8[_0x942201(0x221)](),'picWidth':_0x5d52a8?.['width'],'picHeight':_0x5d52a8?.['height'],'fileName':_0x22593b,'sourcePath':_0x1b2ef2,'original':!![],'picType':_0x346061['DXRGm'](isGIF,_0x1beddc)?PicType[_0x942201(0x22f)]:PicType[_0x942201(0x206)],'picSubType':_0x4d5fb8,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x32042f};return{'elementType':ElementType[_0x942201(0x200)],'elementId':'','picElement':_0x1baed2};}static async[_0x1fd5a1(0x1fb)](_0x1b0d44,_0x2b9265='',_0x50dcf9=''){const _0x3fe85f=_0x1fd5a1,_0x206dc3={'qHjYY':function(_0x147f2e,_0x22276f){return _0x147f2e===_0x22276f;},'mSwTt':'文件异常，大小为0','SSxCj':function(_0x3f5a7d,_0x1347ac){return _0x3f5a7d||_0x1347ac;}},{md5:_0x1cd2f6,fileName:_0x4bac7b,path:_0x4c6783,fileSize:_0x3e530f}=await NTQQFileApi[_0x3fe85f(0x20b)](_0x1b0d44,ElementType[_0x3fe85f(0x22e)]);if(_0x206dc3[_0x3fe85f(0x241)](_0x3e530f,0x0))throw _0x206dc3[_0x3fe85f(0x1e2)];const _0x5ad6ac={'elementType':ElementType[_0x3fe85f(0x22e)],'elementId':'','fileElement':{'fileName':_0x206dc3[_0x3fe85f(0x21f)](_0x2b9265,_0x4bac7b),'folderId':_0x50dcf9,'filePath':_0x4c6783,'fileSize':_0x3e530f['toString']()}};return _0x5ad6ac;}static async[_0x1fd5a1(0x235)](_0x5e5020,_0x4a11a1='',_0x4ae753=''){const _0x4e0650=_0x1fd5a1,_0x547352={'xEwZM':function(_0x192625,_0x2ee6b0){return _0x192625(_0x2ee6b0);},'fABjM':function(_0x47aec9,_0x4c8763,_0x164da0){return _0x47aec9(_0x4c8763,_0x164da0);},'LKPWu':_0x4e0650(0x224),'pRlxs':_0x4e0650(0x23d),'hXURC':_0x4e0650(0x21c),'uoDBP':function(_0x3fa673,_0x14f125){return _0x3fa673+_0x14f125;},'tHYnq':function(_0x1ed25c,_0x5ea37f){return _0x1ed25c+_0x5ea37f;},'zqzMw':function(_0x7eca9,_0x256a5e){return _0x7eca9===_0x256a5e;},'gJCuI':_0x4e0650(0x230),'ecXey':function(_0xef1b5a,_0x244ac0,_0x428010){return _0xef1b5a(_0x244ac0,_0x428010);},'sGcYD':_0x4e0650(0x1f7),'LRZwN':function(_0x44437d,_0x3f6aa0){return _0x44437d+_0x3f6aa0;}},{fileName:_0xda0955,path:_0x46115e,fileSize:_0x3a512b,md5:_0x31f3af}=await NTQQFileApi[_0x4e0650(0x20b)](_0x5e5020,ElementType[_0x4e0650(0x212)]);if(_0x547352[_0x4e0650(0x23e)](_0x3a512b,0x0))throw _0x4e0650(0x217);let _0x5277c6=_0x46115e[_0x4e0650(0x1f2)](_0x26ed7b[_0x4e0650(0x1f5)]+'Ori'+_0x26ed7b[_0x4e0650(0x1f5)],_0x26ed7b['sep']+_0x4e0650(0x20d)+_0x26ed7b[_0x4e0650(0x1f5)]);_0x5277c6=_0x26ed7b[_0x4e0650(0x201)](_0x5277c6);let _0x6511ff={'width':0x780,'height':0x438,'time':0xf,'format':_0x547352[_0x4e0650(0x21d)],'size':_0x3a512b,'filePath':_0x5e5020};try{_0x6511ff=await getVideoInfo(_0x46115e);}catch(_0xd9e964){_0x547352['ecXey'](logError,_0x547352[_0x4e0650(0x1f0)],_0xd9e964);}const _0x466e75=new Promise((_0x4f9f7d,_0x5a895d)=>{const _0x29cc22=_0x4e0650,_0x1a9081=_0x31f3af+_0x29cc22(0x244),_0x568681=_0x26ed7b['join'](_0x5277c6,_0x1a9081);_0x547352['xEwZM'](_0x587328,_0x5e5020)['on'](_0x547352[_0x29cc22(0x1fe)],()=>{})['on'](_0x547352[_0x29cc22(0x232)],_0x562add=>{const _0x4d5e2a=_0x29cc22,_0x557301={'JUxmE':function(_0x5889b2,_0x4ddfa6){return _0x547352['xEwZM'](_0x5889b2,_0x4ddfa6);}};_0x547352[_0x4d5e2a(0x1e7)](logDebug,_0x547352[_0x4d5e2a(0x218)],_0x562add),_0x4ae753?_0x2b245c[_0x4d5e2a(0x1eb)](_0x4ae753,_0x568681)['then'](()=>{_0x4f9f7d(_0x568681);})[_0x4d5e2a(0x240)](_0x5a895d):_0x2b245c[_0x4d5e2a(0x20f)](_0x568681,defaultVideoThumb)[_0x4d5e2a(0x247)](()=>{const _0x1a2fe4=_0x4d5e2a;_0x557301[_0x1a2fe4(0x226)](_0x4f9f7d,_0x568681);})[_0x4d5e2a(0x240)](_0x5a895d);})[_0x29cc22(0x1e3)]({'timestamps':[0x0],'filename':_0x1a9081,'folder':_0x5277c6,'size':_0x547352[_0x29cc22(0x23c)](_0x547352[_0x29cc22(0x202)](_0x6511ff[_0x29cc22(0x1e6)],'x'),_0x6511ff[_0x29cc22(0x223)])})['on'](_0x547352[_0x29cc22(0x1fe)],()=>{_0x547352['xEwZM'](_0x4f9f7d,_0x568681);});}),_0x2d51d9=new Map(),_0x1705f7=await _0x466e75,_0x3e353f=(await _0x2b245c['stat'](_0x1705f7))['size'];_0x2d51d9['set'](0x0,_0x1705f7);const _0xb2a59b=await _0x547352['xEwZM'](calculateFileMD5,_0x1705f7),_0x2af2f1={'elementType':ElementType[_0x4e0650(0x212)],'elementId':'','videoElement':{'fileName':_0x4a11a1||_0xda0955,'filePath':_0x46115e,'videoMd5':_0x31f3af,'thumbMd5':_0xb2a59b,'fileTime':_0x6511ff[_0x4e0650(0x227)],'thumbPath':_0x2d51d9,'thumbSize':_0x3e353f,'thumbWidth':_0x6511ff['width'],'thumbHeight':_0x6511ff[_0x4e0650(0x223)],'fileSize':_0x547352['LRZwN']('',_0x3a512b)}};return _0x2af2f1;}static async['ptt'](_0x36c39b){const _0x52e93d=_0x1fd5a1,_0x44e7bf={'cEuIp':function(_0x3166d9,_0x1371a9){return _0x3166d9(_0x1371a9);},'xUVMt':_0x52e93d(0x1ea),'NlHmi':function(_0x7dc666,_0x66bfd){return _0x7dc666===_0x66bfd;},'iYkvK':'文件异常，大小为0','qagKQ':function(_0x497d1a,_0x54c40d){return _0x497d1a||_0x54c40d;}},{converted:_0x380395,path:_0x359883,duration:_0x1ddb00}=await _0x44e7bf[_0x52e93d(0x210)](encodeSilk,_0x36c39b);if(!_0x359883)throw _0x44e7bf[_0x52e93d(0x214)];const {md5:_0x9fe1a8,fileName:_0x158624,path:_0x5cf18f,fileSize:_0x46b783}=await NTQQFileApi[_0x52e93d(0x20b)](_0x359883,ElementType[_0x52e93d(0x1fd)]);if(_0x44e7bf[_0x52e93d(0x204)](_0x46b783,0x0))throw _0x44e7bf[_0x52e93d(0x242)];return _0x380395&&_0x2b245c[_0x52e93d(0x20e)](_0x359883)[_0x52e93d(0x247)](),{'elementType':ElementType[_0x52e93d(0x1fd)],'elementId':'','pttElement':{'fileName':_0x158624,'filePath':_0x5cf18f,'md5HexStr':_0x9fe1a8,'fileSize':_0x46b783,'duration':_0x44e7bf['qagKQ'](_0x1ddb00,0x1),'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static[_0x1fd5a1(0x229)](_0x19a22b){const _0x21eb20=_0x1fd5a1,_0x2ab1d8={'IBdPd':function(_0x43af59,_0x50e01a){return _0x43af59(_0x50e01a);},'sIiNS':function(_0x2c3b76,_0x48d887){return _0x2c3b76>=_0x48d887;}},_0x146277=_0x461a14[_0x21eb20(0x205)],_0x601e45=_0x461a14[_0x21eb20(0x21e)],_0x26d65c=_0x146277[_0x21eb20(0x233)](_0x5623fe=>_0x5623fe[_0x21eb20(0x231)]===_0x19a22b['toString']());_0x19a22b=_0x2ab1d8['IBdPd'](parseInt,_0x19a22b[_0x21eb20(0x221)]());let _0x342b33=0x1;return _0x2ab1d8['sIiNS'](_0x19a22b,0xde)&&(_0x342b33=0x2),_0x26d65c[_0x21eb20(0x1f1)]&&(_0x342b33=0x3),{'elementType':ElementType[_0x21eb20(0x1f4)],'elementId':'','faceElement':{'faceIndex':_0x19a22b,'faceType':_0x342b33,'faceText':_0x26d65c[_0x21eb20(0x236)],'stickerId':_0x26d65c[_0x21eb20(0x1ec)],'stickerType':_0x26d65c[_0x21eb20(0x1f1)],'packId':_0x26d65c[_0x21eb20(0x21b)],'sourceType':0x1}};}static[_0x1fd5a1(0x211)](_0x847603,_0x5b7ccd,_0xdf1013,_0x1e1f91){const _0x5ab891=_0x1fd5a1,_0x467f67={'wtKAi':_0x5ab891(0x22a)};return{'elementType':ElementType[_0x5ab891(0x1f3)],'marketFaceElement':{'emojiPackageId':_0x847603,'emojiId':_0x5b7ccd,'key':_0xdf1013,'faceName':_0x1e1f91||mFaceCache[_0x5ab891(0x237)](_0x5b7ccd)||_0x467f67[_0x5ab891(0x22d)]}};}static[_0x1fd5a1(0x243)](_0x4308e1){const _0x124e3c=_0x1fd5a1,_0xe45afc={'sgbjk':_0x124e3c(0x21a)};return{'elementType':ElementType[_0x124e3c(0x1f4)],'elementId':'','faceElement':{'faceIndex':FaceIndex['dice'],'faceType':FaceType[_0x124e3c(0x243)],'faceText':_0xe45afc['sgbjk'],'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0x1fd5a1(0x1f8)](_0x425269){const _0x52abde=_0x1fd5a1,_0x162238={'qCiLl':'[包剪锤]'};return{'elementType':ElementType['FACE'],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x52abde(0x219)],'faceText':_0x162238['qCiLl'],'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static['ark'](_0x52720a){const _0x5ee561=_0x1fd5a1,_0xfa1a1a={'YooJF':function(_0x26e5e3,_0x2c1598){return _0x26e5e3!==_0x2c1598;},'TXehJ':_0x5ee561(0x20c)};return _0xfa1a1a[_0x5ee561(0x222)](typeof _0x52720a,_0xfa1a1a[_0x5ee561(0x208)])&&(_0x52720a=JSON[_0x5ee561(0x220)](_0x52720a)),{'elementType':ElementType[_0x5ee561(0x1ff)],'elementId':'','arkElement':{'bytesData':_0x52720a,'linkInfo':null,'subElementType':null}};}static[_0x1fd5a1(0x23b)](_0x443b14){const _0x153365=_0x1fd5a1;return{'elementType':ElementType[_0x153365(0x225)],'elementId':'','markdownElement':{'content':_0x443b14}};}static async['miniapp'](){const _0x451a16=_0x1fd5a1,_0x4e93ce={'QrnLf':function(_0x1253ec,_0x3591a1){return _0x1253ec(_0x3591a1);},'dtBbs':'Bot\x20Test','SVyNl':_0x451a16(0x228),'CyfrH':_0x451a16(0x234),'HiRbx':_0x451a16(0x207)};let _0x560306=await _0x4e93ce[_0x451a16(0x22c)](SignMiniApp,{'prompt':_0x4e93ce[_0x451a16(0x1e9)],'title':_0x4e93ce[_0x451a16(0x1e9)],'preview':_0x4e93ce[_0x451a16(0x20a)],'jumpUrl':_0x4e93ce[_0x451a16(0x23a)],'tag':_0x4e93ce[_0x451a16(0x1e9)],'tagIcon':_0x451a16(0x207),'source':_0x451a16(0x245),'sourcelogo':_0x4e93ce[_0x451a16(0x209)]});return{'elementType':ElementType[_0x451a16(0x1ff)],'elementId':'','arkElement':{'bytesData':_0x560306,'linkInfo':null,'subElementType':null}};}}