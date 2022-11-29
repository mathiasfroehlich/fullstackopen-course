# User creates a new note

```mermaid
sequenceDiagram
    participant server
    participant browser
    Note right of browser: Browser executes eventhandler and sends post request via javascript
    browser->>server: HTTP POST new_note 
    Note over server: Server saves user input and returns 201 status code
```

