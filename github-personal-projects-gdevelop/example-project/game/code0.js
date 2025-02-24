gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code = {};
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.localVariables = [];
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1= [];
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2= [];
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1= [];
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2= [];
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1= [];
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects2= [];


gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951110_95951084_95951077_95951085_95951085_95951072_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDMeteor3Objects1Objects = Hashtable.newFrom({"Meteor3": gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1});
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951110_95951084_95951077_95951085_95951085_95951072_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1});
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951110_95951084_95951077_95951085_95951085_95951072_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDMeteor3Objects1Objects = Hashtable.newFrom({"Meteor3": gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1});
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].addForce(-(200), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].addForce(200, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].addForce(0, -(200), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1[i].addForce(0, 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "generate", 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951110_95951084_95951077_95951085_95951085_95951072_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDMeteor3Objects1Objects, "Meteor" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 10)), gdjs.randomInRange(30, 610), 200, "");
}{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1[i].getBehavior("Scale").setScale(gdjs.randomInRange(0.1, 0.4));
}
}{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1[i].addPolarForce(90, 100, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Meteor3"), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951110_95951084_95951077_95951085_95951085_95951072_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDNewSprite2Objects1Objects, gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951110_95951084_95951077_95951085_95951085_95951072_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDMeteor3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


};

gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects2.length = 0;

gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects1.length = 0;
gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code.GDMeteor3Objects2.length = 0;


return;

}

gdjs['_1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code'] = gdjs._1041_1077_1079_1110_1084_1077_1085_1085_1072_32_1089_1094_1077_1085_1072Code;
