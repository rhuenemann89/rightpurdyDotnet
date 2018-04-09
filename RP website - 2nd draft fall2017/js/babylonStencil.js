
window.addEventListener('DOMContentLoaded', function() {

    //get reference of canvas element from HTML
    var canvas = document.getElementById('renderCanvas');
    //load Babylon engine
    var engine = new BABYLON.Engine(canvas, true);


    /******* generate scene ******/

    var createScene = function() {
        
        // Create the scene space
        BABYLON.SceneLoader.Load("", "", engine, function(scene){
            scene.executeWhenReady(function(){

                
                
                
               

                
                
                //end of scene functions

                scene.registerBeforeRender(function () {
                
                });

                engine.runRenderLoop(function(){

                    scene.render();
                });
            });
        });


        return scene;

    }

    //call scene
    var scene = createScene();
 
   });




