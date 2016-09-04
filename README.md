# Paon #

An Observer Pattern Component in TypeScript/JavaScript.

* No inheritance is required.
* Observable is just a component inside an object.
* Observers are just functions.


## Installation ##
	npm install paon


## Build ##
	npm run build


## Usage ##

All constants, interfaces, classes and functions are accessible inside the `Paon` namespace.

Here is a simple example where we add an `observable` component inside a class `Subject`:

```ts
class Subject {
	private name: string;
	observable: Paon.Observable; // Observer Pattern component

	constructor(name: string) {
		this.name = name;
		this.observable = new Paon.Observable(); // Instanciation/Initialization
	}

	changeName(name: string): string {
		this.name = name;
		this.observable.notifyObservers("nameChanged"); // A message is sent to subscribers
		return this.name;
	}
}

function onNameChanged() {
	alert("Name has changed");
}

let subject = new Subject("Penelope");

subject.observable.addObserver("nameChanged", onNameChanged); // Function onNameChanged subscribes to subject's messages "nameChanged"

subject.changeName("Melissa");
// An alert popup appears: "Name has changed"
```

Above, in the class Subject, the method changeName will send a "nameChanged" message to the instance's subscribers.
After the instanciation of Subject, the function onNameChanged subscribes to subject's messages "nameChanged".
Therefore, when changeName is called, an alert popup appears.

As we can see, with such a pattern, no inheritance with extends or implements is required. Just simple composition.

We can send extra data to subscribers as we can see below:

```ts
class Subject {
	private name: string;
	observable: Paon.Observable; // Observer Pattern component

	constructor(name: string) {
		this.name = name;
		this.observable = new Paon.Observable(); // Instanciation/Initialization
	}

	changeName(name: string): string {
		this.name = name;
		this.observable.notifyObservers("nameChanged", { data: name }); // A message is sent to subscribers
		return this.name;
	}
}

function onNameChanged(msg: { data: string }) {
	alert("Name has changed into " + msg.data);
}

let subject = new Subject("Penelope");

subject.observable.addObserver("nameChanged", onNameChanged); // Function onNameChanged subscribes to subject's messages "nameChanged"

subject.changeName("Melissa");
// An alert popup appears: "Name has changed into Melissa"
```

## API Documentation ##

Add an observer to a type of message (similar to the DOM function `addEventListener`) :

	Paon.Observable.addObserver(type: string, observer: Observer): void;


Remove an observer from a type of message (similar to the DOM function `removeEventListener`) :

	Paon.Observable.removeObserver(type: string, observer: Observer): void;


Remove all observers from a type of message:

	Paon.Observable.removeObserversType(type: string): void;


Send a message to observers (similar to the DOM function `dispatchEvent`) :

	Paon.Observable.notifyObservers(type: string, msg?: any): void;


## Contributors ##
yahiko


## Licence ##
MIT
