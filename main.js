let username = prompt ('Welcome to this adventure. How should I call you?');

alert('Welcome ' + username + '! Hope you are ready for a bumpy ride!');

alert('It all started when prince Vitalij asked your help decorating the castle for his birthday party');

alert('You and your kitty companion Cake we responsible for the balloons. Until the ice queen interrupted you and tried to kidnap the prince!');

alert('You managed to hide into the closet in fear but now there is a decision to make.');

alert ('Will you try to save the prince or stay hidden in the closet?');

function question2investigate(){
    alert('You decided to investigate. You find a giant trapped under a rock desperately asking for help!')
    alert('Despite your best efforts there is nothing you can do to help him. You try to console him, but he grabs you with his big hands and eats you without hesitation');
    alert('You just became giant lunch! Sorry!');
}

function question3small(){
    alert('As you move closer to the door something doesnt feel right. Still, you try to open the door with shaking hands');
    alert('You open quietly the door only to realise it was a terrible idea.');
    alert('Turns out you found where the Ice Queen keeps the hounds. 3 headed dogs start to chase you and before long they start chewing you');
    alert('Sorry, you just became dog food...');
}

function question4talk(){
    alert('You start talking to the queen about the prince but she doesn\'t seem to care much.');
    alert('You suddenly feel she is getting bored with your stories and you start begging her to release the prince.');
    alert('She then takes off her magic wand and poof.');
    alert('You are immediately transformed into a pig. You Spend the rest of your days covered in poop, eating rotten vegetables.');
}

function question5tell(){
    alert('You look the prince in the eyes and tell him the truth. You ve been in love with him for years...');
    alert('He then grabs you and kisses you with the passion of a thousand teenagers, kissing for the first time...');
    alert('You decide to run off together, dump the princess and live happily ever after somewhere where no one knows you...');
    alert('You ended up adopting 4 dogs and 3 rabbits');
    alert('The End!');
}

function question5no(){
    alert('You decide to tell nothing. The prince looks at you with gratitude.');
    alert('Suddenly he grabs you and kisses you with the passion of a thousand teenagers, kissing for the first time...');
    alert('You decide to run off together, dump the princess and live happily ever after somewhere where no one knows you...');
    alert('You ended up adopting 4 dogs and 3 rabbits');
    alert('The End!');
}

function question4run(){
    alert('You start running towards the queen, but you ve always been clumsy.');
    alert('You manage to trip on the carpet and knock the ice queen down.');
    alert('In a desperate effort to smite you, the Queen moves her wand and you can hear a distinct ZAP coming off her wand');
    alert('She misses. Pfew. You are now both watch with horror the ZAP bouncing in the ice frozen surfaces until it finally reaches a target...');
    alert('The Queen hits the ground and turns into ash');
    alert('It turns out she was indeed wearing implants. The rumors were true!');
    alert('You run across the stairs to find the prince tied up on a chair. You immediately release him and you re trying to comfort him.');
    alert('As you look prince Vitalij in the eyes, you realise what you always knew. The reason that you wanted to save him is because you are deeply in love with him. Are you going to tell him though or let him return to the princess?');

    let question5 = prompt ('tell or no?');
    if (question5 =='tell'){
        question5tell();
    } else {
        question5no();
    } 


}

function question3big(){
    alert('You carefully open the big black door and find your self in a cold white room.');
    alert('Ice is covering everything. Suddenly Frozen comes to your mind and you start singing.');
    alert('LET IT GOOOOO....LET IT GOOOO....CANT HOLD IT BACK ANYMOREEEEEE');
    alert('LET IT GOOOO...LET IT GOOOO....THE COLD NEVER BOTHERED ME ANYWAYYYYY...');
    alert('Suddenly you realise the ice queen staring at you from the top of her frozen staircase. She does not look happy...');
    alert('Are you going to talk to her or run?')

    let question4 = prompt ('talk or run?');
    if (question4 =='talk'){
        question4talk();
    } else {
        question4run();
    }
}

function question2ignore() {
    alert('You decide to move on with your trip and ignore the voice. That was probably a wise choice. You are scared of dark places anyway');
    alert('You continue walking into the woods. Suddently you realise the birds stopped singing and there is a cold breeze giving you chills');
    alert('In front of you lies the lair of the evil ice Queen. Sweat starts running down your neck');
    alert('As you move closer you start to notice a big black door and a small backdoor. Which one will you take?');

    let question3 = prompt ('big or small?');
    if (question3=='big'){
        question3big();
    }   else {
        question3small();
    }

}

function question1help() {
    alert('You decide to pop off the closet only to see the evil queen disappear.');
    alert('Trying to figure out what to do next, you suddenly notice a trail of ice leading into the woods');
    alert('You start following the trail into the deep woods until you suddenly stumble upon the opening of a cave');
    alert('Inside, there is someone asking for help in a deep but sad voice');

    let question2 = prompt ('investigate or ignore?');
    
    if (question2=='investigate'){
        question2investigate();
    }   else {
        question2ignore();
    }
}

function question1hide() {
    alert('You stayed in the closet till everyone left. After a while you got off the closet and continued the decorations. But no one showed up for the party...');
}


let question1 = prompt ('help or hide ?');
    if (question1=='help') {
        question1help()
    } else {
        question1hide()
    }
