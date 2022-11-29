# User creates a new note

```mermaid
sequenceDiagram
    participant server
    participant browser
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->browser: HTML-code
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: main.css
    browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->browser: main.js
    
    Note right of browser: Browser executes js code that requests JSON data from the browser 
    browser->>server: HTTP GET data.json
    server-->>browser: [{content: ..., date: ...}] 
    Note over browser: browser executes eventhandler that renders json data to html via DOM api 
```

