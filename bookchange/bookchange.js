Books = new Mongo.Collection("books");
LangDict = new Mongo.Collection("langs");

if (Meteor.isClient) {
    Meteor.subscribe("books");
    Meteor.subscribe("langs");

    Session.set("activeMenu", "contactClass");
    if (!Session.get("language"))
        Session.set("language", "en");

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.publish("books", function () {
        return Books.find();
    });
    Meteor.publish("langs", function () {
        return LangDict.find();
    });
}
