
gdjs.evtsExt__ThreeDFlip__ThreeDFlip = gdjs.evtsExt__ThreeDFlip__ThreeDFlip || {};

/**
 * Behavior generated from 3D Flip
 */
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip = class ThreeDFlip extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Duration = Number("500") || 0;
    this._behaviorData.IsFlipped = false;
    this._behaviorData.IsFlipping = false;
    this._behaviorData.Width = Number("") || 0;
    this._behaviorData.ElapsedTime = Number("") || 0;
    this._behaviorData.Toggle = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.IsFlipped !== newBehaviorData.IsFlipped)
      this._behaviorData.IsFlipped = newBehaviorData.IsFlipped;
    if (oldBehaviorData.IsFlipping !== newBehaviorData.IsFlipping)
      this._behaviorData.IsFlipping = newBehaviorData.IsFlipping;
    if (oldBehaviorData.Width !== newBehaviorData.Width)
      this._behaviorData.Width = newBehaviorData.Width;
    if (oldBehaviorData.ElapsedTime !== newBehaviorData.ElapsedTime)
      this._behaviorData.ElapsedTime = newBehaviorData.ElapsedTime;
    if (oldBehaviorData.Toggle !== newBehaviorData.Toggle)
      this._behaviorData.Toggle = newBehaviorData.Toggle;

    return true;
  }

  // Properties:
  
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("500") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getIsFlipped() {
    return this._behaviorData.IsFlipped !== undefined ? this._behaviorData.IsFlipped : false;
  }
  _setIsFlipped(newValue) {
    this._behaviorData.IsFlipped = newValue;
  }
  _toggleIsFlipped() {
    this._setIsFlipped(!this._getIsFlipped());
  }
  _getIsFlipping() {
    return this._behaviorData.IsFlipping !== undefined ? this._behaviorData.IsFlipping : false;
  }
  _setIsFlipping(newValue) {
    this._behaviorData.IsFlipping = newValue;
  }
  _toggleIsFlipping() {
    this._setIsFlipping(!this._getIsFlipping());
  }
  _getWidth() {
    return this._behaviorData.Width !== undefined ? this._behaviorData.Width : Number("") || 0;
  }
  _setWidth(newValue) {
    this._behaviorData.Width = newValue;
  }
  _getElapsedTime() {
    return this._behaviorData.ElapsedTime !== undefined ? this._behaviorData.ElapsedTime : Number("") || 0;
  }
  _setElapsedTime(newValue) {
    this._behaviorData.ElapsedTime = newValue;
  }
  _getToggle() {
    return this._behaviorData.Toggle !== undefined ? this._behaviorData.Toggle : false;
  }
  _setToggle(newValue) {
    this._behaviorData.Toggle = newValue;
  }
  _toggleToggle() {
    this._setToggle(!this._getToggle());
  }
}

/**
 * Shared data generated from 3D Flip
 */
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.SharedData = class ThreeDFlipSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ThreeDFlip_ThreeDFlipSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ThreeDFlip_ThreeDFlipSharedData = new gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.SharedData(
      initialData
    );
  }
  return instanceContainer._ThreeDFlip_ThreeDFlipSharedData;
}

// Methods:
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlipped() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlipped()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].flipX(true);
}
}}

}


};gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipped(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipped(false);
}
}}

}


};gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setElapsedTime(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElapsedTime() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 1000));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].setWidth((gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()) * Math.abs(Math.cos(3.141592 * (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElapsedTime()) / (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElapsedTime()) >= (( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) / 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElapsedTime()) >= (( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].setWidth((gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipping(false);
}
}
{ //Subevents
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlipping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects3= [];


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggle(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToggle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipped(true);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggle(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToggle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipped(false);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggle(true);
}
}}

}


};gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setElapsedTime((gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) - (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getElapsedTime()) * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0) / (gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()));
}
}
{ //Subevents
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWidth((gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setElapsedTime(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipping(true);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.Flip = function(Duration, parentEventsFunctionContext) {

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
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipping(false);
}
}{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].setWidth((gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWidth()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipped(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlipped(false);
}
}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlip = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.StopFlipContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlipping() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlipping = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlipped() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlipped = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.IsFlippedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext = {};
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1= [];
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2= [];


gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Flip") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Flip") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Flip") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipping((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Flip") : false);
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlipped((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[k] = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = k;
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1_1final, gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Flip((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipTo = function(Flip, Duration, parentEventsFunctionContext) {

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
if (argName === "Flip") return Flip;
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip.prototype.FlipToContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("ThreeDFlip::ThreeDFlip", gdjs.evtsExt__ThreeDFlip__ThreeDFlip.ThreeDFlip);
