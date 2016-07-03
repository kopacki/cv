function tuple(label, ...names) {
  return { label: label, names: names };
}

const value = {
  firstName: tuple('First name', 'Tomasz'),
  lastName: tuple('Last name', 'Kopacki'),
  address: tuple('Address', 'ul. Wrocławska 10'),
  email: tuple('E-mail', 'tomasz@kopacki.net'),
  phone: tuple('Phone no.', '+48 601 47 35 35'),
  birthDay: tuple('Birth day', '06.05.1991'),
  education: [
    tuple('2014 – 2015', 'Master\'s degree at Wrocław University of Technology, Faculty of Computer Science and Management, Computer Science (final grade: B+)'),
    tuple('2010 – 2014', 'Engineer\'s degree at Wrocław University of Technology, Faculty of Computer Science and Management, Computer Science (final grade: B+)'),
    tuple('2007 – 2010', 'Tadeusz Kościuszko 1st Secondary School in Wieluń, major subjects maths & physics')
  ],
  experience: [
    tuple('2015.09 – till now', 'Front-end Developer at Micazook (Design and development web application using UXPin, WCAG 2.0 AA, AngularJS, HTML5, SCSS, Gulp, NPM, Browserify, unit tests.)'),
    tuple('2014.05 – 2015.08', 'UI Developer at Cube.ITG (TypeScript, jQuery UI, Kendo UI, .NET MVC)'),
    tuple('2013.07 – 2014.04', 'Software Developer and Designer at Volvo IT (AngularJS, Backbone Marionette, jQuery Mobile)'),
    tuple('2013 – 2014', '#academic: developing server-side applications (Ruby on Rails, Postrgresql) '),
    tuple('2011 – 2013', 'Creating advanced web applications (php, mysql, apache) as a freelancer', '#academic: creating Java desktop applications'),
    tuple('2008 – 2011', 'Creating basic web applications (php, mysql, apache) as a freelancer'),
    tuple('2006 – 2008', 'Creating web layouts from psd projects (xhtml, css2, js) as a freelancer')
  ],
  foreignLanguages: [
    tuple('English', 'Good both speech and writing'),
    tuple('German', 'Basic'),
    tuple('Polish', 'Native')
  ],
  additionalCourses: [
    tuple('Driving license', 'Category B')
  ],
  knowledgeAndSkills: [
    tuple('Client-side technologies',
      'Javascript, HTML 5, CSS 3, TypeScript',
      'React, Redux, KnockoutJS, AngularJS, Backbone Marionette',
      'jQuery/jQuery Mobile/jQuery UI, Kendo UI',
      'Tape, Testling, Karma, Jasmine',
      'Webpack, Babel',
      'Twitter Bootstrap, Foundation'),
    tuple('Server-side technologies',
      'NodeJS/Express.js',
      'C#, .NET MVC',
      'Ruby, Ruby on Rails',
      'PHP'),
    tuple('Version control',
    'GIT',
      'TFS',
      'SVN'),
    tuple('Related to web development',
      'Accessibility (AA compliance)',
      'Functional Programming',
      'Desing Patterns',
      'Data structures',
      'RESTful services',
      'Databeses (mySQL, Postrgresql, Oracle, NoSQL)'),
    tuple('Office software',
      'Microsoft Office (Word, Excel, Outlook, PowerPoint, Lync)'),
    tuple('Work tools',
      'Atom, Visual Studio, Webstorm, Sublime Text',
      'NPM, Bower, Gulp, UXPin, Invision',
      'Wave, NVDA'),
    tuple('Team work',
      'SCRUM'),
    tuple('Others',
      'Finding simpler way to get the goal')
  ],
  hobby: [
    'learning modern web technologies (mostly of front-end stack)',
    'sport all of kind (actively football, volleyball, basketball, swimming and running)',
    'meeting new people',
    'having fun with friends',
    'listening to radio music',
    'dancing',
    'cooking'
  ]
};

export default value;
