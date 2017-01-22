# TimeRegReact
A small case study of a time registration system in React and Node

## Technical Details:
I have implemented my solution in React.js with React-router, served by a very simple Node.js server using a bit of Express. 
The solution is configured to by transpiled and packed using Webpack and Babel.

If all these dependencies are met, the solution can be packed with: 
NODE_ENV=production webpack -p
And the server can be started with:
NODE_EVN=production node_modules/.bin/babel-node —presets ‘react,es2015’ src/server.js
Both from the root folder
