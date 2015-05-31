if (Meteor.isClient) {
    Template.languageDictionaryValue.helpers({
        result: function () {
            var x = LangDict.find({
                language: Session.get("language"),
                key: this.key
            }).fetch();
            if (x.length > 0) {
                return x[0].value
            } else {
                return this.key;
            }
        }
    });

    var dictValueCreator = function (lang, key, val) {
        return {
            language: lang,
            key: key,
            value: val,
        };
    };

    var texts = [dictValueCreator("pl", "Contact us!", "Poznaj nas"),
                     dictValueCreator("pl", "All books", "Wszystkie książki"),
                     dictValueCreator("pl", "This website was created only for educational purposes. All the files are not stored on the server.", "Ta strona została stworzona tylko w celach edukacyjnych. Pliki nie są przechowywanie na serwerze"),
                     dictValueCreator("pl", "Book that get more than 5 reports will be removed!", "Książki które zostaną zreportowane ponad 5 razy zostaną usunięte"),
                     dictValueCreator("pl", "See project GitHub", "Zobacz projekt na GitHubie"),
                     dictValueCreator("pl", "Search", "Szukaj"),
                     dictValueCreator("pl", "My books", "Moje książki"),
                     dictValueCreator("pl", "About", "O portalu"),
                     dictValueCreator("pl", "Add a book", "Dodaj książkę"),
                     dictValueCreator("pl", "Title:", "Tytuł"),
                     dictValueCreator("pl", "Author:", "Autor:"),
                     dictValueCreator("pl", "Description:", "Wszystkie książki"),
                     dictValueCreator("pl", "Link to PDF:", "Wszystkie książki"),
                     dictValueCreator("pl", "Tags:", "Wszystkie książki"),
                     dictValueCreator("pl", "Add to library", "Wszystkie książki"),
            ];
    if (LangDict.find({}).fetch().length < texts.length) {
        //LangDict.remove({}); cant on client side
        _.each(texts, function (doc) {
            LangDict.insert(doc);
        });
    }

}
