// hapjs
// http://github.com/hapjs/event
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Event = factory();
    };
}(this, function () {

    var getEvents = function (type) {
            return (this._events[type] = this._events[type] || []);
        },

        setEvents = function (act, type, arg, context) {
            var events = getEvents.call(this, type),
                event,
                len = events.length,
                index;

            for (var index = 0; index < len; index++) {
                event = events[index];
                if (act === 'fire') {
                    event.fn.call(event.context, arg);
                } else if (act === 'off') {
                    if (event.fn === arg && event.context === context) {
                        events.splice(index, 1);
                    };
                };
            };

            return this;
        },
        Event = function () {
            this._events = {};
        };


    Event.prototype = {

        on: function (type, fn, context) {
            var events;
            //
            if (typeof fn === 'string') {
                fn = context[fn];
            };
            //
            if (typeof fn !== 'function') {
                return;
            };
            //
            events = getEvents.call(this, type);
            //
            events.push({
                fn: fn,
                context: context || this
            });

            return this;
        },

        off: function (type, fn, context) {
            return setEvents.call(this, 'off', type, fn, context);
        },

        fire: function (type, data) {
            return setEvents.call(this, 'fire', type, data);
        }

    };

    return Event;
}));