<H1>The Breathing Room</H1>

[https://www.othership.us/resources/breathwork-benefits](https://www.othership.us/resources/breathwork-benefits)

Nervous System
- Central Nervous System
- Periperal Nervous System
  - somatic nervous system (voluntary control)
  - automatic nervous system (automatic control)
    - sympathetic nervous system (fight or flight)
    - parasympathetic nervous system (rest and digest, calm state)

Breathwork reduces stress and anxiety, improves mood, and increases mindfulness.
It grounds people when they're feeling anxious and informs their nervous system they are safe.
Breathing increases your energy levels and boosts your immune system by bringing in more oxygen,
which fuels the cells that keep us healthy and energized.

It stimulates the vagus nerve, which regulates the relaxation response. It also improves
emotional regulation, increasing the heart rate variability, which is associated with better handling of stress
and reduced reactivity. It also reduces cortisol and quiets the mind, improving sleep quality. 
Regular breathwork strengthens your respiratory function, increasing diaphragm strength.

I initially planned to use the SparkFun CO2 sensor to measure CO2 concentration and use this information
to generate a breathing exercise. When we breathe out, our exhaled air contains approximately 3.8% or 38,000 ppm of CO2.
However, after setting up the Arduio and the sensor together, the computer would not read the sensor.
I could not figure out what was wrong with it as I also had confirmed that I had soldered it properly. I then pivoted
to using FaceMesh to locate the 4 corners of the mouth (left and right corner and upper and bottom lip) to
detect whether the mouth was closed (inhaling and holding) or open (exhaling).

I set a mouth ratio so that the number is consistent no matter how far away you are from the camera. I set the guide phases and the detected phases so when the detected phase is in sync with the guide phase, then the breathing circle is green. If the detected phase is not in sync with the guide phase, then the breathing circle is pink. The pink color would alert the user
that they're not breathing in sync with the exercise. The breathing circle is set in 12 second intervals, broken into 3 sets of 4 seconds for inhale, hold, and exhale. The size of the circle grows or becomes smaller through the lerp function over the course of each phase (the phasetime) as there is a set circle radius and target radius, determined by the minimum and maximum radius. This 4 second interval breathing is called box breathing. 

To give the user some context and instruction, I build out an opening screen and a closing screen. The opening screen gives instruction and information on what the Breathing Room is. The user can enter and stay as long as they would like on the breathing screen. To finish, the user can end their session and land on the thank you screen with the number of seconds they have mindfully breathed. 

The buttons I drew on the opening and closing screen are again identically referred to in the mouse pressed function. Entering the breathing room from the opening screen sets a timer for both the breathing exercise (the 12 second intervals) and the entire breathing session. The button to end the session on the breathing screen ends the timer to calculate the total number of seconds the user mindfully breathed.

I added Perlin noise to the intro screen to give the page some dynamic movement that is calming and grounding. I changed the canvas to take up the entire screen so that the video (breathing circle) could be in the center of the screen. When the user opens up the Breathing Room on their phone, it will also be centered instead of being on the lefthand top corner.

The Breathing Room explores how interactive visuals and real time feedback can encourage the users to reconnect with themselves through their breath, especially with no other distractions. Through my own experience, mindful breathing has become a grounding tool that has improved my quality of life and emotional / mental regulation. 