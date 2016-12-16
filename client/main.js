import '/client/views/index.html';
document.title = "Todo List";

Template.content.helpers({
    todo_item: function () {
        return todo_list.find({}, {sort: {created_date: -1}});
    }

});

Template.content.events({
    'keyup #enter_task': function (event) {
        if (event.which == 13) {
            var val = event.target.value.trim();
            var now = new Date();
            if (val!='') {
                todo_list.insert({
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
    }
});