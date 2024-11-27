
if (typeof gdjs.evtsExt__StrandedEssentials__createDialog !== "undefined") {
  gdjs.evtsExt__StrandedEssentials__createDialog.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__StrandedEssentials__createDialog = {};
gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1= [];
gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects2= [];
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1= [];
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects2= [];
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects1= [];
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2= [];


gdjs.evtsExt__StrandedEssentials__createDialog.mapOfGDgdjs_9546evtsExt_9595_9595StrandedEssentials_9595_9595createDialog_9546GDDialogBoxObjects1Objects = Hashtable.newFrom({"DialogBox": gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1});
gdjs.evtsExt__StrandedEssentials__createDialog.mapOfGDgdjs_9546evtsExt_9595_9595StrandedEssentials_9595_9595createDialog_9546GDDialogTextObjectObjects1Objects = Hashtable.newFrom({"DialogTextObject": gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects1});
gdjs.evtsExt__StrandedEssentials__createDialog.asyncCallback42598820 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("DialogBox"), gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogTextObject"), gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2[i].setText((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DialogText") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects2[i].returnVariable(gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects2[i].getVariables().get("id")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ID") : ""));
}
for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2[i].returnVariable(gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2[i].getVariables().get("id")).setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ID") : ""));
}
}}
gdjs.evtsExt__StrandedEssentials__createDialog.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1) asyncObjectsList.addObject("DialogBox", obj);
for (const obj of gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects1) asyncObjectsList.addObject("DialogTextObject", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.evtsExt__StrandedEssentials__createDialog.asyncCallback42598820(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__StrandedEssentials__createDialog.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Player"), gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1);
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length = 0;

gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedEssentials__createDialog.mapOfGDgdjs_9546evtsExt_9595_9595StrandedEssentials_9595_9595createDialog_9546GDDialogBoxObjects1Objects, (( gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1[0].getCenterXInScene()), ((( gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1[0].getCenterYInScene()) - (( gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1[0].getHeight()) / 2) - 30, "");
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleYTween("StretchX", 5, "easeInQuad", 100, false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleXTween("StretchY", 5, "easeInQuad", 190, false, false);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[i].setScale(0.1);
}
}{for(var i = 0, len = gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[i].setOpacity(100);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__StrandedEssentials__createDialog.mapOfGDgdjs_9546evtsExt_9595_9595StrandedEssentials_9595_9595createDialog_9546GDDialogTextObjectObjects1Objects, ((( gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[0].getPointX("")) - (( gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[0].getWidth()) / 2) + 20, (( gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length === 0 ) ? 0 :gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1[0].getPointY("")) + 20, "");
}
{ //Subevents
gdjs.evtsExt__StrandedEssentials__createDialog.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__StrandedEssentials__createDialog.func = function(runtimeScene, Player, DialogBox, Tween, DialogTextObject, Typewriter, DialogText, ID, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "DialogBox": DialogBox
, "DialogTextObject": DialogTextObject
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "DialogBox": gdjs.objectsListsToArray(DialogBox)
, "DialogTextObject": gdjs.objectsListsToArray(DialogTextObject)
},
  _behaviorNamesMap: {
"Tween": Tween
, "Typewriter": Typewriter
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
if (argName === "DialogText") return DialogText;
if (argName === "ID") return ID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects1.length = 0;
gdjs.evtsExt__StrandedEssentials__createDialog.GDPlayerObjects2.length = 0;
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects1.length = 0;
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogBoxObjects2.length = 0;
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects1.length = 0;
gdjs.evtsExt__StrandedEssentials__createDialog.GDDialogTextObjectObjects2.length = 0;

gdjs.evtsExt__StrandedEssentials__createDialog.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__StrandedEssentials__createDialog.registeredGdjsCallbacks = [];