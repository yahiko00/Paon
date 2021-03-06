# Paon #

An Observer Pattern Component in TypeScript/JavaScript.

* No dependencies.
* No inheritance is required.
* Observable is just a component inside an object.
* Observers are just functions.


## Installation ##
	npm install paon

To compile the TypeScript source to JavaScript, you would need to install the **TypeScript** compiler:

	npm install -g typescript

To generate the minified JavaScript version when building, you would need to install **uglifyjs**:

	npm install -g uglifyjs


## Build ##
Resulting files are created in the *dist/* folder.

Complete build (compilation and minification):

	npm run build

Simple compilation (no minification):

	npm run compile


## Usage ##

All constants, interfaces, classes and functions are accessible inside the `Paon` namespace.

### Simple example ###

Here is a simple example where we add an `observable` component inside a class `Subject`:

```ts
/// <reference path="paon.d.ts" />

class Subject {
	private name: string;
	observable: Paon.Observable; // Observer Pattern component

	constructor(name: string) {
		this.name = name;
		this.observable = new Paon.Observable(); // Instanciation/Initialization
	}

	changeName(name: string): string {
		this.name = name;
		this.observable.notifyObservers("nameChanged"); // A message is sent to observers
		return this.name;
	}
}

function onNameChanged() {
	alert("Name has changed");
}

let subject = new Subject("Penelope");

subject.observable.addObserver("nameChanged", onNameChanged); // Function onNameChanged() subscribes to subject's messages "nameChanged"

subject.changeName("Melissa");
// An alert popup appears: "Name has changed"
```

Above, in the class `Subject`, the method `changeName()` will send a `"nameChanged"` message to the instance's observers.
After the instanciation of `Subject`, the function `onNameChanged()` subscribes to subject's messages `"nameChanged"`.
Therefore, when `changeName()` is called, an alert popup appears.

As we can see, with such a pattern, no inheritance with `extends` or `implements` is required. Just simple composition.

### Example with extra data ###

We can send extra data to observers as we can see below:

```ts
/// <reference path="paon.d.ts" />

class Subject {
	private name: string;
	observable: Paon.Observable; // Observer Pattern component

	constructor(name: string) {
		this.name = name;
		this.observable = new Paon.Observable(); // Instanciation/Initialization
	}

	changeName(name: string): string {
		this.name = name;
		this.observable.notifyObservers("nameChanged", { data: name }); // A message with extra data is sent to observers
		return this.name;
	}
}

function onNameChanged(msg: { data: string }) {
	alert("Name has changed into " + msg.data);
}

let subject = new Subject("Penelope");

subject.observable.addObserver("nameChanged", onNameChanged); // Function onNameChanged() subscribes to subject's messages "nameChanged"

subject.changeName("Melissa");
// An alert popup appears: "Name has changed into Melissa"
```

The parameter `msg` in function `onNameChanged()` contains the extra data we have sent via method `changeName()`. Here, this is an object with a property `data`, but this could be anything.

### Module Importation ###

This library can also be imported as a module with the `import` statement:

```ts
import Paon from "./paon"; // Declaration file .d.ts location

class Subject {
	private name: string;
	observable: Paon.Observable; // Observer Pattern component

	constructor(name: string) {
		this.name = name;
		this.observable = new Paon.Observable(); // Instanciation/Initialization
	}

	changeName(name: string): string {
		this.name = name;
		this.observable.notifyObservers("nameChanged", { data: name }); // A message with extra data is sent to observers
		return this.name;
	}
}

function onNameChanged(msg: { data: string }) {
	alert("Name has changed into " + msg.data);
}

let subject = new Subject("Penelope");

subject.observable.addObserver("nameChanged", onNameChanged); // Function onNameChanged() subscribes to subject's messages "nameChanged"

subject.changeName("Melissa");
// An alert popup appears: "Name has changed into Melissa"
```

Only the `import` statement differs from previous examples. Otherwise, the code is the same.


## API Documentation ##

Add an observer to a type of message (similar to the DOM function `addEventListener()`):

	Paon.Observable.addObserver(type: string, observer: Observer): Observer;


Remove an observer from a type of message (similar to the DOM function `removeEventListener()`):

	Paon.Observable.removeObserver(type: string, observer: Observer): void;


Remove all observers from a type of message:

	Paon.Observable.removeObserversType(type: string): void;


Send a message to observers (similar to the DOM function `dispatchEvent()`):

	Paon.Observable.notifyObservers(type: string, msg?: any): void;


## Contributors ##
yahiko


## Licence ##
MIT
