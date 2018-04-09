

window.addEventListener('DOMContentLoaded', function() {

    //get reference of canvas element from HTML
    var canvas = document.getElementById('renderCanvas');
    //load Babylon engine
    var engine = new BABYLON.Engine(canvas, true);


    /******* generate scene ******/

    var createScene = function() {
        BABYLONX.ShaderBuilder.InitializeEngine();
        // Create the scene space
        BABYLON.SceneLoader.Load("https://rawgit.com/rhuenemann89/rightpurdyDotnet/master/rightpurdyDotNet%20-working/objects/", "pumpV4.babylon", engine, function(scene){
            scene.executeWhenReady(function(){

                var lid = scene.getMeshByName("Coverplate");
                lid.isVisible = true;
                
                var motor = scene.getMeshByName("Motor");
                motor.isVisible = true;
                
                var hub = scene.getMeshByName("centerhub");

                var boltA = scene.getMeshByName("boltA");
                var boltB = scene.getMeshByName("boltB");
                var boltC = scene.getMeshByName("boltC");
                var boltD = scene.getMeshByName("boltD");

                var startPoint1 = scene.beginAnimation(lid, 0, 1, false);
                var startPoint2 = scene.beginAnimation(boltA, 982, 983, false);
                var startPoint3 = scene.beginAnimation(boltB, 1122, 1123, false);
                var startPoint4 = scene.beginAnimation(boltC, 1262, 1263, false);
                var startPoint5 = scene.beginAnimation(boltD, 1402, 1403, false);

                
                // Camera Light
                var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
                light.intensity = 0.25;

                
                // Camera
                // Parameters: alpha, beta, radius, target position, scene
                var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
                // Positions the camera overwriting alpha, beta, radius
                camera.setPosition(new BABYLON.Vector3(5, 5, 5));
                // This attaches the camera to the canvas
                camera.attachControl(canvas, true);
                // Camera Limits
                camera.lowerBetaLimit = 0.1;
                camera.upperBetaLimit = (Math.PI / 2) * 0.99;
                camera.lowerRadiusLimit = 3;
                camera.wheelPrecision = 50; 
                camera.target = hub;

                
                
                
                
                // skybox
                var skybox = BABYLON.Mesh.CreateBox("skyBox", 500.0, scene);

                // The sky creation
                BABYLON.Effect.ShadersStore.gradientVertexShader = "precision mediump float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec4 vPosition;varying vec3 vNormal;void main(){vec4 p = vec4(position,1.);vPosition = p;vNormal = normal;gl_Position = worldViewProjection * p;}";

                BABYLON.Effect.ShadersStore.gradientPixelShader = "precision mediump float;uniform mat4 worldView;varying vec4 vPosition;varying vec3 vNormal;uniform float offset;uniform vec3 topColor;uniform vec3 bottomColor;void main(void){float h = normalize(vPosition+offset).y;gl_FragColor = vec4(mix(bottomColor,topColor,max(pow(max(h,0.0),0.6),0.0)),1.0);}";

                var shader = new BABYLON.ShaderMaterial("gradient", scene, "gradient", {});
                shader.setFloat("offset", 10);
                shader.setColor3("topColor", BABYLON.Color3.FromInts(0,119,255));
                shader.setColor3("bottomColor", BABYLON.Color3.FromInts(102,102,102));
                shader.backFaceCulling = false;
                // box + sky = skybox !
                skybox.material = shader;
                

                
                
                
                //lid animation
                var openUp = function (mesh){
                    
                    var lidAnimation
                    var boltAAnimation
                    var boltBAnimation
                    var boltCAnimation
                    var boltDAnimation
                    
                    mesh.actionManager = new BABYLON.ActionManager(scene);

                    
                    mesh.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction(
                            {
                                trigger: BABYLON.ActionManager.OnPickTrigger,
                                parameter: mesh
                            },
                            function(){ lidAnimation = scene.beginAnimation(lid, 140, 164, false);
                                        boltAAnimation = scene.beginAnimation(boltA, 292, 313, false);
                                       boltBAnimation = scene.beginAnimation(boltB, 432, 453, false);
                                       boltCAnimation = scene.beginAnimation(boltC, 572, 593, false);
                                       boltDAnimation = scene.beginAnimation(boltD, 712, 733, false);
                                        
                                        
                                      }
                        )
                    )
                    .then(
                        new BABYLON.ExecuteCodeAction(
                            {
                                trigger: BABYLON.ActionManager.OnPickTrigger,
                                parameter: mesh
                            },

                            function(){ lidAnimation = scene.beginAnimation(lid, 172, 196, false);
                                        boltAAnimation = scene.beginAnimation(boltA, 319, 343, false);
                                        boltBAnimation = scene.beginAnimation(boltB, 459, 483, false);
                                        boltCAnimation = scene.beginAnimation(boltC, 599, 623, false);
                                        boltDAnimation = scene.beginAnimation(boltD, 739, 763, false);
                                      }
                            )
                    );
                    
                    
                    // hover text box
                    mesh.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction(
                            {
                                trigger: BABYLON.ActionManager.OnPointerOutTrigger,
                                parameter: mesh
                            },
                            function(){ advancedTexture._rootContainer.isVisible = false;
                                      }
                        )
                    );
                    mesh.actionManager.registerAction(
                        new BABYLON.ExecuteCodeAction(
                            {
                            trigger: BABYLON.ActionManager.OnPointerOverTrigger,
                            parameter: mesh
                            },
                            function(){ advancedTexture._rootContainer.isVisible = true;
                                      }
                        )
                    );
                    

                }

                // apply animation to lid
                openUp(lid);
                
                
                // text box design
                var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

                var rect1 = new BABYLON.GUI.Rectangle();
                rect1.width = 0.2;
                rect1.height = "40px";
                rect1.cornerRadius = 20;
                rect1.color = "lightgray";
                rect1.thickness = 4;
                rect1.background = "green";
                advancedTexture.addControl(rect1);
                
                advancedTexture._rootContainer.isVisible = false;

                var label = new BABYLON.GUI.TextBlock();
                label.text = "Click Me";
                rect1.addControl(label);

                rect1.linkWithMesh(lid);   
                rect1.linkOffsetY = -30;

                
                
                //end of scene functions

                scene.registerBeforeRender(function () {
                // attach light to camera
                light.position = camera.position;
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




