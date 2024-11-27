gdjs.CreditsCode = {};
gdjs.CreditsCode.GDbackObjects1_1final = [];

gdjs.CreditsCode.forEachIndex3 = 0;

gdjs.CreditsCode.forEachObjects3 = [];

gdjs.CreditsCode.forEachTemporary3 = null;

gdjs.CreditsCode.forEachTotalCount3 = 0;

gdjs.CreditsCode.GDbackgroundObjects1= [];
gdjs.CreditsCode.GDbackgroundObjects2= [];
gdjs.CreditsCode.GDbackgroundObjects3= [];
gdjs.CreditsCode.GDbackgroundObjects4= [];
gdjs.CreditsCode.GDTitleObjects1= [];
gdjs.CreditsCode.GDTitleObjects2= [];
gdjs.CreditsCode.GDTitleObjects3= [];
gdjs.CreditsCode.GDTitleObjects4= [];
gdjs.CreditsCode.GDNewObject2Objects1= [];
gdjs.CreditsCode.GDNewObject2Objects2= [];
gdjs.CreditsCode.GDNewObject2Objects3= [];
gdjs.CreditsCode.GDNewObject2Objects4= [];
gdjs.CreditsCode.GDcreditsObjects1= [];
gdjs.CreditsCode.GDcreditsObjects2= [];
gdjs.CreditsCode.GDcreditsObjects3= [];
gdjs.CreditsCode.GDcreditsObjects4= [];
gdjs.CreditsCode.GDrockObjects1= [];
gdjs.CreditsCode.GDrockObjects2= [];
gdjs.CreditsCode.GDrockObjects3= [];
gdjs.CreditsCode.GDrockObjects4= [];
gdjs.CreditsCode.GDsea_9595fxObjects1= [];
gdjs.CreditsCode.GDsea_9595fxObjects2= [];
gdjs.CreditsCode.GDsea_9595fxObjects3= [];
gdjs.CreditsCode.GDsea_9595fxObjects4= [];
gdjs.CreditsCode.GDNewObject4Objects1= [];
gdjs.CreditsCode.GDNewObject4Objects2= [];
gdjs.CreditsCode.GDNewObject4Objects3= [];
gdjs.CreditsCode.GDNewObject4Objects4= [];
gdjs.CreditsCode.GDtransitionObjects1= [];
gdjs.CreditsCode.GDtransitionObjects2= [];
gdjs.CreditsCode.GDtransitionObjects3= [];
gdjs.CreditsCode.GDtransitionObjects4= [];
gdjs.CreditsCode.GDleaderboard_9595headerObjects1= [];
gdjs.CreditsCode.GDleaderboard_9595headerObjects2= [];
gdjs.CreditsCode.GDleaderboard_9595headerObjects3= [];
gdjs.CreditsCode.GDleaderboard_9595headerObjects4= [];
gdjs.CreditsCode.GDbackObjects1= [];
gdjs.CreditsCode.GDbackObjects2= [];
gdjs.CreditsCode.GDbackObjects3= [];
gdjs.CreditsCode.GDbackObjects4= [];
gdjs.CreditsCode.GDNewObjectObjects1= [];
gdjs.CreditsCode.GDNewObjectObjects2= [];
gdjs.CreditsCode.GDNewObjectObjects3= [];
gdjs.CreditsCode.GDNewObjectObjects4= [];
gdjs.CreditsCode.GDsocial_9595iconsObjects1= [];
gdjs.CreditsCode.GDsocial_9595iconsObjects2= [];
gdjs.CreditsCode.GDsocial_9595iconsObjects3= [];
gdjs.CreditsCode.GDsocial_9595iconsObjects4= [];
gdjs.CreditsCode.GDNewTextObjects1= [];
gdjs.CreditsCode.GDNewTextObjects2= [];
gdjs.CreditsCode.GDNewTextObjects3= [];
gdjs.CreditsCode.GDNewTextObjects4= [];
gdjs.CreditsCode.GDUI_9595BGObjects1= [];
gdjs.CreditsCode.GDUI_9595BGObjects2= [];
gdjs.CreditsCode.GDUI_9595BGObjects3= [];
gdjs.CreditsCode.GDUI_9595BGObjects4= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDsea_95959595fxObjects4Objects = Hashtable.newFrom({"sea_fx": gdjs.CreditsCode.GDsea_9595fxObjects4});
gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

};gdjs.CreditsCode.eventsList2 = function(runtimeScene) {

{


const repeatCount4 = 8;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.CreditsCode.GDsea_9595fxObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDsea_95959595fxObjects4Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{for(var i = 0, len = gdjs.CreditsCode.GDsea_9595fxObjects4.length ;i < len;++i) {
    gdjs.CreditsCode.GDsea_9595fxObjects4[i].setZOrder(2);
}
}}
}

}


};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDrockObjects3Objects = Hashtable.newFrom({"rock": gdjs.CreditsCode.GDrockObjects3});
gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.CreditsCode.GDsea_9595fxObjects3});
gdjs.CreditsCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(3, 5), "SeaSpawn");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SeaSpawn");
}
{ //Subevents
gdjs.CreditsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sea_fx"), gdjs.CreditsCode.GDsea_9595fxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDsea_9595fxObjects3.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDsea_9595fxObjects3[i].hasAnimationEndedLegacy() ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDsea_9595fxObjects3[k] = gdjs.CreditsCode.GDsea_9595fxObjects3[i];
        ++k;
    }
}
gdjs.CreditsCode.GDsea_9595fxObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDsea_9595fxObjects3 */
{for(var i = 0, len = gdjs.CreditsCode.GDsea_9595fxObjects3.length ;i < len;++i) {
    gdjs.CreditsCode.GDsea_9595fxObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.CreditsCode.GDrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("sea_fx"), gdjs.CreditsCode.GDsea_9595fxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDrockObjects3Objects, gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDsea_95959595fxObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDsea_9595fxObjects3 */
{for(var i = 0, len = gdjs.CreditsCode.GDsea_9595fxObjects3.length ;i < len;++i) {
    gdjs.CreditsCode.GDsea_9595fxObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("sea_fx"), gdjs.CreditsCode.GDsea_9595fxObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDsea_9595fxObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDsea_9595fxObjects2[i].setY(gdjs.CreditsCode.GDsea_9595fxObjects2[i].getY() + (1));
}
}}

}


};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDrockObjects2Objects = Hashtable.newFrom({"rock": gdjs.CreditsCode.GDrockObjects2});
gdjs.CreditsCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(10, 30), "RockSpawn");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.CreditsCode.GDrockObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDrockObjects2Objects, gdjs.randomInRange(-(800), 800), gdjs.randomInRange(800, 900), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawn");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.CreditsCode.GDrockObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDrockObjects1[i].setY(gdjs.CreditsCode.GDrockObjects1[i].getY() + (1));
}
}{for(var i = 0, len = gdjs.CreditsCode.GDrockObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDrockObjects1[i].setZOrder(1);
}
}}

}


};gdjs.CreditsCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.CreditsCode.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackgroundObjects2[i].setY(gdjs.CreditsCode.GDbackgroundObjects2[i].getY() - (0.2));
}
}{for(var i = 0, len = gdjs.CreditsCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackgroundObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.CreditsCode.GDbackgroundObjects2[i].getWidth()) / 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.CreditsCode.GDbackgroundObjects2);

for (gdjs.CreditsCode.forEachIndex3 = 0;gdjs.CreditsCode.forEachIndex3 < gdjs.CreditsCode.GDbackgroundObjects2.length;++gdjs.CreditsCode.forEachIndex3) {
gdjs.CreditsCode.GDbackgroundObjects3.length = 0;


gdjs.CreditsCode.forEachTemporary3 = gdjs.CreditsCode.GDbackgroundObjects2[gdjs.CreditsCode.forEachIndex3];
gdjs.CreditsCode.GDbackgroundObjects3.push(gdjs.CreditsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDbackgroundObjects3.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDbackgroundObjects3[i].getY() <= -(1440) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDbackgroundObjects3[k] = gdjs.CreditsCode.GDbackgroundObjects3[i];
        ++k;
    }
}
gdjs.CreditsCode.GDbackgroundObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.CreditsCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackgroundObjects3[i].setY(720);
}
}}
}

}


{


gdjs.CreditsCode.eventsList3(runtimeScene);
}


{


gdjs.CreditsCode.eventsList4(runtimeScene);
}


};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.CreditsCode.GDbackObjects2});
gdjs.CreditsCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.CreditsCode.GDbackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDbackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDbackObjects2[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDbackObjects2[k] = gdjs.CreditsCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.CreditsCode.GDbackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44538212);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.CreditsCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackObjects2[i].getBehavior("Tween").addObjectScaleTween("In", 1.08, 1.08, "easeInQuad", 160, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.CreditsCode.GDbackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDbackObjects2[i].getBehavior("Tween").hasFinished("In") ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDbackObjects2[k] = gdjs.CreditsCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.CreditsCode.GDbackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44539372);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.CreditsCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackObjects2[i].getBehavior("Tween").addObjectScaleTween("Out", 1, 1, "easeOutQuad", 260, false, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\button-click.ogg", false, 50, 1);
}}

}


{

gdjs.CreditsCode.GDbackObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.CreditsCode.GDbackObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.CreditsCode.GDbackObjects2);
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDbackObjects2[i].getBehavior("Tween").hasFinished("Out") ) {
        isConditionTrue_1 = true;
        gdjs.CreditsCode.GDbackObjects2[k] = gdjs.CreditsCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.CreditsCode.GDbackObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CreditsCode.GDbackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.CreditsCode.GDbackObjects1_1final.indexOf(gdjs.CreditsCode.GDbackObjects2[j]) === -1 )
            gdjs.CreditsCode.GDbackObjects1_1final.push(gdjs.CreditsCode.GDbackObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__BackButton__onBackButtonPressed.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.CreditsCode.GDbackObjects1_1final, gdjs.CreditsCode.GDbackObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44541300);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDsocial_95959595iconsObjects1Objects = Hashtable.newFrom({"social_icons": gdjs.CreditsCode.GDsocial_9595iconsObjects1});
gdjs.CreditsCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CreditsCode.GDsocial_9595iconsObjects1, gdjs.CreditsCode.GDsocial_9595iconsObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDsocial_9595iconsObjects2.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDsocial_9595iconsObjects2[i].isCurrentAnimationName("discord") ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDsocial_9595iconsObjects2[k] = gdjs.CreditsCode.GDsocial_9595iconsObjects2[i];
        ++k;
    }
}
gdjs.CreditsCode.GDsocial_9595iconsObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://discord.rinexusgames.com/", runtimeScene);
}}

}


{

gdjs.copyArray(gdjs.CreditsCode.GDsocial_9595iconsObjects1, gdjs.CreditsCode.GDsocial_9595iconsObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDsocial_9595iconsObjects2.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDsocial_9595iconsObjects2[i].isCurrentAnimationName("facebook") ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDsocial_9595iconsObjects2[k] = gdjs.CreditsCode.GDsocial_9595iconsObjects2[i];
        ++k;
    }
}
gdjs.CreditsCode.GDsocial_9595iconsObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.facebook.com/rinexusgames", runtimeScene);
}}

}


{

/* Reuse gdjs.CreditsCode.GDsocial_9595iconsObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDsocial_9595iconsObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDsocial_9595iconsObjects1[i].isCurrentAnimationName("twitter") ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDsocial_9595iconsObjects1[k] = gdjs.CreditsCode.GDsocial_9595iconsObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDsocial_9595iconsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://twitter.com/rinexusgames", runtimeScene);
}}

}


};gdjs.CreditsCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.CreditsCode.GDtransitionObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "transition");
}{for(var i = 0, len = gdjs.CreditsCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDtransitionObjects1[i].getBehavior("Tween").addObjectOpacityTween("intro", 0, "easeInQuad", 1000, false);
}
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Credits", "Lobby", gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 0, "icon", "icon", "", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.adMob.loadInterstitial("ca-app-pub-2121307485850127/2714155029", "test", true);
}}

}


{



}


{



}


{


gdjs.CreditsCode.eventsList5(runtimeScene);
}


{


gdjs.CreditsCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.CreditsCode.GDcreditsObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDcreditsObjects1[i].setY(gdjs.CreditsCode.GDcreditsObjects1[i].getY() - (0.60));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.CreditsCode.GDcreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDcreditsObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDcreditsObjects1[i].getY() <= -((gdjs.CreditsCode.GDcreditsObjects1[i].getHeight())) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDcreditsObjects1[k] = gdjs.CreditsCode.GDcreditsObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDcreditsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CreditsCode.GDcreditsObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDcreditsObjects1[i].setY(720);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("social_icons"), gdjs.CreditsCode.GDsocial_9595iconsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDsocial_95959595iconsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44543636);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CreditsCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDbackgroundObjects1.length = 0;
gdjs.CreditsCode.GDbackgroundObjects2.length = 0;
gdjs.CreditsCode.GDbackgroundObjects3.length = 0;
gdjs.CreditsCode.GDbackgroundObjects4.length = 0;
gdjs.CreditsCode.GDTitleObjects1.length = 0;
gdjs.CreditsCode.GDTitleObjects2.length = 0;
gdjs.CreditsCode.GDTitleObjects3.length = 0;
gdjs.CreditsCode.GDTitleObjects4.length = 0;
gdjs.CreditsCode.GDNewObject2Objects1.length = 0;
gdjs.CreditsCode.GDNewObject2Objects2.length = 0;
gdjs.CreditsCode.GDNewObject2Objects3.length = 0;
gdjs.CreditsCode.GDNewObject2Objects4.length = 0;
gdjs.CreditsCode.GDcreditsObjects1.length = 0;
gdjs.CreditsCode.GDcreditsObjects2.length = 0;
gdjs.CreditsCode.GDcreditsObjects3.length = 0;
gdjs.CreditsCode.GDcreditsObjects4.length = 0;
gdjs.CreditsCode.GDrockObjects1.length = 0;
gdjs.CreditsCode.GDrockObjects2.length = 0;
gdjs.CreditsCode.GDrockObjects3.length = 0;
gdjs.CreditsCode.GDrockObjects4.length = 0;
gdjs.CreditsCode.GDsea_9595fxObjects1.length = 0;
gdjs.CreditsCode.GDsea_9595fxObjects2.length = 0;
gdjs.CreditsCode.GDsea_9595fxObjects3.length = 0;
gdjs.CreditsCode.GDsea_9595fxObjects4.length = 0;
gdjs.CreditsCode.GDNewObject4Objects1.length = 0;
gdjs.CreditsCode.GDNewObject4Objects2.length = 0;
gdjs.CreditsCode.GDNewObject4Objects3.length = 0;
gdjs.CreditsCode.GDNewObject4Objects4.length = 0;
gdjs.CreditsCode.GDtransitionObjects1.length = 0;
gdjs.CreditsCode.GDtransitionObjects2.length = 0;
gdjs.CreditsCode.GDtransitionObjects3.length = 0;
gdjs.CreditsCode.GDtransitionObjects4.length = 0;
gdjs.CreditsCode.GDleaderboard_9595headerObjects1.length = 0;
gdjs.CreditsCode.GDleaderboard_9595headerObjects2.length = 0;
gdjs.CreditsCode.GDleaderboard_9595headerObjects3.length = 0;
gdjs.CreditsCode.GDleaderboard_9595headerObjects4.length = 0;
gdjs.CreditsCode.GDbackObjects1.length = 0;
gdjs.CreditsCode.GDbackObjects2.length = 0;
gdjs.CreditsCode.GDbackObjects3.length = 0;
gdjs.CreditsCode.GDbackObjects4.length = 0;
gdjs.CreditsCode.GDNewObjectObjects1.length = 0;
gdjs.CreditsCode.GDNewObjectObjects2.length = 0;
gdjs.CreditsCode.GDNewObjectObjects3.length = 0;
gdjs.CreditsCode.GDNewObjectObjects4.length = 0;
gdjs.CreditsCode.GDsocial_9595iconsObjects1.length = 0;
gdjs.CreditsCode.GDsocial_9595iconsObjects2.length = 0;
gdjs.CreditsCode.GDsocial_9595iconsObjects3.length = 0;
gdjs.CreditsCode.GDsocial_9595iconsObjects4.length = 0;
gdjs.CreditsCode.GDNewTextObjects1.length = 0;
gdjs.CreditsCode.GDNewTextObjects2.length = 0;
gdjs.CreditsCode.GDNewTextObjects3.length = 0;
gdjs.CreditsCode.GDNewTextObjects4.length = 0;
gdjs.CreditsCode.GDUI_9595BGObjects1.length = 0;
gdjs.CreditsCode.GDUI_9595BGObjects2.length = 0;
gdjs.CreditsCode.GDUI_9595BGObjects3.length = 0;
gdjs.CreditsCode.GDUI_9595BGObjects4.length = 0;

gdjs.CreditsCode.eventsList8(runtimeScene);

return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
