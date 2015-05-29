# awesomemonkeymath
An educational web app to tech children vital mathematical skills and provide teachers with relevant feedback about student strengths and progress.

Favicon created by http://www.favicon-generator.org/ from http://www.clipartpanda.com/clipart_images/funny-monkey-face-clip-art-4059548 .


Awesome Monkey Math was made by Tiffany Winn, Peter Orzell, and David Caouette during the 2015 Dyn Hackademy in Manchester, NH.


1. What is "Awesome Monkey Math"?
    Awesome Monkey Math is an educational game and a tool for K-12 children to help aid with basic computational math skills.  While Awesome Monkey Math is designed to keep children entertained with engaging visuals and the occasional zany word problem, it is based off of a powerful backend framework that "tags" problems by their characteristics before they are sent out and later on, can alert teachers to which areas (by tag) their students individually are strong in and struggling in.


2. How to play (Student)
    
    Navigate to index.html (if hosted on a web server, this page loads by default).

    Click "Start Game".
    
    Each child receives a turn starting with Player 1.

    Correctly answering a question earns the child a banana and allows their monkey to progress up the tree.

    Incorrectly answering a question will cause the child to lose a banana if they have any, and will result in their monkey not progressing for the turn.

    A child can press the "Skip" button to choose to skip a question and receive a new one and will not receive points for it.
    
    For five bananas, a child can choose to present the other player with a "Challenge" question that allows the other player to gain a life or 5 bananas.
    (Note:  Number of lives has no bearing on actual gameplay, but is presented to players at the end of the game as a trophy.)
    
    After answering a total of 20 questions correctly, a player's monkey will have reached the flag at the top of the tree, and that player wins the game.awesomemonkeymath

    
3. How to play (for Teachers)

    Navigate to teacher.html (or alternatively, during a game, select "Reports", then the blue "Class Status" link)
    
    Here is located a table of the names of all students who have played the game on the device in use alongside the percentage of questions they have answered correctly for each "tag" category.
    This screen can quickly give instructors useful information about what mathematical concepts children are most confident in and also which ones children need the most help with.
    
    Please note that this data stays stored until cookies are cleared, and can also be augmented across games.
    For example, If a child with the name "Jim" logs in to play one game against "Susie", and then "Jim" logs in again to play a game with "Carl", Jim's statistics will be automatically updated to include those from the game before.


4. Technical Considerations
    Awesome Monkey Math is designed work with an 800x600 play area.  This does not include the rest of the page.
    Awesome Monkey Math is known to work in the latest versions of Chrome and Safari browsers. It has not been tested on Firefox.
    Teachers should take these notes into consideration in determining browser and screen resolution for use with this teaching tool.

    At its current stage of release, Awesome Monkey Math's data storage for students is entirely client-side.  This means that it is tied to the computer the game was run on.  If browser cookies are cleared on the computer Awesome Monkey Math was run on or a different browser is used without first transferring the cookies, student data will not be retained.  In short, all data is stored on the machine used to play the game - as browser cookies.

    
5. Considerations for the Future

    Secure Teacher Login:
        In our code is a file called login.js.  It provides cryptographically secure teacher login functionality.  It was intended to be used for teachers to access student data, but was removed for ease of demoing purposes.  To include this code would be trivially easy.  A reduced 64-bit SHA-3 hash was utilized to represent teacher username and login.
        
    Improved Data Metrics:
        A Running Average of for example, five samples, could be implemented to help reduce negative student score weighting from a majority of previous failed attempts when that student is now strong in the skills he/she was once not strong in.
        Other metrics like "Time to Answer Question" could be assigned a percentage and then used to develop an overall "Confidence Score" representing how confident a student is in a specific concept and not on Correct/Incorrect metrics alone.
    
    Tailored Questions:
        Improved Data Metrics such as that described above could be used to weight the probability of individual students encountering certain types of problems.
        This could be used to allow the system to automatically tailor problems to different students, working on their respective areas of need.
    
    Improved Teacher Options:
        Ideas for the future:
            - Set game length
            - Toggle tags in use (Perhaps the class hasn't covered a concept yet, or no longer needs practice with one, so the teacher could disable that tag from manifesting in problems given.)
            - Custom tag support (Instructors could add their own tags to generate custom problems.)
    

Please remember that Awesome Monkey Math was created in just one weekend, so we may not have all of the features you need.
This being said we would love to work with you to add whatever you need so that you can have a tailored product for your classroom.

We hope you enjoy Monkey Math!