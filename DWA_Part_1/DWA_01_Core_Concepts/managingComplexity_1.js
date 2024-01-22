//The Language Fundamentals
//Structuring Javascript

//mid level strucuturs composed by low level items. Low level elements get combined into structures.

//composing
/*
Structuring JS

3 things that can go wrong:
1 avoidable dumb errors
2 less avoidable errors
3 unavoidable errors
low level bugs easy to fix
mid level serious bugs - have to outskill

get out of low level


complex systems
precision
    manage for fixing
     understanding of low level el
     identifying issues
      analize possible solutions
      mindfull of how small things can break large things
interlated/cross-functional
    team of skills
    meant to be read code
    make code fit

 first story
64 bit -> 16 bit

c1 = 9;
c3 = ''; //coerce
c2 = 13;
ang = 0.0002 + c3; //'0.0002'
o1 = c3 * c1;
o2 = c3 - c1;
o3 = o1 / o2;
alt = 4000000;
vel = ang * alt;
console.log('horizontal velocity', vel)

second story
pounds/newtons
const force = 50
force * 10

example:
p = 9;
m = 2000;
vel = 1000;
acc = 2;
frcp = m * acc;
n = 5;
time = 10;
frcn = frcp * 4.44822;
cc = 3 / n;
acc2 = 90410 + p;
final = vel + (frcp / m) * time //should apply frcn instead
console.log('final velocity', final)

eloquent javascript book

complexity is most critical problem in coding

JavaScript fundamentals include concepts like constants, variables, functions, and syntax.
Fundamental knowledge is compared to understanding elements in a written language, such as adjectives, verbs, and nouns.
The transition from fundamentals to building full-scale software applications involves the concept of composition.
Composition is likened to combining low-level elements (atoms) to create larger structures (molecules, software applications).
Emphasis on the importance of mid-level code structures in the space between fundamentals and full-fledged software development.
Challenges of programming are compared to rocket science in terms of complexity, precision, and the need for a cross-functional approach.
Mastery of low-level fundamentals alone is insufficient; developers must learn to compose and manage complexity effectively.
Warning against underestimating the difficulty of programming and the importance of continuous learning and adaptation.
Introduction of the idea of software as workable material with potential catastrophic failure if not used correctly.
Insights from books by John Maeda and Robert C. Martin stress the importance of precision, focus, and a cross-functional mindset in programming.
Encouragement for the audience to understand the challenges of programming and the need for continuous growth in navigating the space between fundamentals and full-scale software development.

Key Stories:
Ariane 5 Rocket Incident (1996):

Launch of the next-generation rocket for the European Union's satellite program.
Explosion 40 seconds after liftoff due to a code modification error.
The error involved the coercion of a 64-bit value into a 16-bit value.
Estimated loss: $370 million.
Emphasis on the danger of hidden bugs caused by automatic coercion.
Mars Climate Orbiter (1999):

NASA's satellite to survey Mars' atmosphere and climate.
Disappeared after reaching Mars due to a software problem.
Incorrect assumptions about units (pounds instead of newtons) led to the issue.
Estimated loss: Millions of dollars.
Highlighting the importance of precision in coding.
Knight Capital Incident (2012):

Stock trading company faced bankruptcy in 49 minutes due to faulty automated trading software.
Incorrect assumptions in the code led to selling stocks cheap and buying them expensively.
Loss: $440 million in 40 minutes.
Emphasis on the significance of proper testing in high-risk scenarios.
Facebook DNS Incident (2021):

Facebook, Instagram, and WhatsApp faced a six-hour downtime.
A test written during maintenance inadvertently shut down the DNS.
DNS mix-up caused services to point to the wrong addresses.
Highlighting the complexity of large-scale systems and the potential impact of a single mistake.
Key Takeaways and Lessons:
Complexity and Precision:

Programming complexity is akin to managing a language's elements.
Hidden bugs, especially those caused by automatic coercion, can be more dangerous than obvious bugs.
Precision is crucial, especially in critical systems like rockets and satellites.
Code Modification Challenges:

Modifying code for a new generation of rockets can introduce unforeseen issues.
Reusing code from previous generations may lead to unintended consequences.
Coercion errors, even seemingly small, can have catastrophic implications.
Managing Complexity:

Complexity in software is a real challenge, requiring constant efforts to keep it under control.
Understanding and managing complexity is the primary challenge in programming.
Uncontrolled complexity can lead to confusion, wasted time, and severe consequences.
Testing and Test-Driven Development:

Knight Capital's incident highlights the importance of thorough testing, especially in high-stakes scenarios.
Test-driven development becomes crucial in scenarios where risks are high.
Lesson from Facebook's DNS Incident:

Even large companies like Facebook can face severe consequences due to simple mistakes.
Managing DNS requires extreme caution, and a single typo can lead to significant outages.
Eloquent JavaScript's Perspective:

Eloquent JavaScript emphasizes that controlling program size and complexity is the main problem in programming.
The consensus in the industry is that managing complexity is more critical than learning specific technologies.
Recommendation:

Encouragement for developers to read "Eloquent JavaScript" for insights into structuring JavaScript code effectively.

 */

