/*
As we learned in the previous module, abstraction is an important principle of software design that allows developers to create more flexible, maintainable, and reusable code. In this module, we will cover what exactly makes a good abstraction, specifically by introducing some common guidelines, and three different paradigms that have their own opinion on how abstraction should be done in software. In JavaScript, abstraction can be implemented using the SOLID principles, which are a set of guidelines for object-oriented programming.

Let's do a quick overview of how to implement abstraction in JavaScript with SOLID, before diving into the first lecture, 'Creating Abstraction with SOLID'.

Single Responsibility Principle (SRP): This principle states that a class or module should have only one reason to change. To apply SRP in JavaScript, you can create separate modules or classes that handle specific tasks or responsibilities. Each module or class should be responsible for a single functionality or feature, and should not be coupled with other functionalities.

Open-Closed Principle (OCP): This principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. In JavaScript, you can apply this principle by creating abstract classes or interfaces that define a set of methods or properties. Concrete classes can then inherit from these abstract classes or interfaces and implement their methods. This way, you can add new functionalities without modifying existing code.

Liskov Substitution Principle (LSP): This principle states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In JavaScript, you can implement LSP by ensuring that subclasses inherit all the properties and methods of their superclass, and do not alter their behaviour in unexpected ways.

Interface Segregation Principle (ISP): This principle states that a client should not be forced to depend on methods it does not use. In JavaScript, you can apply ISP by creating small, focused interfaces that define only the methods that a client needs. This way, you can avoid creating large, bloated interfaces that are difficult to maintain and understand.

Dependency Inversion Principle (DIP): This principle states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. In JavaScript, you can implement DIP by using dependency injection, which allows you to pass dependencies to a module or class rather than creating them inside. This way, you can decouple modules and make them more reusable and testable.
 */

