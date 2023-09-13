(async () => {
	let req = shuffleArray(await (await fetch('builder/builder.json')).json());

	if (req.length > 30) {
		req = req.slice(0, 30);
	}

	buildForms(req);
})();

(() => {
	window.document.querySelectorAll('form').forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
		});
	});
})();

//modules

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

function transformString(input) {
	return input.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

function buildForms(builder) {
	const template = window.document.querySelector('template[form-template]');

	builder.forEach((form, index) => {
		const usableTemplate = template.cloneNode(true).content.children[0];

		usableTemplate.querySelector('p').innerText = form.question;

		const optionTemplate = usableTemplate.querySelector(
			'template[option-template]',
		);

		form.options.forEach((option) => {
			const id = Math.floor(Math.random() * (9999999999999 - 1 + 1)) + 1;

			const optionUsableTemplate =
				optionTemplate.cloneNode(true).content.children[0];

			const input = optionUsableTemplate.querySelector('input');

			if (form.answer.length > 1) {
				input.setAttribute('type', 'checkbox');
			} else {
				input.setAttribute('type', 'radio');
				input.setAttribute('name', `${index}`);
			}

			input.setAttribute('id', id);

			const label = optionUsableTemplate.querySelector('label');

			label.innerText = option;
			label.setAttribute('for', id);

			optionTemplate.parentNode.append(optionUsableTemplate);
		});

		template.parentNode.append(usableTemplate);
	});
}
