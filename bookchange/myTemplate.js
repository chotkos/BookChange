if (Meteor.isClient) {
    Template.myTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "myClass");
        }
    });

    /*
        Template.myTemplate.events({
            'click button': function () {
                //search this
            }
        });*/
}
