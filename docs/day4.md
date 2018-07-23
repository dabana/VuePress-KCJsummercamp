# DAY 4: The treasure hunt

With the help of technology and an old amnesiac pirate, the crew finds Barbe Bleu's treasure before he does.

## 1. Introductory unplugged activity

### Draw a treasure map (inpired by RTP Unseen Structure)

1) The crew members have to find the map to the treasure based on the instructions from an old amnesiac pirate. 
2) Once they find where the map is located (in a dark cave) the group is divided into two teams. 
3) Every team sends a scout to check the map in the cave. The scout has only 3 seconds to look at the map and help his team reproduce the map correctly. (We light the cave with a candle for few seconds)
4) Once every kid has gone to the cave and the map is complete, the two teams compare their maps.

```diff
Feed back of tests with KCJ team (21-06-2018): 
+ Very good feedback. Include darkness and a candle light for 3 seconds to visualize maps.
+ Simplify the Map for the Kids
```

## 2. Microbit activity 

> One MicroBit with radio to find the are where the treasure is found - General

```diff
+ TODAY WE LEARN:
1. What is a radio frequency?
2. How can we relate radio and sound?
3. What is a conditional in code?
4. What is a variable in code?
5. Play with the radio program and see how affects the sound.
```

### 2.1 Blocks Code
![Blocks Code](./images/Day4-blocks.png)
### 2.2 Text Code
> Emitter
```javascript
radio.setGroup(2)
basic.forever(() => {
    basic.showIcon(IconNames.Skull)
    radio.sendNumber(0)
})
```
>Reciever
```javascript
let Note2 = 0
let intervale = 0
radio.onDataPacketReceived( ({ signal, receivedNumber }) =>  {
    intervale = Math.abs(signal)
    Note2 = 20000 / intervale
})
radio.setGroup(2)
basic.forever(() => {
    music.playTone(Note2, intervale)
    music.rest(intervale)
})
```

## 2b. Artbit - begginers - messages

```diff
+ TODAY WE LEARN:
1. What is a message?  
2. How can send messages?
3. Play with the message program and see how affects the pixel art image.
```

1. Create their own Message send in Artbit - We send a Pirate coin!

![ArtBit Code](./images/ArtBit/Day4.jpg)

## 3. The treasure detector

The crew programs their microbit to send radio signals of various strenghts so their microbit can be used as a range finder. With the help of their map and their special treasure detector, they can now hunt down the treasure.

1) One team is sent to find the key and the other is sent to find the treasure chest.
2) The range finder produces a sound which freqency increases with decreasing distance from the target. 
3) Once the team is very close to the target, they switch detection mode to detect the exact location of the target using a amgnetic field detector.

```diff
Feed back of tests with KCJ team (21-06-2018): 
+ Very good feedback. The Radio signal worked as expected within the programmed ranges.
+ Option of giving many Microbits with different sounds could be confusing.
+ Amplify the sound
```

## 4. Conclusions 

### Ages: 5-7
1. **Unplugged Activities**

We end up drawing a treasure chest directly so they could enter easily to the game. 

2. **Coding**

They continued with their animations but we tried to introduce the concept of tilt so they could understand how the game they were going to play worked. This first concept to angles and the day before to what is a magnet was leading to most of them to their first contact with science at such an early age.

3. **Taking the code out**

This game was a total success. The fact that they were all involved in the activity was very inportant. We ended up subdividing each of the teams in different pairs. They had to run with the treasure chest and pass the chest from couple to couple until they reached the end. Finnally they countd how much coins were left in the chest. Thanks to the sturdy chests we built the microbits could survive to such level of stress. This was a real bootcamp for the whole gear.

> OBSERVATIONS: To do these activities we had to build special cases for the Microbits that allow us to control them with a switch ON/OFF and an INPUT Jack. Also we used a small sound system to amplify the effect of the sound. Sound became so imortant in the activities that we really encourage to boost up this feature specially with Artbit in the near future. David and his Electrical Engineering skills were critical to accomplish all these fantastic gadgets. Thank you Kemakoo!


### Ages: 7-12
1. **Unplugged Activities**

The game about dividing a pile into two different piles ( work/party) worked well. Time constraints did not allow to spend more energy into the building of the structures. With more time, this game, can be a lot of fun and creativity.

2. **Coding**

We had the opportunity to start explainig how music is based on numbers with base 440Hz. Here we set the tone for this age to introduce variables and sound. Some of them could start creating their own music and adding the music to their first stories and animations. We had a lot of fun with this activity and we opened the door to the relationship between magnetism and sound - to science!. 

3. **Taking the code out**

We proceeded with the same way than the younger ones and made them come by batches of 2. They really enjoyed the fishing activity and now they started to understand how the microbit was programmed to detect the magnetism and affed the sound!

> OBSERVATIONS: To do these activities we had to build special cases for the Microbits that allow us to control them with a switch ON/OFF and an INPUT Jack. Also we used a small sound system to amplify the effect of the sound. Sound became so imortant in the activities that we really encourage to boost up this feature specially with Artbit in the near future. David and his Electrical Engineering skills were critical to accomplish all these fantastic gadgets. Thank you Kemakoo!



Authors: B.Ferragut and D.Banville - June 2018

© 2012 - 2018 Kids Code Jeunesse | All Right Reserved

