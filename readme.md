
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>my-portfolio-tailwind
</h1>
<h3>◦ Building your portfolio with speed and style.</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />

<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/presylord/my-portfolio-tailwind?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/presylord/my-portfolio-tailwind?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/presylord/my-portfolio-tailwind?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/presylord/my-portfolio-tailwind?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a web-based portfolio created by PresyLord, a web developer. It showcases their skills, work experience, projects, and allows visitors to contact them via a contact form. The portfolio serves as a central hub for PresyLord to demonstrate their capabilities, highlight their achievements, and attract potential clients or employers. The clean and organized design, along with the interactive components, enhances the user experience and effectively communicates PresyLord's expertise in web development.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a component-based architecture using React. It utilizes reusable components to create the structure of the web application, including navigation, sections, forms, modal, and projects. The components are organized into separate files within the `src/components` directory. |
| **📖 Documentation**   | The repository lacks explicit project documentation, but it provides clear file descriptions in the repository summary. However, there is no comprehensive documentation for the component interfaces and usage instructions.   |
| **🔗 Dependencies**    | The codebase relies on several dependencies, including React, Tailwind CSS, EmailJS, and various React component libraries like react-vertical-timeline-component and toast. These dependencies enhance the project's functionality and user experience.   |
| **🧩 Modularity**      | The codebase demonstrates modularity by organizing code into reusable components that follow the Single Responsibility Principle. This modular design allows for easy maintenance and extensibility.  |
| **✔️ Testing**          | The codebase does not include any tests. The lack of testing frameworks and strategies limits the ability to ensure code correctness and stability. Proper testing implementation should be considered to improve code quality. |
| **⚡️ Performance**      | Without explicit performance optimization implementation, it is challenging to assess the performance of the system. However, the use of a modern framework like React and optimized libraries like Tailwind CSS suggests favorable performance in terms of speed and efficiency. |
| **🔐 Security**        | The codebase does not explicitly address security measures. Given the nature of a static portfolio website, security is not a primary concern. However, ensuring proper data handling and secure dependencies is crucial. |
| **🔀 Version Control** | Git is used as the version control system for the project. The repository follows a centralized workflow using branches and pull requests, enabling collaboration and code snapshots. Feature branches, commit history, and branching strategies should be considered to enhance the development process. |
| **🔌 Integrations**    | The codebase includes integrations with external libraries like EmailJS and Tailwind CSS for additional functionality and styling. It relies on npm packages for managing dependencies seamlessly, enhancing the development process. |
| **📶 Scalability**     | The codebase demonstrates good potential for scalability due to its modular component-based architecture. The React framework and separation of concerns into reusable components offer flexibility and scalability to accommodate future changes and additions. |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [.eslintrc.cjs](https://github.com/presylord/my-portfolio-tailwind/blob/main/.eslintrc.cjs)              | This code snippet exports an object that configures ESLint and the React plugin for a web browser environment.The'extends' property specifies the recommended ESLint and React rules.The'parserOptions' property defines the ECMAScript version and source type.The'settings' property sets the React version.The'plugins' property includes the'react-refresh' plugin.The'rules' property enables the'only-export-components' rule.                                                                                               |
| [index.html](https://github.com/presylord/my-portfolio-tailwind/blob/main/index.html)                    | This code snippet is an HTML document that serves as the foundation for PresyLord's portfolio website. It imports a font, sets the page viewport, and includes a root div element where content will be rendered. It also includes a script tag that loads the main JavaScript file responsible for the website's functionality.                                                                                                                                                                                                   |
| [postcss.config.js](https://github.com/presylord/my-portfolio-tailwind/blob/main/postcss.config.js)      | The provided code snippet defines plugins for tailwindcss and autoprefixer, which are both used for processing CSS styles.                                                                                                                                                                                                                                                                                                                                                                                                         |
| [tailwind.config.js](https://github.com/presylord/my-portfolio-tailwind/blob/main/tailwind.config.js)    | This code exports a default object which represents the Tailwind CSS configuration. It specifies the content files to be processed for styles (HTML, JS, TS, JSX, TSX). It also allows extending the default theme, and defines any additional plugins to be used.                                                                                                                                                                                                                                                                 |
| [vite.config.js](https://github.com/presylord/my-portfolio-tailwind/blob/main/vite.config.js)            | The provided code snippet is a Vite project configuration file. It imports the `defineConfig` function from the'vite' package and the `react` plugin from the'@vitejs/plugin-react' package. It then exports a configuration object that includes the `react` plugin in the `plugins` array. This configuration allows for the bundling and transformation of React code in a Vite project.                                                                                                                                        |
| [App.css](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\App.css)                      | The code snippet is a class that manages tasks with a priority queue. It allows adding tasks with a priority, removing the task with the highest priority, checking if the queue is empty, and getting the size of the queue.                                                                                                                                                                                                                                                                                                      |
| [App.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\App.jsx)                      | The provided code snippet sets up the main App component which renders a series of imported components, including Navbar, Home, About, Skills, Work, Projects, and Contact. This creates the structure for a web application, allowing for navigation and content display.                                                                                                                                                                                                                                                         |
| [index.css](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\index.css)                  | This code snippet applies tailwind CSS classes and styles to various elements in order to achieve desired visual effects such as cursor style, background gradients, and text styling. It also includes specific rules for navigation menu and a height constraint for the resume viewer element.                                                                                                                                                                                                                                  |
| [main.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\main.jsx)                    | This code snippet creates a ReactDOM root for rendering a React application. It uses React's strict mode which performs additional checks during development. The App component is rendered within the root element specified in the HTML. The associated index.css file is also imported.                                                                                                                                                                                                                                         |
| [About.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\About.jsx)       | This code snippet defines a functional component "About" that renders a section on a web page. It includes a heading and a description about a web developer. The component uses CSS styles for layout and customization.                                                                                                                                                                                                                                                                                                          |
| [Contact.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Contact.jsx)   | The code snippet is a React component for a contact form. It utilizes the EmailJS library to send form data as an email. When the form is submitted, the sendEmail function is called. It sends the form data using the credentials specified for the EmailJS service. If the email is sent successfully, a success message is displayed using the toast library. If there is an error, an error message is displayed. The form fields include Name, Email, and Message, and a "Contact Me" button is provided to submit the form. |
| [Home.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Home.jsx)         | The provided code snippet is a functional component called Home. It renders a section with a background color and a specific height. Inside the section, it contains a container with a maximum width. The container includes a heading with the name "Presy Lord" and a subheading that uses React Type Animation to display a series of text with animation. Additionally, there is a button with a link to a section called "projects" that includes an arrow icon for visual appeal.                                           |
| [Modal.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Modal.jsx)       | The code snippet provides a Modal component that takes in props for isOpen (to control visibility), onClose (to handle closing the modal), and resumePath (to render a resume as an iframe). It uses conditional rendering and CSS classes to show or hide the modal and its backdrop. The modal includes a header, a close button, and renders the resume within its content/body section.                                                                                                                                        |
| [Navbar.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Navbar.jsx)     | The code snippet represents a functional Navbar component in a React application. It includes a responsive mobile menu with hamburger icon, navigation links, and social icons. The component also handles the opening and closing of a modal when the Resume social icon is clicked.                                                                                                                                                                                                                                              |
| [Projects.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Projects.jsx) | The provided code snippet is a React component that renders a projects section. It includes a list of project objects with properties such as name, image, description, skills, github link, and demo link. Each project is represented by a card with its image as the background and displays the name, description, skills, and buttons for the demo and code.                                                                                                                                                                  |
| [Skills.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Skills.jsx)     | The provided code snippet is rendering a Skills component that displays a list of skill logos and their corresponding names. It imports various skill logos from image assets and defines an array of objects containing the skill names and images. The component then maps over the skill logos array to render each logo and name as a separate div.                                                                                                                                                                            |
| [Work.jsx](https://github.com/presylord/my-portfolio-tailwind/blob/main/src\components\Work.jsx)         | This code is a component in a React application that displays a vertical timeline of work experience. It uses the "react-vertical-timeline-component" library and custom styling. The timeline elements include information such as the year, job title, company, and details. The icons "FaHardHat" and "FaLaptopCode" represent different types of work.                                                                                                                                                                         |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the my-portfolio-tailwind repository:
```sh
git clone https://github.com/presylord/my-portfolio-tailwind
```

2. Change to the project directory:
```sh
cd my-portfolio-tailwind
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using my-portfolio-tailwind

```sh
node app.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
