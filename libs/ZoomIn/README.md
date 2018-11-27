# zoomIn

Simple jQuery plugin using CSS3 transforms to zoom elements.


## Basic usage:

```html
  <img src="/images/logo.png" alt="alternative text" />
```

```javascript
  $('img').zoomIn();
```

You can also pass configuration object to function. Here is an example:

```javascript
  $('img').zoomIn({
    'description': true, // default: false
    'message': 'My message', // default: null
    'zoom': 4.3, // default: 2, you can change zoom by mouse scroll, also note that zoom: 1 is img orginal size(visible on document, for more info check zoom section)
    'zoomMax': 6.66, // default: 10
    'zoomMin': -4, // default: 1.5, negative values will make element downside up ( ͡° ͜ʖ ͡°)
    'step': 0.01 // default: 0.5, simply change zoom value by step
  });
```

## Zoom

Zoom is visible while mouse cursor is over zoomedIn element.

You can change zoom deph by mouse scroll. Please note that negative zoom is also able, you might change configuration object, like this:

```javascript
  $(selector).zoomIn({ 'zoomMin': -n }); // where n is real number
```
