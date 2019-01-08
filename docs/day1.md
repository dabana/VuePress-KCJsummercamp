# DAY 1: Create your pirate identity

Pirates get to know each other and learn to bond as a team.

## 1. Introductory unplugged activity 

### The pirate's Web (inspired by RTP Hero's Web)

> INDOOR or OUTDOOR

A game for every pirate to share their names and nicknames.

1) Give a sticker to each kid so they can write their names and stick them on there t-shirt
2) First Round: Pass a ball around and tell the name of the person you pass the ball to. 
3) Second round: Pass around a rope. Create a tangle with the rope, then try to untangle.
4) Third Round: Use your Pirate nicknames.
5) Ask questions on how complicated looked the tangle, etc.

```diff
Feed back of tests with KCJ team (18-06-2018): 
- Going backward breaks the rythm, makes the game too slow.
+ Consider making the web first, then throwing a ball (make it a memory game)
+ Untangling is a lot of fun
```
## 2. Makecode coding session - Older kids (age 8 to 12)

### The iPatch: an electronic eye patch for cool pirates

```diff
+ TODAY WE LEARN:
1. What is a Microbit? 
2. How to send a program from a PC to a Microbit
3. How to make a simple Microbit program
```

1. Create a 5x5 pixels animated avatar
2. Write a program to display it on the microbit LED array
3. Download your pixel artwork to the microbit
- First Download => create 2 static avatars and switch using Button A
- Second Download => Create your own image and use onShake to display it
- Third Download => Create an animation using a loop and use input B or A+B to start it

4. Attach the microbit with a rope over one of your eyes as an eye patch and there you go, you have an iPatch.

### 2.1 Blocks Code
![Blocks Code](./images/Day1-blocks.png)

### 2.2 Text Code
```javascript
input.onGesture(Gesture.Shake, () => {
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.Square)
})
basic.showString("Pirate!")
basic.showIcon(IconNames.Square)
```

## 3. Artbit coding session - Young kids (age 5 to 8)

```diff
+ TODAY WE LEARN:
1. What is a Microbit? 
2. How to send a program from a PC to a Microbit
3. How to make a simple Microbit program
```

1. Create your own nickname in Artbit
2. Create your own symbol in Artbit
3. Download your project to the Microbit
4. Attach the microbit with a rope over one of your eyes as an eye patch and there you go, you have an iPatch.

![ArtBit Code](./images/ArtBit/Day-1.png)

## 4. Take the code out!

### Pirate photo shoot session with our I-Patch

> INDOORS or OUTDOORS in shaded area

There is no Microbit game planned for this day. We simply take pictures to show off our Ipatch to our friends and parents.

*** ADD A PHOTO! ***

### The Maori-Pirate Choregraphy (inspired by RTP Secret Handshake)

> INDOOR or OUTDOOR

A game for the pirates to bind with their team mates by inventing a secret Maori dance.

1) The group is divided into two or three teams.
2) Each group creates a secret choregraphy that involves at least 3 mouvements (at most 5)
3) One or two representents of each team have to EXPLAIN there moves the other teams WITHOUT using there hands.

```diff
Feed back of tests with the KCJ team (18-06-2018):
1. Make the kids invent a dance move based on a 2 to 3 syllable word
2. Decompose the danse into 2 to 3 parts, one for each syllable to keep the rythm.
``` 

## 5. Changes to the plan

There were no major changes to the plans

## 6. Conclusions 

### Young kids (age 5 to 8)
1. **Unplugged Activities**

At this age the presentations have to be really simple. Just one round with the ball is enough to do a quick introduction. The rope game was interesting but at this age the simpler the better, so we do not recommend it. The Maori warrior dance was a success with big and small kids.

2. **Coding**

From our experience, using Makecode with this age group is challenging because 1) the downloading process is complex and 2) there are to many options and the blocks are hard to understand. From our experience, ArtBit is a better option than Makecode at this early age.

3. **Taking the code out**

The pirate I-Patch activity was perfect for this age. Because of it's simplicity and ease to adapt, it was well received and everybody wanted an i-patch picture with it.

> A WORD ON YOUNG KIDS LESS THAN 5 YEARS OLD: As mentionned, age groups are non-uniform at summer camps. For exemple, we had very young kids that did not read yet in this group. At this early age we recommend almost only offline activities. Specially we would focus on drawing and developing this first level of abstraction. Once they can draw and properly represent a shape is possible to introduce them to the Artbit. If possible, talk with the camp managers to make sure kids know how to read.


### Older kids (age 8 to 12)
1. **Unplugged Activities**

Pirate's web game was a good way to get know each other and break the ice. The Maori warrior dance was a success with big and small kids.

2. **Coding**

Makecode was the right choice for this age group because it offers a broader range of possibities. At this age they have much less problems understanding how to download the .hex file on the Microbit. They also have less problems navigating the Makecode interface.

3. **Taking the code out**

The Pirate I-Patch activity is perfect also for this age group. Within the low-floor / high-sealing philosophy it was a perfect starting point.




Authors: B.Ferragut and D.Banville - June 2018

© 2012 - 2018 Kids Code Jeunesse | All Right Reserved



