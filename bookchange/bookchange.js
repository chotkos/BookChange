Books = new Mongo.Collection("books");

if (Meteor.isClient) {
    Meteor.subscribe("books");
    Session.set("activeMenu", "searchClass");
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.publish("books", function () {
        return Books.find();
    });
}
