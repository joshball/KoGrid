﻿kg.Cell = function (col) {
    this.data = ko.observable();
    this.width = ko.computed(function () {
        return col.width();
    });
    this.offsetLeft = ko.computed(function () {
        return col.offsetLeft();
    });
    this.offsetRight = ko.computed(function(){
        return col.offsetRight();
    });
    this.column = col;
    this.row = null;
};