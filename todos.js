let input = prompt('what would you like to do?');
// Use let, we're reassigning input over and over.
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
	if (input === 'list') {
		console.log('*****************');
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
			// can use a for each instead
		}
		console.log('*****************');
	} else if (input === 'new') {
		const newTodo = prompt('Ok, what is the new todo?');
		// use const since we ask user one time.
		todos.push(newTodo);
		console.log(`${newTodo} added to the list!`);
	} else if (input === 'delete') {
		const index = parseInt(prompt('Ok, enter an index to delete:'));
		//  turn that string into a number with parseInt
		if (!Number.isNaN(index)) {
			const deleted = todos.splice(index, 1);
			// from user index, only for 1 element.
			console.log(`Ok, deleted ${deleted[0]}`);
			// an array so do index of 0.
		} else {
			console.log('Unknown index');
		}
	}
	input = prompt('what would you like to do?');
}
console.log('OK QUIT THE APP!');
