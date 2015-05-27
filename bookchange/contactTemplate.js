if (Meteor.isClient) {
    Template.contactTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "contactClass");
        }
    });

    /*
        Template.contactTemplate.events({
            'click button': function () {
                //search this
            }
        });*/
}
