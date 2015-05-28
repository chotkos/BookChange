if (Meteor.isClient) {
    Template.myBookListItem.events({
        'click #download': function (event) {
            //What_kind_of_magic_shoud_i_use_here()
            this.downloads++;
            Books.update(this._id, {
                $set: {
                    downloads: this.downloads
                }
            });
            var win = window.open(this.link, '_blank');
            win.focus();
        },
        'click #remove': function (event) {
            Books.remove({
                _id: this._id
            });
        },

    });
}
