# Object-Detection-Web-App
It is a web app in which real time photos are captured with the help of webcam, after which it identifies objects in the captured images. It uses COCO SSD  pre-trained model to detect objects in the captured images. And tensorflow.js is used to run the model directly in the browser.
![alt text](/screenshots/screenshot_1.png)
![alt text](/screenshots/screenshot_2.png)

## [Object Detection (coco-ssd)](https://www.npmjs.com/package/@tensorflow-models/coco-ssd)

Object detection model that aims to localize and identify multiple objects in a single image.

This model is a TensorFlow.js port of the COCO-SSD model. For more information about Tensorflow object detection API, check out this readme in [tensorflow/object_detection](https://github.com/tensorflow/models/blob/master/research/object_detection/README.md).

This model detects objects defined in the COCO dataset, which is a large-scale object detection, segmentation, and captioning dataset. You can find more information [here](http://cocodataset.org/#home). The model is capable of detecting [90 classes of objects](https://github.com/tensorflow/tfjs-models/blob/HEAD/src/classes.ts). (SSD stands for Single Shot MultiBox Detection).

### Usage

```
const [model, setModel] = useState(null);
const [predictions, setPredictions] = useState(null);

useEffect(() => {
    const loadModel = async () => {
      const newModel = await cocoSsd.load({ base: "lite_mobilenet_v2" });
      setModel(newModel);
    };
    loadModel().then(setIsModelLoaded(true));
  }, []);

model.detect(document.getElementById("webcamFeed"))
    .then(predictions => {
        setPredictions(predictions);
    })
```

Sample Output of the `model.detect()` method

```
[{
  bbox: [x, y, width, height],
  class: "person",
  score: 0.8380282521247864
}, {
  bbox: [x, y, width, height],
  class: "kite",
  score: 0.74644153267145157
}]
```
## Specific Identification:
You can give instruction to find a specific class of object. After which predictions will be filtered and only that class of objects would be highlighted.
```
model
  .detect(document.getElementById("webcamFeed"))
  .then(predictions => {
    if (specificClass === "") {
      setPredictions(predictions);
    } else {
      const specificDetections = predictions.filter(
        p => p.class === specificClass
        );
      console.log(specificDetections);
      setPredictions(specificDetections);
    }
  })
```
![alt text](/screenshots/screenshot_3.png)
![alt text](/screenshots/screenshot_4.png)

### Installing and running the app

Clone the repo by using git

```
git clone https://github.com/PDahiya123/Object-Detection-Web-App.git
                     
```

Or you can download the zip file.

Then open cmd or git bash on the project folder to install some modules that I used to build this project

Install Once

```
npm install
```



* The above command will install all the required packages and dependencies required for the project 
* The final step is to run the following command

`npm start`

 After doing the above steps go to your browser and type localhost:3000.
 
 ## Live Demo - [Click Here](http://PDahiya123.github.io/Object-Detection-Web-App)

1. Wait for the Model to load
2. Allow access to the Webcam
3. Click the 'Capture Photo' button to log a base64 string of the Webcam frame
4. Click 'Predict' button to get a Predictions
5. Type a Class Name to filter the Predictions for that specific Class

Note: Please Click the canvas to load a Webcam frame onto the canvas.

## Resources:

- [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html) - Get started with React here
- [Material-UI](https://material-ui.com/) - React components for faster and easier web development
- [TensorFlow.js](https://www.tensorflow.org/js) - A library for machine learning in Javascript
- [React Webcam](https://www.npmjs.com/package/react-webcam) - Webcam component for React
