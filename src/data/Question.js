const questions = {
  javascript: {
    easy: [
      {
        question: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Just Script", "JQuery"],
        answer: "JavaScript",
      },
      {
        question: "Which keyword declares a variable?",
        options: ["var", "def", "int", "let"],
        answer: "let",
      },
      {
        question: "Which symbol is used for comments in JS single line?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//",
      },
      {
        question: "Which method is used to convert JSON to object?",
        options: ["JSON.parse()", "JSON.stringify()", "toObject()", "parse.JSON()"],
        answer: "JSON.parse()",
      },
      {
        question: "What is used to store multiple values in one variable?",
        options: ["Object", "Array", "String", "Number"],
        answer: "Array",
      },
    ],
    medium: [
      {
        question: "What is a closure in JavaScript?",
        options: [
          "Function inside a function",
          "Global variable",
          "Callback",
          "Array",
        ],
        answer: "Function inside a function",
      },
      {
        question: "Which array method is used to filter elements?",
        options: ["map()", "reduce()", "filter()", "forEach()"],
        answer: "filter()",
      },
      {
        question: "What does '===' check in JavaScript?",
        options: ["Value only", "Type only", "Value and Type", "Reference"],
        answer: "Value and Type",
      },
      {
        question: "Which keyword is used for asynchronous functions?",
        options: ["sync", "defer", "await", "async"],
        answer: "async",
      },
      {
        question: "What is the output of typeof null?",
        options: ["null", "undefined", "object", "string"],
        answer: "object",
      },
    ],
    hard: [
      {
        question: "Which of the following is NOT a primitive in JS?",
        options: ["String", "Boolean", "Object", "Number"],
        answer: "Object",
      },
      {
        question: "What will [1,2,3] + [4,5] return?",
        options: [
          "Error",
          "1,2,34,5",
          "Concatenated array",
          "String '1,2,34,5'",
        ],
        answer: "1,2,34,5",
      },
      {
        question: "What is the time complexity of Array.push()?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: "O(1)",
      },
      {
        question: "Which of these is a falsy value in JS?",
        options: ["'false'", "[]", "0", "{}"],
        answer: "0",
      },
      {
        question: "How can you create a private variable in JS?",
        options: [
          "Using var",
          "Using closure",
          "Using global scope",
          "Using prototype",
        ],
        answer: "Using closure",
      },
    ],
    type:"live"
  },
  react: {
    easy: [
      {
        question: "Who developed React?",
        options: ["Google", "Facebook", "Microsoft", "Twitter"],
        answer: "Facebook",
      },
      {
        question: "React is mainly used for?",
        options: ["Database", "UI", "Server", "Networking"],
        answer: "UI",
      },
      {
        question: "JSX stands for?",
        options: [
          "JavaScript XML",
          "Java Syntax Extension",
          "JavaScript Extension",
          "Java Source XML",
        ],
        answer: "JavaScript XML",
      },
      {
        question: "In React, data flows?",
        options: ["Two-way", "One-way", "Circular", "Random"],
        answer: "One-way",
      },
      {
        question: "Which hook is used for state management?",
        options: ["useEffect", "useState", "useMemo", "useRef"],
        answer: "useState",
      },
    ],
    medium: [
      {
        question: "Which hook is used for side effects in React?",
        options: ["useState", "useEffect", "useReducer", "useRef"],
        answer: "useEffect",
      },
      {
        question: "React components must return?",
        options: ["A single element", "Multiple elements", "Nothing", "Number"],
        answer: "A single element",
      },
      {
        question: "What is the default port for React development server?",
        options: ["3000", "5000", "8080", "4000"],
        answer: "3000",
      },
      {
        question: "Which method is used to update state in class components?",
        options: ["this.setState", "this.state", "updateState()", "stateChange()"],
        answer: "this.setState",
      },
      {
        question: "What does Virtual DOM improve?",
        options: ["Storage", "Security", "Performance", "Design"],
        answer: "Performance",
      },
    ],
    hard: [
      {
        question: "Which hook is used for performance optimization?",
        options: ["useState", "useMemo", "useEffect", "useRef"],
        answer: "useMemo",
      },
      {
        question: "In React, keys help in?",
        options: ["Security", "Identification of elements", "Styling", "Validation"],
        answer: "Identification of elements",
      },
      {
        question: "Which hook is used to access previous props or state?",
        options: ["useMemo", "useRef", "useReducer", "useState"],
        answer: "useRef",
      },
      {
        question: "React uses which algorithm for diffing?",
        options: ["A*", "Fiber", "Diff-DOM", "Shadow-DOM"],
        answer: "Fiber",
      },
      {
        question: "React.lazy is used for?",
        options: [
          "State management",
          "Lazy loading components",
          "Event handling",
          "Testing",
        ],
        answer: "Lazy loading components",
      },
    ],
    type:"live"
  },
   css: {
    easy: [
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style System",
          "Colorful Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which property is used to change text color in CSS?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color",
      },
      {
        question: "Which CSS property controls the size of text?",
        options: ["text-size", "font-size", "font-weight", "text-style"],
        answer: "font-size",
      },
      {
        question: "How do you select an element with id 'header'?",
        options: ["#header", ".header", "header", "*header"],
        answer: "#header",
      },
      {
        question: "Which value of position makes an element stick to the viewport?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "fixed",
      },
    ],
    medium: [
      {
        question: "Which CSS property is used to change background color?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color",
      },
      {
        question: "What is the default position value of an element?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: "static",
      },
      {
        question: "Which unit is relative to the root element font-size?",
        options: ["em", "rem", "%", "px"],
        answer: "rem",
      },
      {
        question: "Which property is used to create space inside an element?",
        options: ["margin", "padding", "border", "gap"],
        answer: "padding",
      },
      {
        question: "Which display value is used for flexbox?",
        options: ["block", "inline", "flex", "grid"],
        answer: "flex",
      },
    ],
    hard: [
      {
        question: "Which CSS property is NOT inherited by default?",
        options: ["color", "font-size", "margin", "font-family"],
        answer: "margin",
      },
      {
        question: "Which pseudo-class selects the first child of an element?",
        options: [":first", ":first-of-type", ":first-child", ":nth-child(1)"],
        answer: ":first-child",
      },
      {
        question: "What does z-index control?",
        options: ["Stack order", "Zoom level", "Font size", "Opacity"],
        answer: "Stack order",
      },
      {
        question: "Which property is used for grid layout in CSS?",
        options: ["display: grid", "grid-template", "grid-layout", "display: flex-grid"],
        answer: "display: grid",
      },
      {
        question: "Which property is used for custom properties in CSS?",
        options: ["--var", "variable()", "var()", "custom-var()"],
        answer: "var()",
      },
    ],
    type:"scheduled"
  },
   nodejs: {
    easy: [
      {
        question: "What is Node.js?",
        options: [
          "JavaScript runtime",
          "JavaScript framework",
          "Database",
          "Operating System",
        ],
        answer: "JavaScript runtime",
      },
      {
        question: "Node.js is built on which engine?",
        options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
        answer: "V8",
      },
      {
        question: "Which module is used to work with file system in Node.js?",
        options: ["path", "fs", "os", "http"],
        answer: "fs",
      },
      {
        question: "Which command is used to initialize a Node.js project?",
        options: ["node init", "npm start", "npm init", "node start"],
        answer: "npm init",
      },
      {
        question: "What is the default file extension for Node.js modules?",
        options: [".node", ".js", ".txt", ".json"],
        answer: ".js",
      },
    ],
    medium: [
      {
        question: "Which module is used to create a server in Node.js?",
        options: ["url", "http", "fs", "net"],
        answer: "http",
      },
      {
        question: "Which object is used to handle events in Node.js?",
        options: ["EventEmitter", "Events", "Emitter", "NodeEvents"],
        answer: "EventEmitter",
      },
      {
        question: "Which method is used to include a module in Node.js?",
        options: ["import", "require()", "include()", "load()"],
        answer: "require()",
      },
      {
        question: "Which statement is true about Node.js?",
        options: [
          "It is synchronous by default",
          "It is single-threaded and asynchronous",
          "It is multi-threaded",
          "It cannot handle multiple requests",
        ],
        answer: "It is single-threaded and asynchronous",
      },
      {
        question: "Which core module is used to work with file and directory paths?",
        options: ["url", "path", "fs", "os"],
        answer: "path",
      },
    ],
    hard: [
      {
        question: "Which method is used to read a file asynchronously in Node.js?",
        options: ["fs.read()", "fs.readFile()", "fs.getFile()", "readFile()"],
        answer: "fs.readFile()",
      },
      {
        question: "Which module provides compression in Node.js?",
        options: ["compress", "zlib", "gzip", "zip"],
        answer: "zlib",
      },
      {
        question: "What will console.log(typeof require) return?",
        options: ["function", "object", "string", "undefined"],
        answer: "function",
      },
      {
        question: "Which method is used to listen to a specific port in Node.js?",
        options: ["app.listen()", "server.listen()", "listen()", "port.listen()"],
        answer: "server.listen()",
      },
      {
        question: "Which command installs a package globally?",
        options: ["npm install <package>", "npm install -g <package>", "npm global <package>", "node install <package>"],
        answer: "npm install -g <package>",
      },
    ],
    type:"live"
  },
  mongodb: {
    easy: [
      {
        question: "What is MongoDB?",
        options: [
          "Relational database",
          "NoSQL database",
          "File storage system",
          "Programming language",
        ],
        answer: "NoSQL database",
      },
      {
        question: "Which command is used to show all databases in MongoDB?",
        options: ["show dbs", "list dbs", "db.show()", "db.list()"],
        answer: "show dbs",
      },
      {
        question: "Which data format does MongoDB use to store data?",
        options: ["XML", "JSON", "BSON", "CSV"],
        answer: "BSON",
      },
      {
        question: "What is the default port for MongoDB?",
        options: ["3306", "27017", "5432", "8080"],
        answer: "27017",
      },
      {
        question: "Which method is used to insert one document?",
        options: ["insert()", "insertOne()", "addOne()", "create()"],
        answer: "insertOne()",
      },
    ],
    medium: [
      {
        question: "Which method is used to update documents in MongoDB?",
        options: ["update()", "updateOne()", "modify()", "set()"],
        answer: "updateOne()",
      },
      {
        question: "What does the _id field represent in MongoDB?",
        options: ["Primary key", "Foreign key", "Index", "UUID only"],
        answer: "Primary key",
      },
      {
        question: "Which command switches to a database in MongoDB?",
        options: ["switch", "use", "cd", "change"],
        answer: "use",
      },
      {
        question: "Which operator is used to match a value greater than a given number?",
        options: ["$lt", "$lte", "$gt", "$gte"],
        answer: "$gt",
      },
      {
        question: "Which method is used to remove all documents from a collection?",
        options: ["removeAll()", "deleteMany()", "drop()", "clear()"],
        answer: "deleteMany()",
      },
    ],
    hard: [
      {
        question: "Which type of indexing is default in MongoDB?",
        options: ["Text", "Hashed", "Single field", "Compound"],
        answer: "Single field",
      },
      {
        question: "Which aggregation stage groups documents by a specific field?",
        options: ["$match", "$group", "$project", "$sort"],
        answer: "$group",
      },
      {
        question: "Which storage engine is default in MongoDB?",
        options: ["MMAPv1", "WiredTiger", "InnoDB", "MyISAM"],
        answer: "WiredTiger",
      },
      {
        question: "Which method is used to drop a collection?",
        options: ["removeCollection()", "deleteCollection()", "drop()", "clearCollection()"],
        answer: "drop()",
      },
      {
        question: "Which command is used to create an index in MongoDB?",
        options: ["createIndex()", "makeIndex()", "index()", "addIndex()"],
        answer: "createIndex()",
      },
    ],
    type:"scheduled"
  },
 expressjs: {
    easy: [
      {
        question: "What is Express.js?",
        options: [
          "Frontend library",
          "Backend framework for Node.js",
          "Database",
          "API testing tool",
        ],
        answer: "Backend framework for Node.js",
      },
      {
        question: "Which method is used to create an Express app?",
        options: ["express.create()", "express()", "new Express()", "createApp()"],
        answer: "express()",
      },
      {
        question: "Which method is used to define a GET route in Express?",
        options: ["app.route()", "app.get()", "app.fetch()", "app.method()"],
        answer: "app.get()",
      },
      {
        question: "Which method starts the Express server?",
        options: ["app.run()", "app.start()", "app.listen()", "server.run()"],
        answer: "app.listen()",
      },
      {
        question: "Which status code represents success in HTTP?",
        options: ["200", "404", "500", "301"],
        answer: "200",
      },
    ],
    medium: [
      {
        question: "Which middleware is used to parse JSON request bodies?",
        options: ["express.json()", "bodyParser.json()", "json.parse()", "parse.json()"],
        answer: "express.json()",
      },
      {
        question: "Which method is used to serve static files in Express?",
        options: ["express.static()", "app.static()", "app.files()", "static()"],
        answer: "express.static()",
      },
      {
        question: "Which object is used to send responses in Express?",
        options: ["req", "res", "responseObj", "sendObj"],
        answer: "res",
      },
      {
        question: "Which parameter holds URL parameters in Express?",
        options: ["req.body", "req.query", "req.params", "req.url"],
        answer: "req.params",
      },
      {
        question: "Which HTTP method is used to create resources?",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "POST",
      },
    ],
    hard: [
      {
        question: "Which HTTP status code means 'Created'?",
        options: ["200", "201", "204", "301"],
        answer: "201",
      },
      {
        question: "Which method is used to handle all HTTP methods for a route?",
        options: ["app.use()", "app.all()", "app.any()", "app.routeAll()"],
        answer: "app.all()",
      },
      {
        question: "In Express, the next() function is used to?",
        options: [
          "Stop request handling",
          "Pass control to next middleware",
          "Send a response",
          "Restart the server",
        ],
        answer: "Pass control to next middleware",
      },
      {
        question: "Which middleware is used for handling file uploads in Express?",
        options: ["multer", "formidable", "express-file", "uploadify"],
        answer: "multer",
      },
      {
        question: "Which Express method is used to redirect to another URL?",
        options: ["res.goto()", "res.redirect()", "res.forward()", "res.url()"],
        answer: "res.redirect()",
      },
    ],
    type:"live"
  },
   typescript: {
    easy: [
      {
        question: "What is TypeScript?",
        options: [
          "A superset of JavaScript",
          "A CSS framework",
          "A database",
          "A backend framework",
        ],
        answer: "A superset of JavaScript",
      },
      {
        question: "Which file extension is used for TypeScript files?",
        options: [".js", ".ts", ".tsx", ".tscript"],
        answer: ".ts",
      },
      {
        question: "Which command compiles TypeScript to JavaScript?",
        options: ["tsc", "ts-compile", "tsbuild", "compile-ts"],
        answer: "tsc",
      },
      {
        question: "TypeScript is developed by?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        answer: "Microsoft",
      },
      {
        question: "Which keyword is used to define a variable in TypeScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
      },
    ],
    medium: [
      {
        question: "Which TypeScript type represents no value?",
        options: ["void", "null", "undefined", "never"],
        answer: "void",
      },
      {
        question: "Which feature of TypeScript allows checking types at compile time?",
        options: [
          "Static typing",
          "Dynamic typing",
          "Type inference",
          "Runtime type check",
        ],
        answer: "Static typing",
      },
      {
        question: "Which operator is used for optional properties?",
        options: ["?", "??", "!", ":"],
        answer: "?",
      },
      {
        question: "Which command installs TypeScript globally?",
        options: [
          "npm install typescript",
          "npm install -g typescript",
          "npm get typescript",
          "node install typescript",
        ],
        answer: "npm install -g typescript",
      },
      {
        question: "What is the default target JavaScript version for TypeScript?",
        options: ["ES3", "ES5", "ES6", "ES2015"],
        answer: "ES3",
      },
    ],
    hard: [
      {
        question: "Which utility type makes all properties of a type optional?",
        options: ["Partial", "Required", "Readonly", "Record"],
        answer: "Partial",
      },
      {
        question: "Which type represents values that never occur?",
        options: ["null", "undefined", "void", "never"],
        answer: "never",
      },
      {
        question: "Which TypeScript feature allows combining multiple types?",
        options: ["Union types", "Intersection types", "Generics", "Enums"],
        answer: "Intersection types",
      },
      {
        question: "Which utility type makes all properties of a type read-only?",
        options: ["Readonly", "Required", "Partial", "Immutable"],
        answer: "Readonly",
      },
      {
        question: "How to explicitly tell TypeScript to ignore type checking for a line?",
        options: [
          "// @ts-ignore",
          "// ignore-ts",
          "// ts-ignore-line",
          "// skip-ts",
        ],
        answer: "// @ts-ignore",
      },
    ],
    type:"scheduled"
  },
   github: {
    easy: [
      {
        question: "What is GitHub?",
        options: [
          "A cloud storage service",
          "A platform for version control and collaboration",
          "A programming language",
          "A code editor",
        ],
        answer: "A platform for version control and collaboration",
      },
      {
        question: "GitHub is built on which version control system?",
        options: ["Git", "SVN", "Mercurial", "CVS"],
        answer: "Git",
      },
      {
        question: "Which command clones a repository from GitHub?",
        options: [
          "git copy <url>",
          "git clone <url>",
          "git download <url>",
          "git pull <url>",
        ],
        answer: "git clone <url>",
      },
      {
        question: "What is a GitHub repository?",
        options: [
          "A folder for storing code and files",
          "A branch name",
          "A commit message",
          "A pull request",
        ],
        answer: "A folder for storing code and files",
      },
      {
        question: "Which symbol is used to create a branch in Git?",
        options: ["@", "#", "-", ""],
        answer: "",
      },
    ],
    medium: [
      {
        question: "Which command creates a new branch in Git?",
        options: [
          "git branch <name>",
          "git create <name>",
          "git new <name>",
          "git checkout <name>",
        ],
        answer: "git branch <name>",
      },
      {
        question: "What does 'git pull' do?",
        options: [
          "Uploads code to remote",
          "Downloads and merges changes from remote",
          "Deletes a branch",
          "Switches branch",
        ],
        answer: "Downloads and merges changes from remote",
      },
      {
        question: "Which command stages changes for commit?",
        options: [
          "git commit",
          "git add",
          "git push",
          "git stage",
        ],
        answer: "git add",
      },
      {
        question: "What is a pull request in GitHub?",
        options: [
          "A request to delete code",
          "A request to merge code changes",
          "A request to create a repository",
          "A request to clone a repository",
        ],
        answer: "A request to merge code changes",
      },
      {
        question: "Which command is used to view commit history?",
        options: [
          "git history",
          "git log",
          "git show",
          "git commits",
        ],
        answer: "git log",
      },
    ],
    hard: [
      {
        question: "Which command reverts a commit by creating a new one?",
        options: [
          "git reset",
          "git revert",
          "git undo",
          "git rollback",
        ],
        answer: "git revert",
      },
      {
        question: "Which Git command is used to combine commits?",
        options: [
          "git squash",
          "git merge --squash",
          "git compress",
          "git combine",
        ],
        answer: "git merge --squash",
      },
      {
        question: "Which file in a repository is used to ignore files from Git tracking?",
        options: [
          ".gitignore",
          "ignore.txt",
          "gitignore.json",
          ".ignoregit",
        ],
        answer: ".gitignore",
      },
      {
        question: "Which Git command changes the last commit without creating a new one?",
        options: [
          "git amend",
          "git commit --amend",
          "git modify",
          "git change",
        ],
        answer: "git commit --amend",
      },
      {
        question: "Which Git command is used to temporarily save uncommitted changes?",
        options: [
          "git temp",
          "git stash",
          "git save",
          "git hold",
        ],
        answer: "git stash",
      },
    ],
    type:"live"
  },
   html: {
    easy: [
      {
        question: "HTML ka full form kya hai?",
        options: [
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "HyperText Markup Language",
          "HighText Markdown Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        question: "Hyperlink banane ke liye kaun sa tag use hota hai?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
      {
        question: "Image insert karne ke liye kaun sa element use hota hai?",
        options: ["<img>", "<image>", "<picture>", "<figure>"],
        answer: "<img>",
      },
      {
        question: "Sabse bada heading kaun sa tag hai?",
        options: ["<h6>", "<h3>", "<h1>", "<head>"],
        answer: "<h1>",
      },
      {
        question: "Line break ke liye kaun sa element use hota hai?",
        options: ["<break>", "<lb>", "<br>", "<line>"],
        answer: "<br>",
      },
    ],
    medium: [
      {
        question: "Link ko nayi tab me kholne ke liye kya use karte hain?",
        options: [
          'target="_blank"',
          'rel="noopener"',
          'download',
          'href="_blank"',
        ],
        answer: 'target="_blank"',
      },
      {
        question: "Inme se kaun sa element default inline hota hai?",
        options: ["<div>", "<section>", "<p>", "<span>"],
        answer: "<span>",
      },
      {
        question: "Label ko input se logically jodne ke liye kaun si attribute use hoti hai?",
        options: ["name", "for", "idref", "bind"],
        answer: "for",
      },
      {
        question: "Image ke 'alt' attribute ka main purpose kya hai?",
        options: [
          "Image ka URL dena",
          "Image ki CSS class dena",
          "Image ki width set karna",
          "Screen readers ke liye text description dena",
        ],
        answer: "Screen readers ke liye text description dena",
      },
      {
        question: "Ek self-contained content jaise blog post ko represent karne ke liye kaun sa semantic element sahi hai?",
        options: ["<section>", "<article>", "<aside>", "<main>"],
        answer: "<article>",
      },
    ],
    hard: [
      {
        question: "HTML5 ke liye sahi DOCTYPE kya hai?",
        options: [
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\">",
          "<!DOCTYPE XHTML>",
          "<!DOCTYPE html>",
          "<!DOCTYPE HTML5>",
        ],
        answer: "<!DOCTYPE html>",
      },
      {
        question: "Responsive viewport set karne ke liye sahi meta tag kaun sa hai?",
        options: [
          '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
          '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          '<meta name="device" content="mobile">',
          '<meta name="format-detection" content="telephone=no">',
        ],
        answer: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      },
      {
        question: "Inme se kaun sa element HTML me void (self-closing) hota hai?",
        options: ["<div>", "<span>", "<section>", "<br>"],
        answer: "<br>",
      },
      {
        question: "Security ke liye target=\"_blank\" ke sath kaun si attribute/value use karna recommended hai?",
        options: [
          'rel="nofollow"',
          'rel="noopener noreferrer"',
          'referrerpolicy="origin"',
          'aria-hidden="true"',
        ],
        answer: 'rel="noopener noreferrer"',
      },
      {
        question: "Konsa ARIA attribute screen readers ke liye accessible label provide karta hai jab visible text na ho?",
        options: ["role", "aria-label", "tabindex", "aria-hidden"],
        answer: "aria-label",
      },
    ],
    type: "live",
  },
   science: {
    easy: [
      {
        question: "पानी का रासायनिक सूत्र क्या है?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O",
      },
      {
        question: "पृथ्वी पर जीवन के लिए सबसे जरूरी गैस कौन सी है?",
        options: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        answer: "ऑक्सीजन",
      },
      {
        question: "सूरज किस गैस से बना है?",
        options: ["ऑक्सीजन और हाइड्रोजन", "हाइड्रोजन और हीलियम", "कार्बन और नाइट्रोजन", "सल्फर और आयरन"],
        answer: "हाइड्रोजन और हीलियम",
      },
      {
        question: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
        options: ["रीढ़ की हड्डी", "जांघ की हड्डी", "बांह की हड्डी", "पसलियाँ"],
        answer: "जांघ की हड्डी",
      },
      {
        question: "कौन सा ग्रह ‘लाल ग्रह’ कहलाता है?",
        options: ["पृथ्वी", "मंगल", "शुक्र", "बृहस्पति"],
        answer: "मंगल",
      },
    ],
    medium: [
      {
        question: "रक्त का लाल रंग किसके कारण होता है?",
        options: ["प्लाज्मा", "हीमोग्लोबिन", "श्वेत रक्त कण", "प्लेटलेट्स"],
        answer: "हीमोग्लोबिन",
      },
      {
        question: "ओजोन परत मुख्य रूप से किस गैस से बनी है?",
        options: ["O3", "O2", "CO2", "N2"],
        answer: "O3",
      },
      {
        question: "कौन सा अंग इंसुलिन का उत्पादन करता है?",
        options: ["हृदय", "यकृत", "अग्न्याशय", "गुर्दा"],
        answer: "अग्न्याशय",
      },
      {
        question: "बल की SI इकाई क्या है?",
        options: ["न्यूटन", "जूल", "पास्कल", "वाट"],
        answer: "न्यूटन",
      },
      {
        question: "रेशम किससे प्राप्त होता है?",
        options: ["कीट", "पौधे", "मछली", "धातु"],
        answer: "कीट",
      },
    ],
    hard: [
      {
        question: "कौन सी धातु कमरे के तापमान पर द्रव रूप में होती है?",
        options: ["पारा", "लोहा", "एल्यूमीनियम", "तांबा"],
        answer: "पारा",
      },
      {
        question: "मानव शरीर में आयोडीन की कमी से कौन सी बीमारी होती है?",
        options: ["मलेरिया", "घेंघा", "रक्ताल्पता", "डेंगू"],
        answer: "घेंघा",
      },
      {
        question: "DNA का पूरा नाम क्या है?",
        options: [
          "Deoxyribo Nucleic Acid",
          "Dioxy Nucleic Acid",
          "Double Nucleus Acid",
          "Dynamic Nucleic Acid",
        ],
        answer: "Deoxyribo Nucleic Acid",
      },
      {
        question: "सापेक्षता का सिद्धांत किसने दिया?",
        options: ["आइज़ैक न्यूटन", "चार्ल्स डार्विन", "आइंस्टाइन", "गैलीलियो"],
        answer: "आइंस्टाइन",
      },
      {
        question: "पृथ्वी के वायुमंडल में सबसे ज्यादा कौन सी गैस है?",
        options: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
        answer: "नाइट्रोजन",
      },
    ],
  },
   gk: {
    easy: [
      {
        question: "भारत की राजधानी क्या है?",
        options: ["मुंबई", "दिल्ली", "जयपुर", "कोलकाता"],
        answer: "दिल्ली",
      },
      {
        question: "ताजमहल कहाँ स्थित है?",
        options: ["दिल्ली", "आगरा", "जयपुर", "लखनऊ"],
        answer: "आगरा",
      },
      {
        question: "भारत का राष्ट्रीय पक्षी कौन सा है?",
        options: ["तोता", "मोर", "गरुड़", "बुलबुल"],
        answer: "मोर",
      },
      {
        question: "भारत का राष्ट्रीय फल क्या है?",
        options: ["केला", "आम", "सेब", "अमरूद"],
        answer: "आम",
      },
      {
        question: "भारत का राष्ट्रीय खेल कौन सा है?",
        options: ["फुटबॉल", "क्रिकेट", "हॉकी", "कबड्डी"],
        answer: "हॉकी",
      },
      {
        question: "भारत का सबसे बड़ा राज्य क्षेत्रफल के हिसाब से कौन सा है?",
        options: ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        answer: "राजस्थान",
      },
      {
        question: "भारत का राष्ट्रीय ध्वज किस रंगों से बना है?",
        options: [
          "लाल, पीला, नीला",
          "केसरिया, सफेद, हरा",
          "नीला, सफेद, हरा",
          "काला, लाल, सफेद",
        ],
        answer: "केसरिया, सफेद, हरा",
      },
      {
        question: "भारतीय रुपया किसके द्वारा जारी किया जाता है?",
        options: ["एसबीआई", "आरबीआई", "सरकार", "यूनियन बैंक"],
        answer: "आरबीआई",
      },
      {
        question: "भारत के पहले प्रधानमंत्री कौन थे?",
        options: ["महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "सरदार पटेल"],
        answer: "जवाहरलाल नेहरू",
      },
      {
        question: "भारत की स्वतंत्रता कब मिली?",
        options: ["1947", "1950", "1942", "1930"],
        answer: "1947",
      },
      {
        question: "भारत का राष्ट्रीय पशु कौन सा है?",
        options: ["हाथी", "शेर", "बाघ", "घोड़ा"],
        answer: "बाघ",
      },
      {
        question: "भारत का राष्ट्रीय फूल कौन सा है?",
        options: ["गुलाब", "कमल", "चंपा", "सूरजमुखी"],
        answer: "कमल",
      },
      {
        question: "भारत का सबसे बड़ा राज्य जनसंख्या के हिसाब से कौन सा है?",
        options: ["बिहार", "महाराष्ट्र", "उत्तर प्रदेश", "पश्चिम बंगाल"],
        answer: "उत्तर प्रदेश",
      },
      {
        question: "भारत का सबसे छोटा राज्य क्षेत्रफल में कौन सा है?",
        options: ["सिक्किम", "गोवा", "त्रिपुरा", "मणिपुर"],
        answer: "गोवा",
      },
      {
        question: "भारत का राष्ट्रीय जलचर पशु कौन सा है?",
        options: ["मगरमच्छ", "डॉल्फिन", "व्हेल", "कछुआ"],
        answer: "डॉल्फिन",
      },
    ],

    medium: [
      {
        question: "भारतीय संविधान कब लागू हुआ?",
        options: ["26 जनवरी 1950", "15 अगस्त 1947", "2 अक्टूबर 1948", "26 नवंबर 1949"],
        answer: "26 जनवरी 1950",
      },
      {
        question: "भारतीय संसद के दो सदन कौन से हैं?",
        options: ["लोकसभा और राज्यसभा", "विधानसभा और विधानपरिषद", "राज्यसभा और विधानसभा", "लोकसभा और विधानपरिषद"],
        answer: "लोकसभा और राज्यसभा",
      },
      {
        question: "‘जन गण मन’ किसने लिखा?",
        options: ["महात्मा गांधी", "रवींद्रनाथ टैगोर", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        answer: "रवींद्रनाथ टैगोर",
      },
      {
        question: "भारतीय रुपये के नोट पर किसका चित्र छपा होता है?",
        options: ["जवाहरलाल नेहरू", "महात्मा गांधी", "डॉ. भीमराव अंबेडकर", "सरदार पटेल"],
        answer: "महात्मा गांधी",
      },
      {
        question: "भारत में कुल कितने उच्च न्यायालय हैं? (2025 तक)",
        options: ["21", "25", "28", "35"],
        answer: "25",
      },
      {
        question: "भारतीय रिज़र्व बैंक की स्थापना कब हुई?",
        options: ["1930", "1935", "1947", "1950"],
        answer: "1935",
      },
      {
        question: "भारत का पहला उपग्रह कौन सा था?",
        options: ["आर्यभट्ट", "भास्कर", "रोहिणी", "चंद्रयान"],
        answer: "आर्यभट्ट",
      },
      {
        question: "भारत का पहला राष्ट्रपति कौन थे?",
        options: ["राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "डॉ. भीमराव अंबेडकर", "सुभाष चंद्र बोस"],
        answer: "राजेंद्र प्रसाद",
      },
      {
        question: "भारतीय संसद भवन कहाँ स्थित है?",
        options: ["जयपुर", "दिल्ली", "मुंबई", "कोलकाता"],
        answer: "दिल्ली",
      },
      {
        question: "भारत में ‘नालंदा विश्वविद्यालय’ कहाँ स्थित है?",
        options: ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान"],
        answer: "बिहार",
      },
      {
        question: "भारत का राष्ट्रीय अभिलेखागार कहाँ है?",
        options: ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"],
        answer: "दिल्ली",
      },
      {
        question: "भारत में लोकसभा की अधिकतम सीटें कितनी हो सकती हैं?",
        options: ["545", "552", "560", "600"],
        answer: "552",
      },
      {
        question: "‘माई एक्सपेरिमेंट्स विद ट्रुथ’ किसकी आत्मकथा है?",
        options: ["महात्मा गांधी", "नेहरू", "भगत सिंह", "डॉ. अंबेडकर"],
        answer: "महात्मा गांधी",
      },
      {
        question: "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई?",
        options: ["1885", "1905", "1920", "1942"],
        answer: "1885",
      },
      {
        question: "संविधान सभा के अध्यक्ष कौन थे?",
        options: ["राजेंद्र प्रसाद", "सुभाष चंद्र बोस", "भीमराव अंबेडकर", "जवाहरलाल नेहरू"],
        answer: "राजेंद्र प्रसाद",
      },
    ],

    hard: [
      {
        question: "भारतीय संविधान की मूल प्रति किस भाषा में लिखी गई है?",
        options: ["अंग्रेजी और हिंदी", "हिंदी और संस्कृत", "संस्कृत और उर्दू", "हिंदी और पंजाबी"],
        answer: "अंग्रेजी और हिंदी",
      },
      {
        question: "भारतीय संविधान को तैयार करने में कितने दिन लगे?",
        options: ["2 साल 11 महीने 18 दिन", "3 साल 5 महीने 20 दिन", "2 साल 5 महीने 12 दिन", "4 साल 1 महीना 10 दिन"],
        answer: "2 साल 11 महीने 18 दिन",
      },
      {
        question: "भारतीय योजना आयोग की स्थापना कब हुई?",
        options: ["1947", "1950", "1951", "1960"],
        answer: "1950",
      },
      {
        question: "भारत का पहला आईएएस अधिकारी कौन था?",
        options: ["सत्येंद्रनाथ टैगोर", "सुभाष चंद्र बोस", "राजगोपालाचारी", "लाल बहादुर शास्त्री"],
        answer: "सत्येंद्रनाथ टैगोर",
      },
      {
        question: "भारतीय संविधान में कितनी अनुसूचियां हैं?",
        options: ["12", "10", "11", "9"],
        answer: "12",
      },
      {
        question: "भारत का पहला कंप्यूटर कौन सा था?",
        options: ["PARAM 8000", "HCL", "TIFRAC", "सुपर कंप्यूटर"],
        answer: "TIFRAC",
      },
      {
        question: "‘भारत छोड़ो आंदोलन’ कब हुआ?",
        options: ["1942", "1947", "1930", "1919"],
        answer: "1942",
      },
      {
        question: "भारत के पहले मुख्य चुनाव आयुक्त कौन थे?",
        options: ["टी.एन. शेषन", "सुकुमार सेन", "राजगोपाल", "के.आर. नारायणन"],
        answer: "सुकुमार सेन",
      },
      {
        question: "भारत का पहला परमाणु परीक्षण कहाँ हुआ?",
        options: ["पोक़रण", "त्रिवेंद्रम", "श्रीहरिकोटा", "मुंबई"],
        answer: "पोक़रण",
      },
      {
        question: "संयुक्त राष्ट्र संघ का मुख्यालय कहाँ है?",
        options: ["जेनेवा", "न्यूयॉर्क", "लंदन", "पेरिस"],
        answer: "न्यूयॉर्क",
      },
      {
        question: "भारत का पहला नोबेल पुरस्कार किसे मिला?",
        options: ["सी.वी. रमन", "रवींद्रनाथ टैगोर", "हरगोविंद खुराना", "अमर्त्य सेन"],
        answer: "रवींद्रनाथ टैगोर",
      },
      {
        question: "भारत का पहला अंतरिक्ष यात्री कौन था?",
        options: ["कल्पना चावला", "राकेश शर्मा", "सुनीता विलियम्स", "विक्रम साराभाई"],
        answer: "राकेश शर्मा",
      },
      {
        question: "भारतीय संविधान की प्रस्तावना में ‘धर्मनिरपेक्ष’ शब्द कब जोड़ा गया?",
        options: ["1950", "1962", "1976", "1980"],
        answer: "1976",
      },
      {
        question: "‘भारत का मिसाइल मैन’ किसे कहा जाता है?",
        options: ["होमी भाभा", "ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "सत्येंद्रनाथ बोस"],
        answer: "ए.पी.जे. अब्दुल कलाम",
      },
      {
        question: "भारत के पहले मुख्य न्यायाधीश कौन थे?",
        options: ["एच.जे. कनिया", "एम.सी. चागला", "बी.पी. सिन्हा", "फातिमा बीबी"],
        answer: "एच.जे. कनिया",
      },
    ],
  },
   history: {
    easy: [
      {
        question: "सिंधु घाटी सभ्यता किस नदी के किनारे बसी थी?",
        options: ["गंगा", "यमुना", "सिंधु", "सरस्वती"],
        answer: "सिंधु",
      },
      {
        question: "ताजमहल का निर्माण किसने करवाया?",
        options: ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
        answer: "शाहजहाँ",
      },
      {
        question: "महात्मा गांधी का जन्म कहाँ हुआ था?",
        options: ["दिल्ली", "पोरबंदर", "राजकोट", "सूरत"],
        answer: "पोरबंदर",
      },
      {
        question: "भारत का पहला स्वतंत्रता संग्राम कब हुआ?",
        options: ["1857", "1947", "1920", "1930"],
        answer: "1857",
      },
      {
        question: "लाल किला कहाँ स्थित है?",
        options: ["जयपुर", "दिल्ली", "लखनऊ", "आगरा"],
        answer: "दिल्ली",
      },
      {
        question: "अशोक किस राजवंश का शासक था?",
        options: ["गुप्त", "मौर्य", "मुगल", "कुषाण"],
        answer: "मौर्य",
      },
      {
        question: "कुतुब मीनार किसने बनवाई?",
        options: ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "बलबन"],
        answer: "कुतुब-उद-दीन ऐबक",
      },
      {
        question: "गांधी जी को 'राष्ट्रपिता' किसने कहा?",
        options: ["नेहरू", "सुभाष चंद्र बोस", "पटेल", "लाल बहादुर शास्त्री"],
        answer: "सुभाष चंद्र बोस",
      },
      {
        question: "अकबर का दरबार किस नाम से प्रसिद्ध था?",
        options: ["नवरत्न", "दशरथ", "पंचायन", "सभा"],
        answer: "नवरत्न",
      },
      {
        question: "झाँसी की रानी लक्ष्मीबाई का असली नाम क्या था?",
        options: ["मणिकर्णिका", "अहिल्या", "सीता", "सावित्री"],
        answer: "मणिकर्णिका",
      },
      {
        question: "भारत छोड़ो आंदोलन कब शुरू हुआ?",
        options: ["1920", "1942", "1930", "1919"],
        answer: "1942",
      },
      {
        question: "‘दिल्ली सल्तनत’ की स्थापना किसने की?",
        options: ["कुतुब-उद-दीन ऐबक", "बाबर", "अकबर", "अलाउद्दीन खिलजी"],
        answer: "कुतुब-उद-दीन ऐबक",
      },
      {
        question: "प्लासी का युद्ध कब हुआ?",
        options: ["1757", "1761", "1857", "1707"],
        answer: "1757",
      },
      {
        question: "भारत का अंतिम गवर्नर जनरल कौन था?",
        options: ["माउंटबेटन", "विलियम बेंटिक", "वॉरेन हेस्टिंग्स", "डलहौजी"],
        answer: "माउंटबेटन",
      },
      {
        question: "दिल्ली का लाल किला किस शासक ने बनवाया?",
        options: ["अकबर", "शाहजहाँ", "जहाँगीर", "औरंगजेब"],
        answer: "शाहजहाँ",
      },
    ],

    medium: [
      {
        question: "गुप्त वंश का सबसे महान शासक कौन था?",
        options: ["चंद्रगुप्त प्रथम", "चंद्रगुप्त द्वितीय", "समुद्रगुप्त", "कुमारगुप्त"],
        answer: "चंद्रगुप्त द्वितीय",
      },
      {
        question: "विक्रमादित्य किस वंश से संबंधित थे?",
        options: ["गुप्त", "मौर्य", "चालुक्य", "सातवाहन"],
        answer: "गुप्त",
      },
      {
        question: "पानीपत का पहला युद्ध कब हुआ?",
        options: ["1526", "1556", "1761", "1857"],
        answer: "1526",
      },
      {
        question: "‘अल-बेरूनी’ किस शासक के दरबार में आया?",
        options: ["अकबर", "महमूद गज़नवी", "इल्तुतमिश", "बलबन"],
        answer: "महमूद गज़नवी",
      },
      {
        question: "मुगल साम्राज्य की स्थापना किसने की?",
        options: ["बाबर", "अकबर", "हुमायूँ", "शाहजहाँ"],
        answer: "बाबर",
      },
      {
        question: "सुभाष चंद्र बोस ने आज़ाद हिंद फौज की स्थापना कहाँ की?",
        options: ["जर्मनी", "जापान", "सिंगापुर", "भारत"],
        answer: "सिंगापुर",
      },
      {
        question: "कनिष्क किस वंश का शासक था?",
        options: ["मौर्य", "कुषाण", "गुप्त", "मुगल"],
        answer: "कुषाण",
      },
      {
        question: "‘दीन-ए-इलाही’ किसने शुरू किया?",
        options: ["शाहजहाँ", "अकबर", "जहाँगीर", "औरंगजेब"],
        answer: "अकबर",
      },
      {
        question: "शेरशाह सूरी ने कौन सा प्रसिद्ध मार्ग बनवाया?",
        options: ["ग्रांड ट्रंक रोड", "राजमार्ग 44", "कोलकाता रोड", "दिल्ली-आगरा मार्ग"],
        answer: "ग्रांड ट्रंक रोड",
      },
      {
        question: "अमरकंटक किस नदी का उद्गम स्थल है?",
        options: ["गंगा", "नर्मदा", "यमुना", "गोदावरी"],
        answer: "नर्मदा",
      },
      {
        question: "पानीपत का तीसरा युद्ध कब हुआ?",
        options: ["1761", "1556", "1526", "1857"],
        answer: "1761",
      },
      {
        question: "अजंता की गुफाएँ किस धर्म से संबंधित हैं?",
        options: ["हिन्दू", "जैन", "बौद्ध", "इस्लाम"],
        answer: "बौद्ध",
      },
      {
        question: "दिल्ली सल्तनत का सबसे महान शासक किसे माना जाता है?",
        options: ["अलाउद्दीन खिलजी", "इल्तुतमिश", "कुतुब-उद-दीन ऐबक", "बलबन"],
        answer: "अलाउद्दीन खिलजी",
      },
      {
        question: "‘भारत छोड़ो आंदोलन’ का नारा किसने दिया?",
        options: ["महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "नेहरू"],
        answer: "महात्मा गांधी",
      },
      {
        question: "विक्रमशिला विश्वविद्यालय की स्थापना किसने की थी?",
        options: ["ध्रुवपाल", "गोपाल", "धर्मपाल", "नरेन्द्रपाल"],
        answer: "धर्मपाल",
      },
    ],

    hard: [
      {
        question: "इलाहाबाद संधि कब हुई?",
        options: ["1765", "1757", "1857", "1942"],
        answer: "1765",
      },
      {
        question: "राजा राममोहन राय ने किस समाज की स्थापना की?",
        options: ["आर्य समाज", "ब्रह्म समाज", "प्रार्थना समाज", "रामकृष्ण मिशन"],
        answer: "ब्रह्म समाज",
      },
      {
        question: "पहली बार अंग्रेजों ने भारत में व्यापार केंद्र कहाँ खोला?",
        options: ["सूरत", "कोलकाता", "चेन्नई", "मुंबई"],
        answer: "सूरत",
      },
      {
        question: "‘गदर पार्टी’ की स्थापना कहाँ हुई?",
        options: ["अमेरिका", "भारत", "इंग्लैंड", "कनाडा"],
        answer: "अमेरिका",
      },
      {
        question: "अलीगढ़ आंदोलन किसने शुरू किया?",
        options: ["सर सैयद अहमद खान", "राजा राममोहन राय", "ईश्वरचंद्र विद्यासागर", "बाल गंगाधर तिलक"],
        answer: "सर सैयद अहमद खान",
      },
      {
        question: "प्लासी के युद्ध में किसकी हार हुई?",
        options: ["सिराज-उद-दौला", "मीर जाफर", "अलाउद्दीन खिलजी", "शेरशाह सूरी"],
        answer: "सिराज-उद-दौला",
      },
      {
        question: "भारत का प्रथम गवर्नर जनरल कौन था?",
        options: ["वॉरेन हेस्टिंग्स", "लॉर्ड कर्जन", "लॉर्ड डलहौजी", "लॉर्ड माउंटबेटन"],
        answer: "वॉरेन हेस्टिंग्स",
      },
      {
        question: "साइमन कमीशन भारत कब आया?",
        options: ["1928", "1930", "1919", "1942"],
        answer: "1928",
      },
      {
        question: "चंद्रगुप्त मौर्य का गुरु कौन था?",
        options: ["भास्कराचार्य", "चाणक्य", "पतंजलि", "वराहमिहिर"],
        answer: "चाणक्य",
      },
      {
        question: "‘सुभाष चंद्र बोस’ ने ‘जय हिंद’ का नारा कहाँ दिया?",
        options: ["सिंगापुर", "बर्मा", "दिल्ली", "जर्मनी"],
        answer: "सिंगापुर",
      },
      {
        question: "भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?",
        options: ["ए.ओ. ह्यूम", "वॉमेश चंद्र बनर्जी", "बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले"],
        answer: "वॉमेश चंद्र बनर्जी",
      },
      {
        question: "‘अमृतसर नरसंहार’ कब हुआ?",
        options: ["1919", "1920", "1930", "1942"],
        answer: "1919",
      },
      {
        question: "‘अलाउद्दीन खिलजी’ ने किस प्रकार का कर लगाया था?",
        options: ["भूमि कर", "जजिया कर", "चराई कर", "गृह कर"],
        answer: "चराई कर",
      },
      {
        question: "दिल्ली का प्रथम मुस्लिम शासक कौन था?",
        options: ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "बलबन", "खिलजी"],
        answer: "कुतुब-उद-दीन ऐबक",
      },
      {
        question: "‘भारत छोड़ो आंदोलन’ के समय वायसराय कौन था?",
        options: ["लॉर्ड लिनलिथगो", "लॉर्ड माउंटबेटन", "लॉर्ड कर्जन", "लॉर्ड डलहौजी"],
        answer: "लॉर्ड लिनलिथगो",
      },
    ],
  },
    physics: {
    easy: [
      {
        question: "गति मापने का यंत्र कौन सा है?",
        options: ["थर्मामीटर", "स्पीडोमीटर", "बैरोमीटर", "वोल्टमीटर"],
        answer: "स्पीडोमीटर",
      },
      {
        question: "बल की SI इकाई क्या है?",
        options: ["न्यूटन", "जूल", "पास्कल", "वाट"],
        answer: "न्यूटन",
      },
      {
        question: "प्रकाश की गति लगभग कितनी होती है?",
        options: ["3×10⁵ m/s", "3×10⁸ m/s", "1.5×10⁸ m/s", "3×10⁶ m/s"],
        answer: "3×10⁸ m/s",
      },
      {
        question: "ध्वनि किस माध्यम में सबसे तेज चलती है?",
        options: ["गैस", "तरल", "ठोस", "वैक्यूम"],
        answer: "ठोस",
      },
      {
        question: "दर्पण में बना प्रतिबिंब कैसा होता है?",
        options: ["समान", "आभासी और सीधा", "आभासी और उल्टा", "वास्तविक"],
        answer: "आभासी और सीधा",
      },
      {
        question: "पृथ्वी पर गुरुत्व त्वरण का मान कितना है?",
        options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "9.2 m/s²"],
        answer: "9.8 m/s²",
      },
      {
        question: "ऊर्जा की SI इकाई क्या है?",
        options: ["वाट", "न्यूटन", "जूल", "पास्कल"],
        answer: "जूल",
      },
      {
        question: "विद्युत धारा को मापने का यंत्र कौन सा है?",
        options: ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वानोमीटर"],
        answer: "एमीटर",
      },
      {
        question: "वस्तु के द्रव्यमान को मापने के लिए क्या प्रयोग किया जाता है?",
        options: ["थर्मामीटर", "तुला", "मीटर", "गैल्वानोमीटर"],
        answer: "तुला",
      },
      {
        question: "ध्वनि की गति किसमें नहीं चलती?",
        options: ["ठोस", "तरल", "गैस", "निर्वात"],
        answer: "निर्वात",
      },
      {
        question: "बल = द्रव्यमान × ?",
        options: ["ऊर्जा", "वेग", "त्वरण", "गुरुत्व"],
        answer: "त्वरण",
      },
      {
        question: "वोल्ट की इकाई किसकी है?",
        options: ["धारा", "वोल्टेज", "प्रतिरोध", "शक्ति"],
        answer: "वोल्टेज",
      },
      {
        question: "आवर्धक लेंस किस प्रकार का होता है?",
        options: ["अवतल लेंस", "उत्तल लेंस", "समतल लेंस", "परावर्तक"],
        answer: "उत्तल लेंस",
      },
      {
        question: "गति = दूरी ÷ ?",
        options: ["समय", "बल", "ऊर्जा", "वजन"],
        answer: "समय",
      },
      {
        question: "बैरोमीटर किसे मापने का यंत्र है?",
        options: ["गति", "तापमान", "वायुदाब", "विद्युत"],
        answer: "वायुदाब",
      },
    ],

    medium: [
      {
        question: "विद्युत धारा की SI इकाई क्या है?",
        options: ["वाट", "एम्पियर", "जूल", "वोल्ट"],
        answer: "एम्पियर",
      },
      {
        question: "आवेशित कण का आकर्षण या विकर्षण किस कारण होता है?",
        options: ["गुरुत्वाकर्षण बल", "विद्युत बल", "चुंबकीय बल", "यांत्रिक बल"],
        answer: "विद्युत बल",
      },
      {
        question: "ध्वनि की आवृत्ति की SI इकाई क्या है?",
        options: ["हर्ट्ज़", "न्यूटन", "जूल", "पास्कल"],
        answer: "हर्ट्ज़",
      },
      {
        question: "ऊष्मा किसके कारण प्रवाहित होती है?",
        options: ["तापांतर", "गुरुत्वाकर्षण", "वायुदाब", "द्रव्यमान"],
        answer: "तापांतर",
      },
      {
        question: "न्यूटन का तीसरा नियम क्या है?",
        options: ["F = ma", "ऊर्जा संरक्षण", "हर क्रिया की समान व विपरीत प्रतिक्रिया होती है", "गति का नियम"],
        answer: "हर क्रिया की समान व विपरीत प्रतिक्रिया होती है",
      },
      {
        question: "लेज़र प्रकाश किस प्रकार का होता है?",
        options: ["एकरंगी", "बहुरंगी", "सफेद", "पारदर्शी"],
        answer: "एकरंगी",
      },
      {
        question: "ओम का नियम क्या है?",
        options: ["V = IR", "F = ma", "E = mc²", "P = VI"],
        answer: "V = IR",
      },
      {
        question: "कूलॉम किसकी इकाई है?",
        options: ["विद्युत आवेश", "धारा", "शक्ति", "ऊर्जा"],
        answer: "विद्युत आवेश",
      },
      {
        question: "गुरुत्व बल किसने खोजा?",
        options: ["न्यूटन", "आइंस्टाइन", "गैलीलियो", "रदरफोर्ड"],
        answer: "न्यूटन",
      },
      {
        question: "लेंस का फोकस दूरी किसमें नापी जाती है?",
        options: ["मीटर", "डिग्री", "सेकंड", "डायोप्टर"],
        answer: "डायोप्टर",
      },
      {
        question: "विद्युत शक्ति का सूत्र क्या है?",
        options: ["P = VI", "P = I²R", "P = V²/R", "सभी सही हैं"],
        answer: "सभी सही हैं",
      },
      {
        question: "गति का संरक्षण किसमें लागू होता है?",
        options: ["टकराव", "ऊष्मा", "ध्वनि", "प्रकाश"],
        answer: "टकराव",
      },
      {
        question: "चुंबक के दो ध्रुव कौन से होते हैं?",
        options: ["पूर्व-पश्चिम", "उत्तर-दक्षिण", "ऊपर-नीचे", "बाएँ-दाएँ"],
        answer: "उत्तर-दक्षिण",
      },
      {
        question: "गुरुत्वीय स्थितिज ऊर्जा का सूत्र क्या है?",
        options: ["mgh", "½mv²", "F×d", "qV"],
        answer: "mgh",
      },
      {
        question: "रेडियो तरंगें किस प्रकार की तरंगें हैं?",
        options: ["अनुदैर्ध्य", "अनुप्रस्थ", "यांत्रिक", "ध्वनि"],
        answer: "अनुप्रस्थ",
      },
    ],

    hard: [
      {
        question: "सापेक्षता का विशेष सिद्धांत किसने दिया?",
        options: ["न्यूटन", "आइंस्टाइन", "गैलीलियो", "प्लैंक"],
        answer: "आइंस्टाइन",
      },
      {
        question: "फोटोइलेक्ट्रिक प्रभाव किसने खोजा?",
        options: ["आइंस्टाइन", "न्यूटन", "हर्ट्ज़", "मैक्सवेल"],
        answer: "आइंस्टाइन",
      },
      {
        question: "प्लैंक स्थिरांक का मान लगभग कितना है?",
        options: ["6.63×10⁻³⁴ J·s", "9.8 m/s²", "1.6×10⁻¹⁹ C", "3×10⁸ m/s"],
        answer: "6.63×10⁻³⁴ J·s",
      },
      {
        question: "E = mc² किसका समीकरण है?",
        options: ["गुरुत्वाकर्षण", "ऊर्जा-द्रव्यमान संबंध", "ओम का नियम", "गति का नियम"],
        answer: "ऊर्जा-द्रव्यमान संबंध",
      },
      {
        question: "तरंग-कण द्वैत किसने प्रस्तावित किया?",
        options: ["न्यूटन", "डी ब्रॉग्ली", "आइंस्टाइन", "रदरफोर्ड"],
        answer: "डी ब्रॉग्ली",
      },
      {
        question: "सुपरकंडक्टिविटी की खोज किसने की?",
        options: ["कामरलिंग ओनेस", "जेम्स क्लर्क मैक्सवेल", "फैराडे", "न्यूटन"],
        answer: "कामरलिंग ओनेस",
      },
      {
        question: "हिग्स बोसोन को और किस नाम से जाना जाता है?",
        options: ["गॉड पार्टिकल", "डार्क पार्टिकल", "रेड पार्टिकल", "लाइट पार्टिकल"],
        answer: "गॉड पार्टिकल",
      },
      {
        question: "धारा घनत्व की SI इकाई क्या है?",
        options: ["A/m²", "A/m", "V/m", "C/m²"],
        answer: "A/m²",
      },
      {
        question: "सुपरपोजीशन सिद्धांत किससे संबंधित है?",
        options: ["तरंगें", "बल", "गति", "ऊर्जा"],
        answer: "तरंगें",
      },
      {
        question: "नाभिकीय संलयन किसमें होता है?",
        options: ["सूर्य", "पृथ्वी", "बैटरी", "चुंबक"],
        answer: "सूर्य",
      },
      {
        question: "सुपरनोवा विस्फोट किससे संबंधित है?",
        options: ["तारा", "ग्रह", "चंद्रमा", "पृथ्वी"],
        answer: "तारा",
      },
      {
        question: "विद्युत फ्लक्स किस नियम से संबंधित है?",
        options: ["गॉस का नियम", "न्यूटन का नियम", "ओम का नियम", "हुक का नियम"],
        answer: "गॉस का नियम",
      },
      {
        question: "हिग्स मैकेनिज्म किससे जुड़ा है?",
        options: ["कणों का द्रव्यमान", "ऊर्जा का संरक्षण", "तरंग का परावर्तन", "गति"],
        answer: "कणों का द्रव्यमान",
      },
      {
        question: "ब्लैक होल से प्रकाश क्यों नहीं निकल सकता?",
        options: ["तेज गुरुत्वाकर्षण", "कम गुरुत्वाकर्षण", "ध्वनि अवशोषण", "विद्युत प्रभाव"],
        answer: "तेज गुरुत्वाकर्षण",
      },
      {
        question: "क्वांटम यांत्रिकी के जनक किसे कहा जाता है?",
        options: ["हाइजेनबर्ग", "श्रोडिंगर", "प्लैंक", "आइंस्टाइन"],
        answer: "प्लैंक",
      },
    ],
  },
  math: {
  easy: [
    {
      question: "2 + 3 = ?",
      options: ["4", "5", "6", "7"],
      answer: "5",
    },
    {
      question: "10 - 7 = ?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
    {
      question: "5 × 6 = ?",
      options: ["20", "25", "30", "35"],
      answer: "30",
    },
    {
      question: "20 ÷ 4 = ?",
      options: ["2", "4", "5", "6"],
      answer: "5",
    },
    {
      question: "एक त्रिभुज के कितने भुजाएँ होती हैं?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
    {
      question: "100 का आधा कितना है?",
      options: ["10", "20", "25", "50"],
      answer: "50",
    },
    {
      question: "0 को किसी संख्या से गुणा करने पर उत्तर क्या होगा?",
      options: ["0", "1", "संख्या", "अनंत"],
      answer: "0",
    },
    {
      question: "25 का वर्ग कितना है?",
      options: ["525", "575", "600", "625"],
      answer: "625",
    },
    {
      question: "9 का घन कितना है?",
      options: ["729", "81", "900", "512"],
      answer: "729",
    },
    {
      question: "12 और 8 का HCF क्या है?",
      options: ["2", "4", "6", "8"],
      answer: "4",
    },
    {
      question: "12 और 15 का LCM क्या है?",
      options: ["30", "45", "60", "90"],
      answer: "60",
    },
    {
      question: "π का मान लगभग कितना होता है?",
      options: ["2.12", "3.14", "4.12", "5.14"],
      answer: "3.14",
    },
    {
      question: "एक वर्ग में कितनी भुजाएँ होती हैं?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      question: "1 किलोमीटर में कितने मीटर होते हैं?",
      options: ["10", "100", "1000", "10000"],
      answer: "1000",
    },
    {
      question: "समकोण का मान कितने डिग्री होता है?",
      options: ["45°", "60°", "90°", "180°"],
      answer: "90°",
    },
    {
      question: "180° का आधा कितना होगा?",
      options: ["60°", "90°", "120°", "150°"],
      answer: "90°",
    },
    {
      question: "1 लीप वर्ष में कितने दिन होते हैं?",
      options: ["364", "365", "366", "367"],
      answer: "366",
    },
    {
      question: "समान्तर चतुर्भुज का क्षेत्रफल का सूत्र क्या है?",
      options: ["आधार × ऊँचाई", "½ आधार × ऊँचाई", "भुजा × भुजा", "लंबाई × चौड़ाई"],
      answer: "आधार × ऊँचाई",
    },
    {
      question: "वृत्त का क्षेत्रफल का सूत्र क्या है?",
      options: ["2πr", "πr²", "πd", "r²"],
      answer: "πr²",
    },
    {
      question: "25% का भिन्न रूप क्या है?",
      options: ["1/2", "1/3", "1/4", "1/5"],
      answer: "1/4",
    },
    {
      question: "0.5 का भिन्न रूप क्या है?",
      options: ["1/2", "1/3", "2/3", "1/4"],
      answer: "1/2",
    },
    {
      question: "1 दर्जन में कितनी वस्तुएँ होती हैं?",
      options: ["6", "10", "12", "20"],
      answer: "12",
    },
    {
      question: "2 घंटे = कितने मिनट?",
      options: ["60", "90", "100", "120"],
      answer: "120",
    },
    {
      question: "समबाहु त्रिभुज की सभी भुजाएँ कैसी होती हैं?",
      options: ["समान", "असमान", "दो समान", "कोई नहीं"],
      answer: "समान",
    },
    {
      question: "आयत का क्षेत्रफल का सूत्र क्या है?",
      options: ["लंबाई × चौड़ाई", "2 × लंबाई × चौड़ाई", "½ लंबाई × चौड़ाई", "लंबाई + चौड़ाई"],
      answer: "लंबाई × चौड़ाई",
    },
    {
      question: "10 का घन कितना है?",
      options: ["100", "1000", "10000", "100000"],
      answer: "1000",
    },
    {
      question: "1000 ग्राम = ? किलो",
      options: ["1", "10", "100", "1000"],
      answer: "1",
    },
    {
      question: "एक सीधी रेखा पर कोण का मान कितना होता है?",
      options: ["90°", "120°", "150°", "180°"],
      answer: "180°",
    },
    {
      question: "144 का वर्गमूल कितना है?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "8 ÷ 0 का परिणाम क्या होगा?",
      options: ["0", "अनंत", "8", "परिभाषित नहीं"],
      answer: "परिभाषित नहीं",
    },
  ],

  medium: [
    {
      question: "√225 = ?",
      options: ["10", "12", "14", "15"],
      answer: "15",
    },
    {
      question: "1/2 + 1/3 = ?",
      options: ["5/6", "2/5", "1/6", "2/3"],
      answer: "5/6",
    },
    {
      question: "105 को 7 से विभाजित करने पर उत्तर क्या होगा?",
      options: ["10", "12", "14", "15"],
      answer: "15",
    },
    {
      question: "0.75 का भिन्न रूप क्या है?",
      options: ["3/4", "1/2", "2/3", "5/6"],
      answer: "3/4",
    },
    {
      question: "2x + 5 = 15, x = ?",
      options: ["3", "4", "5", "6"],
      answer: "5",
    },
    {
      question: "यदि त्रिभुज के दो कोण 45° और 55° हैं, तो तीसरा कोण कितना होगा?",
      options: ["70°", "80°", "90°", "100°"],
      answer: "80°",
    },
    {
      question: "साधारण ब्याज का सूत्र क्या है?",
      options: ["P×R×T/100", "P×R/T", "P+R+T", "P×T/100"],
      answer: "P×R×T/100",
    },
    {
      question: "यदि A = 5, B = 3, तो A² - B² = ?",
      options: ["16", "18", "20", "22"],
      answer: "16",
    },
    {
      question: "40% of 250 = ?",
      options: ["50", "75", "100", "125"],
      answer: "100",
    },
    {
      question: "n! का क्या अर्थ है?",
      options: ["गुणनफल", "योगफल", "घात", "भिन्न"],
      answer: "गुणनफल",
    },
    {
      question: "पहले 10 प्राकृतिक संख्याओं का योग कितना है?",
      options: ["45", "50", "55", "60"],
      answer: "55",
    },
    {
      question: "औसत = ?",
      options: ["कुल योग ÷ संख्या", "कुल योग × संख्या", "सबसे बड़ी संख्या", "सबसे छोटी संख्या"],
      answer: "कुल योग ÷ संख्या",
    },
    {
      question: "90° कोण वाला त्रिभुज कौन सा होता है?",
      options: ["समद्विबाहु", "समकोण", "अधिकोण", "न्यूनकोण"],
      answer: "समकोण",
    },
    {
      question: "sin²θ + cos²θ = ?",
      options: ["0", "1", "2", "अनंत"],
      answer: "1",
    },
    {
      question: "2³ × 2² = ?",
      options: ["2⁵", "2⁶", "2¹⁰", "2⁴"],
      answer: "2⁵",
    },
    {
      question: "यदि त्रिज्या 7 सेमी है तो वृत्त की परिधि कितनी होगी? (π = 22/7)",
      options: ["44 cm", "49 cm", "52 cm", "56 cm"],
      answer: "44 cm",
    },
    {
      question: "गुणोत्तर श्रेणी 2, 4, 8,... का तीसरा पद क्या है?",
      options: ["6", "8", "10", "12"],
      answer: "8",
    },
    {
      question: "10 का वर्गमूल × 10 का वर्गमूल = ?",
      options: ["10", "20", "100", "1000"],
      answer: "10",
    },
    {
      question: "लघुगणक log10 (1000) = ?",
      options: ["2", "3", "10", "100"],
      answer: "3",
    },
    {
      question: "यदि त्रिभुज का आधार 10 और ऊँचाई 12 है तो क्षेत्रफल कितना होगा?",
      options: ["50", "60", "100", "120"],
      answer: "60",
    },
    {
      question: "tan45° का मान क्या है?",
      options: ["0", "1", "√2", "अनंत"],
      answer: "1",
    },
    {
      question: "cos60° = ?",
      options: ["1", "0", "½", "√3/2"],
      answer: "½",
    },
    {
      question: "1/0 का मान क्या होगा?",
      options: ["0", "1", "अनंत", "परिभाषित नहीं"],
      answer: "परिभाषित नहीं",
    },
    {
      question: "√2 का मान लगभग कितना है?",
      options: ["1.2", "1.3", "1.41", "1.5"],
      answer: "1.41",
    },
    {
      question: "त्रिभुज का क्षेत्रफल का सूत्र क्या है?",
      options: ["½ आधार × ऊँचाई", "आधार × ऊँचाई", "लंबाई × चौड़ाई", "भुजा × भुजा"],
      answer: "½ आधार × ऊँचाई",
    },
    {
      question: "यदि x = 2 हो तो 2x³ का मान क्या होगा?",
      options: ["8", "12", "16", "20"],
      answer: "16",
    },
    {
      question: "एक घन के कितने फलकीय पृष्ठ होते हैं?",
      options: ["4", "5", "6", "8"],
      answer: "6",
    },
    {
      question: "एक आयताकार घनाभ के कितने पृष्ठ होते हैं?",
      options: ["4", "6", "8", "12"],
      answer: "6",
    },
    {
      question: "यदि गति = 40 और समय = 2 हो, दूरी = ?",
      options: ["20", "40", "60", "80"],
      answer: "80",
    },
    {
      question: "1/5 का दशमलव रूप क्या है?",
      options: ["0.1", "0.2", "0.25", "0.5"],
      answer: "0.2",
    },
  ],

  hard: [
    {
      question: "x² - 9 = 0 का हल क्या होगा?",
      options: ["x = ±2", "x = ±3", "x = ±4", "x = ±5"],
      answer: "x = ±3",
    },
    {
      question: "यदि 2x + 3 = 7 हो, तो x = ?",
      options: ["1", "2", "3", "4"],
      answer: "2",
    },
    {
      question: "समीकरण x² - 5x + 6 = 0 के मूल क्या हैं?",
      options: ["2,3", "1,6", "4,2", "3,4"],
      answer: "2,3",
    },
    {
      question: "यदि sinθ = 1/2, तो θ = ?",
      options: ["15°", "30°", "45°", "60°"],
      answer: "30°",
    },
    {
      question: "tan²θ + 1 = ?",
      options: ["sec²θ", "cosec²θ", "cos²θ", "sin²θ"],
      answer: "sec²θ",
    },
    {
      question: "1 + 2 + 3 + ... + n का योग कितना है?",
      options: ["n²", "n(n+1)/2", "n(n-1)/2", "n³"],
      answer: "n(n+1)/2",
    },
    {
      question: "एक वृत्त की परिधि 44 सेमी है, त्रिज्या = ? (π = 22/7)",
      options: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "7 cm",
    },
    {
      question: "2 का घातांक -3 का मान क्या होगा?",
      options: ["1/2", "1/4", "1/6", "1/8"],
      answer: "1/8",
    },
    {
      question: "log a + log b = ?",
      options: ["log(a+b)", "log(ab)", "log(a/b)", "log(a-b)"],
      answer: "log(ab)",
    },
    {
      question: "यदि A = πr², तो dA/dr = ?",
      options: ["πr", "2πr", "πr²", "r²"],
      answer: "2πr",
    },
    {
      question: "x² का समाकलन क्या है?",
      options: ["x³/3", "2x", "x²", "x³"],
      answer: "x³/3",
    },
    {
      question: "e^x का अवकलज क्या है?",
      options: ["1", "e^x", "x", "0"],
      answer: "e^x",
    },
    {
      question: "dy/dx (sinx) = ?",
      options: ["cosx", "-cosx", "-sinx", "tanx"],
      answer: "cosx",
    },
    {
      question: "यदि lim(x→0) (sinx/x) = ?",
      options: ["0", "1", "अनंत", "x"],
      answer: "1",
    },
    {
      question: "मैट्रिक्स का determinant किसके लिए निकाला जाता है?",
      options: ["square matrix", "rectangular matrix", "scalar", "vector"],
      answer: "square matrix",
    },
    {
      question: "A.P. में nth term का सूत्र क्या है?",
      options: ["a + (n-1)d", "a × n", "a/d", "a + nd"],
      answer: "a + (n-1)d",
    },
    {
      question: "G.P. में nth term का सूत्र क्या है?",
      options: ["a × r^(n-1)", "a + r^(n-1)", "a/r", "ar"],
      answer: "a × r^(n-1)",
    },
    {
      question: "Probability हमेशा किसके बीच होती है?",
      options: ["0 और 1", "1 और 2", "–1 और 1", "0 और 100"],
      answer: "0 और 1",
    },
    {
      question: "एक पासे पर 6 आने की प्रायिकता क्या होगी?",
      options: ["1/2", "1/3", "1/6", "1/12"],
      answer: "1/6",
    },
    {
      question: "यदि P(A) = 0.7 और P(B) = 0.5 हो, तो P(A∩B) का अधिकतम मान कितना होगा?",
      options: ["0.2", "0.3", "0.5", "0.7"],
      answer: "0.5",
    },
    {
      question: "Differentiation किसे कहते हैं?",
      options: ["परिवर्तन की दर", "योग", "घात", "समाकलन"],
      answer: "परिवर्तन की दर",
    },
    {
      question: "Integration किसे कहते हैं?",
      options: ["छोटे भागों का जोड़", "घटाना", "गुणा", "विभाजन"],
      answer: "छोटे भागों का जोड़",
    },
    {
      question: "sin²A + cos²A = ?",
      options: ["0", "1", "2", "अनंत"],
      answer: "1",
    },
    {
      question: "nCr = ?",
      options: ["n!/r!", "n!/(r!(n-r)!)", "r!/n!", "n!/r"],
      answer: "n!/(r!(n-r)!)",
    },
    {
      question: "यदि किसी वृत्त का व्यास 14 है, तो त्रिज्या कितनी होगी?",
      options: ["6", "7", "8", "14"],
      answer: "7",
    },
    {
      question: "समीकरण y = mx + c किसका रूप है?",
      options: ["वृत्त", "रेखा", "पैराबोला", "हाइपरबोला"],
      answer: "रेखा",
    },
    {
      question: "Pythagoras का प्रमेय क्या है?",
      options: ["a² + b² = c²", "a² - b² = c²", "2ab = c²", "a² + b = c²"],
      answer: "a² + b² = c²",
    },
    {
      question: "एक त्रिभुज का क्षेत्रफल हेरोन सूत्र से कैसे निकाला जाता है?",
      options: ["√s(s-a)(s-b)(s-c)", "½ आधार × ऊँचाई", "a² + b²", "ab"],
      answer: "√s(s-a)(s-b)(s-c)",
    },
    {
      question: "1, 4, 9, 16,... किस श्रेणी की संख्याएँ हैं?",
      options: ["घन संख्या", "वर्ग संख्या", "अभाज्य संख्या", "फिबोनाची श्रृंखला"],
      answer: "वर्ग संख्या",
    },
    {
      question: "x → ∞ होने पर 1/x का मान क्या होगा?",
      options: ["0", "1", "अनंत", "x"],
      answer: "0",
    },
  ],
},

};

export default questions;