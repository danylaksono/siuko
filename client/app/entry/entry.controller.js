'use strict';

(function(){

class EntryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('siukoApp')
  .component('entry', {
    templateUrl: 'app/entry/entry.html',
    controller: EntryComponent,
    controllerAs: 'entryCtrl'
  });

})();
