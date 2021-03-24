class Form{
    constructor(){
        //
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput('Name');
        input.position(130, 160);

        var button = createButton('Submit')
        button.position(250, 200);

        var greeting = createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount++;
            player.update(name);

            player.updateCount(playerCount);

            greeting.html('Hi' + name);
            greeting.position(130, 160);
        });
    }
}