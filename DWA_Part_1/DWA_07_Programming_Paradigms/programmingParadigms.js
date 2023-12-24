/*
3 paradigms
SOLID

Paradigms are ways of programming.

    unrelated to languages
    approaches
    A paradigm tells you which programming structure to use.
    OOP says use objects to create abstractions
    functional programming says primary way of creating abstraction by functions.

    Structured programming imposes discipline on direct transfer of control.

Procedural/Structured Programming
       first adopted
       basic structures of instructions

OOP
      allowing local variables declared by function to exist long after function returned.
      Function became a constructor for a class, the local variables became instance variables and nested functions became methods.

       OOP imposes discipline on indirect transfer of control.

        creates instances of things and inside that you bundel the data and behavior
        code complexity is more maintainable when you are able to think about abstraction
        as real life things that have values and can do things.
        skalk - gender male / age-36 / record a video/ clap
Functional Programming

        keep data state and behavior seperate.
        things are mutable - sleep/awake
        should not create things where values can change

        Functional programming imposes discipline up on assignment.
        cant reassign things.

const balance = 10
balance -= 3 //7
balance =+ 10 // 17
console.log(balance // 17

fp
const transactions = [10]
[10, 7}
[10, 7 10]
console.log(transactions.at(-1)






//transs
Basic Overview
so what I want to do in this lesson is I want to give a very brief overview of
what exactly is procedural programming what exactly is object orientated programming and what exactly is
functional programming those are the three big paradigms in the world of programming and you can do all three of
them in JavaScript I have shown you now in this lesson how to do procedural
programming so what I'll do now is I'll reflect on it a bit and kind of give you a bit of insight like why we call that
procedural programming then I want to look very very high level at object orientated programming and functional
programming as well and then so the two lessons that follow this one the next one being on encapsulation in which
we're going to look at classes finally and also specifically web components
um and as web components and the relationship between classes and web components in HTML and JavaScript and
then the one following that we're going to look at inheritance how we make sense of inheritance in in object orientated
programming and also that there is more to object orientated programming than inheritance a lot of people but
inheritance is actually a very small part of it I would actually say inheritance is probably the part I like
least about oop I also want to mention that I have discussed classes a bit I
Discussing JavaScript "Class"
mentioned I'm not a fan of classes don't mistake this for me not being a fan of
what actually classes are or actually for what classes do in JavaScript I mean
it's not my favorite feature in JavaScript but it's okay it's it's pretty indifferent to it what I'm not
really a fan of in in JavaScript is the naming of this thing the fact that they
named it class because that conjures a lot of connotations a lot of them
misleading misrepresentations because classes in JavaScript at on the surface
appear like classes in other languages but there are actually something very different and I think that disconnect
actually results in a lot of people actually misusing classes or using them in strange ways which doesn't really
speak to the actual underlying mechanisms that they abstract in
JavaScript so I need to also make a distinction between classes and also what we understand as classes in
JavaScript all right but so with that out of the way let's dive straight into it let's start talking about procedural
programming I'm going to start with this clean architecture book again I did speak about Robert Martin in in the
"Clean Architecture" Book
previous video specifically his contributions to this idea of solid and I have highlighted
this book before and as an introduction to managing complexity and I'm gonna
continue with it because I think all the overviews of these three paradigms I
think his explanation I actually find the most interesting and meaningful but
there's a ton of it you can even go and look on Wikipedia there's no shortage of resources in terms of under explaining
the difference between these three paradigms they're like it's this is actually a great book and I highly recommend you guys check it out I
actually have a printed version of it as well and it actually goes into these paradigms quite deeply you know so
object orientated programming functional programming and so forth uh he also
unpacks these solid principles you know it's a single responsibility principle open close principle liskov substitution
interface segregation and dependency inversion so these solid things we just
covered and he also talks about the different paradigms because the different paradigms have different
opinions on how you achieve this and how you do abstraction so let's get straight
into it let us just start with part two and I'm just going to highlight some of the pages we're not going to read it all
the way through not only because that will be immensely boring but also I'll probably surpass what is legally allowed
under fair use probably get in trouble for sharing too much of the book I think the rulers you can share 10 or something
legally he actually starts with the history of computing and so forth and I I won't go into it and he talks about
What are "Programming Paradigms"?
like mechanically how computers and the introduction of computers into industrial society actually resulted in
a massive change in the world interestingly enough what he says is not
only is the emergence of different paradigms on the same level of the as
the actual practical and physical implication of computers on society he actually says that it's probably even
more significant so I think I cannot understate how important it is to
understand these broad level approaches for any programmer and so effectively
what are paradigms so paradigms are ways of programming so you'll also find that
their names usually end with programming so you know object orientated programming functional programming
procedural programming so it's a way of doing programming that something it's actually unrelated to
languages true there are specific languages that enforce a specific Paradigm so for example Haskell only
allows you to do functional programming I wouldn't say Java exclusively forces
oop that much anymore it was a case back in the day but they've kind of opened it
up a bit but it definitely encourages an oop approach but the point being that
these these approaches where as languages might restrict you to a specific approach
um the approaches themselves are kind of bigger than the languages themselves so he effectively says a paradigm tells you
Paradigms say how to create abstractions
which programming structures to use effectively that's a very simplified version of it but like there is some
truth to it effectively object orientated programming says your primary
way of creating abstractions and creating abstract structures is by means
of objects and no surprises functional programming says that your primary way
of creating abstractions creating meaning the things that you compose are
functions he says that two date they have been three paradigms and he also
says he doesn't believe there will be any more paradigms a lot of people are skeptical of this but I actually
understand this and I agree I agree I think these are other three primary paradigms I don't think we are likely to
actually see any new programming paradigms arise unless what we mean by
programming radically changes so effectively structured or procedural
programming was kind of the very first widely adopted Paradigm and and for that
reason both oop and functional programming have some elements of it so
What is "Procedural Programming"?
it can't be wholly separated from the other team but I think it's also important that he mentions that the
first Paradigm to be adopted to be seen as a paradigm and to be that was kind of
identified as a very specific approach to that you can take to programming was structured or procedural programming and
in the two videos leading up to this now but effectively that very first exercise
that I gave you where I gave you all that logic without any abstractions for the book connect project that is the way
kind of people used to write code back in the day just one big sheet of instructions granted like we I couldn't
really get down to that level because like JavaScript actually enforces you to
at the very least you proceed your programming and you can't go you a level
lower than that but some of the older languages I definitely remember when I
was a teenager and we did computer science as a subject at school we did
turbo Pascal and and that had something that's called the go-to statement so you can effectively let's say you have your
What is a "GOTO" statement?
lines of code here and So currently what we're doing is we want to if we want to Loop code then we you know we create
kind of like a loop-like structure and we put our code in that and we just tell it like you know go over and over and
over until this certain condition is made the way you used to do this before we kind of had some of these
abstractions is you would literally say go to line two go to line three go to
line four so you would have like some code running here and it would reach a point where to go back to line one can
it go back up run run run again maybe otter do some other things then go back to line three or whatever and then jump
to that line over there and so forth so you'd manually move the control flow
around whereas to a certain degree in JavaScript and now uh some of that is
abstracted by like calling functions and stuff like that you know or if else statements and and so forth so
Procedures hide "GOTO" logic
effectively just to summarize it before we really saw structured or procedural
programming programming was literally seen as kind of a bullet list of linear instructions and you could jump between
them say go to step three go to step four go to step five and then you know with the procedural programming we
actually started thinking more about programming in terms of a list of
instructions those instructions are abstractions so instead of saying go to
Encourages nesting functions as abstraction
list three go to list four go to list five you would say add a task and inside add a task would it would have three
other procedures would be um you know grew headed in HTML updated in HTML and
also updated in the state so you still had these kind of almost fire and forget things that you do but they were kind of
much more structured instead of just jumping up and down through lines of code so you had these very basic
structures like if else then do while and so forth like the the key being you
you're thinking about functions and behavior as instructions this is just a
more abstracted way of thinking about Behavior as instructions or functions as instructions whereas the other two tend
to think about function and behavior as actual pieces of data pieces of data
that can be moved somewhere that can be stored somewhere that can be copied changed and so forth okay in the same
way that you would move a variable around or you would combine two variables or so in a procedural sense
What is "Object Oriented Programming" (OOP)?
that doesn't really make sense because it's just instructions it's not a piece of data itself
all right so now let's get into oop so effectively what's interesting is oop
used to be the dominant approach for a very very long time like I'd say it
started really changing maybe 10 years ago um I think as class as five years ago
like Alternatives like functional programming started picking up a bit of steam and the reason being mostly
because our software started getting much more concurrent and decentralized meaning that for a very long time your
your software would actually be very close to where the data is and so forth you just install it on your computer and
it would live there whereas now you might have a Facebook account and you go to it through the browser and you can go
to it through your phone your computer or at your parents house or even on like
OOP used to be main paradigm for a long time
a fridge or whatever and you can have multiple tabs of it open at the same time and even the actual service that
handle different things like checking that you say you are who you are storing
photos all of those things are also decentralized orp kind of does fall apart a bit
um when it comes to decentralization and concurrency so also things happening in
parallel so a good example would be also you know because you had immediate access to data back in the day you
However OOP struggles with concurrency
didn't really think about like okay cool how do you handle tasks while the data
is loading but now your actual user data might be stored in Ireland somewhere or in Canada and it might take 10 seconds
to actually arrive in South Africa so the app can't be idle then it still needs to be able to handle different
things you should be able to scroll still do other things um and yeah and then generally oop
struggles a bit more of that type of thing than functional programming which a lot of functional approaches have kind
of been on the rise and also a lot of very traditional oop languages have been
integrating some aspects of kind of functional programming into them so
let's just quickly chat about what oop is the irony is actually that functional
programming is actually the oldest of all three of these but it's the last one that actually kind of reached like
popular um adoption so I'm not going to go into like the technical stuff over here this
Functions as constructors for objects
idea of functions kind of becoming Constructors for you know a class or an
object or whatever kind of one of the big realizations uh that kind of led to
oop so in the same way where we had these functions that created an employee uh we had a function that takes kind of
the base employee and adds extra information on top of it of it so that you can use actual functions to generate
data structures as it's kind of a very big part of our P you know and kind of like it also has this concept of
polymorphism which we're also going to like chat about but I also like the way
um Uncle Bob kind of summarizes the so he says effectively structured or proceed digital programming imposes
discipline on the direct transfer of control so he talks about all of these enforcing discipline in other words it
All paradigms remove some functionality
removes something it no longer allows you to do something and which is interesting where he says like all these
paradigms actually give you more structure by saying this there's one thing which you're no longer allowed to
do with procedural programming that is you are no longer allowed to actually directly say go to this line of code
you're no longer able to directly control the Flow by go to statements and
then he says in object alternative programming and the discipline is on indirect transfer of control effectively
what oop does is it takes this kind of indirect transfer of control that we get
with a procedural structural programming and it actually even takes that away so
you no longer even have indirect transfer control and and the reason for that is because in oop you kind of
OOP doesn't treat behaviour as instructions
create things to represent almost like real life entities so in our case you
would have like the actual task itself as if it's a thing and that task has specific data in it and it can do
specific things and then you maybe have the list contains all the tasks you know
and that has data in it and it can specific things and you maybe have the controls that control what actual tasks
get shown in the list you kind of encapsulate which is a concept we're going to talk about later all of these
and you don't directly go and Trigger things inside them so you don't you
OOP abstracts code according to "things"
can't no longer reach inside this and say the toggle bar red or change this
thing or it's up to the the the the the item itself to decide what it allows you
to do and this is where kind of interfaces come in so it gives you like an interface you can think about these as you know like oh that's supposed to
be a button or you know like let's say it's like a steering wheel or
All behaviour is handled through "interfaces"
um like some switch that you can flick or whatever and you can't reach inside the thing it just gives you this
interface and you can only work with that interface so you can only turn this you know to the side you can only press
this button in you can only flip the switch and it's for the thing it's
side what is it going to do in response to that and so these things never reach
so you can't go from here inside this thing and reach directly into that so
these kind of entities talk to one another through these interfaces and
that's the only way they can talk to one another at no point can you reach into
Can not directly access inside from outside
one specific object from within another one again that's effectively about
encapsulation is um so even this indirect transfer of control you no longer have you no longer
call like a specific function inside that unless there is kind of like a
interface exposed that indirectly triggers that for you okay so then the
third one obviously functional programming I'm gonna quick about this one because we're going to go into this in much more depth and I think it's also
easier to understand functional programming once you get a sense for what exactly oop is
What is "Functional Programming" (FP)?
um and he also mentions you know it has only recently been adopted interestingly enough it was the first one that was
invented because it's actually based on mathematics you remember at the beginning of abstraction where we spoke
about mathematics and we spoke about kind of these abstractions such as Pi E equals MC square all these things these
are kind of called algebra so there was this this guy called Alonso Church who
worked with Alan Turing who invented the first concept of a computer and they
FP is based on mathematic principles
kind of developed this thing called uh algebraic calculus so we're not going to
into that but like functional programming is mostly based on that so before we get a bit deep into what
functional programming does uh like it's also important that we know that you know so you create these instances of
things um in oop inside that you kind of bundle the data and the behavior together so
you can think about these as like kind of cells or whatever and so whereas with procedural programming and what we've
OOP combines data and behaviour
done up until now we've kind of had our state module and then we had our actions as different things over here the data
of a specific task and the things you can do in a task would be all bundled together and this is what allows and
then it would be exposed you know through an interface so that is the the
primary way in which you do that and I'm going to show you guys now in reality what that means in JavaScript the
functional programming says let me just yes this is turning into a mess um but this is just a high level
overview like don't try and understand the concepts this is just like this is just to kind of set the scene for when I
introduce it now I respected so that's clear it's not part of the functional programming one functional programming
says it doesn't really care about this uh in fact functional programming says you actually shouldn't combine you
should keep your data so your state so how many tasks there are and your functions separately so your behavior
and your data should be separated um in oop you combine them and so
whereas oop says effectively that let me just type it here like code complexity
FP keeps data and behaviour seperate
is more maintainable when you are able to think about abstractions as real life
things that have values and can do so for example you know in my case skulk I
have a couple of values reason that is like my gender is male you know my age
is depending on when you watch this but now when it's being recorded I'm turning 36 but then there's also things that I
OOP and FP remove different functionality
can do um I can record a video I can clap my
hands effectively you bundle all of this together into an abstract concept that's
easy for you to reason about because it kind of mirrors how you think about the real world functional programming says
this isn't the key to actually keeping code maintainable and reducing complexity it doesn't really care about
how you group these things what it says is the problem isn't that the things
related to skulk isn't all together it says the problem is the things related
FP says problem is data changing
to skulk and when you reason about something in that manner is that they can't change they're mutable so skulk am
I awake or asleep am I talking or not and so forth as you can imagine like
when you think about it in this way that these change very slowly if at all these
change a lot faster so awaken sleep yeah but talking or not talking so even if
I'm talking there are silences between I kind of go between talking and not talking very quickly and as you can
imagine this is what I spoke about when I spoke about concurrency in decentralization the more our platforms
get more decentralized and more concurrent the more State changes and
mutates that's much harder to keep track the actual value whereas maybe 10 10
years ago the actual values that you represented in your code didn't change as often you know you can think about a
The web is getting more decentralised
WhatsApp message you know so comparing something like WhatsApp messaging in terms of how quickly that data changes
and your online you're offline you're chatting this business you're telling that person you're getting a message from this person that other person sent
you a message that same time do something like a system at a library for keeping track of what all the books in
the library adding books removing books and so forth it says it's the problem here is that if these things change too quickly grouping the
functions alongside them become meaningless so let's say for example there's a function that says you know
sleep and wake so that toggles whether I'm currently asleep or awake then there's maybe another function that is
walk and stop again this toggles so if these toggle very quickly so you can
imagine that so let's say you're in the in the Wake State and you're like okay cool and you say I'm going to start
FP mitigates race-conditions
walking but in between that time where you run this commode and it actually starts running another function was
called that actually put you in the Sleep State what's happening you're sleepwalking which wasn't what you
intended when you ran the function so um not only that but you can also so you
can get into a state where if where if something happens and this is very similar to those race conditions we
discussed when we spoke about errors something happens and there's like a split second of it actually having to
process and something else writes to that thing and it results then it's going to overwrite that again so the
solution to this is that you at all times need to know what the state of everything in that entity is so there's
the saying that you know the big problem with object orientated programming is so it effectively says the problem with
OOP makes hard to split up behaviour
object orientated languages is that they've got all this implicit environment that they carry around with
them you wanted a banana but what you got was a gorilla holding the banana and the entire jungle coming along with it
so it's very hard to extract little pieces of behavior because you need the
entire scope of the thing itself you know in order to start walking I need to
know if I'm asleep or awake in order to determine what that walk is going to do so how functional programming says we
solve this problem and it says actually this is a much bigger problem than this and I guess it depends on what type of
Type of problem depends on what you building
system you're building so if you are building a system that's very concurrent this is going to be a much bigger
problem if you're Building A system that doesn't struggle as much with concurrency where it's like a big
banking app and you know it takes like two working days for money to be transferred or whatever
um it's a different story but for example if you're building an app where you are just calculating some simulation
so for example you your engineer and you want to build a bridge and you want to
model that bridge and you're creating software that can tell you how much pressure this bridge can carry whatever
so you input the information and whatever you simulate it all the things run they talk to one another and it
spits out something for you that is much different than if you have this environment where things are just
constantly changing and updating and you have to listen to something and something there changes and while this is happening this thing changes and
unfortunately you can imagine which one is more like the web that we know today
and and how the web platform works so obviously this one so there is definitely a movement to more functional
JavaScript code um you will actually see that if you watch YouTube videos
JavaScript is becoming more FP-like
um the longer back the video goes actually the more likely it'll be that someone will take an oop approach uh
compared to if those videos maybe recorded earlier this year but we're not going to be dealing with any concurrency
um or whatever yet so this is not really going to be a problem for us you know we are gonna just be the the level of on
currency that we're going to be dealing with is going to be event listeners which isn't that bad so we're not going to feel this pain that much but it's
just important to know that kind of these speak to two specific problems
that it thanks is the problem of managing complexity in software depending on what type of software
you're building one of these might actually be more of a problem than the other one I feel very strongly that and
just due to the nature of JavaScript the language itself you need to do both approaches it's it's impossible to
You always need to do both OOP and FP
create something in JavaScript with just doing oop um or to create something just using
functional programming like there are languages that can compile down to JavaScript by with using only functional
programming or only oop but they have to jump through so many Hoops that it just
actually ends up actually creating more complexity JavaScript itself you need to be good and have a good understanding of
both of these so when someone tells you like oop is better functional programming is better I don't know don't
listen to them like they have no idea what they're talking about you need to be able to do both to just do anything
meaningful in JavaScript is it plus possible to like one more than the other one sure I actually like writing
FP says abstractions should avoid changing
functional code more than oop code it should be clear by now it's definitely going to become clear when I talk about
functional programming I need to be able to write both and one isn't more useful than the other universally one is more
useful than the other depending on what exactly it is that I'm doing with my code right now we're gonna end off this
this kind of entire part of the course we've talked about abstractions and structuring JavaScript and programming
paradigms where we actually show how you combine both functional and oop in
JavaScript to create very solid abstractions let me get back to how
functional programming attempts to solve this it says like the big problem is we
shouldn't reason about things we shouldn't create abstractions that themselves are mutable so like this so
we shouldn't create things where values can change we shouldn't create a unit of
abstraction where it can go from sleep to wake where it can go from a walk to
stop so in other words it would create two things it would have it would have a
wake skulk and it would have sleeping skull you're keeping these completely separate like these are kind of just
like data structures then you just have something like toggle awakeness and then
all that happens is you just pass it one of these and depending on what you pass
it it always going to spit out the exact same thing and then so if you pass it sleeping skulk it's always going to spit
out a wax caulk again it's not going back and changing sleeping skulk into awake sculpt as we have here where we
have like skulk as one thing that can have change State it's spitting out something new when you pass it away
skulk it spits out sleeping skull we might even have a function here that is like clone human if you pass in either
of these if you pass in sleeping sculpt then it's going to spit out two sleeping skulks for you so effective it always
In FP behaviour is always predictable
creates new things and that is how you reason about your code you don't have things that change State instead you're
creating a new thing and that might actually sound strange to you and I'm just going to quickly illustrate the
Abstractions are immutable in FP
principle you can think about okay cool in an oop approach get out of this mess
that I created but like just quickly said discipline so the discipline is on
assignment in other words you can't reassign things I can't have a function
take skull can change skulk into the state of skulk from awake to sleeping or
change skulk into awake sculk or sleeping skulk it takes something and it spits out something new that I can use
so I can't mutate I can't change anything there's a lot of nuance to that so don't break your brain about that
right now and like I just want to highlight once again you know like so each of these paradigms remove something
Recapping paradigms
so in object-oriented state it removes the separation between data and behavior
in functional programming it removes the ability to mutate data so it keeps start
on Behavior separate but it removes ability to change a specific piece of
data so all of these remove something but in return they give us something
Example of OOP approach
back so you can set all these say what not to do all right so let me just quickly do an example so you might think
about you have a bank balance okay so let's say you have const balance and
then you start with 10 Rand you run a function and what balance is current
balance minus three okay so now balance is seven then you run another function
and it adds so now your balance is 17. so you're mutating so if you then console log you know balance it's
obviously going to give you 17. so you're mutating this value and you might be like okay cool but like that makes
sense how would I do this in functional programming like here's the thing like functional programming would say that is
actually three different values that's not the same value so in functional programming let's say you would actually
Example of FP approach
just have an array and your array would instead of being balanced you would just
call it transactions you know and so let's say you start with 10 and then you
have a function and that takes that 10 value it applies it and it creates a new
value which is seven okay so there's array and then the same again so you know so you have this history of the
states of it like you never mutate anything directly it would be as easy as if you just want to see the balance you
just say you know transactions and you don't get me the most recent one so it's
obviously a bit more complicated than that but just to show the principle you know so like you just go out of your way
to not mutate anything
 */