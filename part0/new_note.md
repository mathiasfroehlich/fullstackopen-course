# User creates a new note

```mermaid
sequenceDiagram
    participant server
    participant browser
    Note right of browser: user enters text into text field
    browser->>server: POST new_note 
    server->>browser: REDIRECT GET notes
    server->>browser: GET main.css
    server->>browser: GET main.js 
    server->>browser: GET data.json
```

