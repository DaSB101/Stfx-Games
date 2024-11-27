
if (typeof gdjs.evtsExt__StrandedInventory__dropItem !== "undefined") {
  gdjs.evtsExt__StrandedInventory__dropItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StrandedInventory__dropItem = {};
gdjs.evtsExt__StrandedInventory__dropItem.forEachIndex2 = 0;

gdjs.evtsExt__StrandedInventory__dropItem.forEachObjects2 = [];

gdjs.evtsExt__StrandedInventory__dropItem.forEachTemporary2 = null;

gdjs.evtsExt__StrandedInventory__dropItem.forEachTotalCount2 = 0;

gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects3= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects2= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects3= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2= [];
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects3= [];


gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDDropIconObjects1Objects = Hashtable.newFrom({"DropIcon": gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1});
gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDShadowObjects2Objects = Hashtable.newFrom({"Shadow": gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2});
gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDDropIconObjects1Objects = Hashtable.newFrom({"DropIcon": gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1});
gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDDropIconObjects1Objects = Hashtable.newFrom({"DropIcon": gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1});
gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDShadowObjects1Objects = Hashtable.newFrom({"Shadow": gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1});
gdjs.evtsExt__StrandedInventory__dropItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__StrandedInventory__dropItem.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1 */

for (gdjs.evtsExt__StrandedInventory__dropItem.forEachIndex2 = 0;gdjs.evtsExt__StrandedInventory__dropItem.forEachIndex2 < gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1.length;++gdjs.evtsExt__StrandedInventory__dropItem.forEachIndex2) {
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1, gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2);

gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length = 0;


gdjs.evtsExt__StrandedInventory__dropItem.forEachTemporary2 = gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1[gdjs.evtsExt__StrandedInventory__dropItem.forEachIndex2];
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.push(gdjs.evtsExt__StrandedInventory__dropItem.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[i].getVariableString(gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[i].getVariables().get("id")) == (gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2[0].getVariables()).get("id"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[k] = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2[i].setPosition((( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getCenterXInScene()),(( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getCenterYInScene()) + (( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getHeight()) / 2 - 5);
}
}}
}

}


};gdjs.evtsExt__StrandedInventory__dropItem.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Shadow"), gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDShadowObjects1Objects);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__StrandedInventory__dropItem.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__StrandedInventory__dropItem.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("Settings").getChild("EntityShadow"), true);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1, gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2);

gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDShadowObjects2Objects, (( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getCenterXInScene()), (( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getCenterYInScene()) + (( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getHeight()) / 2 - 5, "");
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2[i].setScale(3);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2[i].setZOrder((( gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getZOrder()) - 1);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2[i].returnVariable(gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2[i].getVariables().get("id")).setString((gdjs.RuntimeObject.getVariableString(((gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2[0].getVariables()).get("id"))));
}
}}

}


{

/* Reuse gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDDropIconObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].separateFromObjectsList(gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDDropIconObjects1Objects, false);
}
}
{ //Subevents
gdjs.evtsExt__StrandedInventory__dropItem.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__StrandedInventory__dropItem.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41737404);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1);
gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedInventory__dropItem.mapOfGDgdjs_9546evtsExt_9595_9595StrandedInventory_9595_9595dropItem_9546GDDropIconObjects1Objects, (( gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].setAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DropName") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].setScale(3);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].setCenterXInScene((( gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].setZOrder((( gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1[0].getZOrder()) - 1);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].resetTimer("Despawn");
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].resetTimer("canPickup");
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].returnVariable(gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].getVariables().get("State").getChild("value")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DropValue")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].returnVariable(gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].getVariables().get("State").getChild("durability")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DropDurability")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].returnVariable(gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1[i].getVariables().get("id")).setString(gdjs.evtsExt__UUID__GenerateUUIDv4.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.evtsExt__StrandedInventory__dropItem.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__StrandedInventory__dropItem.func = function(runtimeScene, DropValue, DropName, DropIcon, Behavior, Player, Shadow, DropDurability, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"DropIcon": DropIcon
, "Player": Player
, "Shadow": Shadow
},
  _objectArraysMap: {
"DropIcon": gdjs.objectsListsToArray(DropIcon)
, "Player": gdjs.objectsListsToArray(Player)
, "Shadow": gdjs.objectsListsToArray(Shadow)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "DropValue") return DropValue;
if (argName === "DropName") return DropName;
if (argName === "DropDurability") return DropDurability;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDDropIconObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDPlayerObjects3.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects1.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects2.length = 0;
gdjs.evtsExt__StrandedInventory__dropItem.GDShadowObjects3.length = 0;

gdjs.evtsExt__StrandedInventory__dropItem.eventsList4(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StrandedInventory__dropItem.registeredGdjsCallbacks = [];