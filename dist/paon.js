// paon.ts
/**
 * @author yahiko <yahiko.ninja@gmail.com>
 * @licence {@link https://github.com/yahiko00/Paon/blob/master/LICENCE.txt|MIT License}
 * @overview
 *
 * An Observer Pattern Component in TypeScript/JavaScript.
 *
 */
var Paon;
(function (Paon) {
    /**
     * Observable (subject/publisher) component
     *
     * @export
     * @class Observable
     */
    var Observable = (function () {
        function Observable() {
            this.observers = {};
        } // constructor
        /**
         * Add an observer to a type of message
         *
         * @param   {string}   type       Type of messages the observer subscribes to
         * @param   {Observer} observer   Observer
         * @returns {void}
         */
        Observable.prototype.addObserver = function (type, observer) {
            if (!(type in this.observers)) {
                this.observers[type] = [];
            }
            this.observers[type].push(observer);
        }; // addObserver
        /**
         * Remove an observer from a type of message
         *
         * @param   {string}   type       Type of messages the observer subscribes to
         * @param   {Observer} observer   Observer
         * @returns {void}
         */
        Observable.prototype.removeObserver = function (type, observer) {
            for (var i = 0; i < this.observers[type].length; i++) {
                if (observer === this.observers[type][i]) {
                    this.observers[type].splice(i, 1);
                    return;
                }
            } // for i
        }; // removeObserver
        /**
         * Remove all observers from a type of message
         *
         * @param   {string}   type       Type of messages the observers subscribe to
         * @returns {void}
         */
        Observable.prototype.removeObserversType = function (type) {
            delete this.observers[type];
        }; // removeObserversType
        /**
         * Send a message to observers
         *
         * @param   {string} type    Type of message to be sent to observers
         * @param   {*}      [msg]   Content of the message
         * @returns {void}
         */
        Observable.prototype.notifyObservers = function (type, msg) {
            if (type in this.observers) {
                for (var _i = 0, _a = this.observers[type]; _i < _a.length; _i++) {
                    var obs = _a[_i];
                    obs(msg);
                } // for obs
            }
        }; // notifyObservers
        return Observable;
    }());
    Paon.Observable = Observable; // Observable
})(Paon || (Paon = {})); // Paon
//# sourceMappingURL=paon.js.map