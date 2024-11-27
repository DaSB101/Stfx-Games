
if (typeof gdjs.evtsExt__StrandedInventory__updateItemSelected !== "undefined") {
  gdjs.evtsExt__StrandedInventory__updateItemSelected.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StrandedInventory__updateItemSelected = {};
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1= [];
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2= [];
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects3= [];
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects1= [];
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2= [];
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects3= [];


gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotObjects2Objects = Hashtable.newFrom({"Slot": gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2});
gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotIconObjects2Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2});
gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotObjects2Objects = Hashtable.newFrom({"Slot": gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2});
gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotIconObjects2Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2});
gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotObjects1Objects = Hashtable.newFrom({"Slot": gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1});
gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotIconObjects1Objects = Hashtable.newFrom({"SlotIcon": gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects1});
gdjs.evtsExt__StrandedInventory__updateItemSelected.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1, gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotObjects2Objects, gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotIconObjects2Objects, 80, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2 */
/* Reuse gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2 */
{runtimeScene.getScene().getVariables().get("itemSelected").setString((( gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2.length === 0 ) ? "" :gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2[0].getAnimationName()));
}{runtimeScene.getScene().getVariables().get("itemSelectedSlot").setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2[0].getVariables()).get("no"))));
}}

}


{

gdjs.copyArray(gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1, gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotObjects2Objects, gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotIconObjects2Objects, 80, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("itemSelected").setString("none");
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("SlotIcon"), gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects1);
{gdjs.evtsExt__StrandedInventory__updateIsEmpty.func(runtimeScene, gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotObjects1Objects, gdjs.evtsExt__StrandedInventory__updateItemSelected.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595updateItemSelected_9546GDSlotIconObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__StrandedInventory__updateItemSelected.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Slot"), gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[i].getVariableNumber(gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[i].getVariables().get("no")) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SlotNumber")) || 0 : 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[k] = gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[i].isOnLayer("Hotbar") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[k] = gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41732932);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__StrandedInventory__updateItemSelected.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__StrandedInventory__updateItemSelected.func = function(runtimeScene, Slot, SlotIcon, SlotNumber, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Slot": Slot
, "SlotIcon": SlotIcon
},
  _objectArraysMap: {
"Slot": gdjs.objectsListsToArray(Slot)
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
if (argName === "SlotNumber") return SlotNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__updateItemSelected.GDSlotIconObjects3.length = 0;

gdjs.evtsExt__StrandedInventory__updateItemSelected.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StrandedInventory__updateItemSelected.registeredGdjsCallbacks = [];