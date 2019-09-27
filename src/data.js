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
  ]
}