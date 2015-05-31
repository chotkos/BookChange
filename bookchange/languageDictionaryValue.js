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

    if (LangDict.find({}).fetch().length === 0) {
        var texts = [dictValueCreator("pl", "Contact us!", "Poznaj nas")];
        _.each(names, function (doc) {
            LangDict.insert(doc);
        })
    }

}
