Start-Up Command
1. npm install (one time command to install dependencies)
2. npm start (start up the server)
3. npm run dev (run this command in a new terminal to run webpack)

Hierarchical Structure:
app
├── app.js
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       ├── add-build.js
│       ├── index-build.js
│       └── index-client.js
├── routes
│   └── index-route.js
├── src
│   ├── components
│   │   ├── AddEvent.js
│   │   └── HelloWorld.js
│   ├── add-react.js
│   └── index-react.js
└── views
    ├── index-tmpl.ejs
    └── partials
        └── templates
            ├── head.ejs
            └── jsDefaults.ejs

9 directories, 13 files
