# Deprecated (again)!! Krunker is cracking down heavily on client modifying extensions.

Preview: https://youtu.be/wz2-KIy_1Cw
# How to install:

1. Find & install the Tamper monkey (Chromium) / Grease Monkey (Firefox).

2. Click here: [update/install script](https://github.com/SwatDoge/Krunker-Speed-Meter/raw/master/userscript.user.js "Update or install this script") and the click "Install".

3. In your krunker settings, enable Speed display.


# How to modify the speedometer skin:

 1. Click on the tamper monkey icon.
 
 2. Click on the "Dashboard" option.
 
 3. Click on the "Krunker speedo-meter" script.
 
 4. On top of the document you will see the following code:
```javascript
var dail_skin = "https://swatdoge.nl/s/speedmeter/SpeedMeter.png";
var pin_skin = "https://swatdoge.nl/s/speedmeter/SpeedPin.png";
```
You can replace these urls with your own. Make sure you do not accidentally remove the ```"";```

### Things to keep in mind while editing the speedo-meter:
1. Make sure the middle of the dail and the middle of the pin align to the center of the image.
2. Images should have the same width as height. (1x1, 256x256, 500x500, etc)
3. In case your resolution isn't working out, 256x256 is the default image size.
4. For more help, contact me on discord: Swat#7165
