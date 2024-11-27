
if (typeof gdjs.evtsExt__StrandedEssentials__createError !== "undefined") {
  gdjs.evtsExt__StrandedEssentials__createError.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StrandedEssentials__createError = {};
gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1= [];
gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects2= [];


gdjs.evtsExt__StrandedEssentials__createError.mapOfGDgdjs_9546evtsExt_9595_9595StrandedEssentials_9595_9595createError_9546GDErrorObjectObjects1Objects = Hashtable.newFrom({"ErrorObject": gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1});
gdjs.evtsExt__StrandedEssentials__createError.asyncCallback42604772 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("ErrorObject"), gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween("fadeOut", 0, "linear", 500, false);
}
}}
gdjs.evtsExt__StrandedEssentials__createError.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1) asyncObjectsList.addObject("ErrorObject", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.evtsExt__StrandedEssentials__createError.asyncCallback42604772(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__StrandedEssentials__createError.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(42601276);
}
if (isConditionTrue_0) {
gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedEssentials__createError.mapOfGDgdjs_9546evtsExt_9595_9595StrandedEssentials_9595_9595createError_9546GDErrorObjectObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, 670, "UI");
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1[i].setText((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ErrorMsg") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween("fadeIn", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween("up", 640, "easeInQuad", 250, false);
}
}
{ //Subevents
gdjs.evtsExt__StrandedEssentials__createError.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__StrandedEssentials__createError.func = function(runtimeScene, ErrorMsg, ErrorObject, Tween, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ErrorObject": ErrorObject
},
  _objectArraysMap: {
"ErrorObject": gdjs.objectsListsToArray(ErrorObject)
},
  _behaviorNamesMap: {
"Tween": Tween
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
if (argName === "ErrorMsg") return ErrorMsg;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects1.length = 0;
gdjs.evtsExt__StrandedEssentials__createError.GDErrorObjectObjects2.length = 0;

gdjs.evtsExt__StrandedEssentials__createError.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StrandedEssentials__createError.registeredGdjsCallbacks = [];