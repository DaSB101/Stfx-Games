
if (typeof gdjs.evtsExt__THNK_Local__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK_Local__onFirstSceneLoaded = {};


gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.userFunc0x1b8db58 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Load THNK Local Adapter (https://github.com/arthuro555/THNK)
"use strict";
(() => {
  // code/adapters/local.ts
  if(!window.THNK)window.THNK={};let THNK=window.THNK;
  ((THNK2) => {
    const logger = new gdjs.Logger("THNK - Local Testing Adapter");
    if (!globalThis.BroadcastChannel)
      logger.error(
        "This browser does not support the local adapter - please try using another adapter! (Prepare for an error)"
      );
    const bc = new BroadcastChannel("thnk-local-server");
    bc.addEventListener(
      "messageerror",
      (e) => logger.error("An error occured while sending a message!", e)
    );
    const ownID = "" + Date.now() + Math.random() * 1e3;
    class LocalClientAdapter extends THNK2.ClientAdapter {
      onBCMessage({ data }) {
        if (data.message === "msg-for-client" && data.for === ownID)
          this.onMessage(data.data);
      }
      boundOnBCMessage = this.onBCMessage.bind(this);
      async prepare(runtimeScene) {
        bc.addEventListener("message", this.boundOnBCMessage);
        bc.postMessage({ message: "connect", from: ownID });
        window.addEventListener("beforeunload", () => this.close());
      }
      close() {
        bc.postMessage({ message: "disconnect", from: ownID });
        bc.removeEventListener("message", this.boundOnBCMessage);
      }
      doSendMessage(message) {
        bc.postMessage({
          message: "msg-for-server",
          data: message,
          from: ownID
        });
      }
    }
    THNK2.LocalClientAdapter = LocalClientAdapter;
    class LocalServerAdapter extends THNK2.ServerAdapter {
      onBCMessage({ data }) {
        if (data.message === "msg-for-server")
          this.onMessage(data.from, data.data);
        else if (data.message === "connect")
          this.onConnection(data.from);
        else if (data.message === "disconnect")
          this.onDisconnection(data.from);
      }
      boundOnBCMessage = this.onBCMessage.bind(this);
      async prepare() {
        bc.addEventListener("message", this.boundOnBCMessage);
        window.addEventListener("beforeunload", () => this.close());
      }
      close() {
        bc.removeEventListener("message", this.boundOnBCMessage);
      }
      doSendMessageTo(userID, message) {
        bc.postMessage({
          message: "msg-for-client",
          data: message.buffer.slice(
            message.buffer.byteLength - message.byteLength
          ),
          for: userID
        });
      }
      getServerID() {
        return ownID;
      }
    }
    THNK2.LocalServerAdapter = LocalServerAdapter;
  })(THNK || (THNK = {}));
})();
if (new URL(location).searchParams.get("client")) THNK.client.startClient(runtimeScene, new THNK.LocalClientAdapter());
};
gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.userFunc0x1b8db58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__THNK_Local__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
