const video = document.querySelector("video")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')
const faceTracker = new tracking.ObjectTracker('face')
const button = document.querySelector('button')

faceTracker.setInitialScale(4)
tracking.track(video, faceTracker, {camera: true})

faceTracker.on('track', function(event) {
  if (event.data.length != 0) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    event.data.forEach((rect) => {
      const centerX = rect.x + (rect.width/2)
      const centerY = rect.y + (rect.height/2)
      ctx.strokeStyle = "#FF0000";
      ctx.fillRect(centerX, centerY, 10, 10)

    });
  }
});


button.addEventListener("click", function() {
  let switchState = this.innerHTML
  if(switchState === "on"){
    this.innerHTML = 'off'
  } else {
    this.innerHTML = "on"
  }
})


