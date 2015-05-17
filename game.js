//var cloud1RefY = 0;
//var cloud2RefY = 0;
var stage, w, h, loader;
//var sky, monkey, ground, cloud, cloud2;
var monkeys = [];

var container = [];

var TH = 3;
var TW = 3;

var branchInterval;

var keepAspectRatio = true;

var btn1;

var MAX_BRANCHES = 20;

var allowMotion = true;

var branchImg;
var branchImg2;

function init() {
	
	$( "#outerwrapper" ).slideUp(0).slideDown(400).fadeIn( 400 );
	
	//Create handler for typing in box.
	$( "#user_answer" ).keypress(function(e)
	{
		//Check for enter.
		if(e.charCode == 13)
			answered($("#user_answer").text());
	});
	
	$( "#btn_start" ).click( function() {
                $( "#start_form" ).css("visibility", "hidden");
                $( "#start_form" ).css("display", "none");
                $( "#bottom_form" ).css("visibility", "hidden");
                $( "#bottom_form" ).css("display", "none");
                $( "#login_form" ).css("visibility", "visible");
                $( "#login_form" ).css("display", "block");
                $( "#report_form" ).css("visibility", "hidden");
                $( "#report_form" ).css("display", "none");
                
    });
	$( "#btn_play" ).click(function() {
                $( "#start_form" ).css("visibility", "hidden");
                $( "#start_form" ).css("display", "none");
                $( "#bottom_form" ).css("visibility", "visible");
                $( "#bottom_form" ).css("display", "block");
                $( "#login_form" ).css("visibility", "hidden");
                $( "#login_form" ).css("display", "none");
                $( "#report_form" ).css("visibility", "hidden");
                $( "#report_form" ).css("display", "none");
                
                // Clear title
                $( "#title_stuff" ).css("visibility", "hidden");
                $( "#title_stuff" ).css("display", "none");
                
                
                document.getElementById("btn_enter").onclick = answerEntered;
				document.getElementById("btn_skip").onclick = skip;
				document.getElementById("btn_challenge").onclick = challenge;
				document.getElementById("btn_start").onclick = startGame;
                
                //Set Player Names.
                playerNames[0] = document.getElementById("player_one").value;
                playerNames[1] = document.getElementById("player_two").value;
                
                addStudent(playerNames[0]);
                addStudent(playerNames[1]);
                
                startUpGameCanvas();
                startGame();
    });
	$( "#link_quit" ).click(function() {
               	$( "#start_form" ).css("visibility", "visible");
                $( "#start_form" ).css("display", "block");
                $( "#bottom_form" ).css("visibility", "hidden");
                $( "#bottom_form" ).css("display", "none");
                $( "#login_form" ).css("visibility", "hidden");
                $( "#login_form" ).css("display", "none");
                $( "#report_form" ).css("visibility", "hidden");
                $( "#report_form" ).css("display", "none");
                
                 // reset title
                $( "#title_stuff" ).css("visibility", "visible");
                $( "#title_stuff" ).css("display", "block");
    });
    
    $( "#restart" ).click(function() {
               	$( "#start_form" ).css("visibility", "visible");
                $( "#start_form" ).css("display", "block");
                $( "#bottom_form" ).css("visibility", "hidden");
                $( "#bottom_form" ).css("display", "none");
                $( "#login_form" ).css("visibility", "hidden");
                $( "#login_form" ).css("display", "none");
                $( "#report_form" ).css("visibility", "hidden");
                $( "#report_form" ).css("display", "none");
                
                // reset title
                $( "#title_stuff" ).css("visibility", "visible");
                $( "#title_stuff" ).css("display", "block");
    });
    
    $( "#btn_report" ).click( function() {
                $( "#start_form" ).css("visibility", "hidden");
                $( "#start_form" ).css("display", "none");
                $( "#bottom_form" ).css("visibility", "hidden");
                $( "#bottom_form" ).css("display", "none");
                $( "#login_form" ).css("visibility", "hidden");
                $( "#login_form" ).css("display", "none");
                $( "#report_form" ).css("visibility", "visible");
                $( "#report_form" ).css("display", "block");
                
    });
    
    $( "#to_home" ).click(function() {
               	$( "#start_form" ).css("visibility", "visible");
                $( "#start_form" ).css("display", "block");
                $( "#bottom_form" ).css("visibility", "hidden");
                $( "#bottom_form" ).css("display", "none");
                $( "#login_form" ).css("visibility", "hidden");
                $( "#login_form" ).css("display", "none");
                $( "#report_form" ).css("visibility", "hidden");
                $( "#report_form" ).css("display", "none");
                
                // reset title
                $( "#title_stuff" ).css("visibility", "visible");
                $( "#title_stuff" ).css("display", "block");
    });
    
    
      
	//alert("hello");
	//var btn = document.getElementById("btn");
	//btn.onclick = handleJumpStart;
	
	//examples.showDistractor();
	//========================
	//Display some loading text or something here.
	//========================
	stage = new createjs.Stage("canvas");
	
	//branchInterval = stage.canvas.height/3;
	//branchInterval = branchImg.height;
	
	//Enable mouse over.
	//stage.enableMouseOver();

	// grab canvas width and height for later calculations:
	w = stage.canvas.width;
	h = stage.canvas.height;

	manifest = [
		{src: "monkey_spritesheet.png", id: "monkey"},
		{src: "sky.png", id: "sky"},
		{src: "ground.png", id: "ground"},
		{src: "cloud_PNG3.png", id: "cloud"},
		{src: "cloud_PNG4.png", id: "cloud2"},
		{src: "branch.png", id: "branch"},
		{src: "branch2.png", id: "branch2"}
	];

	loader = new createjs.LoadQueue(false);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(manifest, true, "EaselJS-0.8.0/_assets/art/");
}

//Adapted from "digitalorange"'s post at:
//http://community.createjs.com/discussions/createjs/547-resizing-canvas-and-its-content-proportionally-cross-platform
function onResize()
{
	var stagediv = document.getElementById("maingame");
	
	//stage.canvas.height = $("#maingame").width();
	//stage.canvas.width = $("#maingame").width();
	var tempWidth = $( window ).width();
	if (tempWidth < 800) {
		stage.canvas.width = tempWidth;
		stage.canvas.height = (tempWidth * 4) / 3;
		//console.log("changing width");
	} else {
		stage.canvas.width = 800;
		stage.canvas.height = 600;
		//console.log("normal width");
	}

	
	w = stage.canvas.width;
	h = stage.canvas.height;
	
	//branchInterval = stage.canvas.height/4;
	branchInterval = branchImg.height;
	
	 // update the stage
	stage.update(); // test
}

var branches = [];

function handleComplete() {
	
	//Start code could go here.
	
}

function startUpGameCanvas()
{
	//Holds monkey 1 stuff.
	container[0] = new createjs.Container();
	//Holds monkey 2 stuff.
	container[1] = new createjs.Container();
	//Holds sky.
	container[3] = new createjs.Container();
	
	//examples.hideDistractor();

	//alert("hello");
	
	//btn1 = stage.addChild(new Button("Start Game","#0FF"));
	
	//btn1.y = 20;
	
	/*createjs.Tween.get(cloud, {loop: false})
          .to({x: (stage.width - btn1.w), y: (stage.height - btn1.h)}, 1500, createjs.Ease.getPowInOut(4));*/
	
	sky = new createjs.Shape();
	sky.graphics.beginBitmapFill(loader.getResult("sky")).drawRect(0, 0, w, h);

	var groundImg = loader.getResult("ground");
	ground = new createjs.Shape();
	ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height);
	ground.tileW = groundImg.width;
	ground.y = h - groundImg.height;

	cloud = new createjs.Bitmap(loader.getResult("cloud"));
	cloud.setTransform(Math.random() * w, h - cloud.image.height * 4 - groundImg.height, 4, 4);
	//cloud.alpha = 0.5;

	cloud2 = new createjs.Bitmap(loader.getResult("cloud"));
	cloud2.setTransform(Math.random() * w, h - cloud2.image.height * 3 - groundImg.height, 3, 3);

	var spriteSheet = new createjs.SpriteSheet({
			framerate: 30,
			"images": [loader.getResult("monkey")],
			"frames": {"regX": 0, "height": 200, "count": 20, "regY": 0, "width": 200},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"run": [0, 0, "run", 1.5],
				"jump": [7, 19, "run"]
			}
		});
	
	branchImg = loader.getResult("branch");
	
	branchInterval = branchImg.height;
	
	//for(i = 0; i < MAX_BRANCHES; i++)
	//{
		var branch = new createjs.Shape();
		
		branch.graphics.beginBitmapFill(loader.getResult("branch")).drawRect(0, 0, branchImg.width, - branchImg.height * MAX_BRANCHES);
		
		//branch.scaleX = -1;
		
		/*branch.scaleX = -1;
		branch.regX = 0;
		branch.regY = 0;
		branch.height = 200;
		branch.width = 200;*/
		branch.x = 0;
		//branch.y = 35 - i*branchInterval;
		branch.y = 240;
		
		container[0].addChild(branch);
	//}
		
		branchImg2 = loader.getResult("branch2");
	
		var branch2 = new createjs.Shape();
	
		branch2.graphics.beginBitmapFill(loader.getResult("branch2")).drawRect(0, 0, branchImg2.width, - branchImg2.height * MAX_BRANCHES);
		
		//branch.scaleX = -1;
		
		/*branch.scaleX = -1;
		branch.regX = 0;
		branch.regY = 0;
		branch.height = 200;
		branch.width = 200;*/
		branch2.x = w - branchImg.width;
		//branch.y = 35 - i*branchInterval;
		branch2.y = 240;
		
		container[1].addChild(branch2);
	
	monkeys[0] = new createjs.Sprite(spriteSheet, "run");
	monkeys[1] = new createjs.Sprite(spriteSheet, "run");
	
	//monkey.gotoAndStop(0);
	
	monkeys[0].x = 0;
	monkeys[0].y = 35;
	
	monkeys[1].x = stage.canvas.width - (monkeys[1].getBounds().width * monkeys[1].scaleX);
	monkeys[1].y = 35;

	container[3].addChild(cloud, cloud2, ground);

	container[0].addChild(monkeys[0]);
	container[1].addChild(monkeys[1]);
	
	//stage.addChild(sky);
	stage.addChild(container[3]);
	stage.addChild(container[0]);
	stage.addChild(container[1]);
	
	//stage.addEventListener("stagemousedown", handleJumpStart);

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", tick);
	
	//cloud.y -= 150;
	//cloud2.y -= 150;
	//ground.y -= 150;
	
	window.onresize = onResize;// test
	
	//Make sure we have correct sizing.
	//onResize();
}

function monkeyJump(player_id, up)
{
	var amount;
	
	if(up)
		amount = branchInterval;
	else
		amount = -branchInterval;
	
	if(allowMotion == true)
	{
		allowMotion = false;
		
		monkeys[player_id].gotoAndPlay("jump");
		
		 createjs.Tween.get(monkeys[player_id], {loop: false})
	    	  .to({y: monkeys[player_id].y - amount}, 100, createjs.Ease.getPowInOut(2))
	    
	    createjs.Tween.get(container[3], {loop: false})
	    		.to({y: container[3].y + amount}, 1000, createjs.Ease.getPowInOut(4));
	          
	    createjs.Tween.get(container[player_id], {loop: false})
	    		.to({y: container[player_id].y + amount}, 1000, createjs.Ease.getPowInOut(4))
	    		.call(doneTweening);
	    
	    return true;
	}
	else
	{
		return false;
	}
}

function doneTweening()
{
	allowMotion = true;
}

function handleJumpStart() {
	//monkeys[0].gotoAndPlay("jump");
	//monkeys[1].gotoAndPlay("jump");
	
	monkeyJump(Math.floor(Math.random() * 2), true);
	
	//cloud1RefY = cloud.y + 20*3;
	//cloud2RefY = cloud2.y + 20*3;
	
	/*createjs.Tween.get(cloud, {loop: false})
          .to({y: cloud.y - branchInterval}, 100, createjs.Ease.getPowInOut(4))
          .to({y: cloud.y - branchInterval}, 100, createjs.Ease.getPowInOut(2));
          
    createjs.Tween.get(cloud2, {loop: false})
          .to({y: cloud2.y - branchInterval}, 100, createjs.Ease.getPowInOut(4))
          .to({y: cloud2.y - branchInterval}, 100, createjs.Ease.getPowInOut(2));*/
    		
   	//displayBlockText(generate_word_problem({operation:"-",value1:10,value2:10}));
}

function tick(event) {

	var deltaS = event.delta / 1000;
	//var position = monkey.x + 150 * deltaS;
	
	//var monkeyW = monkey.getBounds().width * monkey.scaleX;
	
	//monkey.x = (position >= w + monkeyW) ? -monkeyW : position;

	//ground.x = (ground.x - deltaS * 150) % ground.tileW;
	cloud.x = (cloud.x - deltaS * 85);
	if (cloud.x + cloud.image.width * cloud.scaleX <= 0) {
		cloud.x = w;
	}
	cloud2.x = (cloud2.x - deltaS * 100);
	if (cloud2.x + cloud2.image.width * cloud2.scaleX <= 0) {
		cloud2.x = w;
	}
	stage.update(event);
}

var text;
var text_bg;

function displayBlockText(blocktext)
{
	//Remove old text if any.
	if(text !== undefined && stage.contains(text))
	{
		stage.deleteChild(text);
	}

	if(text_bg !== undefined && stage.contains(text_bg))
	{
		stage.deleteChild(text_bg);
	}

	stage.update();

	//Create text.
	text = new createjs.Text(blocktext, "15px Arial", "#111");
	
	text.lineWidth = 550;
	text.lineHeight = 22;
	text.textBaseline = "top";
	text.textAlign = "left";
	text.y = 50;
	text.x = (stage.canvas.width - 550) / 2;
	
	text_bg = new createjs.Shape();
	
	//Create text box.
	var bounds = text.getBounds();
	var pad = 10;
	text_bg.graphics.beginFill("#ABC").drawRect(text.x - pad + bounds.x, text.y - pad + bounds.y, bounds.width + pad * 2, bounds.height + pad * 2);
	
	stage.addChild(text_bg, text);
	
	//Update stage.
	stage.update();
}

function answered()
{
	var inputbox = document.getElementById("user_answer").value;
	
	answerEntered();
	
	return false;
	
}