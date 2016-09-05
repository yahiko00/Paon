/**
 * @author yahiko <yahiko.ninja@gmail.com>
 * @licence {@link https://github.com/yahiko00/Paon/blob/master/LICENCE.txt|MIT License}
 * @overview
 *
 * An Observer Pattern Component in TypeScript/JavaScript.
 *
 */
declare namespace Paon {
    /**
     * Observers (subscribers) are functions
     */
    type Observer = (msg?: any) => void;
    /**
     * Observable (subject/publisher) component
     *
     * @export
     * @class Observable
     */
    class Observable {
        observers: {
            [type: string]: Observer[];
        };
        constructor();
        /**
         * Add an observer to a type of message
         *
         * @param   {string}   type       Type of messages the observer subscribes to
         * @param   {Observer} observer   Observer
         * @returns {void}
         */
        addObserver(type: string, observer: Observer): void;
        /**
         * Remove an observer from a type of message
         *
         * @param   {string}   type       Type of messages the observer subscribes to
         * @param   {Observer} observer   Observer
         * @returns {void}
         */
        removeObserver(type: string, observer: Observer): void;
        /**
         * Remove all observers from a type of message
         *
         * @param   {string}   type       Type of messages the observers subscribe to
         * @returns {void}
         */
        removeObserversType(type: string): void;
        /**
         * Send a message to observers
         *
         * @param   {string} type    Type of message to be sent to observers
         * @param   {*}      [msg]   Content of the message
         * @returns {void}
         */
        notifyObservers(type: string, msg?: any): void;
    }
}
export default Paon;
