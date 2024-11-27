
if (typeof gdjs.evtsExt__CommandEntry__JsonFromCommand !== "undefined") {
  gdjs.evtsExt__CommandEntry__JsonFromCommand.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CommandEntry__JsonFromCommand = {};


gdjs.evtsExt__CommandEntry__JsonFromCommand.userFunc0x15698c8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function parseCommand(commandString, prefix) {
  // Check if the command string starts with the specified prefix
  if (commandString.startsWith(prefix)) {
    // Split the command string into an array of words
    const words = commandString.split(' ');

    // The first word is the command
    let command = words[0];

    // Remove the prefix from the command if it is present
    if (command.startsWith(prefix)) {
      command = command.slice(prefix.length);
    }

    // The rest of the words are the arguments
    const args = words.slice(1);

    // Return the command and arguments as an object
    return {
      command: command,
      args: args
    };
  } else {
    // Return an empty command and arguments if the command does not start with the specified prefix
    return {
      command: '',
      args: []
    };
  }
}

const prefix = eventsFunctionContext.getArgument("Prefix");
const command = eventsFunctionContext.getArgument("Command");
eventsFunctionContext.returnValue = JSON.stringify(parseCommand(command, prefix));
};
gdjs.evtsExt__CommandEntry__JsonFromCommand.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CommandEntry__JsonFromCommand.userFunc0x15698c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CommandEntry__JsonFromCommand.func = function(runtimeScene, Prefix, Command, parentEventsFunctionContext) {
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


gdjs.evtsExt__CommandEntry__JsonFromCommand.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CommandEntry__JsonFromCommand.registeredGdjsCallbacks = [];