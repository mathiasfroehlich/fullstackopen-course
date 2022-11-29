# User creates a new note

```mermaid
sequenceDiagram
    participant server
    participant browser
    Note right of browser: Browser executes eventhandler and posts form data
    browser->>server: HTTP POST new_note 
    Note over server: Server saves user input and sends redirect to browser
    browser->>server: HTTP GET /notes
    server-->>browser: HTML-Code
    browser->>server: HTTP GET main.css
    server-->>browser: main.css 
    browser->>server: HTTP GET main.js 
    server-->>browser: main.js
```

