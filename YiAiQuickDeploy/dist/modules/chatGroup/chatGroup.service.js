'use strict';const _0x4b8236=_0x2506;(function(_0x1ec4fd,_0x342a8f){const _0x1ec41a=_0x2506,_0x341cd4=_0x1ec4fd();while(!![]){try{const _0x3ac397=parseInt(_0x1ec41a(0x1c5))/0x1+-parseInt(_0x1ec41a(0x1c3))/0x2*(parseInt(_0x1ec41a(0x1dd))/0x3)+-parseInt(_0x1ec41a(0x1ba))/0x4*(-parseInt(_0x1ec41a(0x1dc))/0x5)+-parseInt(_0x1ec41a(0x1d9))/0x6+-parseInt(_0x1ec41a(0x1ea))/0x7*(-parseInt(_0x1ec41a(0x1f1))/0x8)+parseInt(_0x1ec41a(0x1b8))/0x9+-parseInt(_0x1ec41a(0x1d6))/0xa;if(_0x3ac397===_0x342a8f)break;else _0x341cd4['push'](_0x341cd4['shift']());}catch(_0x33b238){_0x341cd4['push'](_0x341cd4['shift']());}}}(_0x30d6,0x9958b));function _0x30d6(){const _0x5a93a8=['__param','getGroupInfoFromId','ChatGroupService','create','undefined','isSticky','483624TLsrLD','find','删除失败！','decorate','del','chatGroupEntity','count','save','object','metadata','1463544jcWbQm','HttpException','9372zIQbdb','includes','error:\x20','应用对话名称不能修改哟！','affected','delAll','AppEntity','Repository','InjectRepository','99420RQKUFj','删除成功','1044733XOjANl','map','Injectable','getOwnPropertyDescriptor','./chatGroup.entity','getBaseConfig','当前应用已经开启了一个对话无需新建了！','__decorate','BAD_REQUEST','更新对话失败！','appEntity','appId','defineProperty','ChatGroupEntity','title','log','keyType','3986160rgeOex','DESC','user','5929392HjywQR','findOne','HttpStatus','895adBoIY','24ulWmRU','length','@nestjs/typeorm','非法操作、您在使用一个不存在的应用！','filter','parse','assign','modelsService','update','appLogo','ModelsService','typeorm','function','91jhJycG'];_0x30d6=function(){return _0x5a93a8;};return _0x30d6();}function _0x2506(_0x216e6d,_0x41afce){const _0x30d694=_0x30d6();return _0x2506=function(_0x25064d,_0x32a255){_0x25064d=_0x25064d-0x1b4;let _0x5465fa=_0x30d694[_0x25064d];return _0x5465fa;},_0x2506(_0x216e6d,_0x41afce);}var __decorate=this&&this[_0x4b8236(0x1cc)]||function(_0x4ce26b,_0x770b57,_0x3c243e,_0x326274){const _0x108a76=_0x4b8236;var _0x3075b8=arguments[_0x108a76(0x1de)],_0x473d61=_0x3075b8<0x3?_0x770b57:_0x326274===null?_0x326274=Object[_0x108a76(0x1c8)](_0x770b57,_0x3c243e):_0x326274,_0xe80571;if(typeof Reflect==='object'&&typeof Reflect[_0x108a76(0x1f4)]===_0x108a76(0x1e9))_0x473d61=Reflect['decorate'](_0x4ce26b,_0x770b57,_0x3c243e,_0x326274);else{for(var _0x3b7934=_0x4ce26b[_0x108a76(0x1de)]-0x1;_0x3b7934>=0x0;_0x3b7934--)if(_0xe80571=_0x4ce26b[_0x3b7934])_0x473d61=(_0x3075b8<0x3?_0xe80571(_0x473d61):_0x3075b8>0x3?_0xe80571(_0x770b57,_0x3c243e,_0x473d61):_0xe80571(_0x770b57,_0x3c243e))||_0x473d61;}return _0x3075b8>0x3&&_0x473d61&&Object[_0x108a76(0x1d1)](_0x770b57,_0x3c243e,_0x473d61),_0x473d61;},__metadata=this&&this['__metadata']||function(_0x248d75,_0x3e2b04){const _0x3b4ff9=_0x4b8236;if(typeof Reflect===_0x3b4ff9(0x1b6)&&typeof Reflect[_0x3b4ff9(0x1b7)]===_0x3b4ff9(0x1e9))return Reflect[_0x3b4ff9(0x1b7)](_0x248d75,_0x3e2b04);},__param=this&&this[_0x4b8236(0x1eb)]||function(_0x37da2a,_0x35ae51){return function(_0x2cef41,_0x27c3a4){_0x35ae51(_0x2cef41,_0x27c3a4,_0x37da2a);};};Object[_0x4b8236(0x1d1)](exports,'__esModule',{'value':!![]}),exports[_0x4b8236(0x1ed)]=void 0x0;const common_1=require('@nestjs/common'),chatGroup_entity_1=require(_0x4b8236(0x1c9)),typeorm_1=require(_0x4b8236(0x1df)),typeorm_2=require(_0x4b8236(0x1e8)),app_entity_1=require('../app/app.entity'),models_service_1=require('../models/models.service');let ChatGroupService=class ChatGroupService{constructor(_0x24ce2a,_0x3d63d0,_0xe539c5){const _0x3dcd45=_0x4b8236;this['chatGroupEntity']=_0x24ce2a,this['appEntity']=_0x3d63d0,this[_0x3dcd45(0x1e4)]=_0xe539c5;}async[_0x4b8236(0x1ee)](_0x4adfe6,_0x57d3ff){const _0x161ec3=_0x4b8236,{id:_0x424294}=_0x57d3ff[_0x161ec3(0x1d8)],{appId:_0x3b258f}=_0x4adfe6,_0x4b1400={'title':'新对话','userId':_0x424294};if(_0x3b258f){const _0xfa935b=await this['appEntity']['findOne']({'where':{'id':_0x3b258f}});if(!_0xfa935b)throw new common_1[(_0x161ec3(0x1b9))](_0x161ec3(0x1e0),common_1[_0x161ec3(0x1db)][_0x161ec3(0x1cd)]);else{const {status:_0x4809ad,name:_0x5ad6be}=_0xfa935b,_0x1aa8c7=await this[_0x161ec3(0x1f6)][_0x161ec3(0x1b4)]({'where':{'userId':_0x424294,'appId':_0x3b258f,'isDelete':![]}});if(_0x1aa8c7>0x0)throw new common_1['HttpException'](_0x161ec3(0x1cb),common_1[_0x161ec3(0x1db)][_0x161ec3(0x1cd)]);if(![0x1,0x3,0x4,0x5][_0x161ec3(0x1bb)](_0x4809ad))throw new common_1[(_0x161ec3(0x1b9))]('非法操作、您在使用一个未启用的应用！',common_1[_0x161ec3(0x1db)][_0x161ec3(0x1cd)]);_0x5ad6be&&(_0x4b1400[_0x161ec3(0x1d3)]=_0x5ad6be),_0x3b258f&&(_0x4b1400[_0x161ec3(0x1d0)]=_0x3b258f);}}const _0x507f7c=await this[_0x161ec3(0x1e4)][_0x161ec3(0x1ca)](_0x3b258f);_0x3b258f&&(_0x507f7c['appId']=_0x3b258f);if(!_0x507f7c)throw new common_1[(_0x161ec3(0x1b9))]('管理员未配置任何AI模型、请先联系管理员开通聊天模型配置！',common_1[_0x161ec3(0x1db)][_0x161ec3(0x1cd)]);return await this[_0x161ec3(0x1f6)][_0x161ec3(0x1b5)](Object[_0x161ec3(0x1e3)](Object['assign']({},_0x4b1400),{'config':JSON['stringify'](_0x507f7c)}));}async['query'](_0x12794a){const _0x45579a=_0x4b8236;try{const {id:_0x4c2e0f}=_0x12794a[_0x45579a(0x1d8)],_0x143008={'userId':_0x4c2e0f,'isDelete':![]},_0xcf410b=await this['chatGroupEntity'][_0x45579a(0x1f2)]({'where':_0x143008,'order':{'isSticky':_0x45579a(0x1d7),'id':_0x45579a(0x1d7)}}),_0x5e7c18=_0xcf410b[_0x45579a(0x1e1)](_0x3ee9ba=>_0x3ee9ba[_0x45579a(0x1d0)])[_0x45579a(0x1c6)](_0x738d8d=>_0x738d8d[_0x45579a(0x1d0)]),_0x4c54d2=await this[_0x45579a(0x1cf)][_0x45579a(0x1f2)]({'where':{'id':(0x0,typeorm_2['In'])(_0x5e7c18)}});return _0xcf410b[_0x45579a(0x1c6)](_0x2618c5=>{const _0x816a30=_0x45579a;var _0x48bbf8;return _0x2618c5[_0x816a30(0x1e6)]=(_0x48bbf8=_0x4c54d2[_0x816a30(0x1f2)](_0x57facb=>_0x57facb['id']===_0x2618c5[_0x816a30(0x1d0)]))===null||_0x48bbf8===void 0x0?void 0x0:_0x48bbf8['coverImg'],_0x2618c5;});}catch(_0x5abfdd){console[_0x45579a(0x1d4)](_0x45579a(0x1bc),_0x5abfdd);}}async[_0x4b8236(0x1e5)](_0x1a2b0f,_0x322f81){const _0x11cfa1=_0x4b8236,{title:_0x12ab73,isSticky:_0x4aebd3,groupId:_0x1c43dc,config:_0x3c5f88}=_0x1a2b0f,{id:_0x30de13}=_0x322f81[_0x11cfa1(0x1d8)],_0x1fc104=await this[_0x11cfa1(0x1f6)]['findOne']({'where':{'id':_0x1c43dc,'userId':_0x30de13}});if(!_0x1fc104)throw new common_1[(_0x11cfa1(0x1b9))]('请先选择一个对话或者新加一个对话再操作！',common_1[_0x11cfa1(0x1db)][_0x11cfa1(0x1cd)]);const {appId:_0x53ecb1}=_0x1fc104;if(_0x53ecb1&&!_0x12ab73)try{const _0x315f8f=JSON[_0x11cfa1(0x1e2)](_0x3c5f88);if(Number(_0x315f8f[_0x11cfa1(0x1d5)])!==0x1)throw new common_1[(_0x11cfa1(0x1b9))](_0x11cfa1(0x1bd),common_1[_0x11cfa1(0x1db)][_0x11cfa1(0x1cd)]);}catch(_0x3cdbea){}const _0x28bdcc={};_0x12ab73&&(_0x28bdcc[_0x11cfa1(0x1d3)]=_0x12ab73),typeof _0x4aebd3!==_0x11cfa1(0x1ef)&&(_0x28bdcc[_0x11cfa1(0x1f0)]=_0x4aebd3),_0x3c5f88&&(_0x28bdcc['config']=_0x3c5f88);const _0x5dc526=await this[_0x11cfa1(0x1f6)]['update']({'id':_0x1c43dc},_0x28bdcc);if(_0x5dc526['affected'])return!![];else throw new common_1[(_0x11cfa1(0x1b9))](_0x11cfa1(0x1ce),common_1[_0x11cfa1(0x1db)][_0x11cfa1(0x1cd)]);}async[_0x4b8236(0x1f5)](_0x13a60f,_0x27d8de){const _0xa0ef5f=_0x4b8236,{groupId:_0x4bfe21}=_0x13a60f,{id:_0x553820}=_0x27d8de['user'],_0x37cec9=await this[_0xa0ef5f(0x1f6)][_0xa0ef5f(0x1da)]({'where':{'id':_0x4bfe21,'userId':_0x553820}});if(!_0x37cec9)throw new common_1[(_0xa0ef5f(0x1b9))]('非法操作、您在删除一个非法资源！',common_1[_0xa0ef5f(0x1db)]['BAD_REQUEST']);const _0x52e005=await this[_0xa0ef5f(0x1f6)][_0xa0ef5f(0x1e5)]({'id':_0x4bfe21},{'isDelete':!![]});if(_0x52e005[_0xa0ef5f(0x1be)])return _0xa0ef5f(0x1c4);else throw new common_1[(_0xa0ef5f(0x1b9))](_0xa0ef5f(0x1f3),common_1[_0xa0ef5f(0x1db)]['BAD_REQUEST']);}async[_0x4b8236(0x1bf)](_0x370612){const _0x31f2ea=_0x4b8236,{id:_0x52a99f}=_0x370612['user'],_0x5de95e=await this[_0x31f2ea(0x1f6)][_0x31f2ea(0x1e5)]({'userId':_0x52a99f,'isSticky':![],'isDelete':![]},{'isDelete':!![]});if(_0x5de95e[_0x31f2ea(0x1be)])return _0x31f2ea(0x1c4);else throw new common_1[(_0x31f2ea(0x1b9))]('删除失败！',common_1[_0x31f2ea(0x1db)]['BAD_REQUEST']);}async[_0x4b8236(0x1ec)](_0x3c3411){const _0x3162ef=_0x4b8236;if(!_0x3c3411)return;return await this[_0x3162ef(0x1f6)][_0x3162ef(0x1da)]({'where':{'id':_0x3c3411}});}};ChatGroupService=__decorate([(0x0,common_1[_0x4b8236(0x1c7)])(),__param(0x0,(0x0,typeorm_1[_0x4b8236(0x1c2)])(chatGroup_entity_1[_0x4b8236(0x1d2)])),__param(0x1,(0x0,typeorm_1[_0x4b8236(0x1c2)])(app_entity_1[_0x4b8236(0x1c0)])),__metadata('design:paramtypes',[typeorm_2[_0x4b8236(0x1c1)],typeorm_2['Repository'],models_service_1[_0x4b8236(0x1e7)]])],ChatGroupService),exports[_0x4b8236(0x1ed)]=ChatGroupService;