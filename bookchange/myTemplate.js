if (Meteor.isClient) {
    Session.set("isError", false);
    var createBook = function (description, title, author, link, tags) {
        if (description && title && author && link && tags && link.substr(link.length - 4) === ".pdf", tags.length > 0) {
            Books.insert({
                description: description,
                title: title,
                author: author,
                link: link,
                tags: tags,
                reportants: [],
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
        },
        myBooks: function () {
            return Books.find({
                userId: Meteor.userId()
            }).fetch();
        },
    });

    Template.myTemplate.events({
        'submit form': function (event) {
            event.preventDefault();
            Session.set("isError", false);

            var title = event.target.title.value;
            var author = event.target.author.value;
            var description = event.target.dsc.value;
            var link = event.target.link.value;
            //TODO REFACTOR FOR MANY SEPARATORS BY REGEX!
            var regex = '/[ ,]+/';
            var tags = event.target.tags.value.toLowerCase().split(regex);

            var titleSplitted = title.toLowerCase().split(regex);
            var authorsSplitted = author.toLowerCase().split(regex);
            tags = tags.concat(titleSplitted);
            tags = tags.concat(authorsSplitted);

            createBook(description, title, author, link, tags);
            return false;
        }
    });
}
