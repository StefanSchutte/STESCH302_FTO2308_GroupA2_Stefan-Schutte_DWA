/*
a race conditions

reactive frameworks


 */
let locked = false

const lockFn = () => {
    if (locked) throw new Error('Already locked')

    locked = true;

    return () => {
        locked = false;
    }
}

const toggleMode = () => {
    const unlock = lockFn()
    //locked = true

    setTimeout(() => {
       unlock()
    }, 2000)
    //locked = false
}

const changeAmount = () => {
    const unlock = lockFn()
    //if (locked) throw new Error ('Mode is being changed')
    unlock()
    //locked = true
    //...
    locked = false
}

toggleMode()
changeAmount()

/*
Murphy's law states that whatever can go wrong,
eventually will go wrong.
This applies a tad too well in the world of programming.
If you create an application,
chances are you'll create bugs and other issues.
Errors in JavaScript are such a common issue.
A software product's success depends
on how well its creators can resolve these issues
before hurting their users.
In JavaScript, out of all programming languages,
is notorious for its average error handling design.
This video will guide you
through the basic errors in JavaScript
and explain the various errors you might encounter.
But before we get too far,
I wanna let you know that there will be links
to more resources in the video's description.
And remember, subscribe and ring that bell
to get notifications for future helpful content.
Now, what are JavaScript errors?
What Are JavaScript Errors?
Errors in programming refer to situations
that don't let a program function normally.
It can happen when a program doesn't know
how to handle the Java hand,
such as when trying to open a nonexistent file
or reaching out to a web-based API endpoint
while there's no network connectivity.
These situations push the program
to throw errors to the user,
stating that it doesn't know how to proceed.
The program collects as much information
as possible about the error,
and then reports that it cannot move ahead.
Errors in JavaScript carry certain standard
and custom properties that help understand the cause
and effects of the error.
By default, errors in JavaScript contain three properties.
Message, a string value that carries the error message.
Name, the type of error that occurred.
We'll dive deep into that in the next section.
Stack, the stack trace of the code executed
when the error occurred.
A stack trace is the list of method calls a program was in
when an event, such as an exception or a warning occurs.
This is what a sample stack trace,
accompanied by an exception looks like.
As you can see,
it starts by printing the error name and message,
followed by a list of methods that were being called.
Each method call states the location of its source
and the line at which it was invoked.
You can use this data
to navigate through your code base
and identify which piece of code is causing the error.
Most people usually consider errors and exceptions
as the same thing.
However, it's essential to know a slight
Errors vs Exceptions
yet fundamental difference between them.
An exception is an error object that has been thrown.
To understand this better,
let's take a quick example.
Here is how you can define an error in JavaScript.
And this is how the wrongTypeError object
becomes an exception.
However, most people tend
to use the shorthand form,
which defines error objects while throwing them.
Types of Errors in JavaScript
A RangeError is thrown when a variable is set
with a value outside its legal values range.
It usually occurs when passing a value as an argument
to a function.
And the given value doesn't lie
in the range of the function's parameters.
It can sometimes get tricky
to fix when using poorly documented third-party libraries
since you need to know the range of possible values
for the arguments to pass in the correct value.
A ReferenceError occurs when something is wrong
with the variable's reference in your code.
You might have forgotten to define a value
for the variable before using it.
You might be trying to use an inaccessible variable
in your code.
In any case, going through the stack trace
provides ample information
to find and fix the variable reference
that is at fault.
These errors are one of the simplest to fix
since they indicate an error in the syntax of the code.
Since JavaScript is a scripting language
that is interpreted rather than compiled,
these are thrown when the app executes the script
that contains the error.
In the case of compiled languages,
such errors are identified during compilation.
Thus, the app binaries
are not created until these are fixed.
It's a good practice to use a linting tool
in your IDE to identify such errors
for you before they hit the browser.
TypeError is one of the most common errors
in JavaScript apps.
This error is created when some value doesn't turn out
to be of a particular expected type.
The InternalError type is used
when an exception occurs in the JavaScript runtime engine.
It may or may not indicate an issue with your code.
The most appropriate approach to solve this error
is to identify the cause via the error message
and restructure your app logic,
if possible, to eliminate the sudden spike
of workload on the JavaScript engine.
URIError occurs when a global URI handling function,
such as decode URI component is used illegally.
It usually indicates that the parameter passed
to the method call did not conform to URI standards
and thus has not parsed by the method properly.
Diagnosing these errors is usually easy,
since you only need
to examine the arguments for malformation.
An EvalError occurs when an error occurs
with an eval function call.
This eval function is used
to execute JavaScript code stored in strings.
However, since using the eval function
is highly discouraged due to security issues
in the current ECMAScript specifications,
don't throw the EvalError class anymore.
This error type exists simply
to maintain backward compatibility
with legacy JavaScript code.
If you're working on an older version of JavaScript,
you might encounter this error.
In any case, it's best to investigate the code executed
in the eval function call for any exceptions.
Creating Custom Error Types
While JavaScript offers an adequate list
of error type classes to cover for most scenarios,
you can always create a new error type
if the list doesn't satisfy your requirements.
The foundation of this flexibility lies
in the fact that JavaScript allows you
to throw anything literally with the throw command.
So technically, these statements are entirely legal.
However, throwing a primitive data type
doesn't provide details about the error,
such as its type, name or the accompanying stack trace.
To fix this and standardize the error handling process,
the error class has been provided.
It's also discouraged to use primitive data types
while throwing exceptions.
You can extend the error class
to create your custom error class.
Here's a basic example of how you can do this.
And you can use it in the following way.
And you can then identify it using the instance of keyword.
Now it's time to look at some
of the most common errors you'll face
when writing JavaScript code.
This error occurs in Google Chrome
Uncaught RangeError
under a few various scenarios.
First, it can happen if you call a recursive function
and it doesn't terminate.
You can check this out yourself
in the Chrome Developer console.
So to solve such an error,
make sure to define the border cases
of your recursive function correctly.
Another reason why this error happens
is if you have passed a value
that is out of a function's parameters range.
Here's an example.
The error message will usually indicate
what is wrong with your code.
Once you make the changes, it will be resolved.
This error occurs when you set a property
on an undefined reference.
Uncaught TypeError: Cannot set property
You can reproduce the issue with this code.
Here's the output that you'll receive.
To fix this error, initialize the reference
with the value before accessing its properties.
Here's how to looks when fixed.
This is one of the most frequently occurring errors
in JavaScript.
This error occurs when you attempt to read a property
Uncaught TypeError: Cannot read property
or call a function on an undefined object.
You can reproduce it very easily
by running the following code in a Chrome Developer console.
Here's the output.
An undefined object is one of the many possible causes
of this error.
Another prominent cause of this issue
can be an improper initialization of the state
while rendering the UI.
Here's a real-world example from a React application.
The app starts with an empty state container
and is provided with some items
after a delay of two seconds.
The delay is put in place to imitate a network call.
Even if your network is super fast,
you'll still face a minor delay
due to which the component will render at least once.
It you try to run this app,
you'll receive the following error.
This is because at the time of rendering,
the state container is undefined,
thus there exists no property items on it.
Fixing this error is easy.
You just need to provide an initial default value
to the state container.
Now after the set delay,
your app will show a similar output.
The exact fix in your code might be different
but the essence here
is to always initialize your variables properly
before using them.
This error occurs in Safari
when you try to access the properties of
TypeError: ‘undefined’ is not an object
or call a method on an undefined object.
You can run the same code from earlier
to reproduce the error yourself.
The solution to this error is also the same.
Make sure that you have initialized your variables correctly
and they are not undefined when a property
or method is accessed.
This is again similar to the previous error.
It occurs on Safari
TypeError: null is not an object
and the only difference between the two errors
is that this one is thrown
when the object whose property
or method is being accessed
is null instead of undefined.
You can reproduce this
by running the following piece of code.
Here's the output that you'll receive.
Since null is a value explicitly set to a variable
and not assigned automatically by JavaScript,
this error can occur only if you're trying
to access a variable you set null by yourself.
So you need to revisit your code
and check if the logic that you wrote is correct or not.
This error occurs in Chrome
when you try to read the length
of a null or undefined object.
TypeError: Cannot read property ‘length’
The cause of this issue is similar
to the previous issues
but it occurs quite frequently while handling lists.
Hence it deserves a special mention.
Here's how you can reproduce the problem.
However, in the newer versions of Chrome,
this error is reported as Uncaught TypeError:
Cannot read properties of undefined.
This is how it looks now.
The fix again is to ensure that the object
whose length you're trying to access exists
and is not set to null.
This error occurs when you try to invoke a method
TypeError: ‘undefined’ is not a function
that doesn't exist in your script
or it does but cannot be referenced
in the calling context.
This error usually occurs in Google Chrome,
and you can solve it by checking the line
of code throwing the error.
If you find a typo, fix it
and check if it solves your issue.
If you have used the self-referencing keyword in your code,
this error might arise if this is not approximately bound
to your context.
Consider the following code.
If you execute the above code,
it will throw the error we discussed.
It happens because the anonymous function passed
as the event listener is being executed
in the context of the document.
In contrast, the function showAlert
is defined in the context of the window.
To solve this, you must pass the proper reference
to the function by binding it with the bind method.
This error occurs when you try to access a reference
ReferenceError: event is not defined
not defined in the calling scope.
This usually happens when handling events
since they often provide you with a reference called event
in the callback function.
This error can occur if you forget
to define the event argument
in your function's parameters or misspell it.
This error might not occur in Internet Explorer
or Google Chrome but it might occur in Firefox.
TypeError: Assignment to constant variable
So it's advisable to keep in an eye out
for such small mistakes.
This is an error that arises out of carelessness.
If you try to assign a new value
to a constant variable,
you'll be met with such a result.
While it seems easy to fix right now,
imagine hundreds of such variable declarations
and one of them mistakenly defined as const
instead of let.
Unlike other scripting languages,
like PHP, there's minimal difference
between the style of declaring constants
and variables in JavaScript.
Therefore, it's advisable
to check your declarations first of all
when you face this error.
You could also run into this error
if you forget that the set reference is a constant
and use it as a variable.
This indicates either carelessness
or a flaw in your app's logic.
Make sure to check this when trying to fix the issue.
A script error occurs
when a third-party script sends an error
(unknown): Script error
to your browser.
This error is followed by unknown
because a third-party script belongs
to a different domain than your app.
The browser hides other details
to prevent leaking sensitive information
from the third-party script.
You cannot resolve this error
without knowing the complete details.
Here's what you can do to get more information
about the error.
Add the crossorigin attribute to the script tag.
Set the correct Access-Control-Allow-Origin header
on the server hosting the script.
If you don't have access to the server hosting the script,
you can consider using a proxy
to relay your request to the server and back to the client
with the correct headers.
Once you can access the details of the error,
you can then sit down to fix the issue,
which will probably be with either the third-party library
or the network.
Looking for a quality local development solution?
With DevKinsta, in a single click,
you can design, develop and deploy new WordPress projects
from your local machine.
Plus, it's 100% free to use,
even if you aren't a Kinsta customer.
Download it today at kinsta.com/devkinsta.
 */