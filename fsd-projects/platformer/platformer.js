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
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(900, 300, 150, 20, "red");
    createPlatform(550, 500, 200, 35, "darkblue")
    createPlatform(300, 625, 200, 25, "lime")
    createPlatform(250, 380, 200, 25, "gold")
    createPlatform(800, 400, 150, 20, "red")
    createPlatform(1250, 450, 300, 50, "orange")



    // TODO 3 - Create Collectables
    createCollectable("steve", 1350, 70, 1, 0.5);
    createCollectable("diamond", 850, 550,);
    createCollectable("database", 325, 325,);


    
    // TODO 4 - Create Cannons
    createCannon("top", 400, 1000);
    createCannon("right", 270, 2000);
    createCannon("bottom", 1000, 2000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
