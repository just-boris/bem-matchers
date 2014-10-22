# BEM-Matchers for Jasmine

[![Build Status](https://travis-ci.org/just-boris/bem-matchers.svg?branch=master)](https://travis-ci.org/just-boris/bem-matchers)

Set of useful matchers to make your specs more readable.

For now, we have one matcher for you:

### expect(block).toHaveMod(modName, [modVal])

Expect that passed block has following modifier. <br>
You can check the modifier value by passing the second argument.

If you will pass a non-BEM entity into expectation, you will get an exception.