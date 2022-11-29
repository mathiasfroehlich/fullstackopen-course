# User creates a new note

```mermaid
sequenceDiagram
    participant server
    participant browser
    user enters text into text field
    browser --> server 
    POST new_note 
    REDIRECT 
    GET notes
    GET main.css
    GET main.js 
    GET data.json
```

