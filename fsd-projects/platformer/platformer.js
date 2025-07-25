$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(715,275,30,300, "red")
    createPlatform(150,650,110,25, "blue")
    createPlatform(350,525,110,25, "green")
    createPlatform(575,400,65,25, "blue")
    createPlatform(850,500,110,25, "green")
    createPlatform(1050,400,110,25, "blue")
    createPlatform(1250,700,65,25, "green")



    // TODO 3 - Create Collectables
    createCollectable("database",390,475)
    createCollectable("grace",880,450,-1,1)
    createCollectable("kennedi",1260,650)



    
    // TODO 4 - Create Cannons
createCannon("left",500,3000)
createCannon("bottom",740,3000)
createCannon("right",500,3000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
