'use strict';

function button(text) {
	this.text = text || 'Hello';
}

button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text);
		});
		document.body.appendChild(this.element);
	}
}

var btn1 = new button('It Works!');

btn1.create();