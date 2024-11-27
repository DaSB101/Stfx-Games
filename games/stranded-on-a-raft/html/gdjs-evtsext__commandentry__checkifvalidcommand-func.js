
if (typeof gdjs.evtsExt__CommandEntry__CheckIfValidCommand !== "undefined") {
  gdjs.evtsExt__CommandEntry__CheckIfValidCommand.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommandEntry__CheckIfValidCommand = {};


gdjs.evtsExt__CommandEntry__CheckIfValidCommand.userFunc0x240d648 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function hasPrefix(command, prefix) {
  return command.startsWith(prefix);
}

const prefix = eventsFunctionContext.getArgument("Prefix");
const command = eventsFunctionContext.getArgument("Command");
eventsFunctionContext.returnValue = hasPrefix(command, prefix);
};
gdjs.evtsExt__CommandEntry__CheckIfValidCommand.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CommandEntry__CheckIfValidCommand.userFunc0x240d648(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CommandEntry__CheckIfValidCommand.func = function(runtimeScene, Prefix, Command, parentEventsFunctionContext) {
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
if (argName === "Prefix") return Prefix;
if (argName === "Command") return Command;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CommandEntry__CheckIfValidCommand.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CommandEntry__CheckIfValidCommand.registeredGdjsCallbacks = [];