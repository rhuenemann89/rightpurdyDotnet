/**
 * 
 */

window.addEventListener('DOMContentLoaded', function() {

	//get reference of canvas element from HTML
	var canvas = document.getElementById('renderCanvas');
	//load Babylon engine
	var engine = new BABYLON.Engine(canvas, true);

	/******* generate scene ******/

	var createScene = function() {

		// This creates a basic Babylon Scene object (non-mesh)
		var scene = new BABYLON.Scene(engine);

		new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 400, 200), scene);
		var cam = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 500, new BABYLON.Vector3(0, 3, 0), scene);
		cam.attachControl(canvas);
		
		var toad;
		    
		
	    BABYLON.SceneLoader.ImportMesh("", "objects/Roary/", "RoaryOnePiece.obj", scene, function (meshes) {
	    	var m = meshes[0];
	    	m.position.y = 4;
	    	toad = m;
	    });

		

		var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
	    sphere.position.y = 1;

	    // Respond to w key down
	    scene.actionManager = new BABYLON.ActionManager(scene);
	    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, (evt) => {
	        if (evt.sourceEvent.key == "w") {
	        	toad.__W_Pressed = true;
	        }
	    }));

	    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, (evt) => {
	        if (evt.sourceEvent.key == "w") {
	        	toad.__W_Pressed = false;
	        }
	    }));

	    scene.registerBeforeRender(function(){
	        if(!scene.isReady()) return;

	        if(toad){
	            if(toad.__W_Pressed) toad.translate(BABYLON.Axis.X, -0.1, BABYLON.Space.LOCAL);
	        }
	    });
	    
		var ground = BABYLON.Mesh.CreateGround("floor", 500, 500, 100, scene);
		ground.position.y = -150;

		var materialGround = new BABYLON.StandardMaterial("groundcolor", scene);
		ground.material = materialGround;
		materialGround.diffuseTexture = new BABYLON.Texture("objects/RoaryPoly/road.jpg", scene);
	
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