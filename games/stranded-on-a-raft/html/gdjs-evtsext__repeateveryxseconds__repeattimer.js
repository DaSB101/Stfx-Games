
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer || {};

/**
 * Behavior generated from Repeat every X seconds
 */
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer = class RepeatTimer extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TimerName = behaviorData.TimerName !== undefined ? behaviorData.TimerName : "MyTimer";
    this._behaviorData.TimerLength = behaviorData.TimerLength !== undefined ? behaviorData.TimerLength : Number("1") || 0;
    this._behaviorData.Limit = behaviorData.Limit !== undefined ? behaviorData.Limit : Number("-1") || 0;
    this._behaviorData.Counter = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TimerName !== newBehaviorData.TimerName)
      this._behaviorData.TimerName = newBehaviorData.TimerName;
    if (oldBehaviorData.TimerLength !== newBehaviorData.TimerLength)
      this._behaviorData.TimerLength = newBehaviorData.TimerLength;
    if (oldBehaviorData.Limit !== newBehaviorData.Limit)
      this._behaviorData.Limit = newBehaviorData.Limit;
    if (oldBehaviorData.Counter !== newBehaviorData.Counter)
      this._behaviorData.Counter = newBehaviorData.Counter;

    return true;
  }

  // Properties:
  
  _getTimerName() {
    return this._behaviorData.TimerName !== undefined ? this._behaviorData.TimerName : "MyTimer";
  }
  _setTimerName(newValue) {
    this._behaviorData.TimerName = newValue;
  }
  _getTimerLength() {
    return this._behaviorData.TimerLength !== undefined ? this._behaviorData.TimerLength : Number("1") || 0;
  }
  _setTimerLength(newValue) {
    this._behaviorData.TimerLength = newValue;
  }
  _getLimit() {
    return this._behaviorData.Limit !== undefined ? this._behaviorData.Limit : Number("-1") || 0;
  }
  _setLimit(newValue) {
    this._behaviorData.Limit = newValue;
  }
  _getCounter() {
    return this._behaviorData.Counter !== undefined ? this._behaviorData.Counter : Number("0") || 0;
  }
  _setCounter(newValue) {
    this._behaviorData.Counter = newValue;
  }
}

/**
 * Shared data generated from Repeat every X seconds
 */
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.SharedData = class RepeatTimerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._RepeatEveryXSeconds_RepeatTimerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._RepeatEveryXSeconds_RepeatTimerSharedData = new gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.SharedData(
      initialData
    );
  }
  return instanceContainer._RepeatEveryXSeconds_RepeatTimerSharedData;
}

// Methods:
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext = {};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer((gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimerName()));
}
}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext = {};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1= [];
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2= [];


gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].timerElapsedTime((gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimerName()), (gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimerLength())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[k] = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1, gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLimit() == -(1) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[k] = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final.push(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1, gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounter() < (gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLimit()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[k] = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final.push(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1_1final, gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].resetTimer((gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimerName()));
}
}{for(var i = 0, len = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCounter(gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCounter() + (1));
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.Repeat = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.RepeatContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext = {};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects1= [];
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects2= [];


gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects1[i].pauseTimer((gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimerName()));
}
}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.Pause = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.PauseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext = {};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects1= [];
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects2= [];


gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects1[i].unpauseTimer((gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimerName()));
}
}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.Resume = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResumeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext = {};
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects1= [];
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects2= [];


gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCounter(0);
}
}}

}


};

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimit = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.ResetLimitContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("RepeatEveryXSeconds::RepeatTimer", gdjs.evtsExt__RepeatEveryXSeconds__RepeatTimer.RepeatTimer);
