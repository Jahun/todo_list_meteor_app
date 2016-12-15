import {Template} from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'

import '/client/views/templates/header.html';
import '/client/views/index.html';
document.title = "Todo List";

/**************Header******************/
Template.header.helpers({
    project_name: "Todo List",
});
/*********End Header******************/

/****************Content****************/
Template.content.helpers({
    table_head:
        [
            {th:"id"},
            {th:"Task name"},
            {th:"Edit"},
            {th:"Delete"},
        ]

});
/****************End Content****************/


