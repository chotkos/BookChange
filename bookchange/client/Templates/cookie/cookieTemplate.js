if (Meteor.isClient) {
    Template.cookieTemplate.helpers({
        isCookieTemplateVisible: function () {
            var x = Session.get("cookieTemplateVisible")
            return x != undefined ? x : true;
        }
    });

    Template.cookieTemplate.events({
        'click button': function (event) {
            event.preventDefault();
            Session.set("cookieTemplateVisible", false);
            return false;
        }
    });


}
