if (Meteor.isClient) {
    Template.searchTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "searchClass");
        }
    });

    /*
        Template.searchTemplate.events({
            'click button': function () {
                //search this
            }
        });*/
}
