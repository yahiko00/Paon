// paon.ts

/**
 * @fileOverview Observer Pattern component
 * @author <a href="mailto:yahiko.ninja@gmail.com">yahiko</a>
 */

namespace Paon {
    export type Observer = (msg?: any) => void;

    export class Observable {
        observers: { [type: string]: Observer[] };

        constructor() {
            this.observers = {};
        } // constructor

        /**
         * Add an observer to a type of message
         * 
         * @param   {string}   type       Type of messages the observer subscribes to
         * @param   {Observer} observer   Observer
         * @returns {void}
         */
        addObserver(type: string, observer: Observer): void {
            if (!(type in this.observers)) {
                this.observers[type] = [];
            }
            this.observers[type].push(observer);
        } // addObserver

        /**
         * Remove an observer from a type of message
         * 
         * @param   {string}   type       Type of messages the observer subscribes to
         * @param   {Observer} observer   Observer
         * @returns {void}
         */
        removeObserver(type: string, observer: Observer): void {
            for (let i = 0; i < this.observers[type].length; i++) {
                if (observer === this.observers[type][i]) {
                    this.observers[type].splice(i, 1);
                    return;
                }
            } // for i
        } // removeObserver

        /**
         * Remove all observers from a type of message 
         * 
         * @param   {string}   type       Type of messages the observers subscribe to
         * @returns {void}
         */
        removeObserversType(type: string): void {
            delete this.observers[type];
        } // removeObserversType

        /**
         * Send a message to observers
         * 
         * @param   {string} type    Type of message to be sent to observers
         * @param   {*}      [msg]   Content of the message
         * @returns {void}
         */
        notifyObservers(type: string, msg?: any): void {
            if (type in this.observers) {
                for (let obs of this.observers[type]) {
                    obs(msg);
                } // for obs
            }
        } // notifyObservers
    } // Observable
} // Paon