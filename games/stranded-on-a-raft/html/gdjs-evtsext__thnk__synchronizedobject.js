
gdjs.evtsExt__THNK__SynchronizedObject = gdjs.evtsExt__THNK__SynchronizedObject || {};

/**
 * Behavior generated from Synchronize object
 */
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject = class SynchronizedObject extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Synchronize object
 */
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.SharedData = class SynchronizedObjectSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._THNK_SynchronizedObjectSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._THNK_SynchronizedObjectSharedData = new gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.SharedData(
      initialData
    );
  }
  return instanceContainer._THNK_SynchronizedObjectSharedData;
}

// Methods:
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.userFunc0x1872e98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (runtimeScene.thnkServer)
    runtimeScene.thnkServer.objectsRegistery.registerObject(objects[0]);

if (runtimeScene.thnkClient && typeof objects[0].thnkID !== "number") {
    // Object was not created by the server but the game is in client mode, delete it.
    objects[0].deleteFromScene(runtimeScene);

    // Workaround a GDevelop bug that creates a ghost object when deleting an object at the beginning of the scene
    if (runtimeScene.getTimeManager().isFirstFrame()) {
        runtimeScene.getAsyncTasksManager().addTask(new gdjs.ResolveTask(), () => {
            objects[0].onDestroyFromScene(runtimeScene);
        });
    }
}

};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.userFunc0x1872e98(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__THNK").getChild("Initialized"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__THNK").getChild("Initialized"), true);
}
}
{ //Subevents
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext = {};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.userFunc0x99e2f8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (runtimeScene.thnkServer)
    runtimeScene.thnkServer.objectsRegistery.unregisterObject(objects[0]);

};
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.userFunc0x99e2f8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("THNK::SynchronizedObject", gdjs.evtsExt__THNK__SynchronizedObject.SynchronizedObject);
