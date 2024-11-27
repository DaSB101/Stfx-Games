
if (typeof gdjs.evtsExt__ArrayTools__Slice !== "undefined") {
  gdjs.evtsExt__ArrayTools__Slice.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Slice = {};


gdjs.evtsExt__ArrayTools__Slice.userFunc0x1f21f38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("arr"));
const target = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("target"));

// Ensure the target is a clean new array
target.castTo("array");
target.clearChildren();

// Slice the original array
const slice = arr
    .getAllChildrenArray()
    .slice(
        eventsFunctionContext.getArgument("begin"),
        // The `|| undefined` replaces 0 with undefined, as having the argument as 0 
        // would make the array empty and is therefore useless.
        // With undefined though, it doesn't stop until the end of the array,
        // which is purposeful.
        eventsFunctionContext.getArgument("end") || undefined
    );

// Copy each variable of the slice into the new array
for (const variable of slice)
    target.pushVariableCopy(variable);

};
gdjs.evtsExt__ArrayTools__Slice.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Slice.userFunc0x1f21f38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__Slice.func = function(runtimeScene, arr, target, begin, end, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "arr") return arr;
if (argName === "target") return target;
if (argName === "begin") return begin;
if (argName === "end") return end;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Slice.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ArrayTools__Slice.registeredGdjsCallbacks = [];