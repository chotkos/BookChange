Books = new Mongo.Collection("books");
LangDict = new Mongo.Collection("langs");

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

}
