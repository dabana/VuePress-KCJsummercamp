# DAY 1: Create your pirate identity and join a crew

Pirates get to know each other and learn to bond as a team.

## 1. Introductory unplugged activity 

### The pirate's Web (inspired by RTP Hero's Web)

> INDOOR or OUTDOOR

A game for every pirate to share their names and nicknames.

1) Give a sticker to each kid so they can write their names and stick them on there t-shirt
2) First Round: Pass a ball around and tell the name of the person you pass the ball to. 
3) Second round: Pass around a bundle of string. Create a tangle of strings, then pass the bundle backward to untangle.
4) Third Round: Use your Pirate nicknames.
5) Ask questions on how complicated looked the tangle, etc.

```diff
Feed back of tests with KCJ team (18-06-2018): 
- Going backward breaks the rythm, makes the game too slow.
+ Consider making the web first, then trying to do the game after throwing a ball (make it a memory game)
+ Untangling is a lot of fun
```
## 2. Microbit activity

### The iPatch: an electronic eye patch for cool pirates

> mainly INDOORS or OUTDOORS in shaded area

```diff
TODAY WE LEARN:
1. What is a Microbit? 
2. Similarities between Microbit and Pirates (humans)
3. Makecode Interface and menus to program in Visual Code 
4. How to send a program from a PC to a Microbit
5. Play with a simple Microbit first program
```

1. Create a 5x5 pixels animated avatar
2. Write a program to display it on the microbit LED array
3. Download your pixel artwork to the microbit
- First Download => create 2 static avatars and switch using Button A
- Second Download => Create your own image and use onShake to display it
- Third Download => Create an animation using a loop and use input B or A+B to start it

4. Stick the microbit to an eye patch and there you go, you have an iPatch.

> Prepare also a necklace with Battery Back Plate

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

## 3. The pirate's secret handshake / Maori warrior dance

> INDOOR or OUTDOOR: (inspired from RTP Secret Handshake) / Maori-Pirate Choreography

A game for the pirates to bind with their team mates by inventing a secret hand shake. 
1) The group is divided into two or three teams.
2) Each group creates a secret hand shakes that involves at least 3 mouvements (at most 5)
3) One or two representent of each team have to go and show the other teams there secret handshake with showing them with their hands.  
4) We will made them crete their own Pirate Gang War-dance

```diff
Feed back of tests with the KCJ team (18-06-2018):
1. Make the kids invent a dance move based on a 2 to 3 syllable word
2. Have them decompose the danse move into 2 to 3 part, one for each syllable so we can keep the rythm.
``` 

Authors: B. Feragut and D. Banville

### Extra Activities

1. Read Pirate Books for kiddos
2. Paint your Pirate for Artists

