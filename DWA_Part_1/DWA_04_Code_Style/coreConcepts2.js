/*
Style Guides

first Brain W Kernighan 1974
Fortran

3 catergories
-Official Endorsed
    -PEP8
    entire guide endorsed
    JAVA - Oracle Java Code Conventions

-Company Maintained
    company that uses maintained
    open sourced
    google java styleguide

    Ruby - airbnb styleguide and shopify guide

- Community
    Ruby Style guide
    community driven

In JS only have Company that uses maintained and community driven.

Options
    1. jQuery Core Style guide - assume jQuery (outdated library)
    2. Idiomatic.js - general guidlines, not testable. just a approach.
    3. MDN JS guidelines - general guidelines, not testable. encouraged to read
    4.ESLint Recommend Rules - catching errors focused
    5. Standard Js - community driven - not as opinionated - eslint
    6. Google JS - style guide - closure(ggogle tool)
    7. Airbnb JS - style guide airbnb javascript style guide github repo


LINTING -
1970 - SC Johnson Bell Labs for C language
term derived from lint in context of clothing.
refer to small undesireble elements in source code that tool was designed to identify and clean up.

Douglas Ceckford
JS : the good parts
JSON
JSLint

JSHInt - looser

ESLint - primary tool
in terminal
distinct between error and warning
2 levels of problems
need to be run everytime

ESLint pluging
how it works

ESLINT quick start

1st greate package.json
npm init
name
v
y

npm init @eslint/config
proceed y
what want to do - check, find, enforce
modules - js modules
framework
typescript no
where browser
populat styleguide airbnb
config - json
install y
package manager npm


PRETTIER

npm install --save-dev --save-exact prettier

make prettier config file = .prettierrc.json

install with eslint
npm install --save-dev eslint-config-prettier

put it in extends: in eslint config file

select a formatter. format with... set prettier

 */

const data = {}