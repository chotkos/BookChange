if (Meteor.isServer) {

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
                     dictValueCreator("pl", "Description:", "Opis"),
                     dictValueCreator("pl", "Link to PDF:", "Link do PDFa"),
                     dictValueCreator("pl", "Tags:", "Tagi"),
                     dictValueCreator("pl", "Add to library", "Dodaj do biblioteki"),
                     dictValueCreator("pl", "Enter tags separated by spaces", "Wpisz tagi oddzielne spacjami"),
                     dictValueCreator("pl", "Enter link", "Podaj link"),
                     dictValueCreator("pl", "Enter description", "Podaj opis"),
                     dictValueCreator("pl", "Enter author", "Podaj autora"),
                     dictValueCreator("pl", "Enter title", "Podaj tytuł"),
                     dictValueCreator("pl", "All fields should be filled and file address should and on .pdf!", "Wszystkie pola powinny być uzupełnione a adres pliku kończyć się na .pdf !"),
                     dictValueCreator("pl", "Book has been added!", "Książka została dodana!"),
                     dictValueCreator("pl", "Find a book", "Znajdź książkę"),
                     dictValueCreator("pl", "I understand", "Rozumiem"),
                     dictValueCreator("pl", "Download", "Pobierz"),
                     dictValueCreator("pl", "Remove", "Usuń"),
                     dictValueCreator("pl", "Report", "Reportuj"),
                     dictValueCreator("pl", "This website uses Cookies! You are accepting storing some necessary data on your pc when using this website!", "Ta strona wykorzystuje ciasteczka! Używając jej akceptujesz przechowywanie niezbędnych do pracy danych na swoim komputerze!"),

            ];

    if (LangDict.find({}).fetch().length != texts.length) {
        LangDict.remove({}); //cant on client side
        _.each(texts, function (doc) {
            LangDict.insert(doc);
        });
    }
}
