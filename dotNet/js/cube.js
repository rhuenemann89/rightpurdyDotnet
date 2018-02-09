

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
            var camera = new BABYLON.ArcRotateCamera("Camera", -0.65, 0.95, 400, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, false);
            
            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.99;
            camera.lowerRadiusLimit = 150;
            
            scene.clearColor = new BABYLON.Color3(0, 6, 10);
  


            var light = new BABYLON.PointLight("omni", new BABYLON.Vector3(200, 500, -400), scene);

            
            var ground = BABYLON.Mesh.CreateGround("ground", 1000, 1000, 1, scene, false);
            var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
            groundMaterial.specularColor = BABYLON.Color3.Black();
            ground.material = groundMaterial;


            
            BABYLON.SceneLoader.ImportMesh("", "objects/", "pump.obj", scene, function (pump) {
                var pumpMotor = pump[0];
                pumpMotor.isVisible = true;
                var pumpHub = pump[1];
                pumpHub.isVisible = true;
                var pumpBlade1 = pump[2];
                pumpBlade1.isVisible = true;
                var pumpBlade2 = pump[3];
                pumpBlade2.isVisible = true;
                var pumpBlade3 = pump[4];
                pumpBlade3.isVisible = true;
                var pumpBlade4 = pump[5];
                pumpBlade4.isVisible = true;
                
                var pumpCover = pump[6];
                pumpCover.isVisible = true;
                

                
                
                var pumpScrew1 = pump[7];
                pumpScrew1.isVisible = true;
                var pumpScrew2 = pump[8];
                pumpScrew2.isVisible = true;
                var pumpScrew3 = pump[9];
                pumpScrew3.isVisible = true;
                var pumpScrew4 = pump[10];
                pumpScrew4.isVisible = true;
                
                pumpCover.actionManager = new BABYLON.ActionManager(scene);
                pumpCover.actionManager
        .registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPickTrigger,
                pumpCover,
                'visibility',
                0,
                1000
            )
        )
        .then(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPickTrigger,
                pumpCover,
                'visibility',
                1.0,
                1000
            )
        );
                
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