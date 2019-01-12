# double-the-fun

- do both wdio and cypress eventually (hence the name `double-the-fun`)
- take screenshots of tests and create gif from them
- snapshot testing with screenshots of page
- snapshot testing with screenshots of element
- make reporter that
  - prints to console verbally explaining what the test is doing
  - prefixes each log with browser name (chrome, firefox) and id
  - time how long each action takes
  - creates a spreadsheet after all tests finish with results of test

## How to run server

```
yarn server
```

## How to run tests

```
yarn wdio
```

NOTE: make sure server is running before running tests