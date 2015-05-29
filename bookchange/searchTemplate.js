if (Meteor.isClient) {
    Session.set("searchCriteria", {});
    Template.searchTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "searchClass");
        },
        allBooks: function () {
            return Books.find(Session.get("searchCriteria")).fetch();
        }
    });


    Template.searchTemplate.events({
        'submit form': function (event) {
            event.preventDefault();
            var texts = event.target.bookname.value.toLowerCase().split(' ');
            if (texts && texts[0] != "") {
                Session.set("searchCriteria", {
                    tags: {
                        $all: texts
                    }
                });
            } else {
                Session.set("searchCriteria", {});
            }
            return false;
        }
    });
}
