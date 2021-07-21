window.__require=function e(t,o,n){function r(i,p){if(!o[i]){if(!t[i]){var l=i.split("/");if(l=l[l.length-1],!t[l]){var a="function"==typeof __require&&__require;if(!p&&a)return a(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+i+"'")}}var s=o[i]={exports:{}};t[i][0].call(s.exports,function(e){return r(t[i][1][e]||e)},s,s.exports,e,t,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({BlockMgr:[function(e,t,o){"use strict";cc._RF.push(t,"ae53emyt6tNUamqjQJumMDO","BlockMgr"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.setBlockColor=function(e,t){switch(t){case 0:e.color=cc.color(240,255,0);break;case 1:e.color=cc.color(255,0,0);break;case 2:e.color=cc.color(0,255,0);break;case 3:e.color=cc.color(0,0,255)}},e}();o.BlockMgr=n,cc._RF.pop()},{}],Block:[function(e,t,o){"use strict";cc._RF.push(t,"236f8oI5UFF2LGmWsNjNths","Block"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./BlockMgr"),r=cc._decorator,c=r.ccclass,i=r.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.typeLabel=null,t.type=0,t.parent=null,t.needDisAppear=!1,t.disNode=[],t.maxNumArr=[],t}var o;return __extends(t,e),o=t,t.prototype.start=function(){},t.prototype.init=function(e,t){this.parent=t,this.typeLabel.string=e+"",this.type=e,(new n.BlockMgr).setBlockColor(this.node,e)},t.prototype.onCollisionEnter=function(e,t){"bullet"==e.node.group&&this.findBlock(t.node,0)},t.prototype.findBlock=function(e,t){for(var n=0;n<e.parent.children.length;n++)e.parent.children[n].getComponent(o).getIsNeedDisAppear()||(e.x<=e.parent.children[n].x?e.x-e.parent.children[n].x>=-(this.node.width+2)&&Math.abs(e.y-e.parent.children[n].y)<=1.414*this.node.width+5&&this.type==e.parent.children[n].getComponent(o).getType()&&"block"==e.parent.children[n].group&&(e!=e.parent.children[n]&&this.findBlock(e.parent.children[n],t),e.parent.children[n].getComponent(o).setIsNeedDisAppear(!0),t++,e.parent.children[n].destroy()):e.x>=e.parent.children[n].x&&e.x-e.parent.children[n].x<=this.node.width+2&&Math.abs(e.y-e.parent.children[n].y)<=1.414*this.node.width+5&&this.type==e.parent.children[n].getComponent(o).getType()&&"block"==e.parent.children[n].group&&(e!=e.parent.children[n]&&this.findBlock(e.parent.children[n],t),e.parent.children[n].getComponent(o).setIsNeedDisAppear(!0),t++,e.parent.children[n].destroy()));cc.log("num==========>",t)},t.prototype.setIsNeedDisAppear=function(e){this.needDisAppear=e},t.prototype.getType=function(){return this.type},t.prototype.getIsNeedDisAppear=function(){return this.needDisAppear},__decorate([i({type:cc.Label})],t.prototype,"typeLabel",void 0),t=o=__decorate([c],t)}(cc.Component);o.Block=p,cc._RF.pop()},{"./BlockMgr":"BlockMgr"}],Bullet:[function(e,t,o){"use strict";cc._RF.push(t,"ca969xQCHdD44HKZSE5mtPG","Bullet"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,r=n.ccclass,c=(n.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.speed=1e3,t}return __extends(t,e),t.prototype.start=function(){},t.prototype.onCollisionEnter=function(){this.node.destroy()},t.prototype.update=function(e){this.node.x+=this.speed*e,this.node.x>cc.winSize.width/2&&this.node.destroy()},t=__decorate([r],t)}(cc.Component));o.Bullet=c,cc._RF.pop()},{}],GameMain:[function(e,t,o){"use strict";cc._RF.push(t,"ae763NL0KBLTbzGPjJinDzQ","GameMain"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Block"),r=cc._decorator,c=r.ccclass,i=r.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.block=null,t.bullet=null,t.gameContent=null,t}return __extends(t,e),t.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDrawBoundingBox=!0,cc.director.getPhysicsManager().gravity=cc.v2(0,-5e3),cc.systemEvent.setAccelerometerEnabled(!0),this.node.on(cc.Node.EventType.TOUCH_START,this.touchStart.bind(this))},t.prototype.start=function(){var e=this;this.schedule(function(){var t=cc.instantiate(e.block),o=Math.floor(4*Math.random());t.getComponent(n.Block).init(o,e.gameContent),t.parent=e.gameContent;var r=Math.floor(Math.random()*(e.gameContent.width/t.width));t.position=cc.v2(r*t.width,333)},.5)},t.prototype.touchStart=function(e){var t=cc.instantiate(this.bullet);t.parent=this.node;var o=e.getLocation();t.position=cc.v2(o.x-this.node.width/2,o.y-this.node.height/2)},__decorate([i({type:cc.Prefab,tooltip:"\u7816\u5757"})],t.prototype,"block",void 0),__decorate([i({type:cc.Prefab,tooltip:"\u5b50\u5f39"})],t.prototype,"bullet",void 0),__decorate([i({type:cc.Node,tooltip:"\u5bb9\u5668"})],t.prototype,"gameContent",void 0),t=__decorate([c],t)}(cc.Component);o.default=p,cc._RF.pop()},{"./Block":"Block"}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t,o){"use strict";cc._RF.push(t,"ccee2gEUvZNBbGpr94h8JJO","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["use_v2.1-2.2.1_cc.Toggle_event","Block","BlockMgr","Bullet","GameMain"]);