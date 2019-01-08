# DAY 2: Create the perfect pirate lair

Pirates need a place to relax and live a genuinly unproductive life.

## 1. Introductory unplugged activity 

### Build your pirate lair (inspired by RTP Architect) 
> INDOORS and OUTDOORS

The space will be divided in two (or three) areas, each with a theme, for example:
1. The relaxation area
2. The working space
3. The place to keep the treasure

In the center there is pile of objects to distribute in the different thematic areas. (we will need lots of elements, cussion, chairs, strings, branches...)

| Young kids (5 to 7) | Older kids (8 to 12) |
|---------------------|----------------------|
|1. Create two teams, one for each thematic area | 1. Create two (or three) teams, one for each thematic area |
|2. Create two (or three) categories of objects and ask the group to decide what object belongs where.|2. Create two (or three) categories of objects and ask the group to decide what object belongs where.|
|3. In each team, choose the 5 most important objects to place first. |3. In each team, choose the 5 most important objects to place first.|
|4. Open discussion with kids on where to place the selected items. |4. In each team, Architects are designated to draw a plan (top vue) of where each of the selected objects should go in the area.|
|5. Now is time to place the other objects and decorate the lair with objects from nature. |5. The teams rotate, but the Architects stay where the are. Each team has to follow thee instructions of the Architects to achieve the plan. |
|     | 6. Once every team is done building there part of the lair, now is time to place the other objects and decorate the lair with objects from nature.|
|6. Finaly, the kids design a pirate flag, and hang it to their lair|7. Finaly, the kids design a pirate flag, and hang it to their lair|

```diff
Feed back of tests with KCJ team (19-06-2018): 
+ Positive feedback of the activity
+ Take into acount extra time needed to decorate with natural elements
```

## 2. Microbit activity

> Prepare the MicroBit for fishing

```diff
+ TODAY WE LEARN:
1. What is magnetism? 
2. What is an interval in time and what is pitch in sound?
3. How are they interelated?
4. How a magnetic detector would work?
5. Play with a first program to detect magetism
```

### 2.1 Blocks Code

#### 2.1.1 Introduction to music with Microbit (for all kids)

*** PLEASE ADD THE DEMO CODE FOR THE INTRODUCTION TO MUSIC (SIMPLE INSTRUMENT microbit-music-democode.hex in ./Makecode/Final/day2)***

#### 2.1.2 Fish detector code (for advanced kids)

![Blocks Code](./images/Day2-blocks.png)



### 2.2 Text Code
```javascript
let Note2 = 0
let intervale = 0
basic.forever(() => {
    intervale = 20000 / input.magneticForce(Dimension.Strength)
    Note2 = input.magneticForce(Dimension.Strength) * 3
    music.playTone(Note2, intervale)
    music.rest(intervale)
})
```

## 2b. Artbit - begginers - animations

```diff
+ TODAY WE LEARN:
1. How to create pixel art animations
2. What is a function block
3. Play with a simple Microbit first **animation**
```

1. Create their own Fishing animation in Artbit 

![ArtBit Code](./images/ArtBit/Day2.png)



## 3. It's time to go fishing

> INDOORS and OUTDOORS

Members of the crew program a microbit that detects magnetic fields and emit sound and light.
They can use it as a special fish finder to catch their dinner more efficiently. 

Material:
* A blanket to act as the see surface
* Cardboard fishies with magnets attached to them
* Fishing poles with a magnet attached to the string 

1) One Explorer is sent on the sea (blanket) with his MicroBit to find the Fish.
2) The Fisherman is standing outside the sea (blanket) with the fishing rod.
3) Other hold the blanket firmly to the ground
4) The goal is for the Fisherman to catch the fish with the help of the explorer
5) A sound is generated when a fish is catch. There is a sound for the sharks and a sound for real fish. If the sound for the shark is heard, everybody has to run for safety.
6) At first the fish are outside, after the fish are underneath and they pull the fish out
7) Give precise instructions to find the fish over the surface.

```diff
Feed back of tests with KCJ team (19-06-2018): 
+ Positive feedback of the activity 
+ Introduce to give directions to locate fish as a follow up of the first exercice
```

## 4. Conclusions 

### Young kids (age 5 to 8)
1. **Unplugged Activities**

The game consisting of dividing a pile into two different piles (work/party) worked well for younger kids. Time constraints did not allow to spend more energy into the building of the structures. We decided to focus a lot more on drawing with this age group. They started drawing different sorts of fish that were later used for the fishing activity.

2. **Coding**

The activity for this day was for the kids to designed a simple story with ArtBit. The exemple we showed them was a pirate ship being bombed and sinked. This simple secuential animation opened the eyes to the possibility of telling stories or to make simple animations. The Process with small kids was: 

- Start drawing the idea ( ex: a ship )
- Tell a story with that idea ( ship animation )
- Give them freedom to add their own personality

We noted that telling stories using the scrolling up, down, left, right options on the Artbit was not straight forward at all, even for us, the instructors. Additionnal options should be added to the Artbit user interface to improve this (ex.: individual timelines for each of the functions).

3. **Taking the code out**

While kids were creating their animations, a third instructor was hosting the fishing game activity outside. Kids were called in pairs to play the fishing game. One kid was finding the fish with the magnet detector and the second one was fishing. Then they changed roles. The camp provided us an helper instructor. We have put him in charge of the outdoor activities and it made our lives a lot easier. Before starting the fishing activity we had the kids play with magnets and introduced them to magnetism.

> DIFFICULTIES: It is important to be open to change plans fast because kids this age tend to have a really short span of attention. On average kids can stay a maximum of 45 minutes at the computer working on their story, after 30 minutes we already see kids go up and start to play. The fishing game was a great idea with in small batches. Having them play in turns gave us more control to the overall operation and contributed to increase to duration of the coding activity (roughly an hour).


### Older kids (age 8 to 12)
1. **Unplugged Activities**

The game about dividing a pile into two different piles (work/party) worked well. Time constraints did not allow to spend more energy into the building of the structures. With more time, this game, can be a lot of fun and creativity. We decided do drop this unplugged activity to have more time explaning music with the Microbit.

2. **Coding**

We had the opportunity to dive into the details of how do to music with the microbit. We explained them how music is based on numbers which represent the frequency of the sound, i.e. the number of vibrations per second (with base 440Hz being the reference for musicians). The first activity was to create a simple musical instrument using the buttons on the microbit to change the tone of the sound. Through this activity we also introduce variables. Withmore advanced kids we have been able to introduce the magnetism sensor and have them understand how to fish detector works.

Some of them started creating their own music and adding them to their stories and animations. We had a lot of fun with this acticity which really confirmed that the sound is an essential part of the microbit experience.

3. **Taking the code out**

We proceeded with the same way with older kids than with younger kids and had them come to the fishing activity by batches grouyps of 2. They really enjoyed the fishing activity and now they started to understand how the microbit was programmed to detect the magnetism and produce a sound proportionnal to the signal!

> OBSERVATIONS: To do these activities we had to build enclosers for the Microbits that included an ON/OFF switch and an INPUT audio jack. Also we used a small sound system to amplify the sound. Sound became so important in the activities that we really encourage to boost up this feature. It would be especially important to add sound features to Artbit in the near future to be able to introduce sound to the younger audience.


Authors: B.Ferragut and D.Banville - June 2018

© 2012 - 2018 Kids Code Jeunesse | All Right Reserved

