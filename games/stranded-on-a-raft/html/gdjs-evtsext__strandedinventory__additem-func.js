
if (typeof gdjs.evtsExt__StrandedInventory__addItem !== "undefined") {
  gdjs.evtsExt__StrandedInventory__addItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StrandedInventory__addItem = {};
gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4 = 0;

gdjs.evtsExt__StrandedInventory__addItem.forEachIndex5 = 0;

gdjs.evtsExt__StrandedInventory__addItem.forEachObjects4 = [];

gdjs.evtsExt__StrandedInventory__addItem.forEachObjects5 = [];

gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary4 = null;

gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary5 = null;

gdjs.evtsExt__StrandedInventory__addItem.forEachTotalCount4 = 0;

gdjs.evtsExt__StrandedInventory__addItem.forEachTotalCount5 = 0;

gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects1= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects2= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects4= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects7= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects1= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects2= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects3= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects4= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects5= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects7= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects1= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects2= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6= [];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects7= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects1= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects2= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects3= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects4= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects5= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6= [];
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects7= [];


gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects3Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3});
gdjs.evtsExt__StrandedInventory__addItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotTextObjects4Objects = Hashtable.newFrom({"SlotText": gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects4});
gdjs.evtsExt__StrandedInventory__addItem.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__StrandedInventory__addItem.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3 */

for (gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4 = 0;gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4 < gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length;++gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("SlotText"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects4);
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length = 0;


gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary4 = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.push(gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotTextObjects4Objects, (gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length !== 0 ? gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects4.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects4[i].setText((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[0].getVariables()).get("item").getChild("value"))));
}
}}
}

}


};gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects5Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5});
gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotTextObjects6Objects = Hashtable.newFrom({"SlotText": gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6});
gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDDurabilityObjects6Objects = Hashtable.newFrom({"Durability": gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6});
gdjs.evtsExt__StrandedInventory__addItem.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")).getChild("stack")) != 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5, gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6);

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5, gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6);

gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotTextObjects6Objects, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getCenterXInScene()) + 12, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getCenterYInScene()) + 12, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6.length === 0 ) ? "" :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6[i].setText((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getVariables()).get("item").getChild("value"))));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6[i].setZOrder((( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getZOrder()) + 1);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length !== 0 ? gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0] : null), (gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6.length !== 0 ? gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6[0] : null));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")).getChild("durability")) != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5, gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6);

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5, gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6);

gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDDurabilityObjects6Objects, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6[0].getX()) + 14, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6[0].getY()) + 60, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6.length === 0 ) ? "" :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6[i].setZOrder((( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6[i].setHeight(8);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6[i].setWidth(gdjs.evtTools.common.clamp(0, (54 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getVariables()).get("item").getChild("durability"))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Items").getChild((( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length === 0 ) ? "" :gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0].getAnimationName())).getChild("durability"))), 54));
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length !== 0 ? gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[0] : null), (gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length !== 0 ? gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6[0] : null));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DurabilityValue")) || 0 : 0) != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5, gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6);

{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[i].returnVariable(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6[i].getVariables().get("item").getChild("durability")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DurabilityValue")) || 0 : 0));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("updateItemDurability"), true);
}}

}


};gdjs.evtsExt__StrandedInventory__addItem.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3, gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects4);


for (gdjs.evtsExt__StrandedInventory__addItem.forEachIndex5 = 0;gdjs.evtsExt__StrandedInventory__addItem.forEachIndex5 < gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects4.length;++gdjs.evtsExt__StrandedInventory__addItem.forEachIndex5) {
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length = 0;

gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length = 0;


gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary5 = gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects4[gdjs.evtsExt__StrandedInventory__addItem.forEachIndex5];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.push(gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary5);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[i].setVariableBoolean(gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[i].getVariables().get("isEmpty"), false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects5Objects, (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[0].getX()), (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[0].getY()), (( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length === 0 ) ? "" :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].setZOrder((( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].setScale(4);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].setAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].setCenterPositionInScene((( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[0].getCenterXInScene()),(( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].returnVariable(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].getVariables().get("item").getChild("value")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].returnVariable(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].getVariables().get("item").getChild("slot")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SlotNo")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].returnVariable(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].getVariables().get("item").getChild("durability")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")).getChild("durability")));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].returnVariable(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5[i].getVariables().get("item").getChild("desc")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")).getChild("desc")));
}
}
{ //Subevents: 
gdjs.evtsExt__StrandedInventory__addItem.eventsList3(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__StrandedInventory__addItem.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("InventoryFull"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__StrandedInventory__addItem.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("InventoryFull"), true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("dropItem").getChild("value").setNumber(1);
}{runtimeScene.getScene().getVariables().get("dropItem").getChild("name").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("dropItem").getChild("spawn"), true);
}}

}


};gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotObjects3Objects = Hashtable.newFrom({"Slot": gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3});
gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects3Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3});
gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotObjects3Objects = Hashtable.newFrom({"Slot": gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3});
gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects3Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3});
gdjs.evtsExt__StrandedInventory__addItem.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].isOnLayer("Hotbar") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].isCurrentAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].getVariables().get("item").getChild("value")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")).getChild("stack")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41682900);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("CheckStacks").setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects3Objects));
}{runtimeScene.getScene().getVariables().get("picked_item").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3);

for (gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4 = 0;gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4 < gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length;++gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4) {
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length = 0;


gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary4 = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[gdjs.evtsExt__StrandedInventory__addItem.forEachIndex4];
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.push(gdjs.evtsExt__StrandedInventory__addItem.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[i].getVariables().get("item").getChild("value")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Items").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")).getChild("stack")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[i].isCurrentAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : "")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("picked_item")) == "");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41685940);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("picked_item").setString("");
}{runtimeScene.getScene().getVariables().get("picked_item_slot").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4[0].getVariables()).get("item").getChild("slot"))));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("addItem"), true);
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("addItem"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].getVariables().get("item").getChild("slot")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("picked_item_slot")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41688252);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("addItem"), false);
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].returnVariable(gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3[i].getVariables().get("item").getChild("value")).add(1);
}
}
{ //Subevents
gdjs.evtsExt__StrandedInventory__addItem.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Slot"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[i].getVariables().get("no")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("emptyslot")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[i].getVariableBoolean(gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[i].getVariables().get("isChest"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[k] = gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CheckStacks")) == 0;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__StrandedInventory__addItem.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Slot"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3);
gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3);
{gdjs.evtsExt__StrandedInventory__updateItemSelected.func(runtimeScene, gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotObjects3Objects, gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects3Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("slotNoSelected")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__StrandedInventory__updateIsEmpty.func(runtimeScene, gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotObjects3Objects, gdjs.evtsExt__StrandedInventory__addItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595addItem_9546GDSlotIconObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "updateInv");
}{runtimeScene.getScene().getVariables().get("CheckStacks").setNumber(0);
}}

}


};gdjs.evtsExt__StrandedInventory__addItem.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("isAddingItem"), true);
}}

}


{


const repeatCount2 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Amount")) || 0 : 0);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__StrandedInventory__addItem.eventsList6(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("collect_popup").getChild("name").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Item") : ""));
}{runtimeScene.getScene().getVariables().get("collect_popup").getChild("value").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Amount")) || 0 : 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("isAddingItem"), false);
}{runtimeScene.getScene().getVariables().get("pickupItem").getChild("name").setString("");
}}

}


};

gdjs.evtsExt__StrandedInventory__addItem.func = function(runtimeScene, Amount, Item, SlotNo, Slot, SlotText, SlotIcon, Durability, DurabilityValue, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Slot": Slot
, "SlotText": SlotText
, "SlotIcon": SlotIcon
, "Durability": Durability
},
  _objectArraysMap: {
"Slot": gdjs.objectsListsToArray(Slot)
, "SlotText": gdjs.objectsListsToArray(SlotText)
, "SlotIcon": gdjs.objectsListsToArray(SlotIcon)
, "Durability": gdjs.objectsListsToArray(Durability)
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
if (argName === "SlotNo") return SlotNo;
if (argName === "DurabilityValue") return DurabilityValue;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotObjects7.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotTextObjects7.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDSlotIconObjects7.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects4.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects5.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects6.length = 0;
gdjs.evtsExt__StrandedInventory__addItem.GDDurabilityObjects7.length = 0;

gdjs.evtsExt__StrandedInventory__addItem.eventsList7(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StrandedInventory__addItem.registeredGdjsCallbacks = [];