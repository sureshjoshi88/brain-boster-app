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
  },

};

export default questions;



