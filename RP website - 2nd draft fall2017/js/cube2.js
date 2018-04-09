

window.addEventListener('DOMContentLoaded', function() {

        //get reference of canvas element from HTML
    	var canvas = document.getElementById('renderCanvas');
        //load Babylon engine
    	var engine = new BABYLON.Engine(canvas, true);
        
    
                
        

    	/******* generate scene ******/
    	
        var createScene = function() {
    		
        	// Create the scene space
            var scene = new BABYLON.Scene(engine);

            // Add a camera to the scene and attach it to the canvas
            var camera = new BABYLON.ArcRotateCamera("Camera", 0.85, 0.95, 10, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, false);
            
            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.99;
            camera.lowerRadiusLimit = 3;
            
            scene.clearColor = new BABYLON.Color3(0, 6, 10);
  


            var light3 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(1, -1, -3), scene);

            
            var ground = BABYLON.Mesh.CreateGround("ground", 50, 50, 1, scene, false);
            var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
            groundMaterial.specularColor = BABYLON.Color3.Black();
            ground.material = groundMaterial;


            
            BABYLON.SceneLoader.ImportMesh("", "objects/aniPump/", "pumpV2.babylon", scene, function (pump) {
                
                var pump0 = pump[0];
                pump0.isVisible = false;
                var bolt0 = pump[1];
                bolt0.isVisible = true;
                var bolt1 = pump[2];
                bolt1.isVisible = true;
                var bolt2 = pump[3];
                bolt2.isVisible = true;
                var bolt3 = pump[4];
                bolt3.isVisible = true;
                
                var hub = pump[5];
                hub.isVisible = true;
                
                
                var blade3 = pump[6];
                blade3.isVisible = true;
                
                
                var blade2 = pump[7];
                blade2.isVisible = true;
                
                
                var blade1 = pump[8];
                blade1.isVisible = true;
                
                
                var blade0 = pump[9];
                blade0.isVisible = true;
                
                
                var motor = pump[10];
                motor.isVisible = true;

                camera.target = hub;
                
                
                
                
            });
            
            
            
           

            return scene;
            
		}
        
        
        /******* End of the create scene function ******/
        
        //call scene
        var scene = createScene();
        //register render loop on canvas
        engine.runRenderLoop(function() {
            scene.render();
        });
        //window resize event handler
        window.addEventListener('resize', function() {
            engine.resize();
        });
        
   });