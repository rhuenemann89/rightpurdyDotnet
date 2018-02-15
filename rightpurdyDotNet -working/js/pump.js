

window.addEventListener('DOMContentLoaded', function() {

    //get reference of canvas element from HTML
    var canvas = document.getElementById('renderCanvas');
    //load Babylon engine
    var engine = new BABYLON.Engine(canvas, true);


    /******* generate scene ******/

    var createScene = function() {
        BABYLONX.ShaderBuilder.InitializeEngine();
        // Create the scene space
        BABYLON.SceneLoader.Load("objects/", "pumpV3c.babylon", engine, function(scene){
            scene.executeWhenReady(function(){

                var lid = scene.getMeshByName("Coverplate");
                lid.isVisible = true;

                var boltA = scene.getMeshByName("boltA");
                var boltB = scene.getMeshByName("boltB");
                var boltC = scene.getMeshByName("boltC");
                var boltD = scene.getMeshByName("boltD");


                var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
                light.intensity = 0.25;

                // Parameters: alpha, beta, radius, target position, scene
                var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

                // Positions the camera overwriting alpha, beta, radius
                camera.setPosition(new BABYLON.Vector3(0, 0, 20));


                // This attaches the camera to the canvas
                camera.attachControl(canvas, true);

                camera.lowerBetaLimit = 0.1;
                camera.upperBetaLimit = (Math.PI / 2) * 0.99;
                camera.lowerRadiusLimit = 4;




                var openUp = function (mesh){
                    mesh.actionManager = new BABYLON.ActionManager(scene);


                    mesh.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction(
                            {
                                trigger: BABYLON.ActionManager.OnPickTrigger,
                                parameter: mesh
                            },
                            function(){ mesh.translate(BABYLON.Axis.Y, -120, BABYLON.Space.LOCAL); }
                        )
                    )
                    .then(
                        new BABYLON.ExecuteCodeAction({
                                trigger: BABYLON.ActionManager.OnPickTrigger,
                                parameter: mesh},

                            function(){ mesh.translate(BABYLON.Axis.Y, 120, BABYLON.Space.LOCAL); }
                            )
                        );

                }

                openUp(lid);
                openUp(boltA);




                scene.registerBeforeRender(function () {
                light.position = camera.position;
                });

                engine.runRenderLoop(function(){

                    scene.render();
                });
            });
        });





        return scene;

    }


    /******* End of the create scene function ******/

    //call scene
    var scene = createScene();
    //register render loop on canvas

    //window resize event handler
    window.addEventListener('resize', function() {
        engine.resize();
    });
        
   });