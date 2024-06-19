function skillsMember(){
    return{
        restritct: 'E',
        templateUrl: 'modules/skills/views/skillsMember.html',
        controller: 'skillsMemberController',
        controllerAs: 'vn',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}