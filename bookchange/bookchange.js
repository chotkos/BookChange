Books = new Mongo.Collection("books");
LangDict = new Mongo.Collection("langs");

if (Meteor.isClient) {
    Meteor.subscribe("books");
    Meteor.subscribe("langs");

    Session.set("activeMenu", "contactClass");
    var localStorageLang = localStorage.getItem("bclang");
    if (!localStorageLang) {
        Session.set("language", "en");
        localStorage.setItem("bclang", "en");
    } else {
        Session.set("language", localStorageLang);
    }

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
