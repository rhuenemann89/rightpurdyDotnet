

window.addEventListener('DOMContentLoaded', function() {

        //get reference of canvas element from HTML
    	var canvas = document.getElementById('renderCanvas');
        //load Babylon engine
    	var engine = new BABYLON.Engine(canvas, true);
        
    
    	/******* generate scene ******/
    	
        var createScene = function() {
    		
        	// Create the scene space
            BABYLON.SceneLoader.Load("objects/aniPump/", "pumpV22.babylon", engine, function(scene){
                scene.executeWhenReady(function(){
                    
                
                    var m0 = scene.meshes[0]
                    m0.isVisible = true;
                    var boltR = scene.meshes[1]
                    boltR.isVisible = true;
                    var m2 = scene.meshes[2]
                    m2.isVisible = true;
                    var m3 = scene.meshes[3]
                    m3.isVisible = true;
                    var m4 = scene.meshes[4]
                    m4.isVisible = true;
                    var m5 = scene.meshes[5]
                    m5.isVisible = true;
                    
                    
                    
                    var m6 = scene.meshes[6]
                    m6.isVisible = true;
                    var m7 = scene.meshes[7]
                    m7.isVisible = true;
                    var m8 = scene.meshes[8]
                    m8.isVisible = true;
                    var m9 = scene.meshes[9]
                    m9.isVisible = true;
                    var m10 = scene.meshes[10]
                    m10.isVisible = true;
                    
                    
                    
                    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
                    light.intensity = 0.25;
                    
                    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 5, 5, new BABYLON.Vector3(0, 0, 10), scene);


                    // This attaches the camera to the canvas
                    camera.attachControl(canvas, true);
                    
                    camera.lowerBetaLimit = 0.1;
                    camera.upperBetaLimit = (Math.PI / 2) * 0.99;
                    camera.lowerRadiusLimit = 3;
                    camera.target = m5;
                    scene.clearColor = new BABYLON.Color3(0, 6, 10);
                    
                    
                    
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