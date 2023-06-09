/**The DOMContentLoaded event listener is used to ensure that the JavaScript code executes only after 
 * the HTML document has finished loading. This ensures that the required elements and resources are 
 * available before manipulating them with JavaScript. */
document.addEventListener('DOMContentLoaded', function() {
    var originalBubbles = document.querySelectorAll('.Bubble');
    var repositionButton = document.getElementById('repositionButton');
    var bubbleContainer = document.getElementById('bubbleContainer');
    var numBubbles = originalBubbles.length;
  
    if (originalBubbles.length > 0) {
      originalBubbles.forEach(function(bubble) {
        bubble.addEventListener('click', function() {
          bubble.style.animation = 'none'; // Stops the animation
          bubble.style.animationDelay = '0s'; // Resets the animation delay
          bubble.style.animationIterationCount = '1'; // Runs the animation only once
          bubble.style.opacity = '0'; // Fades out the bubble
          bubble.addEventListener('animationend', function() {
            bubble.style.display = 'none'; // Hides the bubble after the animation ends
            numBubbles--; // Reduces the number of bubbles
          });
  
          playPopSound(); // Plays the pop sound effect
        });
      });
    } else {
      console.log('No elements found with the class "Bubble".');
    }
    /**The playPopSound function is called when a bubble is clicked. It creates an Audio element and plays a popping 
     * sound effect (var audio = new Audio('pop.wav'); audio.play();). This function adds an auditory feedback to the user 
     * interaction, enhancing the overall experience. */
    function playPopSound() {
      var audio = new Audio('pop.wav'); // Replaces 'pop.wav' with the audio file path
      audio.play();
    }
    /**The repositionBubbles function is called when the "Reposition" button is clicked 
     * (repositionButton.addEventListener('click', function() { ... })). This function is responsible for 
     * repositioning the bubbles on the screen. It first clears the existing bubbles from the bubbleContainer 
     * element (bubbleContainer.innerHTML = '') and resets the number of bubbles (numBubbles = originalBubbles.length). 
     * Then, it iterates over the originalBubbles array and creates new bubble elements using the createElement method. 
     * These new bubble elements are assigned the same class and inner HTML as the original bubbles. Each new bubble 
     * element is positioned randomly within the window bounds (randomX and randomY variables) and appended to the 
     * bubbleContainer. This functionality allows for dynamic repositioning of the bubbles, adding variation to their 
     * appearance. */
    repositionButton.addEventListener('click', function() {
      repositionBubbles();
    });
  
    function repositionBubbles() {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
  
      bubbleContainer.innerHTML = ''; // Clears the existing bubbles
      numBubbles = originalBubbles.length; // Resets the number of bubbles
  
      for (var i = 0; i < originalBubbles.length; i++) {
        var bubble = document.createElement('div');
        bubble.className = 'Bubble';
        bubble.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';
        bubble.addEventListener('click', function() {
          this.style.animation = 'none'; // Stops the animation
          this.style.animationDelay = '0s'; // Resets the animation delay
          this.style.animationIterationCount = '1'; // Runs the animation only once
          this.style.opacity = '0'; // Fades out the bubble
          this.addEventListener('animationend', function() {
            this.style.display = 'none'; // Hidse the bubble after the animation ends
            numBubbles--; // Reduces the number of bubbles
          });
  
          playPopSound(); // Plays the pop sound effect
        });
  
        var bubbleWidth = originalBubbles[i].offsetWidth;
        var bubbleHeight = originalBubbles[i].offsetHeight;
  
        var randomX = Math.floor(Math.random() * (windowWidth - bubbleWidth));
        var randomY = Math.floor(Math.random() * (windowHeight - bubbleHeight));
  
        bubble.style.left = randomX + 'px';
        bubble.style.top = randomY + 'px';
  
        bubbleContainer.appendChild(bubble);
      }
    }
  });
  
  function togglePopup() {
    document.getElementById('popup').classList.toggle('active');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    var muteButton = document.getElementById('muteButton');
  
    // Checks if the browser supports the 'muted' property of the Audio element
    var isMutedSupported = typeof backgroundMusic.muted !== 'undefined';
  
    if (isMutedSupported) {
      muteButton.innerText = backgroundMusic.muted ? 'Unmute' : 'Mute';
    } else {
      muteButton.style.display = 'none'; // Hides the button if mute functionality is not supported
    }
  
    /**Adds event listener to toggle mute/unmute when the button is clicked. This functionality 
     * allows the user to control the background music and provides a user-friendly interface for muting/unmuting the audio.*/
    muteButton.addEventListener('click', function() {
      if (isMutedSupported) {
        backgroundMusic.muted = !backgroundMusic.muted;
        muteButton.innerText = backgroundMusic.muted ? 'Unmute' : 'Mute';
      }
    });
  });