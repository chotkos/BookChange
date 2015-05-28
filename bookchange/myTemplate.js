if (Meteor.isClient) {
    Session.set("isError", false);
    var createBook = function (description, title, author, link) {
        if (description && title && author && link && link.substr(link.length - 4) === ".pdf") {
            Books.insert({
                description: description,
                title: title,
                author: author,
                link: link,
                userId: Meteor.userId(),
                downloads: 0,
                warnings: 0,
            });
        } else {
            //wyświetl warning
            Session.set("isError", true);
        }
    };

    Template.myTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "myClass");
        },
        isError: function () {
            return Session.get("isError");
        }
    });

    Template.myTemplate.events({
        'submit form': function (event) {
            Session.set("isError", false);
            event.preventDefault();
            var title = event.target.title.value;
            var author = event.target.author.value;
            var description = event.target.dsc.value;
            var link = event.target.link.value;
            createBook(description, title, author, link);
            return false;
        }
    });
}
