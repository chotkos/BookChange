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
