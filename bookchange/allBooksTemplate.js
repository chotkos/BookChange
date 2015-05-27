if (Meteor.isClient) {
    Template.allBooksTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "allClass");
        }
    });
}
