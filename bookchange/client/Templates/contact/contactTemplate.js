if (Meteor.isClient) {
    Template.contactTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "contactClass");
        }
    });
}

