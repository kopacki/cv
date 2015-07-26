function cvPageDirective () {
  return {
      restrict: 'A',
      template: require('./cvPage.html'),
      scope: {
        sections: '='
      },
      link: (scope) => {
        let locals = scope.$root.locals;

        scope.title = locals.pageTitle;
        scope.note = locals.footerNote;
      }
  };
}

export default cvPageDirective;