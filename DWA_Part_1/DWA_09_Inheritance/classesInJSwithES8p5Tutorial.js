

/*
This is the video where I am going
to talk about object-oriented programming in JavaScript
using something called classes for the very first time ever
in any of my videos.
So this video is part of a playlist.
And if you're watching that playlist, what you just
learned about is functions.
And you might have done something
where you first used functions to reorganize your code.
And you said.
OK.
I have some code which draws a circle.
And I have some code which moves the circle.
So I'm changing some xy variables
and drawing a list of some xy variables.
And then, I put those into these own functions,
call them display, call them move,
and I can call them in draw.
So I've organized my code.
And I even have this thing--
I kind of have this thing called an object.
It's a JavaScript literal object, meaning I'm saying,
I literally want an object with an x and a y.
So I can see those up there.
And so the thing is, I got distracted for a second.
The thing is, this isn't really--
this was a nice way to learn about how to declare and define
your own functions.
And there are reasons why you might want to do that.
And you're going to see those in many future videos,
just sort of standalone functions that
exist unto themselves.
And, in fact, there is a style of programming
called functional programming, which JavaScript is well
suited for.
Because functions are kind of like the core building
block of JavaScript.
But I am going to take a different direction here.
Because, in particular, if what I want to do
is program graphics, simulations, animations,
things moving around the screen, one way to do that
is to think about this circle moving around as an object.
Now, I'm already thinking about it as an object.
It's a bubble.
It's got an x and a y.
It has data.
But I want to think about it as having functionality.
It can move.
It can be displayed.
I want to say things like, in addition, bubble.move,
bubble.display.
This is ultimately how I want to write my code.
And I'm kind of wondering why display there
is being syntax highlighted.
I think it's probably like a keyword or something
in JavaScript somewhere else.
I'm going to just change that to show.
What I want to do is I want to write code
where I create these objects.
And I issue commands on them.
And the reason why I want to do that is because, well,
ultimately--oop.
Ultimately-- ahh!
So I changed the code, and now it won't run again.
This is not going well.
What I want to do is if I could think about this thing moving
around on the screen as an object,
then I can maybe make a second bubble and a third bubble.
So I have to think conceptually about what I'm doing.
So I think what's going to be helpful, actually,
is if I come over here--
hello to you too--
and talk about this with the whiteboard.
So there's a couple of different principles.
I talked about with functions that there's
some principles behind why you might use functions.
You can make your code modular.
Or you can make your code reusable.
This is also true of object-oriented programming.
But one of the first key principles
of object-oriented programming is this idea of encapsulation.
Encapsulation
I want to encapsulate everything that it
is to be a certain thing inside of an object.
What does it mean to be a bubble?
What is there-- what do bubbles have?
What properties do they have?
What things do they do throughout their life?
I want to encapsulate all of that into something.
And the idea of using something called a class in JavaScript,
and we can think of a class--
Using Classes as a Template for Objects
another way to think of it is the word template,
I think is appropriate.
Or the word blueprint is also appropriate.
The class, which is a new block of code
that I'm going to ask you to write
if you choose to follow these tutorials,
is this idea of encapsu--
everything that goes in between the open curly
bracket and the closed curly bracket
is everything that it means to be a bubble.
What does it mean?
We're going to find out.
What does it mean to be a bubble?
All of that will go in there so that in my main program, which
has setup and draw, I don't have to write
the code for the bubble.
I can just do things to create bubbles.
I can say things like bubble = new.
And I think I'm going to go off the whiteboard here, so I'm
going to write this down here.
New bubble.
So there's a new keyword which, ironically, is new.
New is a keyword that means to create an object.
We're going to see what that actually really refers to
in a second.
And then, as my animation continues throughout the draw
loop, I continue to say things like bubble dot float or dot
pop or dot move, or whatever commands.
These are functions that are somehow part of the object.
Objects-- the idea of encapsulation
is to encapsulate the idea of data and functionality
into an object.
So, for example, I had this weird little JavaScript
literal object.
This is an object that has data in it.
It has an x value and a y value.
And actually, I mean, if I really wanted to,
I could do this.
This is something you'll see.
I probably shouldn't show this to you.
I don't really do this that often,
but it's totally reasonable.
I can put a function in there.
Ooh, let's put that away.
Let's put that away.
Put that away.
This is the thing.
Welcome to your life.
There are 15 different ways to do everything in JavaScript.
And also, this video will be out of date
by the time you watch it.
Because there will be a different way
that people are doing now.
But I'm just trying to keep with the times.
And I think classes are a nice way.
They're a way that I am now choosing to create objects
in JavaScript.
So let me come back over here.
A class is the idea of the template.
This is the template.
You could think of this as--
this is a bit of a--
this is not my invention here.
But one way of thinking about this
is the class is the cookie cutter.
The object itself-- this is the object, also
often referred to as an instance.
This is the thing itself.
This is the template.
This describes-- there is no bubble here.
This just describes, what does it mean to be a bubble?
This is the actual bubble.
I make a new bubble based on what it means to be a bubble.
Am I saying the same thing over and over again?
I am.
But I'm hoping this helps make this make sense to you.
So object instances-- instance.
Object template-- cookie cutter is
like the thing you use to make the actual cookies.
So this is the cookie.
And this is the cookie cutter.
So now that that hopefully makes some sense to you,
the next point of discussion is what goes inside the class?
How do we write the class?
[BELL DING]
OK.
So first, let me just apologize.
I had a little technical glitch where I drew stuff out
of your view point in the previous video.
I am hoping that by the time you're
watching this I've figured out some nice magic to make it make
sense, or redid this video and you're not even watching this.
Because I don't have to say this.
But we'll see.
But I'm going to go on.
And what I want to do in this video is now talk about--
we really need to--
hopefully, the first video helped
you understand the concept behind
object-oriented programming in a very simple and basic way.
And now what I need to do is look at the actual syntax.
How do I write the class?
How do I make object instances?
And how do I use them?
So let's-- let me--
I guess I should be over here.
So what is the syntax of writing the actual class?
What is the syntax of making actual object instances?
OK.
Where should we start?
So I keep saying that-- now I keep saying what I said before.
There was this new keyword called new.
And what new does is it creates an object instance.
It says, hey, make a new instance
of an object that's defined inside
of a class called bubble.
So I know I want to make a bubble, which
is something I made up.
This is a made-up name for a class.
But what actually happens-- when I
call a function, when I say something like, draw a robot,
I look for a function called draw
a robot that draws the robot.
This new keyword actually says, execute a function.
But it's a special kind of function.
It's a function to create an object.
Or actually, maybe let me use a different word--
construct.
It's a function to construct an object.
And so the first thing that I need to write--
The constructor() Function is the Object's Setup
and I need to write this.
It might work without it.
But I really need to write this in every class
that I make is constructor.
So I actually declare a function called constructor.
It is written just like--
I don't have to say function.
By definition, it is a function.
So it's just like any old function definition.
It's a function definition inside the class.
And in here, this is kind of like the object's setup.
So we think of setup and draw in our code,
like in p5, setup is where I initialize everything.
Draw is where I animate stuff and loop over and over again.
The constructor is the object's setup.
So I'm defining, again, what does it mean to be a bubble?
Now I'm getting more specific.
What does it mean to be the first moments when
the bubble is formed?
That first baby bubble, it comes out
of the bubble-making machine.
And where does-- what happens?
So in this case, I'm just going to say x=100, y=100.
So this isn't correct yet.
So don't yell at me if you know about how this works.
I need to add something to this.
But this is the idea.
I want to declare--
remember, objects are a collection
of data and functionality.
So this is where I say, this is all the data
that has to do with this particular bubble.
This particular bubble has an x and a y.
Now, here's the thing.
Nowhere in here did I declare var
Using “this.” to Declare Class Variables
x or let x, depending on which video.
JavaScript, by the way, has two different ways
of declaring variables.
And I'm using let now.
But I've probably used var in a previous video.
Oh, I hate that this is happening.
But it's happening.
But I didn't actually declare the variable.
And what's weird here is that I don't actually
declare it in the way that I previously had.
So something that happens here when I say new bubble
is there's a new object instance.
And I need to actually say, this is a variable
that I want to attach.
This is a variable that is a property of that object.
And so the way that I do this, and this, this--
I'm awkwardly saying this.
Because the thing that I'm going to write here
is actually this--
this.x, this.y.
This is a keyword in JavaScript that can
mean a lot of different things.
And over time in future videos, I
will use it for a variety of different purposes.
But for right now, the this keyword
is a reference to the current object instance.
It doesn't exist.
This is a template.
So I'd say, in theory, if I were ever
to use this template to make an actual instance
of a bubble, that instance that's being made,
I'll just call this.
Out here, the instance that's being made
has a variable name called bubble.
I declared it.
Let bubble.
All right?
I said, let bubble.
I might have said var.
But I'm saying let now.
Let bubble.
Bubble is a new bubble.
That's the object instance.
That's the real object.
And since this is the theoretical object instance,
and then when I say, new bubble, this code actually happens.
That actual bubble is created.
This and bubble point to the same thing.
But the nice thing is I can use this template
for any object I create.
Because this is a generic term to refer to whatever it is I
happen to be making at the moment.
So that's the idea.
So let's go.
Let's start writing this code, and just--
let's put this in.
This.
This.
This dot.
This dot.
You know what I'm talking about, right?
This is going to--
this dot is the bane of your existence now.
Welcome to your life.
OK.
So I'm going to get rid of this.
I just have this idea of a bubble.
And I'm going to change it to say let.
And I'm going to say bubble=new Bubble.
Code Example
We're going to comment out everything in draw
because I don't have anything yet.
I don't even want to--
I'm going to comment all this out
because maybe I'll use it later.
But the idea now is that I want to write the class.
Now, where I define the class can kind of be anywhere.
And I might show you a way of organizing stuff
into different files at some point.
But I'm going to write class Bubble.
Open curly bracket.
Close curly bracket.
Now, I'm going to create that constructor like this.
I'm going to say this.x = 200 this.y = 150.
And I'm just going to say, println(bubble.x, bubble,y).
And it's not println anymore in p5.
It's just print, which is the famous console.log.
But that's a bit of an aside.
So now I'm going to run this.
And I'm going to say, look at that.
200 comma-- 200 150.
And actually, one thing I can do just to kind of--
I can actually in this interactive
console that I'm using in Chrome,
I can actually just type bubble and look.
And see, look.
Now I have an object.
It's a type bubble.
And it has two properties, x and y.
So that's what we've done.
We have made a constructor in the bubble object.
We can create new object instances.
And there they are.
So the next step now is-- we can't actually do anything.
The goal here is I want to write nice, elegant, easy-to-read
code where I say things like, now I want this bubble to move.
Now I want this bubble to show.
And ultimately, I'm going to do things
like let bubble1, let bubble2.
And, again, I know some of you might
have just watched the previous video where I used var.
Someday-- well, I'm saying this.
It won't matter.
And the aliens will have figured it out
to, like, dub over my voice in a way that
makes all this make sense.
But for now, I've got--
I'm using let.
I'm using let.
I'm using let.
So ultimately, I want to be able to make multiple objects.
We're going to look at this thing called
an array in future videos.
But we haven't gotten all the way through.
Well, the only thing I've put inside of this class
is the constructor.
And I've initialized.
And I've set--
I've specified the data for this particular bubble.
What it is to be a bubble is to have an x and a y.
So now, what I need to do is add the functionality.
If I know I want to say at some point,
Adding Functionality to a Class
bubble.move, what I want to say here is move.
So this is how I declare a function,
a piece of functionality, inside the bubble class.
This is what it means for a bubble to move.
Notice, I don't have to say function here.
So classes, the functions that are part of the bubble
template, I do not--
are by definition functions.
I don't have to say functions.
And then, what do I want for the bubble to move?
I want to change it's x and it's y.
So can I just say, x equals x plus something
to change it's x?
No.
Say it with me.
This dot.
This dot.
This dot.
It's so hard to remember.
But inside of the template, inside of the class,
I'm referring to the variables, the data that's
part of a bubble object.
I need to refer to it as this.x and this.x.
So let's go now add that to our program.
So I'm going to add a function called move.
And I'm just going to do-- and, by the way, what
do I want to do in this?
I want to do exactly what I did in the previous example.
And I'm just going to take this and put it up here.
The difference is-- and weirdly, I'm going to do something.
This is horrible.
I should not.
And I'm-- let's just show at the same time.
Why not?
I don't have to do them one at a time.
I feel-- I'm feeling confident.
I'm going to do this.
And then I'm going to take all of this code
from that show function.
And I'm going to put it up here inside this show function.
And then I'm going to delete this stuff down here.
And now I have everything-- whoops.
I need to uncomment it.
And I have everything for my class.
Can I fit it all in one screen?
Yes, I can.
Perfect.
Look at this.
So this is wrong.
Avert your eyes.
Don't implant this into your brain just yet.
But this is weirdly going to work.
So we should be done in a way.
I made this.
I made this bubble class.
I have a bubble object.
And it sort of worked by accident.
It worked because I have this global variable called bubble.
And it's the only bubble in the world.
But the template, the blueprint, should not
refer to a specific bubble.
This won't work as soon as I try to add a second object.
This bubble-- this template needs to use this dot.
So all of the x and the y needs to refer to bubble dot x y 1.
Now, here it is.
Take this.
Shoop.
Implant it into your brain.
This is-- I should mention, there
are lots of other features and things I could do in here.
There's these things called getters and setters,
and there's extends.
I'm going to get to that eventually or maybe never.
Because this is a good start.
The basic idea is define the template, the class.
Define a constructor which specifies
how that object is initialized.
And then add whatever functionality you want.
And then the world is your oyster
to make bubble1, bubble2, bubble1, bubble2, bubble1.move,
show, bubble2.move, show.
So look at that.
There are now two on the screen.
And I didn't have to change anything about the class.
The class is a generic template.
It knows nothing about where it might be used
or how it might be applied.
It's just the template.
So this is a way of defining objects.
And it's going to-- this is also-- this is no good.
Because this works for two, but eventually
I'm going to want to have a hundred.
And I'm going to get to that in a future video.
And there's lots of-- there's some other missing pieces here.
And that'll be in the next video.
But for now, if you're watching this,
here's an exercise to do for yourself.
Find a sketch you made that had some thing in it.
Get kind of a simple thing, a thing moving around the screen.
Maybe you didn't use objects in it at all.
Try to encapsulate everything that has to do with that object
into a class.
What are the properties that are part of that?
If you're making a rainbow, the properties
are the colors, potentially.
I don't know.
Or its position on the screen.
What's its functionality?
It can appear.
It could disappear.
It can shine and glow, whatever it can--
whatever it does, make those functions.
Try to create one object instance and operate it.
And then, see if you can create a second object instance.
Now, you might have a problem where both of your objects--
you make two, but they do exactly the same thing.
So you can't actually see that there are two.
And that's the thing that I want to address in the next video,
this idea of kind of hard coding these values so
that every single bubble always starts at the same place
is somewhat problematic.
And I'm going to address that with something
called arguments or parameters to the constructor.
And so that's what I'll do in the next video.
Make your objects.
Share them with me.
And I'll see you in a future video.
Unless I'm going to still be here in a second
because I might have gotten something wrong,
and I have to correct it.
 */