THE PROJECT IS AN APPLICATION THAT RUNS A TIC TAC TOE GAME. THE GAMEPLAY LOGIC
IS WITHIN THE MOVE.JS FOLDER AND THE AUTHORIZATION PACKAGE THAT TAKE RUNS THE
SIGN UP FEATURES, ETC IS STORED IN THE AUTH FOLDER. THE STYLES FOLDER INCLUDES
ALL OF THE CSS AND SASS INFORMATION.


WIREFRAME:

https://app.moqups.com/rdelvallej@gmail.com/jOKx4Yfb/view


USER STORIES:

1.) As a user, I want to sign-up so that I can sign-in for future games.
2.) As a user, I want to play matches with others so that each game will be different.
3.) As a user, I want to click on a gameboard so that I can choose my move.
4.) As a user, I want to play a game so that I can have fun
5.) As a user, I want lives so that I can have multiple chances to beat my opponent
6.) As a user, I want online-matches, so that I can play with other users.

APPROACH TO PROJECT:
  1.)  Read API Docs constantly as a reference.
  2.)  Used the wireframe as my layout.
  3.)  Created Skeleton (HTML) / the layout with proper class names according to
  API Docs for forms.
  4.)  Positioned Div elements with CSS
  5.)  Created Curl Request scripts to test to the API.
  6.)  Created the HTTP ajax methods listed in order by the API Docs.
  7.)  Created Event Handlers that work along with ajax.
  8.)  Created the UI Js that will create the actions listed in the API Doc.

DATA STRUCTURE:

1.) I used an array to record the user's moves.
2.) I used jQuery for creating click event handlers for the gameboard,
login features, and game preferences(create game, update game, find game).
3.) I have divs within my HTML with class names to designate gameboard coordinate
(i.e Top Left).

ISSUES:

1.) The issues that I ran into was the game logic in javascript.
2.) Tieing together the communication with the API through AJAX.
3.) Tieing together the javascript with the jquery to manipulate the gameboard array
and place the token onto the board.

UNSOLVED PROBLEMS:
1.) The navbar is not floated all the way to the top.
2.) The gamedata button is not showing additional game data that I wanted to show
, so I will add that in my next update.
3.) Buttons are not aligned the in a straight line within the navbar.


WHAT I LEARNED FROM MY TWO MAIN ISSUES:
1.) Take time to code each line and console.log or debug.
2.) Figure out the infastructure of what you want to do before coding.
3.) Time-Box and move on to a different task instead of trying to figure a problem
for hours.
