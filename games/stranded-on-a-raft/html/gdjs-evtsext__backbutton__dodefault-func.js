
if (typeof gdjs.evtsExt__BackButton__doDefault !== "undefined") {
  gdjs.evtsExt__BackButton__doDefault.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BackButton__doDefault = {};


gdjs.evtsExt__BackButton__doDefault.userFunc0x15701c0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Close the app on cordova, as this is the default behavior
if (navigator.app) {
    navigator.app.exitApp();
} else if (navigator.device && navigator.device.exitApp) {
    navigator.device.exitApp();
} else {
    // Go to previous page as it is the default on browsers
    // Remove the listener so new fake states don't get pushed
    window.removeEventListener('popstate', gdjs.evtTools.back_button._popStateListener);
    history.back(); // Remove the state that prevents going back
    history.back(); // Actually go back
}

};
gdjs.evtsExt__BackButton__doDefault.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BackButton__doDefault.userFunc0x15701c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BackButton__doDefault.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BackButton__doDefault.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BackButton__doDefault.registeredGdjsCallbacks = [];