# What is this?

Make a curve text easily

## Installation

`npm i curvetext --save`

Then...

```javascript
import{curveText} from 'curvetext'

const circularText = document.getElementById('circular-text')

curveText({
    element : circularText,
    radius : 200,
    angle : 360
});

```

### Options

curvetext supports three options

* *element* - DOM element whose text you want to curve in arc (required)
* *radius* - radius of curve in pixles (required)
* *angle* - Angle of an arc in degree (Optional, Default to 360)
