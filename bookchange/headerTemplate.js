if (Meteor.isClient) {
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


    Template.headerTemplate.events({
        'click .find': function (event) {
            event.preventDefault();
            Session.set("activeMenu", "searchClass");
            return false;
        },
        'click .all': function (event) {
            event.preventDefault();
            Session.set("activeMenu", "allClass");
            return false;
        },
        'click .my': function (event) {
            event.preventDefault();
            Session.set("activeMenu", "myClass");
            return false;
        },
        'click .contact': function (event) {
            event.preventDefault();
            Session.set("activeMenu", "contactClass");
            return false;
        },
        'click .en': function (event) {
            event.preventDefault();
            Session.set("language", "en");
            return false;
        },
        'click .pl': function (event) {
            event.preventDefault();
            Session.set("language", "pl");
            return false;
        },
    });

}
