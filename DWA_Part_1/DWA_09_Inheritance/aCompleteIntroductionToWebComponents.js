/*
Intro
Hey there, I'm Mike and today I'm going to introduce you
to web components.
(upbeat music)
A web component is an easy way
to create an encapsulated single responsibility code block
that can be reused on any page.
In this video, we'll go deeper
into using web components on your website
and even cover some issues
you might face using web components.
But before we get too far,
I wanna let you know that there'll be links
to more resources in the video's description
and remember, subscribe and ring that bell
to get notifications for future helpful content.
So let's get started.
Web components are custom HTML elements such as hello-world.
Getting Started With Web Components
The name must contain a dash
to never clash with elements officially supported
in the HTML specification.
You must define an ES2015 class to control the element.
It can be named anything,
but hello-world is common practice.
It must extend the HTML element interface
which represents the default properties
and methods of every HTML element.
Take note, Firefox allows you to extend
specific HTML elements such as HTML paragraph element,
HTML image element or HTML button element.
This is not supported in other browsers
and does not allow you to create a shadow DOM.
To do anything useful, the class requires a method
named connectedCallback which is invoked
when the element is added to a document.
In this example, the element's text is set to hello world.
The class must be registered
with the custom element registry
to define it as a handler for a specific element.
The browser now associates the hello-world element
with your HelloWorld class
when your JavaScript is loaded.
You now have a custom element.
This component can be styled in CSS like any other element.
This component isn't beneficial
since the same text is output regardless.
Adding Attributes
Like any other element, we can add HTML attributes.
This could override the text
so hello, Craig is displayed.
To achieve this, you can add a constructor function
to the HelloWorld class
which is run when each object is created.
It must first call the super method
to initialize the parent HTML element
and then make other initializations.
In this case, we'll define a name property
that is set on a default of world.
Your component only cares about the name attribute.
A static observed attributes property
should return an array of properties to observe.
An attributeChangedCallback method is called
when an attribute is defined in HTML
or changed using JavaScript.
It's passed the property name, old value and new value.
In this example, only the name property
would ever be updated,
but you could add additional properties as necessary.
Finally, you need to tweak the message
in the connectedCallback method.
The browser automatically calls six methods
Lifecycle Methods
throughout the lifecycle of the web component state.
It's called when the component is first initialized.
It must call super and can add any defaults
or perform other pre-rendering processes.
This returns an array of attributes
that the browser will observe.
This is called whenever an observed attribute is changed.
Those defined in HTML are passed immediately,
but JavaScript can modify them.
The method may need to trigger a rerender when this occurs.
This function is called when the web component
is appended to a document object model.
It should run any required rendering.
This is called when the web component is removed from a DOM.
This may be useful if you need to clean up
such as removing stored state or aborting Ajax requests.
This function is called when a web component
is moved from one document to another.
How Web Components Interact With Other Elements
Web components offer some unique functionality
you won't find in JavaScript frameworks.
While the web component we built previously works,
it's not immune to outside interference
and CSS or JavaScript could modify it.
Similarly, these styles you define for your component
could leak out and affect others.
The shadowDOM solves this encapsulation problem
by attaching a separated DOM to the web component
with this code.
The mode can either be open,
JavaScript in the outer page can access the shadowDOM.
Or closed, the shadowDOM can only be accessed
within the web component.
The shadowDOM can be manipulated
like any other DOM element.
The component now renders the hello text
inside a paragraph element and styles it.
It cannot be modified by JavaScript or CSS
outside of the component,
although some styles such as the font and color
are inherited from the page
because they were not explicitly defined.
The style scope to this web component
cannot affect other paragraphs on the page
or even other hello-world components.
Take note that the CSS host selector
can style the outer hello-world element
from within the web component.
You can also set styles to be applied
when the element uses a specific class
like HelloWorld with the class rotate90.
Defining HTML inside a script can become impractical
for more complex web components.
HTML Templates
A template allows you to define a chunk of HTML in your page
that your web component can use.
This has several benefits.
First, you can tweak HTML code
without having to rewrite strings inside your JavaScript.
Second, components can be customized
without having to create separate JavaScript classes
for each type.
And third, it's easier to define HTML in HTML
and it can be modified on the server or client
before the component renders.
Templates are defined in a template tag
and it's practical to assign an ID
so you can reference it within the component class.
This example has three paragraphs
to display the hello message.
The web component class can access this template,
get its content and clone the elements
to ensure you're creating a unique DOM fragment
everywhere it's used.
The DOM can be modified and added directly
to the shadowDOM.
Slots allow you to customize a template.
Presume you wanted to use your hello-world web component,
but place the message within a heading in the shadowDOM.
Template Slots
You could write this code.
Take note of the slot attribute.
You might want to add other elements
such as another paragraph.
Slots can now be implemented within your template.
An element slot attribute set to message text, the header,
is inserted at the point where there's a slot element
named message text.
The paragraph element does not have a slot name assigned,
but it is used in the next available unnamed slot element.
In effect, the template becomes this.
It's not quite this simple in reality.
A slot element in the shadowDOM
points to the inserted elements.
You can only access them by locating a slot element.
Then using the assignedNodes method
to return an array of enter children.
Here's the updated connectedCallback method.
In addition, you cannot directly style
the inserted elements,
although you can target specific slots
within your web component.
Template slots are a little unusual,
but one benefit is that your content will be shown
if JavaScript fails to run.
This code shows a default heading and paragraph
that are only replaced when the web component class
successfully executes.
Therefore you could implement some form
of progressive enhancement
even if it's just a you need JavaScript message.
Previous examples construct a shadowDOM using JavaScript.
That remains the only option,
The Declarative Shadow DOM
but an experimental declarative shadowDOM
is being developed for Chrome.
This allows server side rendering
and avoids any layout shifts or flashes of unstyled content.
The following code is detached by the HTML parser
which creates an identical shadowDOM
to the one you created in the last section.
You need to update this message as necessary.
The feature is not available in any browser
and there's no guarantee it'll reach Firefox or Safari.
You can find out more about the declarative shadowDOM
and a polyfill is simple,
but be aware that the implementation could change.
Your web component can attach events
to any element in the shadowDOM
just like you would in the page DOM
Shadow DOM Events
such as to listen for click events on all inner children.
Unless you stop propagation,
the event will bubble up into the page DOM,
but the event will be retargeted,
hence it appears to come from your custom element
rather than the elements within it.
Using Web Components in Other Frameworks
Any web component you create
will work in all JavaScript frameworks.
None of them know or care about HTML elements.
Your hello-world component
will be treated identically to a div and placed into the DOM
where the class will activate.
Customelementseverywhere.com
provides a list of frameworks and web component notes.
Most are fully compatible,
although react.js has some challenges.
It's possible to use hello-world in JSX,
but keep in mind React can only pass primitive data types
in HTML attributes, not arrays or objects.
React cannot listen for web component events
so you must manually attach your own handlers.
Web components have improved significantly,
Web Component Criticisms and Issues
but some aspects can be tricky to manage.
Styling web components poses some challenges,
especially if you want to override scope styles.
There are many solutions, however, including
one, avoid using the Shadow DOM.
You could append content directly to your custom element,
although any other JavaScript
could accidentally or maliciously change it.
Number two, use the host classes.
As we have seen, scope CSS can apply specific styles
when a class is applied to the custom element.
Number three, check out CSS custom properties or variables.
Custom properties cascade into web components
so if your element uses variable my color,
you can set my color
in an outer container and it will be used.
Number four, take advantage of shadow parts.
The new part selector can style an inner component
that has a part attribute.
Number five, pass in a string of styles.
You can pass them as an attribute
to apply within a style block.
None of these solutions are ideal,
but you'll need to plan how others
can customize your web component carefully.
Any input, text area or select fields in your Shadow DOM
Ignored Inputs
are not automatically associated within the containing form.
Early web component adopters would add hidden fields
to the page DOM or use the form data interface
to update values.
Neither are particularly practical
and break web component encapsulation.
The new element internals interface
allows a web component to hook into forms
so custom values and validity can be defined.
It's implemented in Chrome, but a polyfill
is a available for other browsers.
To demonstrate, you'll need to create a basic
InputAge component.
The class must have a static form associated value
set true and optionally a formAssociatedCallback method
can be called when the outer form is associated.
The constructor must now run the attachmentInternals method
which allows the component to communicate
with the form and other JavaScript code
which wants to inspect the value or validation.
The element internals set form value method
sets the element's value for the parent form
initialized with an empty string.
Other properties and methods include
form, the parent form.
Labels, an array of elements that label the component.
Constraint Validation API options
such as willValidate, checkValidity and validationMessage.
The connectedCallback method creates a Shadow DOM as before,
but must also monitor the field for changes
so set form value can be run.
You can now create an HTML form using the web component
which acts in a similar way to other form fields.
It works, but it admittedly feels a little convoluted.
With web components, there are kinks to iron out,
but the future is bright.
They're framework agnostic, lightweight, fast
and can implement functionality
that would be impossible in JavaScript alone.
 */