function feetToMile(feet){
    if(feet>0){
        var mile=feet/5280;
        return console.log("Totalt mile is: "+mile);
    }
    else{
        return console.log("distance cannot be negative");
    }
}

function woodCalculator(chair,table,bed){
    if(chair>0 || table>0 || bed>0){
        var woodCounterChair= chair*1;
        var woodCounterTable= table*3;
        var woodCounterBed= bed*5;
        var totalwood= woodCounterChair+woodCounterTable+woodCounterBed;
        return console.log("Required wood is: "+totalwood);
    }
    else{
        return console.log("Add at least one item you want!")
    }
}


function brickCalculator(floor){
    var floor;
    if(floor>0){
        if(floor>0 && floor<=10){
            var totalbrick= floor*1000*15;
        }
        else if(floor<=20){
            var upperfloorbrick=(floor-10)*12*1000;
            var lowerfloorbrick=10*15*1000;
            var totalbrick=upperfloorbrick+lowerfloorbrick;
        }
        else if(floor>20){
            var topfloorbrick=(floor-20)*10*1000;
            var floorCount=floor-20;
            var upperfloor=floor-floorCount;
            var upperfloorbrick=(upperfloor-10)*12*1000;
            var lowerfloorbrick=10*15*1000;
            var totalbrick=topfloorbrick+upperfloorbrick+lowerfloorbrick;
        }
        return console.log("Requried Brick is: "+totalbrick);
    }
    else{
        return console.log("Floor can't be negative");
    }
 
}


function tinyFriend(friendlist){

    if(friendlist.length!=0){
        var tinyname= friendlist[0];
        for(var i=1;i<friendlist.length;i++)
        {
            var checktiny=friendlist[i];
            if(checktiny.length<tinyname.length)
            {
                tinyname=checktiny;
            }   
        }
        return console.log("Tiny-Friend name is:"+tinyname);
    }
    else{
        return console.log("Your friend list is empty. Add a element in your list, Thank you!")
    }
}


