function cvPageDirective () {
  return {
      restrict: 'A',
      template: require('./cvPage.html'),
      scope: {
        sections: '='
      }
  };
}

export default cvPageDirective;