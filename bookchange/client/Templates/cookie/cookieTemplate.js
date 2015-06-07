if (Meteor.isClient) {
    Template.cookieTemplate.helpers({
        isCookieTemplateVisible: function () {
            var x = localStorage.getItem("cookieTemplateVisible")
            if (x === "false") {
                Session.set("cookieTemplateVisible", false);
            } else {
                Session.set("cookieTemplateVisible", true);
            }
            return Session.get("cookieTemplateVisible");
        }
    });

    Template.cookieTemplate.events({
        'click button': function (event) {
            event.preventDefault();
            localStorage.setItem("cookieTemplateVisible", false);
            Session.set("cookieTemplateVisible", false);
            return false;
        }
    });


}
