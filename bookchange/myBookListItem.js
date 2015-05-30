if (Meteor.isClient) {

    Template.myBookListItem.helpers({
        canRemove: function () {
            return this.userId === Meteor.userId();
        },
        wasNotReportedByUser: function () {
            var res = true;
            for (i = 0; i < this.reportants.length; i++) {
                if (this.reportants[i] === Meteor.userId())
                    res = false;
            }
            return res;
        }
    });

    Template.myBookListItem.events({
        'click #download': function (event) {
            event.preventDefault();
            this.downloads++;
            Books.update(this._id, {
                $set: {
                    downloads: this.downloads
                }
            });
            var win = window.open(this.link, '_blank');
            win.focus();
            return false;
        },
        'click #remove': function (event) {
            event.preventDefault();
            Books.remove({
                _id: this._id
            });
            return false;
        },
        'click #report': function (event) {
            event.preventDefault();
            if (this.warnings + 1 > 5) {
                Books.remove({
                    _id: this._id
                });
            } else {
                this.warnings++;
                this.reportants.push(Meteor.userId());
                Books.update(this._id, {
                    $set: {
                        warnings: this.warnings,
                        reportants: this.reportants,
                    }
                });
            }
            return false;
        },

    });


}
