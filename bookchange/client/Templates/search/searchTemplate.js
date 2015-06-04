if (Meteor.isClient) {
    Session.set("searchCriteria", {});
    Template.searchTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "searchClass");
        },
        allBooks: function () {
            return Books.find(Session.get("searchCriteria"), {
                sort: {
                    downloads: -1
                }
            }).fetch();
        }
    });


    Template.searchTemplate.events({
        'submit form': function (event) {
            event.preventDefault();
            var texts = event.target.bookname.value.toLowerCase().split(/[\s,\s(\s)\s.\s?]+/);
            if (texts && texts[0] != "") {
                Session.set("searchCriteria", {
                    tags: {
                        $in: texts
                    }
                });
            } else {
                Session.set("searchCriteria", {});
            }
            return false;
        }
    });
}
