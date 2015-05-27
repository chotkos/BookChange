if (Meteor.isClient) {
    Session.set("activeMenu", "searchClass");

    Template.headerTemplate.helpers({
        searchClass: function () {
            return Session.get("activeMenu") == "searchClass" ? "active" : "";
        },
        myClass: function () {
            return Session.get("activeMenu") == "myClass" ? "active" : "";
        },
        contactClass: function () {
            return Session.get("activeMenu") == "contactClass" ? "active" : "";
        },
        allClass: function () {
            return Session.get("activeMenu") == "allClass" ? "active" : "";
        },
    });



}
