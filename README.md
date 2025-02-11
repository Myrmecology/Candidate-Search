# React + TypeScript + Vite

# CANDIDATE SEARCH 

This is a candidate search application that calls the GitHub API and renders data in the browser. With this application you can browse GitHub developers and see their profile on GitHub. 

### Features:
- Search for candidates on GitHub.
- View candidate details such as name, username, location, avatar, email, company, and more.
- Save candidates to a potential candidate list.
- Persist the list of potential candidates using local storage.
- Display messages when no candidates are available or when no potential candidates are saved.
- A smooth user interface with navigation to view individual candidates and the saved list.

### Bonus:
- Sorting and filtering of potential candidates.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For better type safety and code maintainability.
- **GitHub API**: For retrieving candidate profiles.
- **Vite**: As the build tool and development server.
- **Render**: For deployment.
- **Local Storage**: For persisting the list of saved candidates.

## Getting Started

### Prerequisites

Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Vite](https://vitejs.dev/)
- [GitHub Personal Access Token](https://github.com/settings/tokens)

### Setting Up the Project

1. **Clone the Repository**:

   
   git clone https://github.com/Myrmecology/Candidate-Search.git
   - cd candidate-search

   - Install Dependencies:

- Run the following command to install the necessary dependencies:

- npm install

- Create a .env file:

- In the root of your project, create a .env file and add your GitHub personal access token like this:

- VITE_GITHUB_TOKEN=your-personal-access-token

- Run the Development Server:

- Start the development server with:

- npm run dev

- Your application should now be running at http://localhost:3000.

- Deployment
To deploy the application to Render:

Create an account on Render.
Create a new web service and connect your GitHub repository.
Set up environment variables on Render by adding VITE_GITHUB_TOKEN with your GitHub personal access token.
Deploy the application.

- Usage
Upon loading, the application will display the first candidate’s profile.
You can click the "+" button to save a candidate to the potential candidates list.
The "-" button allows you to skip a candidate and move to the next one.
The potential candidates page shows a list of all saved candidates. You can also remove candidates from the list here.

- Local Storage
The list of saved candidates is persisted in local storage, so the list will remain available even after a page reload.

- User Story
AS AN employer
I WANT a candidate search application
SO THAT I can hire the best candidates

- Acceptance Criteria
Display candidate profile information (name, username, location, avatar, email, company, etc.).
Allow saving and removing candidates from the list of potential candidates.
Ensure the list persists even when the page is reloaded.
Display appropriate messages when no candidates are available or saved.

- Screenshots
Example of the candidate search page showing candidate information.

Example of the potential candidates page showing a list of saved candidates.

- Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

- How to Contribute:
Fork the repository.
Clone your fork to your local machine.
Create a new branch for your changes.
Make your changes and commit them.
Push your changes to your fork.
Open a pull request on GitHub.

- License
This project is licensed under the MIT License (Massachusetts Institute of Technology License) - see the LICENSE file for details.

- Acknowledgments
GitHub API Documentation
Render Documentation
Vite Documentation

Happy coding
- https://github.com/Myrmecology

- 
## This next section is from the starter code that was provided for this project ##
## # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.