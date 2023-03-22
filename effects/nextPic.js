    // Define the array of images to cycle through
$(document).ready(function(){
    // Important, after added each pic, remember to add it to this array!!! 
    var images = [
        "../images/myself2.JPG",
        "../images/christmas1.JPG",
        "../images/food1.JPG",
        "../images/food2.JPG",
        "../images/food3.JPG",
        "../images/food4.JPG"
    ];
    var currentIndex = 0;
  
    // Display the first image on page load
    $("#profile-image").attr("src", images[currentIndex]);
  
    // Generate dots based on number of images
    for (var i = 0; i < images.length; i++) {
        $(".dot-container").append("<div class='dot'></div>");
    }
  
    // Set active class on first dot
    $(".dot:first-child").addClass("active");
  
    // Handle click event for "next" button
    $("#next-button").click(function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        $("#profile-image").attr("src", images[currentIndex]);
        updateDots();
    });
  
    // Handle click event for "previous" button
    $("#previous-button").click(function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        $("#profile-image").attr("src", images[currentIndex]);
        updateDots();
    });
  
    // Update dots to show which image is active
    function updateDots() {
        $(".dot").removeClass("active");
        $(".dot:nth-child(" + (currentIndex + 1) + ")").addClass("active");
    }
});


// fade in fade out transition

// $(document).ready(function() {
//     var images = [
//         "../images/myself2.JPG",
//         "../images/christmas1.JPG",
//         "../images/food1.JPG",
//         "../images/food2.JPG",
//         "../images/food3.JPG",
//         "../images/food4.JPG"
//     ];
//     var currentIndex = 0;
  
//     $("#profile-image").attr("src", images[currentIndex]);
  
//     for (var i = 0; i < images.length; i++) {
//         $(".dot-container").append("<div class='dot'></div>");
//     }
  
//     $(".dot:first-child").addClass("active");
  
//     $("#next-button").click(function() {
//         currentIndex++;
//         if (currentIndex >= images.length) {
//             currentIndex = 0;
//         }
//         changeImageWithTransition();
//         updateDots();
//     });
  
//     $("#previous-button").click(function() {
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = images.length - 1;
//         }
//         changeImageWithTransition();
//         updateDots();
//     });
  
//     function changeImageWithTransition() {
//         $("#profile-image").fadeOut(400, function() {
//             $(this).attr("src", images[currentIndex]).fadeIn(400);
//         });
//     }
  
//     function updateDots() {
//         $(".dot").removeClass("active");
//         $(".dot:nth-child(" + (currentIndex + 1) + ")").addClass("active");
//     }
// });
