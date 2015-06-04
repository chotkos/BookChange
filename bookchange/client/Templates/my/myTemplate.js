if (Meteor.isClient) {
    Session.set("isError", false);
    Session.set("justAdded", false);

    var createBook = function (description, title, author, link, tags) {
        if (description.length > 0 && title.length > 0 && author.length > 0 && link.length > 0 && tags.length > 0 && link.substr(link.length - 4) === ".pdf" && tags.length > 0) {
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
            Session.set("justAdded", true);
            Session.set("isError", false);

        } else {
            //wyświetl warning
            Session.set("justAdded", false);
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
        justAdded: function () {
            return Session.get("justAdded");
        },
        myBooks: function () {
            return Books.find({
                userId: Meteor.userId()
            }, {
                sort: {
                    warnings: -1
                }
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
            var tags = event.target.tags.value.toLowerCase().split(/[\s,\s(\s)\s.\s?]+/);

            var titleSplitted = title.toLowerCase().split(/[\s,\s(\s)\s.\s?]+/);
            var authorsSplitted = author.toLowerCase().split(/[\s,\s(\s)\s.\s?]+/);
            tags = tags.concat(titleSplitted);
            tags = tags.concat(authorsSplitted);

            createBook(description, title, author, link, tags);
            return false;
        }
    });
}
