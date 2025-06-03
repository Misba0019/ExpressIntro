# ExpressIntro

## Overview

**ExpressIntro** is a collection of beginner-friendly Node.js projects demonstrating the basics of building web applications using [Express.js](https://expressjs.com/), [EJS](https://ejs.co/), and [Bootstrap](https://getbootstrap.com/).  
Each subfolder is a standalone mini-app, designed to help learn about routing, templating, static files, and dynamic content rendering.

---

## Features

- Simple and dynamic routing with Express.js
- EJS templating for dynamic HTML pages
- Bootstrap integration for responsive layouts
- Static file serving (CSS, JS, images)
- Example data rendering from JSON files
- Modular code structure with partials and reusable components

---

## Usage

1. Clone the repository:
    ```
    git clone https://github.com/Misba0019/ExpressIntro.git
    ```

2. Open a terminal and navigate to any of the project folders (`Bootstrap_Demo`, `FirstApp`, or `Templating_Demo`).

3. Install dependencies:
    ```
    npm install
    ```

4. Start the server:
    ```
    node index.js
    ```

5. Open your browser and go to:
    - [http://localhost:3000](http://localhost:3000) for `Bootstrap_Demo` and `FirstApp`
    - [http://localhost:8080](http://localhost:8080) for `Templating_Demo`

---

## Requirements

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/) (for templating projects)
- [Bootstrap](https://getbootstrap.com/) (included via static files)

---

## How It Works

Each folder is a separate Express app.
- Routes are defined in `index.js` for each project.
- EJS templates in the `views` folder render dynamic content.
- Static assets (CSS, JS, images) are served from the `public` folder.
- Example data is loaded from `data.json` and displayed on relevant pages.
- Partials (like header, navbar, footer) are used for DRY and maintainable layouts.

---

## Support
If you find this project helpful, please consider visiting the repo and giving it a ⭐ star — it really helps!

---

## Credits

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Bootstrap](https://getbootstrap.com/)
- [Unsplash](https://unsplash.com/) for sample images

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.