gdjs.SettingsCode = {};
gdjs.SettingsCode.GDbackObjects1_1final = [];

gdjs.SettingsCode.forEachIndex2 = 0;

gdjs.SettingsCode.forEachIndex3 = 0;

gdjs.SettingsCode.forEachObjects2 = [];

gdjs.SettingsCode.forEachObjects3 = [];

gdjs.SettingsCode.forEachTemporary2 = null;

gdjs.SettingsCode.forEachTemporary3 = null;

gdjs.SettingsCode.forEachTotalCount2 = 0;

gdjs.SettingsCode.forEachTotalCount3 = 0;

gdjs.SettingsCode.GDbackgroundObjects1= [];
gdjs.SettingsCode.GDbackgroundObjects2= [];
gdjs.SettingsCode.GDbackgroundObjects3= [];
gdjs.SettingsCode.GDbackgroundObjects4= [];
gdjs.SettingsCode.GDTitleObjects1= [];
gdjs.SettingsCode.GDTitleObjects2= [];
gdjs.SettingsCode.GDTitleObjects3= [];
gdjs.SettingsCode.GDTitleObjects4= [];
gdjs.SettingsCode.GDwatermarkObjects1= [];
gdjs.SettingsCode.GDwatermarkObjects2= [];
gdjs.SettingsCode.GDwatermarkObjects3= [];
gdjs.SettingsCode.GDwatermarkObjects4= [];
gdjs.SettingsCode.GDcreditsObjects1= [];
gdjs.SettingsCode.GDcreditsObjects2= [];
gdjs.SettingsCode.GDcreditsObjects3= [];
gdjs.SettingsCode.GDcreditsObjects4= [];
gdjs.SettingsCode.GDheaderObjects1= [];
gdjs.SettingsCode.GDheaderObjects2= [];
gdjs.SettingsCode.GDheaderObjects3= [];
gdjs.SettingsCode.GDheaderObjects4= [];
gdjs.SettingsCode.GDrockObjects1= [];
gdjs.SettingsCode.GDrockObjects2= [];
gdjs.SettingsCode.GDrockObjects3= [];
gdjs.SettingsCode.GDrockObjects4= [];
gdjs.SettingsCode.GDsea_9595fxObjects1= [];
gdjs.SettingsCode.GDsea_9595fxObjects2= [];
gdjs.SettingsCode.GDsea_9595fxObjects3= [];
gdjs.SettingsCode.GDsea_9595fxObjects4= [];
gdjs.SettingsCode.GDtransitionObjects1= [];
gdjs.SettingsCode.GDtransitionObjects2= [];
gdjs.SettingsCode.GDtransitionObjects3= [];
gdjs.SettingsCode.GDtransitionObjects4= [];
gdjs.SettingsCode.GDbackObjects1= [];
gdjs.SettingsCode.GDbackObjects2= [];
gdjs.SettingsCode.GDbackObjects3= [];
gdjs.SettingsCode.GDbackObjects4= [];
gdjs.SettingsCode.GDdebug_9595textObjects1= [];
gdjs.SettingsCode.GDdebug_9595textObjects2= [];
gdjs.SettingsCode.GDdebug_9595textObjects3= [];
gdjs.SettingsCode.GDdebug_9595textObjects4= [];
gdjs.SettingsCode.GDbgmusic_9595txtObjects1= [];
gdjs.SettingsCode.GDbgmusic_9595txtObjects2= [];
gdjs.SettingsCode.GDbgmusic_9595txtObjects3= [];
gdjs.SettingsCode.GDbgmusic_9595txtObjects4= [];
gdjs.SettingsCode.GDsettings_9595txtObjects1= [];
gdjs.SettingsCode.GDsettings_9595txtObjects2= [];
gdjs.SettingsCode.GDsettings_9595txtObjects3= [];
gdjs.SettingsCode.GDsettings_9595txtObjects4= [];
gdjs.SettingsCode.GDButton2Objects1= [];
gdjs.SettingsCode.GDButton2Objects2= [];
gdjs.SettingsCode.GDButton2Objects3= [];
gdjs.SettingsCode.GDButton2Objects4= [];
gdjs.SettingsCode.GDfps_9595txtObjects1= [];
gdjs.SettingsCode.GDfps_9595txtObjects2= [];
gdjs.SettingsCode.GDfps_9595txtObjects3= [];
gdjs.SettingsCode.GDfps_9595txtObjects4= [];
gdjs.SettingsCode.GDfps_9595switchObjects1= [];
gdjs.SettingsCode.GDfps_9595switchObjects2= [];
gdjs.SettingsCode.GDfps_9595switchObjects3= [];
gdjs.SettingsCode.GDfps_9595switchObjects4= [];
gdjs.SettingsCode.GDbgmusic_9595switchObjects1= [];
gdjs.SettingsCode.GDbgmusic_9595switchObjects2= [];
gdjs.SettingsCode.GDbgmusic_9595switchObjects3= [];
gdjs.SettingsCode.GDbgmusic_9595switchObjects4= [];
gdjs.SettingsCode.GDswitchObjects1= [];
gdjs.SettingsCode.GDswitchObjects2= [];
gdjs.SettingsCode.GDswitchObjects3= [];
gdjs.SettingsCode.GDswitchObjects4= [];
gdjs.SettingsCode.GDUI_9595BGObjects1= [];
gdjs.SettingsCode.GDUI_9595BGObjects2= [];
gdjs.SettingsCode.GDUI_9595BGObjects3= [];
gdjs.SettingsCode.GDUI_9595BGObjects4= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

};gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("switch"), gdjs.SettingsCode.GDswitchObjects1);

for (gdjs.SettingsCode.forEachIndex2 = 0;gdjs.SettingsCode.forEachIndex2 < gdjs.SettingsCode.GDswitchObjects1.length;++gdjs.SettingsCode.forEachIndex2) {
gdjs.SettingsCode.GDswitchObjects2.length = 0;


gdjs.SettingsCode.forEachTemporary2 = gdjs.SettingsCode.GDswitchObjects1[gdjs.SettingsCode.forEachIndex2];
gdjs.SettingsCode.GDswitchObjects2.push(gdjs.SettingsCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.SettingsCode.GDswitchObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDswitchObjects2[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableString(gdjs.SettingsCode.GDswitchObjects2[i].getVariables().getFromIndex(0))))));
}
}}
}

}


};gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDswitchObjects1Objects = Hashtable.newFrom({"switch": gdjs.SettingsCode.GDswitchObjects1});
gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SettingsCode.GDButton2Objects1, gdjs.SettingsCode.GDButton2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDButton2Objects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDButton2Objects2[i].getVariableString(gdjs.SettingsCode.GDButton2Objects2[i].getVariables().getFromIndex(0)) == "bugreport" ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDButton2Objects2[k] = gdjs.SettingsCode.GDButton2Objects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDButton2Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.rinexusgames.com/bug-report", runtimeScene);
}}

}


{

/* Reuse gdjs.SettingsCode.GDButton2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDButton2Objects1[i].getVariableString(gdjs.SettingsCode.GDButton2Objects1[i].getVariables().getFromIndex(0)) == "donate" ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDButton2Objects1[k] = gdjs.SettingsCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://ko-fi.com/rinexusgames", runtimeScene);
}}

}


};gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

};gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDrockObjects3Objects = Hashtable.newFrom({"rock": gdjs.SettingsCode.GDrockObjects3});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects = Hashtable.newFrom({"sea_fx": gdjs.SettingsCode.GDsea_9595fxObjects3});
gdjs.SettingsCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(3, 5), "SeaSpawn");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.SettingsCode.GDsea_9595fxObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SeaSpawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, gdjs.randomInRange(-(1500), 1500), gdjs.randomInRange(-(500), 500), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sea_fx"), gdjs.SettingsCode.GDsea_9595fxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDsea_9595fxObjects3.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsea_9595fxObjects3[i].hasAnimationEndedLegacy() ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDsea_9595fxObjects3[k] = gdjs.SettingsCode.GDsea_9595fxObjects3[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsea_9595fxObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDsea_9595fxObjects3 */
{for(var i = 0, len = gdjs.SettingsCode.GDsea_9595fxObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDsea_9595fxObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SettingsCode.GDrockObjects3);
gdjs.copyArray(runtimeScene.getObjects("sea_fx"), gdjs.SettingsCode.GDsea_9595fxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDrockObjects3Objects, gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDsea_95959595fxObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDsea_9595fxObjects3 */
{for(var i = 0, len = gdjs.SettingsCode.GDsea_9595fxObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDsea_9595fxObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("sea_fx"), gdjs.SettingsCode.GDsea_9595fxObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDsea_9595fxObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsea_9595fxObjects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDsea_9595fxObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsea_9595fxObjects2[i].setY(gdjs.SettingsCode.GDsea_9595fxObjects2[i].getY() + (1));
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDrockObjects2Objects = Hashtable.newFrom({"rock": gdjs.SettingsCode.GDrockObjects2});
gdjs.SettingsCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}}

}


};gdjs.SettingsCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(10, 30), "RockSpawn");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.SettingsCode.GDrockObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDrockObjects2Objects, gdjs.randomInRange(-(800), 800), gdjs.randomInRange(800, 900), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawn");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rock"), gdjs.SettingsCode.GDrockObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDrockObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDrockObjects2[i].setY(gdjs.SettingsCode.GDrockObjects2[i].getY() + (1));
}
}{for(var i = 0, len = gdjs.SettingsCode.GDrockObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDrockObjects2[i].setZOrder(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.SettingsCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.SettingsCode.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackgroundObjects2[i].setY(gdjs.SettingsCode.GDbackgroundObjects2[i].getY() - (0.2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.SettingsCode.GDbackgroundObjects2);

for (gdjs.SettingsCode.forEachIndex3 = 0;gdjs.SettingsCode.forEachIndex3 < gdjs.SettingsCode.GDbackgroundObjects2.length;++gdjs.SettingsCode.forEachIndex3) {
gdjs.SettingsCode.GDbackgroundObjects3.length = 0;


gdjs.SettingsCode.forEachTemporary3 = gdjs.SettingsCode.GDbackgroundObjects2[gdjs.SettingsCode.forEachIndex3];
gdjs.SettingsCode.GDbackgroundObjects3.push(gdjs.SettingsCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbackgroundObjects3.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbackgroundObjects3[i].getY() <= -(1440) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDbackgroundObjects3[k] = gdjs.SettingsCode.GDbackgroundObjects3[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbackgroundObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.SettingsCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackgroundObjects3[i].setY(720);
}
}}
}

}


{


gdjs.SettingsCode.eventsList4(runtimeScene);
}


{


gdjs.SettingsCode.eventsList6(runtimeScene);
}


};gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.SettingsCode.GDbackObjects2});
gdjs.SettingsCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.SettingsCode.GDbackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDbackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbackObjects2[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDbackObjects2[k] = gdjs.SettingsCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44857636);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackObjects2[i].getBehavior("Tween").addObjectScaleTween("In", 1.08, 1.08, "easeInQuad", 160, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.SettingsCode.GDbackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbackObjects2[i].getBehavior("Tween").hasFinished("In") ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDbackObjects2[k] = gdjs.SettingsCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44858860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackObjects2[i].getBehavior("Tween").addObjectScaleTween("Out", 1, 1, "easeOutQuad", 260, false, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\button-click.ogg", false, 50, 1);
}}

}


{

gdjs.SettingsCode.GDbackObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.SettingsCode.GDbackObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.SettingsCode.GDbackObjects2);
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbackObjects2[i].getBehavior("Tween").hasFinished("Out") ) {
        isConditionTrue_1 = true;
        gdjs.SettingsCode.GDbackObjects2[k] = gdjs.SettingsCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbackObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.SettingsCode.GDbackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SettingsCode.GDbackObjects1_1final.indexOf(gdjs.SettingsCode.GDbackObjects2[j]) === -1 )
            gdjs.SettingsCode.GDbackObjects1_1final.push(gdjs.SettingsCode.GDbackObjects2[j]);
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
gdjs.copyArray(gdjs.SettingsCode.GDbackObjects1_1final, gdjs.SettingsCode.GDbackObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44860788);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.SettingsCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.SettingsCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("UI_BG"), gdjs.SettingsCode.GDUI_9595BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("settings_txt"), gdjs.SettingsCode.GDsettings_9595txtObjects1);
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.SettingsCode.GDtransitionObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "transition");
}{for(var i = 0, len = gdjs.SettingsCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDtransitionObjects1[i].getBehavior("Tween").addObjectOpacityTween("intro", 0, "easeInQuad", 1000, false);
}
}{gdjs.adMob.loadInterstitial("ca-app-pub-2121307485850127/8888936397", "", true);
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "Settings", "Lobby", gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), 0, "icon", "icon", "", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.SettingsCode.GDUI_9595BGObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDUI_9595BGObjects1[i].activateBehavior("Anchor", false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDsettings_9595txtObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDsettings_9595txtObjects1[i].setBBText("[outline=black]" + (gdjs.RuntimeObject.getVariableString(gdjs.SettingsCode.GDsettings_9595txtObjects1[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.SettingsCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDButton2Objects1[i].SetLabelText((gdjs.RuntimeObject.getVariableString(gdjs.SettingsCode.GDButton2Objects1[i].getVariables().getFromIndex(1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.SettingsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug_text"), gdjs.SettingsCode.GDdebug_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("fps_switch"), gdjs.SettingsCode.GDfps_9595switchObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDdebug_9595textObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDdebug_9595textObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 400);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDfps_9595switchObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDfps_9595switchObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - 250);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 0, "Settings", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("switch"), gdjs.SettingsCode.GDswitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44837468);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDswitchObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDswitchObjects1 */
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableString(((gdjs.SettingsCode.GDswitchObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SettingsCode.GDswitchObjects1[0].getVariables()).getFromIndex(0)))));
}{for(var i = 0, len = gdjs.SettingsCode.GDswitchObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDswitchObjects1[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild((gdjs.RuntimeObject.getVariableString(gdjs.SettingsCode.GDswitchObjects1[i].getVariables().getFromIndex(0))))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\button-click.ogg", false, 50, 1);
}{gdjs.evtTools.storage.deleteElementFromJSONFile("Account", "Settings");
}{gdjs.evtTools.storage.writeStringInJSONFile("Account", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.SettingsCode.GDButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDButton2Objects1[k] = gdjs.SettingsCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(44840668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\button-click.ogg", false, 50, 1);
}
{ //Subevents
gdjs.SettingsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.SettingsCode.eventsList7(runtimeScene);
}


{


gdjs.SettingsCode.eventsList8(runtimeScene);
}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDbackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbackgroundObjects2.length = 0;
gdjs.SettingsCode.GDbackgroundObjects3.length = 0;
gdjs.SettingsCode.GDbackgroundObjects4.length = 0;
gdjs.SettingsCode.GDTitleObjects1.length = 0;
gdjs.SettingsCode.GDTitleObjects2.length = 0;
gdjs.SettingsCode.GDTitleObjects3.length = 0;
gdjs.SettingsCode.GDTitleObjects4.length = 0;
gdjs.SettingsCode.GDwatermarkObjects1.length = 0;
gdjs.SettingsCode.GDwatermarkObjects2.length = 0;
gdjs.SettingsCode.GDwatermarkObjects3.length = 0;
gdjs.SettingsCode.GDwatermarkObjects4.length = 0;
gdjs.SettingsCode.GDcreditsObjects1.length = 0;
gdjs.SettingsCode.GDcreditsObjects2.length = 0;
gdjs.SettingsCode.GDcreditsObjects3.length = 0;
gdjs.SettingsCode.GDcreditsObjects4.length = 0;
gdjs.SettingsCode.GDheaderObjects1.length = 0;
gdjs.SettingsCode.GDheaderObjects2.length = 0;
gdjs.SettingsCode.GDheaderObjects3.length = 0;
gdjs.SettingsCode.GDheaderObjects4.length = 0;
gdjs.SettingsCode.GDrockObjects1.length = 0;
gdjs.SettingsCode.GDrockObjects2.length = 0;
gdjs.SettingsCode.GDrockObjects3.length = 0;
gdjs.SettingsCode.GDrockObjects4.length = 0;
gdjs.SettingsCode.GDsea_9595fxObjects1.length = 0;
gdjs.SettingsCode.GDsea_9595fxObjects2.length = 0;
gdjs.SettingsCode.GDsea_9595fxObjects3.length = 0;
gdjs.SettingsCode.GDsea_9595fxObjects4.length = 0;
gdjs.SettingsCode.GDtransitionObjects1.length = 0;
gdjs.SettingsCode.GDtransitionObjects2.length = 0;
gdjs.SettingsCode.GDtransitionObjects3.length = 0;
gdjs.SettingsCode.GDtransitionObjects4.length = 0;
gdjs.SettingsCode.GDbackObjects1.length = 0;
gdjs.SettingsCode.GDbackObjects2.length = 0;
gdjs.SettingsCode.GDbackObjects3.length = 0;
gdjs.SettingsCode.GDbackObjects4.length = 0;
gdjs.SettingsCode.GDdebug_9595textObjects1.length = 0;
gdjs.SettingsCode.GDdebug_9595textObjects2.length = 0;
gdjs.SettingsCode.GDdebug_9595textObjects3.length = 0;
gdjs.SettingsCode.GDdebug_9595textObjects4.length = 0;
gdjs.SettingsCode.GDbgmusic_9595txtObjects1.length = 0;
gdjs.SettingsCode.GDbgmusic_9595txtObjects2.length = 0;
gdjs.SettingsCode.GDbgmusic_9595txtObjects3.length = 0;
gdjs.SettingsCode.GDbgmusic_9595txtObjects4.length = 0;
gdjs.SettingsCode.GDsettings_9595txtObjects1.length = 0;
gdjs.SettingsCode.GDsettings_9595txtObjects2.length = 0;
gdjs.SettingsCode.GDsettings_9595txtObjects3.length = 0;
gdjs.SettingsCode.GDsettings_9595txtObjects4.length = 0;
gdjs.SettingsCode.GDButton2Objects1.length = 0;
gdjs.SettingsCode.GDButton2Objects2.length = 0;
gdjs.SettingsCode.GDButton2Objects3.length = 0;
gdjs.SettingsCode.GDButton2Objects4.length = 0;
gdjs.SettingsCode.GDfps_9595txtObjects1.length = 0;
gdjs.SettingsCode.GDfps_9595txtObjects2.length = 0;
gdjs.SettingsCode.GDfps_9595txtObjects3.length = 0;
gdjs.SettingsCode.GDfps_9595txtObjects4.length = 0;
gdjs.SettingsCode.GDfps_9595switchObjects1.length = 0;
gdjs.SettingsCode.GDfps_9595switchObjects2.length = 0;
gdjs.SettingsCode.GDfps_9595switchObjects3.length = 0;
gdjs.SettingsCode.GDfps_9595switchObjects4.length = 0;
gdjs.SettingsCode.GDbgmusic_9595switchObjects1.length = 0;
gdjs.SettingsCode.GDbgmusic_9595switchObjects2.length = 0;
gdjs.SettingsCode.GDbgmusic_9595switchObjects3.length = 0;
gdjs.SettingsCode.GDbgmusic_9595switchObjects4.length = 0;
gdjs.SettingsCode.GDswitchObjects1.length = 0;
gdjs.SettingsCode.GDswitchObjects2.length = 0;
gdjs.SettingsCode.GDswitchObjects3.length = 0;
gdjs.SettingsCode.GDswitchObjects4.length = 0;
gdjs.SettingsCode.GDUI_9595BGObjects1.length = 0;
gdjs.SettingsCode.GDUI_9595BGObjects2.length = 0;
gdjs.SettingsCode.GDUI_9595BGObjects3.length = 0;
gdjs.SettingsCode.GDUI_9595BGObjects4.length = 0;

gdjs.SettingsCode.eventsList9(runtimeScene);

return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
