
gdjs.evtsExt__Checkbox__Checkbox = gdjs.evtsExt__Checkbox__Checkbox || {};

/**
 * Behavior generated from Checkbox
 */
gdjs.evtsExt__Checkbox__Checkbox.Checkbox = class Checkbox extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Checked = behaviorData.Checked !== undefined ? behaviorData.Checked : false;
    this._behaviorData.PrimaryColor = behaviorData.PrimaryColor !== undefined ? behaviorData.PrimaryColor : "24;119;211";
    this._behaviorData.SecondaryColor = behaviorData.SecondaryColor !== undefined ? behaviorData.SecondaryColor : "255;255;255";
    this._behaviorData.SideLength = behaviorData.SideLength !== undefined ? behaviorData.SideLength : Number("24") || 0;
    this._behaviorData.LineWidth = behaviorData.LineWidth !== undefined ? behaviorData.LineWidth : Number("5") || 0;
    this._behaviorData.HaloRadius = Number("") || 0;
    this._behaviorData.ToggleChanged = false;
    this._behaviorData.Disabled = behaviorData.Disabled !== undefined ? behaviorData.Disabled : false;
    this._behaviorData.BorderThickness = behaviorData.BorderThickness !== undefined ? behaviorData.BorderThickness : Number("2") || 0;
    this._behaviorData.HaloOpacityHover = behaviorData.HaloOpacityHover !== undefined ? behaviorData.HaloOpacityHover : Number("64") || 0;
    this._behaviorData.HaloOpacityPressed = behaviorData.HaloOpacityPressed !== undefined ? behaviorData.HaloOpacityPressed : Number("96") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Checked !== newBehaviorData.Checked)
      this._behaviorData.Checked = newBehaviorData.Checked;
    if (oldBehaviorData.PrimaryColor !== newBehaviorData.PrimaryColor)
      this._behaviorData.PrimaryColor = newBehaviorData.PrimaryColor;
    if (oldBehaviorData.SecondaryColor !== newBehaviorData.SecondaryColor)
      this._behaviorData.SecondaryColor = newBehaviorData.SecondaryColor;
    if (oldBehaviorData.SideLength !== newBehaviorData.SideLength)
      this._behaviorData.SideLength = newBehaviorData.SideLength;
    if (oldBehaviorData.LineWidth !== newBehaviorData.LineWidth)
      this._behaviorData.LineWidth = newBehaviorData.LineWidth;
    if (oldBehaviorData.HaloRadius !== newBehaviorData.HaloRadius)
      this._behaviorData.HaloRadius = newBehaviorData.HaloRadius;
    if (oldBehaviorData.ToggleChanged !== newBehaviorData.ToggleChanged)
      this._behaviorData.ToggleChanged = newBehaviorData.ToggleChanged;
    if (oldBehaviorData.Disabled !== newBehaviorData.Disabled)
      this._behaviorData.Disabled = newBehaviorData.Disabled;
    if (oldBehaviorData.BorderThickness !== newBehaviorData.BorderThickness)
      this._behaviorData.BorderThickness = newBehaviorData.BorderThickness;
    if (oldBehaviorData.HaloOpacityHover !== newBehaviorData.HaloOpacityHover)
      this._behaviorData.HaloOpacityHover = newBehaviorData.HaloOpacityHover;
    if (oldBehaviorData.HaloOpacityPressed !== newBehaviorData.HaloOpacityPressed)
      this._behaviorData.HaloOpacityPressed = newBehaviorData.HaloOpacityPressed;

    return true;
  }

  // Properties:
  
  _getChecked() {
    return this._behaviorData.Checked !== undefined ? this._behaviorData.Checked : false;
  }
  _setChecked(newValue) {
    this._behaviorData.Checked = newValue;
  }
  _toggleChecked() {
    this._setChecked(!this._getChecked());
  }
  _getPrimaryColor() {
    return this._behaviorData.PrimaryColor !== undefined ? this._behaviorData.PrimaryColor : "24;119;211";
  }
  _setPrimaryColor(newValue) {
    this._behaviorData.PrimaryColor = newValue;
  }
  _getSecondaryColor() {
    return this._behaviorData.SecondaryColor !== undefined ? this._behaviorData.SecondaryColor : "255;255;255";
  }
  _setSecondaryColor(newValue) {
    this._behaviorData.SecondaryColor = newValue;
  }
  _getSideLength() {
    return this._behaviorData.SideLength !== undefined ? this._behaviorData.SideLength : Number("24") || 0;
  }
  _setSideLength(newValue) {
    this._behaviorData.SideLength = newValue;
  }
  _getLineWidth() {
    return this._behaviorData.LineWidth !== undefined ? this._behaviorData.LineWidth : Number("5") || 0;
  }
  _setLineWidth(newValue) {
    this._behaviorData.LineWidth = newValue;
  }
  _getHaloRadius() {
    return this._behaviorData.HaloRadius !== undefined ? this._behaviorData.HaloRadius : Number("") || 0;
  }
  _setHaloRadius(newValue) {
    this._behaviorData.HaloRadius = newValue;
  }
  _getToggleChanged() {
    return this._behaviorData.ToggleChanged !== undefined ? this._behaviorData.ToggleChanged : false;
  }
  _setToggleChanged(newValue) {
    this._behaviorData.ToggleChanged = newValue;
  }
  _toggleToggleChanged() {
    this._setToggleChanged(!this._getToggleChanged());
  }
  _getDisabled() {
    return this._behaviorData.Disabled !== undefined ? this._behaviorData.Disabled : false;
  }
  _setDisabled(newValue) {
    this._behaviorData.Disabled = newValue;
  }
  _toggleDisabled() {
    this._setDisabled(!this._getDisabled());
  }
  _getBorderThickness() {
    return this._behaviorData.BorderThickness !== undefined ? this._behaviorData.BorderThickness : Number("2") || 0;
  }
  _setBorderThickness(newValue) {
    this._behaviorData.BorderThickness = newValue;
  }
  _getHaloOpacityHover() {
    return this._behaviorData.HaloOpacityHover !== undefined ? this._behaviorData.HaloOpacityHover : Number("64") || 0;
  }
  _setHaloOpacityHover(newValue) {
    this._behaviorData.HaloOpacityHover = newValue;
  }
  _getHaloOpacityPressed() {
    return this._behaviorData.HaloOpacityPressed !== undefined ? this._behaviorData.HaloOpacityPressed : Number("96") || 0;
  }
  _setHaloOpacityPressed(newValue) {
    this._behaviorData.HaloOpacityPressed = newValue;
  }
}

/**
 * Shared data generated from Checkbox
 */
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.SharedData = class CheckboxSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Checkbox_CheckboxSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Checkbox_CheckboxSharedData = new gdjs.evtsExt__Checkbox__Checkbox.Checkbox.SharedData(
      initialData
    );
  }
  return instanceContainer._Checkbox_CheckboxSharedData;
}

// Methods:
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) < 10);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetSideLength(10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) < 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLineWidth(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) > (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 4);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetLineWidth((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) / 4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondaryColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineSize((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderThickness()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity(255);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(255);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawRectangle(0, 0, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(41927916);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()));
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineSize(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityPressed()));
}
}
{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle(0.5 * (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), 0.5 * (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondaryColor()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawLineV2((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 10, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 2, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 3, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 3 / 4, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawLineV2((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1 / 3 - ((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) * 0.5 / Math.sqrt(2)), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 3 / 4 + ((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()) * 0.5 / Math.sqrt(2)), (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 9 / 10, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 2 / 10, (gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()));
}
}}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadius((gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()) * 1.5);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisabled()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()), 0) > ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getX()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()), 0) < ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getX()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()), 0) > ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getY()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()), 0) < ((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getY()) + 0.5 * (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SideLength((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + Math.max((( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()));
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1[i].setFillOpacity(255);
}
}
{ //Subevents
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetChecked = function(State, parentEventsFunctionContext) {

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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisabled(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabled = function(State, parentEventsFunctionContext) {

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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetDisabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggleChanged(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggleChanged(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToggleChanged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.ToggleCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPrimaryColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetPrimaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSecondaryColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSecondaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityPressed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressed = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityHover((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHover = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadius((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadius = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetHaloRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBorderThickness((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThickness = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetBorderThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSideLength((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLength = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetSideLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLineWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidth = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SetLineWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisabled() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisabled()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.IsDisabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPrimaryColor()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.PrimaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSecondaryColor()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SecondaryColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityPressed()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHover = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.HaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLineWidth()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidth = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.LineWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSideLength()); }}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLength = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.SideLengthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext = {};
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1[i].setClearBetweenFrames(true);
}
}}

}


};

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Checkbox__Checkbox.Checkbox.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Checkbox::Checkbox", gdjs.evtsExt__Checkbox__Checkbox.Checkbox);
