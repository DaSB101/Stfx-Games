
if (typeof gdjs.evtsExt__StrandedInventory__removeItem !== "undefined") {
  gdjs.evtsExt__StrandedInventory__removeItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StrandedInventory__removeItem = {};
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final = [];

gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4 = 0;

gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex5 = 0;

gdjs.evtsExt__StrandedInventory__removeItem.forEachObjects4 = [];

gdjs.evtsExt__StrandedInventory__removeItem.forEachObjects5 = [];

gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary4 = null;

gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary5 = null;

gdjs.evtsExt__StrandedInventory__removeItem.forEachTotalCount4 = 0;

gdjs.evtsExt__StrandedInventory__removeItem.forEachTotalCount5 = 0;

gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects1= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects2= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects4= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects5= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects6= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects7= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects1= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects2= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects3= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects4= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects5= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects7= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects1= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects2= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects5= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6= [];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects7= [];


gdjs.evtsExt__StrandedInventory__removeItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__StrandedInventory__removeItem.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3 */

for (gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4 = 0;gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4 < gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length;++gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4) {
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = 0;


gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary4 = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.push(gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].getVariables().get("item").getChild("value")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].isCurrentAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("picked_item")) == "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41711724);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("picked_item").setString("");
}{runtimeScene.getScene().getVariables().get("picked_item_slot").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[0].getVariables()).get("item").getChild("slot"))));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("removeItem"), true);
}}
}

}


};gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotTextObjects4Objects = Hashtable.newFrom({"SlotText": gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects4});
gdjs.evtsExt__StrandedInventory__removeItem.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__StrandedInventory__removeItem.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3 */

for (gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4 = 0;gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4 < gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length;++gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("SlotText"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects4);
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = 0;


gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary4 = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex4];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.push(gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotTextObjects4Objects, (gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length !== 0 ? gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects4.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects4[i].setText((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[0].getVariables()).get("item").getChild("value"))));
}
}}
}

}


};gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotIconObjects3Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3});
gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotObjects3Objects = Hashtable.newFrom({"Slot": gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3});
gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotTextObjects6Objects = Hashtable.newFrom({"SlotText": gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6});
gdjs.evtsExt__StrandedInventory__removeItem.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects5, gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6);

gdjs.copyArray(eventsFunctionContext.getObjects("SlotText"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotTextObjects6Objects, (gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6.length !== 0 ? gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6 */
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects5, gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6);

{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__StrandedInventory__removeItem.asyncCallback41719292 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
{runtimeScene.getScene().getVariables().get("itemSelected").setString("none");
}}
gdjs.evtsExt__StrandedInventory__removeItem.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.evtsExt__StrandedInventory__removeItem.asyncCallback41719292(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__StrandedInventory__removeItem.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3, gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4);


for (gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex5 = 0;gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex5 < gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length;++gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex5) {
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects5.length = 0;


gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary5 = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[gdjs.evtsExt__StrandedInventory__removeItem.forEachIndex5];
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects5.push(gdjs.evtsExt__StrandedInventory__removeItem.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__StrandedInventory__removeItem.eventsList4(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("updateEmptySlot"), true);
}
{ //Subevents
gdjs.evtsExt__StrandedInventory__removeItem.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__StrandedInventory__removeItem.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].getVariables().get("item").getChild("slot")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("itemSelectedSlot")) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final.indexOf(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[j]) === -1 )
            gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final.push(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i].getVariables().get("item").getChild("slot")) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("itemSelectedSlot")) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final.indexOf(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[j]) === -1 )
            gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final.push(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3_1final, gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__StrandedInventory__removeItem.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("removeItem"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].getVariables().get("item").getChild("slot")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("picked_item_slot")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41713692);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3 */
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].returnVariable(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].getVariables().get("item").getChild("value")).sub(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "updateInv");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("removeItem"), false);
}
{ //Subevents
gdjs.evtsExt__StrandedInventory__removeItem.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Slot"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].isCurrentAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i].getVariables().get("item").getChild("value")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotIconObjects3Objects, gdjs.evtsExt__StrandedInventory__removeItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595removeItem_9546GDSlotObjects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3[i].getVariableBoolean(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3[i].getVariables().get("isChest"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3[k] = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41716844);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3 */
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3[i].setVariableBoolean(gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3[i].getVariables().get("isEmpty"), true);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "updateInv");
}
{ //Subevents
gdjs.evtsExt__StrandedInventory__removeItem.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__StrandedInventory__removeItem.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Amount")) || 0 : 0);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41708844);
}
if (isConditionTrue_0)
{
{runtimeScene.getScene().getVariables().get("picked_item").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""));
}
{ //Subevents: 
gdjs.evtsExt__StrandedInventory__removeItem.eventsList7(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__StrandedInventory__removeItem.func = function(runtimeScene, Amount, Item, Slot, SlotText, SlotIcon, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Slot": Slot
, "SlotText": SlotText
, "SlotIcon": SlotIcon
},
  _objectArraysMap: {
"Slot": gdjs.objectsListsToArray(Slot)
, "SlotText": gdjs.objectsListsToArray(SlotText)
, "SlotIcon": gdjs.objectsListsToArray(SlotIcon)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Amount") return Amount;
if (argName === "Item") return Item;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotObjects7.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotTextObjects7.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__removeItem.GDSlotIconObjects7.length = 0;

gdjs.evtsExt__StrandedInventory__removeItem.eventsList8(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StrandedInventory__removeItem.registeredGdjsCallbacks = [];