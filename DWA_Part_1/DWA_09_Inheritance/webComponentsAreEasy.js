/*
// Web Components Are Easier Than You Think
// Avatar of John Rhea
// John Rhea on Mar 8, 2021 (Updated on Feb 28, 2022)
// When I’d go to a conference (when we were able to do such things) and see someone do a presentation on web components, I always thought it was pretty nifty (yes, apparently, I’m from 1950), but it always seemed complicated and excessive. A thousand lines of JavaScript to save four lines of HTML. The speaker would inevitably either gloss over the oodles of JavaScript to get it working or they’d go into excruciating detail and my eyes would glaze over as I thought about whether my per diem covered snacks.

  // But in a recent reference project to make learning HTML easier (by adding zombies and silly jokes, of course), the completist in me decided I had to cover every HTML element in the spec. Beyond those conference presentations, this was my first introduction to the <slot> and <template> elements. But as I tried to write something accurate and engaging, I was forced to delve a bit deeper.

  // And I’ve learned something in the process: web components are a lot easier than I remember.

//   Article series
// Web Components Are Easier Than You Think (You are here)
// Interactive Web Components Are Easier Than You Think
// Using Web Components in WordPress is Easier Than You Think
// Supercharging Built-In Elements With Web Components “is” Easier Than You Think
// Context-Aware Web Components Are Easier Than You Think
// Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think
// Either web components have come a long way since the last time I caught myself daydreaming about snacks at a conference, or I let my initial fear of them get in the way of truly knowing them — probably both.

  // I’m here to tell you that you—yes, you—can create a web component. Let’s leave our distractions, fears, and even our snacks at the door for a moment and do this together.

//   Let’s start with the <template>
// A <template> is an HTML element that allows us to create, well, a template—the HTML structure for the web component. A template doesn’t have to be a huge chunk of code. It can be as simple as:

  <template>
    <p>The Zombies are coming!</p>
  </template>
//The <template> element is important because it holds things together. It’s like the foundation of building; it’s the base from which everything else is built. Let’s use this small bit of HTML as the template for an <apocalyptic-warning> web component—you know, as a warning when the zombie apocalypse is upon us.

  //Then there’s the <slot>
//<slot> is merely another HTML element just like <template>. But in this case, <slot> customizes what the <template> renders on the page.

  <template>
    <p>The <slot>Zombies</slot> are coming!</p>
  </template>
  //Here, we’ve slotted (is that even a word?) the word “Zombies” in the templated markup. If we don’t do anything with the slot, it defaults to the content between the tags. That would be “Zombies” in this example.

  //Using <slot> is a lot like having a placeholder. We can use the placeholder as is, or define something else to go in there instead. We do that with the name attribute.

    <template>
      <p>The <slot name="whats-coming">Zombies</slot> are coming!</p>
    </template>
    //The name attribute tells the web component which content goes where in the template. Right now, we’ve got a slot called whats-coming. We’re assuming zombies are coming first in the apocalypse, but the <slot> gives us some flexibility to slot something else in, like if it ends up being a robot, werewolf, or even a web component apocalypse.

      //Using the component
      //We’re technically done “writing” the component and can drop it in anywhere we want to use it.

      <apocalyptic-warning>
        <span slot="whats-coming">Halitosis Laden Undead Minions</span>
      </apocalyptic-warning>

      <template>
        <p>The <slot name="whats-coming">Zombies</slot> are coming!</p>
      </template>
      //See what we did there? We put the <apocalyptic-warning> component on the page just like any other <div> or whatever. But we also dropped a <span> in there that references the name attribute of our <slot>. And what’s between that <span> is what we want to swap in for “Zombies” when the component renders.

//Here’s a little gotcha worth calling out: custom element names must have a hyphen in them. It’s just one of those things you’ve gotta know going into things. The spec prescribes that to prevent conflicts in the event that HTML releases a new element with the same name.

//Still with me so far? Not too scary, right? Well, minus the zombies. We still have a little work to do to make the <slot> swap possible, and that’s where we start to get into JavaScript.

//Registering the component
//As I said, you do need some JavaScript to make this all work, but it’s not the super complex, thousand-lined, in-depth code I always thought. Hopefully I can convince you as well.

//You need a constructor function that registers the custom element. Otherwise, our component is like the undead: it’s there but not fully alive.

//Here’s the constructor we’ll use:

// Defines the custom element with our appropriate name, <apocalyptic-warning>
customElements.define("apocalyptic-warning",

  // Ensures that we have all the default properties and methods of a built in HTML element
  class extends HTMLElement {

            // Called anytime a new custom element is created
            constructor() {

            // Calls the parent constructor, i.e. the constructor for `HTMLElement`, so that everything is set up exactly as we would for creating a built in HTML element
            super();

            // Grabs the <template> and stores it in `warning`
            let warning = document.getElementById("warningtemplate");

            // Stores the contents of the template in `mywarning`
            let mywarning = warning.content;

            const shadowRoot = this.attachShadow({mode: "open"}).appendChild(mywarning.cloneNode(true));
          }
          });
//I left detailed comments in there that explain things line by line. Except the last line:

const shadowRoot = this.attachShadow({mode: "open"}).appendChild(mywarning.cloneNode(true));
//We’re doing a lot in here. First, we’re taking our custom element (this) and creating a clandestine operative—I mean, shadow DOM. mode: open simply means that JavaScript from outside the :root can access and manipulate the elements within the shadow DOM, sort of like setting up back door access to the component.

//rom there, the shadow DOM has been created and we append a node to it. That node will be a deep copy of the template, including all elements and text of the template. With the template attached to the shadow DOM of the custom element, the <slot> and slot attribute take over for matching up content with where it should go.

//Check this out. Now we can plop two instances of the same component, rendering different content simply by changing one element.


//Styling the component
//You may have noticed styling in that demo. As you might expect, we absolutely have the ability to style our component with CSS. In fact, we can include a <style> element right in the <template>.

<template id="warningtemplate">
  <style>
    p {
    background-color: pink;
    padding: 0.5em;
    border: 1px solid red;
  }
  </style>

    <p>The <slot name="whats-coming">Zombies</slot> are coming!</p>
</template>
//This way, the styles are scoped directly to the component and nothing leaks out to other elements on the same page, thanks to the shadow DOM.

//Now in my head, I assumed that a custom element was taking a copy of the template, inserting the content you’ve added, and then injecting that into the page using the shadow DOM. While that’s what it looks like on the front end, that’s not how it actually works in the DOM. The content in a custom element stays where it is and the shadow DOM is sort of laid on top like an overlay.

//Screenshot of the HTML source of the zombie-warning component. The custom element is expanded in the shadow dam, including the style block, the custom element, and the template.
//And since the content is technically outside the template, any descendant selectors or classes we use in the template’s <style> element will have no affect on the slotted content. This doesn’t allow full encapsulation the way I had hoped or expected. But since a custom element is an element, we can use it as an element selector in any ol’ CSS file, including the main stylesheet used on a page. And although the inserted material isn’t technically in the template, it is in the custom element and descendant selectors from the CSS will work.

apocalyptic-warning span {
                  color: blue;
                }

                //But beware! Styles in the main CSS file cannot access elements in the <template> or shadow DOM.

//Let’s put all of this together
//Let’s look at an example, say a profile for a zombie dating service, like one you might need after the apocalypse. In order to style both the default content and any inserted content, we need both a <style> element in the <template> and styling in a CSS file.

//The JavaScript code is exactly the same except now we’re working with a different component name, <zombie-profile>.

customElements.define("zombie-profile",
  class extends HTMLElement {
                        constructor() {
                        super();
                        let profile = document.getElementById("zprofiletemplate");
                        let myprofile = profile.content;
                        const shadowRoot = this.attachShadow({mode: "open"}).appendChild(myprofile.cloneNode(true));
                      }
                      }
                      );
//Here’s the HTML template, including the encapsulated CSS:

<template id="zprofiletemplate">
  <style>
    img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 0 1em 0 0;
  }
    h2 {
    font-size: 3em;
    margin: 0 0 0.25em 0;
    line-height: 0.8;
  }
    h3 {
    margin: 0.5em 0 0 0;
    font-weight: normal;
  }
    .age, .infection-date {
    display: block;
  }
    span {
    line-height: 1.4;
  }
    .label {
    color: #555;
  }
    li, ul {
    display: inline;
    padding: 0;
  }
    li::after {
    content: ', ';
  }
    li:last-child::after {
    content: '';
  }
    li:last-child::before {
    content: ' and ';
  }
  </style>

  <div class="profilepic">
    <slot name="profile-image"><img src="https://assets.codepen.io/1804713/default.png" alt=""></slot>
  </div>

  <div class="info">
    <h2><slot name="zombie-name" part="zname">Zombie Bob</slot></h2>

    <span class="age"><span class="label">Age:</span> <slot name="z-age">37</slot></span>
    <span class="infection-date"><span class="label">Infection Date:</span> <slot name="idate">September 12, 2025</slot></span>

    <div class="interests">
      <span class="label">Interests: </span>
      <slot name="z-interests">
        <ul>
          <li>Long Walks on Beach</li>
          <li>brains</li>
          <li>defeating humanity</li>
        </ul>
      </slot>
    </div>

    <span class="z-statement"><span class="label">Apocalyptic Statement: </span> <slot name="statement">Moooooooan!</slot></span>

  </div>
</template>
//Here’s the CSS for our <zombie-profile> element and its descendants from our main CSS file. Notice the duplication in there to ensure both the replaced elements and elements from the template are styled the same.

zombie-profile {
                          width: calc(50% - 1em);
                          border: 1px solid red;
                          padding: 1em;
                          margin-bottom: 2em;
                          display: grid;
                          grid-template-columns: 2fr 4fr;
                          column-gap: 20px;
                        }
                        zombie-profile img {
                          width: 100%;
                          max-width: 300px;
                          height: auto;
                          margin: 0 1em 0 0;
                        }
                        zombie-profile li, zombie-profile ul {
                          display: inline;
                          padding: 0;
                        }
                        zombie-profile li::after {
                          content: ', ';
                        }
                        zombie-profile li:last-child::after {
                          content: '';
                        }
                        zombie-profile li:last-child::before {
                          content: ' and ';
                        }
                        All together now!


//While there are still a few gotchas and other nuances, I hope you feel more empowered to work with the web components now than you were a few minutes ago. Dip your toes in like we have here. Maybe sprinkle a custom component into your work here and there to get a feel for it and where it makes sense.

 */