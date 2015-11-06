# mdServer
A web server providing HTML view of your Markdown text

## Features
* HTTP server
* Auto convert and reload
* File based
  - You can use your favorite editor



# Setup
1. Install dependencies
> npm install

2. Make dest directory
> mkdir dest

3. Put a style sheet in dest dir
> cp node_modules/gfm.css/gfm.css dest/



# Usage
1. Run the server
> grunt

2. Access the server
> http://localhost:8888/

3. Edit your markdown text in src dir, then save it
> emacs src/your_memo.md

4. Access your text on the server
> http://localhost:8888/your_memo.html