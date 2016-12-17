import '/client/views/index.html';
document.title = "Todo List";

Template.content.helpers({
    todo_item: function () {
        return todo_list.find({}, {sort: {id: -1}});
    }

});

Template.content.events({
    'keyup #enter_task': function (event) {
        if (event.which == 13) {
            var val = event.target.value.trim();
            var now = new Date();
            var collectionIsEmpty=(todo_list.find().count()==0);
            var id=1;
            if(!collectionIsEmpty) {
                var ft = todo_list.findOne({}, {sort: {id: -1}});
                id=parseInt(ft.id) + 1;
            }

            if (val != '') {
                todo_list.insert({
                    id: id,
                    name: val,
                    created_date: ((now.getDay() < 10) ? '0' + now.getDay() : now.getDay()) + '/'
                    + (now.getMonth() + 1) + '/'
                    + now.getFullYear() + ' '
                    + now.getHours() + ':'
                    + now.getMinutes() + ':'
                    + ((now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds())
                });
                event.target.value = '';

            }
        }
    },

    'click .delete-task': function (event) {
        event.preventDefault();
        var id = this._id;
        var c = confirm("Delete? - " + this.id);
        if (c) {
            todo_list.remove({_id: id});
        }
    }
});