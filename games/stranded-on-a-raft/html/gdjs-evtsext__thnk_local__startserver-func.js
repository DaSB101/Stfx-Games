
if (typeof gdjs.evtsExt__THNK_Local__StartServer !== "undefined") {
  gdjs.evtsExt__THNK_Local__StartServer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_Local__StartServer = {};


gdjs.evtsExt__THNK_Local__StartServer.userFunc0x1d89210 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (new URL(location).searchParams.get("client"))
    return console.error("Cannot start server - preview set as client!");

THNK.server.startServer(
    new THNK.LocalServerAdapter(),
    runtimeScene,
    eventsFunctionContext.getArgument("Scene")
);

let { windowWidth, windowHeight } = runtimeScene.getGame().getGameData().properties;
windowWidth /= 2; windowHeight /= 2;
let x = 0, y = 0, windowID = 0;
for (
    let clients = eventsFunctionContext.getArgument("Clients");
    clients > 0;
    clients--
) {
    const remote = runtimeScene.getGame().getRenderer().getElectronRemote()
    if (remote) {
        // Create a new window
        const { BrowserWindow } = remote.require("electron");
        const win = new BrowserWindow({
            x, y,
            width: windowWidth,
            height: windowHeight,
            useContentSize: true,
            backgroundColor: '#000000',
            parent: remote.getCurrentWindow(),
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        });

        // Load the current 
        remote.require("@electron/remote/main").enable(win.webContents);
        win.loadFile(
            require("os").platform() === "win32" ? location.pathname.slice(1) : location.pathname,
            { query: { "client": 1 } }
        );
    } else {
        // As a fallback, open with the native window.open
        window.open(location + "?client=1", "THNK Client n°" + windowID++, `width=${windowWidth},height=${windowHeight},screenY=${y},screenX=${x},popup=1;`);
    }

    // Shift the window positions for the next client
    x += windowWidth;
    if (x + windowWidth > screen.width) {
        x = 0;
        y += windowHeight
        if (y + windowHeight > screen.height) {
            x = windowWidth / 2;
            y = 0;
        }
    }
}

};
gdjs.evtsExt__THNK_Local__StartServer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_Local__StartServer.userFunc0x1d89210(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK_Local__StartServer.func = function(runtimeScene, Scene, Clients, parentEventsFunctionContext) {
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
if (argName === "Scene") return Scene;
if (argName === "Clients") return Clients;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK_Local__StartServer.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__THNK_Local__StartServer.registeredGdjsCallbacks = [];