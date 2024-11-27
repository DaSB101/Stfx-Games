
gdjs.evtsExt__AutoTile__AutoTile = gdjs.evtsExt__AutoTile__AutoTile || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__AutoTile__AutoTile.AutoTile = class AutoTile extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.update = behaviorData.update !== undefined ? behaviorData.update : true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.update !== newBehaviorData.update)
      this._behaviorData.update = newBehaviorData.update;

    return true;
  }

  // Properties:
  
  _getupdate() {
    return this._behaviorData.update !== undefined ? this._behaviorData.update : true;
  }
  _setupdate(newValue) {
    this._behaviorData.update = newValue;
  }
  _toggleupdate() {
    this._setupdate(!this._getupdate());
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.SharedData = class AutoTileSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AutoTile_AutoTileSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AutoTile_AutoTileSharedData = new gdjs.evtsExt__AutoTile__AutoTile.AutoTile.SharedData(
      initialData
    );
  }
  return instanceContainer._AutoTile_AutoTileSharedData;
}

// Methods:
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext = {};
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final = [];

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachIndex2 = 0;

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachObjects2 = [];

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachTemporary2 = null;

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachTotalCount2 = 0;

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects4= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects1= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3= [];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects4= [];


gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterXInScene()) == (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterYInScene()) > (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterYInScene()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileY")).add(1);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterXInScene()) == (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterXInScene()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterYInScene()) < (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterYInScene()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileY")).add(2);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterYInScene()) == (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterYInScene()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterXInScene()) < (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterXInScene()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileX")).add(1);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterYInScene()) == (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterYInScene()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterXInScene()) > (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterXInScene()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileX")).add(2);
}
}}

}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationName("y");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationName("y");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationFrame(0);
}
}}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("y");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(1);
}
}}

}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationName("x");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationName("x");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationFrame(0);
}
}}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("x");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(1);
}
}}

}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationFrame(0);
}
}}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(1);
}
}}

}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].getVariables().get("tileY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].setAnimationFrame(0);
}
}}

}


{

/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(1);
}
}}

}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("xy");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("xy");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("xy");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("xy");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationFrame(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) != 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("y2x");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}
{ //Subevents
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileX")) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) != 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tileY")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].setAnimationName("x2y");
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].pauseAnimation();
}
}
{ //Subevents
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1[i].getVariables().get("tileY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1[i].getVariables().get("tileX")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Tile"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects1);

for (gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachIndex2 = 0;gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachIndex2 < gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects1.length;++gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachIndex2) {
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2.length = 0;


gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachTemporary2 = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects1[gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachIndex2];
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointX("left")), (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointY("left"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointX("right")), (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointY("right"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointX("up")), (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointY("up"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i].isCollidingWithPoint((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointX("down")), (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getPointY("down"))) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[k] = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);

{isConditionTrue_1 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterXInScene()) == (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterXInScene()));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3);

{isConditionTrue_1 = ((( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[0].getCenterYInScene()) == (( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[0].getCenterYInScene()));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.indexOf(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]) === -1 )
            gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final.push(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2_1final, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2);
gdjs.copyArray(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2_1final, gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2);
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2[i].getVariables().get("tile")).add(1);
}
}
{ //Subevents: 
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTile = function(Tile, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Tile": Tile
},
  _objectArraysMap: {
"Object": thisObjectList
, "Tile": gdjs.objectsListsToArray(Tile)
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

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects1.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects2.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects3.length = 0;
gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.GDTileObjects4.length = 0;

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.setTileContext.eventsList7(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AutoTile__AutoTile.AutoTile.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AutoTile::AutoTile", gdjs.evtsExt__AutoTile__AutoTile.AutoTile);
