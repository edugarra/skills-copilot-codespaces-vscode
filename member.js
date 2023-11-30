function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/menber.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}