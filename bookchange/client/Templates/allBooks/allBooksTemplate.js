if (Meteor.isClient) {
    Template.allBooksTemplate.helpers({
        isActive: function () {
            return (Session.get("activeMenu") === "allClass");
        },
        allBooks: function () {
            return Books.find({}, {
                sort: {
                    downloads: -1
                }
            }).fetch();
        }
    });
}
