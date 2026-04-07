/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on: April 2026
 * This program will make an if statement
*/

//variables

let lightLevels: number = 0

const myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)



//setup

basic.showIcon(IconNames.Happy)

myNeopixelStrip.clear()

myNeopixelStrip.showRainbow()

myNeopixelStrip.show()



// neopixels will now light up

input.onButtonPressed(Button.A, function () {

    lightLevels = input.lightLevel()



    // 

    basic.showNumber(lightLevels)

    myNeopixelStrip.clear()



    //if > 52 then...

    if (lightLevels > 52) {

        myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))

    }

    //if > 104 then...

    if (lightLevels > 104) {

        myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))

    }

    //if > 156 then...

    if (lightLevels > 156) {

        myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))

    }

    //if > 208 then....

    if (lightLevels > 208) {

        myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))

    }

    myNeopixelStrip.show()

    basic.showIcon(IconNames.Happy)

    myNeopixelStrip.clear()

    myNeopixelStrip.show()

})
