export const unit1Objectives = {
  header: 'Unit 1 - WEB Fundamentals',
  initialState: {
    mvp: 0,
    team: 0,
    html: 0,
    responsive: 0,
    preprocessing: 0,
    javascript: 0,
  },
  data: [
    {
      title: 'MVP',
      description: 'MVP work - Project should incorporate all of the listed MVP features',
      one: 'Student did not achieve all of the MVP features of the project',
      two: 'Student work demonstrates that all MVP features were built',
      three: 'Student\'s work demonstrates that all MVP features build and the student went above and beyond the project.',
    },
    {
      title: 'Team Contribution',
      description: 'Team Contribution',
      one: 'Participated by contributing but didn\'t communicate changes or updates.',
      two: 'Communicated changes to team, performed proper git merges and pull requests to get code to the codebase.',
      three: 'Pair programmed with the Front End Architect',
    },
    {
      title: 'HTML/CSS',
      description: 'HTML/CSS',
      one: 'Student did not match the layout design, there are visible user interface inconsistencies across the project.',
      two: 'Student laid out the design that matches the example well.  CSS fundamentals such as: box model, flexbox, and positioning were used appropriately.',
      three: 'Student\'s code is clean and organized, proper indentation is apparent, a library or framework was researched and used.',
    },
    {
      title: 'Responsiveness',
      description: 'Responsiveness',
      one: 'Site is not very responsive, horizontal scroll bars are visible throughout the app, desktop view does not respond to a mobile view of 500px or below',
      two: 'Phone views look professional at 500px and below and Desktop views look prefessional at 1000px and above.  No horizontal scrollbars exist.',
      three: 'Tablet views look professional at 800px and above.  Responsive units are used for font-sizing.',
    },
    {
      title: 'Preprocessing',
      description: 'Preprocessing',
      one: 'Student doe not have any less files or less is not compiled to CSS',
      two: 'Student has appropriate less files, has used variables and mixins appropriately, has nested styles appropriately and has imported their files into index.less in the correct order.',
      three: 'Student\'s code is easy to read, they have used different less files for different portions of the site and they have imported them successfully into the index.less file, student uses mixins and variables, student has used escaping for media queries.  student writes DRY code and as used reusable parametric mixins with parameter names that make sense.',
    },
    {
      title: 'JavaScript',
      description: 'JavaScript Fundamentals',
      one: 'Does not answer all MVP Questions',
      two: 'Answers all Questions and pass all MVP Tests in the CodeSandbox',
      three: 'Completes at least 1 Stretch Question and the test passes in CodeSandBox',
    },
  ],
};

export const unit2Objectives = {
  header: 'Unit 2 - Web Applications 1',
  initialState: {
    mvp: 0,
    team: 0,
    applied: 0,
    react: 0,
    spa: 0,
  },
  data: [
    {
      title: 'MVP',
      description: 'MVP work - Project should incorporate all of the listed MVP features',
      one: 'Student did not achieve all of the MVP features of the project',
      two: 'Student work demonstrates that all MVP features were built',
      three: 'Student\'s work demonstrates that all MVP features build and the student went above and beyond the project.',
    },
    {
      title: 'Team Work Score',
      description: 'Team Work Score',
      one: 'Little to no contributions were made by this team member.',
      two: 'Team member was collaborative, able to work in a team environment',
      three: 'Pair programmed with the Web UI and Back end Architect',
    },
    {
      title: 'Applied JavaScript',
      description: 'Sprint 1-Applied JavaScript',
      one: 'Student used little to no event handlers in the application.',
      two: 'Student created functional components and used events in application to add dynamic functionality to app.',
      three: 'Student incorporated a third party event/animation library like unto Greensock, Anime, React-motion etc.',
    },
    {
      title: 'Intro to React',
      description: 'Sprint 2-Intro To React',
      one: 'Student failed to create a dynamically rendered react application.',
      two: 'Student\'s code was organized at the component level, proper usage of state and poros are demonstrated throughout the project, the UI is composed of small, reusable components, proper usage of useState and useEffect hooks are clearly incorperated and correctly implemented.',
      three: 'Student incorporated a third party state management system like React.Context API, Redux, or Mob-x etc.',
    },
    {
      title: 'SPA',
      description: 'Sprint 3-SPA',
      one: 'React router was not used, no use of network calls including the usage of Axios or the fetch API are found within the application',
      two: 'Student implemented Read operations using either Axios or Fetch to display 3rd party data on page.  Route management properly installed and used to show top level pages as well as nested views where necessary.  Data displayed on page is properly laid out in a modern easy to interperate fashion.  Seemless integration of UI static landing page now incorporated.',
      three: 'Not only are standard network requesting techniques employed, the code is organized in such a fashion that the student demonstrated proper use of container vs presentational components or other industry standards, conventions or patterns.',
    },
  ],
};

export const unit3Objectives = {
  header: 'Unit 3 - Web Applications 2',
  initialState: {
    mvp: 0,
    team: 0,
    reactFundamentals: 0,
    spaAjax: 0,
    state: 0,
  },
  data: [
    {
      title: 'MVP',
      description: 'MVP work - Project should incorporate all of the listed MVP features',
      one: 'Student did not achieve all of the MVP features of the project',
      two: 'Student work demonstrates that all MVP features were built',
      three: 'Student\'s work demonstrates that all MVP features build and the student went above and beyond the project.',
    },
    {
      title: 'Team Contribution',
      description: 'Team Contribution',
      one: 'Little to no contributions were made by this team member.',
      two: 'Team member was collaborative, able to work in a team environment',
      three: 'Pair programmed with the Web UI and Back end Architect',
    },
    {
      title: 'React Fundamentals',
      description: 'React Fundamentals',
      one: 'Student failed to create a dynamically rendered react application.',
      two: 'Student created a react application, built out functional and class components and used Array methods to dynamically render HTML elements.',
      three: 'Code is organized in a clean compartmentalized manner. It is easy to discern what components make up what pieces of the application.',
    },
    {
      title: 'SPA - AJAX',
      description: 'SPA - AJAX',
      one: 'React router was not used, complete CRUD operations are not found throughout the application',
      two: 'Student was able to build a full-functional SPA using React-router. CRUD operations drive the application.',
      three: 'Seemless integration of UI static landing page now incorporated. Demonstrated proper use of container vs presentational components.',
    },
    {
      title: 'State',
      description: 'State Management',
      one: 'The state management system has either not been implemented, or is incoherent',
      two: 'Student has implemented a state management system that makes sense for the project. It is organized well and implemented correctly',
      three: 'Student showed the ability to manage state in a very coherent system at all levels of the app - global state management, component tree state management, and individual component management. The system is easy to understand and use. Student may have also architected it in such a way that it is reusable for a lot of the state management needs of the app.',
    },
  ],
};

export const unit4NodeObjectives = {
  header: 'Unit 4 - Web API: Node',
  initialState: {
    mvp: 0,
    team: 0,
    reactFundamentals: 0,
    spaAjax: 0,
    state: 0,
  },
  data: [
    {
      title: 'MVP',
      description: 'MVP work - Project should incorporate all of the listed MVP features',
      one: 'Student did not achieve all of the MVP features of the project',
      two: 'Student work demonstrates that all MVP features were built',
      three: 'Student\'s work demonstrates that all MVP features build and the student went above and beyond the project.',
    },
    {
      title: 'Team Contribution',
      description: 'Team Contribution',
      one: 'Little to no contributions were made by this team member.',
      two: 'Team member was collaborative, able to work in a team environment',
      three: 'Pair programmed with the Web UI and Back end Architect',
    },
    {
      title: 'Sprint 1',
      description: 'Build a Web API',
      one: 'Student did not build a Web API with all of the required endpoints, or the endpoints that exist don\'t work',
      two: 'Student built a Web API following the REST architectural pattern wit code that is clean and organized using Express Routers.',
      three: 'Student used incorporated middleware for code reuse and deployed the API to a hosting platform. The API is configured to dynamically load configuration and secrets using environment variables',
    },
    {
      title: 'Sprint 2',
      description: 'Adding Data Persistence',
      one: 'Student did not add data persistence',
      two: 'Student added data persistence with a normalized data model that ensures data integrity and consistency.',
      three: 'Student migrated from SQLite to use a server RDBMS, like Postgres or MySQL and incorporated Knex migration and or seeding scripts to their solution.',
    },
    {
      title: 'Sprint 3',
      description: 'Authentication and Testing',
      one: 'Student did not add a way to authenticate users and restrict access to endpoints or the solution lacks automated testing',
      two: 'Student added authentication and automated unit tests for core business logic',
      three: 'Student added authorization and the project has end to end tests using a test database.',
    },
  ],
};

export const unit4JavaObjectives = {
  header: 'Unit 4 - Web API: Java',
  initialState: {
    mvp: 0,
    team: 0,
    reactFundamentals: 0,
    spaAjax: 0,
    state: 0,
  },
  data: [
    {
      title: 'MVP',
      description: 'MVP work - Project should incorporate all of the listed MVP features',
      one: 'Student did not achieve all of the MVP features of the project',
      two: 'Student work demonstrates that all MVP features were built',
      three: 'Student\'s work demonstrates that all MVP features build and the student went above and beyond the project.',
    },
    {
      title: 'Team Contribution',
      description: 'Team Contribution',
      one: 'Little to no contributions were made by this team member.',
      two: 'Team member was collaborative, able to work in a team environment',
      three: 'Pair programmed with the Web UI and Back end Architect',
    },
    {
      title: 'Sprint 2 - APIs',
      description: 'Sprint 2 - APIs',
      one: 'Student did not build a Web API with all of the required endpoints, or the endpoints that exist don\'t work',
      two: 'Student built a Web API following the REST architectural pattern with code that is clean and organized using the Spring Framework.',
      three: 'Student incorporated services interfaces and appropriate repositories for code reuse and deployed the API to a hosting platform. The API is configured to dynamically load configuration and secrets using environment variables',
    },
    {
      title: 'Sprint 2 RDBMS',
      description: 'Sprint - 2 RDBMS',
      one: 'Student did not add data persistence',
      two: 'Student added data persistence with a normalized data model that ensures data integrity and consistency.',
      three: 'Student migrated from H2 to use a server RDBMS, like Postgres or MySQL and incorporated seeding scripts in their solution.',
    },
    {
      title: 'Sprint 2 & 3',
      description: 'Sprint 2 & 3 Authentication and Testing',
      one: 'Student did not add a way to authenticate users and restrict access to endpoints or the solution lacks automated testing',
      two: 'Student added authentication and automated unit tests for core business logic',
      three: 'Student added authorization and the project has end to end tests using a test database.',
    },
  ],
};