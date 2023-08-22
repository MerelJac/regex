# Understanding Regular Expressions

Welcome! If you are reading this, you are probably trying to understand regular expressions, or what the cool kids call 'Regex.'

## Summary

In the following, we will break down what a regular expression is and how to understand and use the syntax.

The test.js file contains some examples. 

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors
    Anchors tell the script where to look for the characters. Common examples are ^ and $.
    ^ returns true if the string is at the beginning of the search term. 
    $ returns true if the string is at the end of the search term. 

### Quantifiers
    Quantifiers return how many times a character or value is present. Common quantifiers inclue:
    - * | matches zero or more times
    - + | matches one or more times
    - ? | matches zero or one time
    - {n} | matches exactly n times
    - {n , } | matches n times or more
    - { n, m} | matches between n and m times
### OR Operator
    The valiue '|' in a regex suggests OR. 
    - /(red|blue) ball/
### Character Classes
    This range between square brackets [] will return true if that value is present in the searched term. 
### Flags
    Flags come after the forward slashes that encompas the pattern. Anything after the last forward slash is a flag that identifies parameters on how to match. 
    Common flags include:
        i - Case-insensitive matching
        g - Global matching (find all matches, not just the first)
### Grouping and Capturing
    Use () to create groups in regular expressions.
### Bracket Expressions
    [] create an span to search. Example [A-Z] will search through all capital letters. 
### Greedy and Lazy Match
    A greedy match will match a term as many times as possible. By adding a ? to the end of some components, you can create a lazy search which will find as few matches as possible.
### Boundaries
    Boundaries are symbolied by \b and can be before a word, after a word, or between words. 
### Back-references
    Back-references let you search for an already captured term a certain number of times in the same expression. Back-references are donoted by \n where n is the number of times you are looking to find the same term. 
### Look-ahead and Look-behind
    These components allow searches before or after a certain character. 

    Look-ahead is indicated by (?) where as look-behind is indicated by (?!)

## Author
Thanks for reading! Please feel free to reach out via [email](mailto:merel.burleigh@gmail.com) with any questions or comments. 
