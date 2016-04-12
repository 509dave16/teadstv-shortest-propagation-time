#Summary
This repo contains 3 solutions:

1. Original Solution submitted to Coding Game
2. Iterative Solution(almost the same as 1.)
3. Recursive Solution

I originally  solved the Shortest Propagation Time challenge on Coding Game that was sponsored by Teads.TV, an online marketing company, using the Original Solution. Later I wanted to try writing a Recursive solution and compare it's performance with the Iterative solution that I had originally wrote.
- Go to the [Testing Solutions](#testing-solutions) section to find out more on how to see see my solutions in action.
- You can see [proof](#proof) of me completing the challenge.

#Challenge
Here at Teads we know that to maximize the impact of an advertisement, the message needs to spread far and quickly.
 
You are given data to calculate viral potential, represented by a network of people ready to relay a message to more people.
We can assume this network contains no cyclic relation. 
For example, if person #1 has a relation with person #2 and if person #2 has a relation with person #3, then it is impossible for #3 to have a direct relation with #1.
 
When an individual broadcasts a message, it is counted as a single step, meaning that the time it takes to broadcast the message is independant from the amount of people in direct relation with the individual. We will consider that this event will always take 1 hour.
 
Here is an example with persons #1, #2, #3, #4, #5, #6, #7 and #8 linked like so:
 
![Alt Text](http://code.codingame.com/fileservlet?id=438097898883 "Missing Image for Diagram")
 
Here, by choosing to start propagation of the message with person #1, 4 hours will be needed to share the message to the entire network:

![Alt Text](http://code.codingame.com/fileservlet?id=438112355735 "Missing Image for Diagram")

1.   \#1 relays the message to #2
2.   \#2 then relays it to #3
3.   \#3 relays it to #4 and #7.
4.   \#4 relays it to #5 and #6, while #7 relays it to #8
 
If we decide now to start the propagation with person #3, then only 2 hours are needed:
 
![Alt Text](http://code.codingame.com/fileservlet?id=438103072669 "Missing Image for Diagram")
 
1.   \#3 relays the message to #2, #4 and #7
2.   \#2 relays it to #1 ; #4 relays it to #5 and #6 ; #7 relays it to #8
 
In this exercice, your mission consists in finding the minimal amount of hours it would take for a message to propagate across the entire network given to you as input.
 
INPUT:
Line 1 : N the number of adjacency relations.
N next lines: an adjancency relation between two people, expressed as X (space) Y, meaning that X is adjacent to Y.
 
OUTPUT :
The minimal amount of steps required to completely propagate the advertisement.
 
CONSTRAINTS :<br>
0 < N < 150000<br>
0 ≤ X,Y < 200000

##Challenge source: https://www.codingame.com/contests/sponsor

#testing solutions
##1. Test Original Solution using Coding Game's Challenge IDE
- Copy the text from spt-coding-game.js.
- Go to https://www.codingame.com/contests/sponsor page
- Click on the "Solve It" button for the Teads Sponsored Contest:
![Alt Text](http://s29.postimg.org/lv7zbh43b/coding_game_teadstv_contest.png "Missing Image for Diagram")
-  Select "Javascript" as the language of the solution, then paste the code into the Coding Game IDE "Your Code" panel:
![Alt Text](http://s29.postimg.org/q5mn7296f/coding_game_editor.png "Missing Image for Diagram")
- Click "PLAY ALL TESTCASES" at the bottom right of the screen or you can run each TESTCASE individually to see it's output.
![Alt Text](http://s29.postimg.org/qwfdcubjr/coding_game_run_test_cases.png "Missing Image for Diagram")

##2. Test Iterative and Recursive Solutions using Node.js
- Install NodeJS by following the instructions at the website: https://nodejs.org/
- Download or Clone this repo from Github
- Using the Command Prompt or Terminal, navigate to the cloned/downloaded repo
- Run the following command to install all of the npm modules: <strong>npm install</strong><br>
- Then run either of the following commands to execute the 'iterative' or 'recursive' solutions:<br>
<strong>1) Iterative solution command: gulp </strong><br>
<strong>2) Recursive solution command: gulp -r</strong><br>

###Notes on Node.js Output
- The output from running <strong>gulp</strong> or <strong>gulp -r</strong> will be the Time to Complete, Shortest Propagation Time, Num of Nodes, and Num of Nodes Computed for each input file.
- Each input file has a corresponding output file according to the number postfix(e.g. spt-test-in.0.txt and spt-test-out.0.txt).
- Each output file contains the validated SPT from the codinggame site merely for reference.

#proof
![Alt Text](http://s23.postimg.org/hd4y32egr/teads_tv_challenge_proof.png "Missing Image for Diagram")
