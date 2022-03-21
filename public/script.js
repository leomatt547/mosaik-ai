const img = new Image();
img.crossOrigin = "anonymous";
// some image here
const params = new URLSearchParams(window.location.search)
img.src = params.get('img');
// Load the model.
nsfwjs.load().then((model) => {
  // Classify the image.
  model.classify(img).then((predictions) => {
    console.log("Predictions", predictions);
  });
});