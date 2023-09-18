import builder from './builder.js';

//main

buildForms(shuffleArray(builder));

//modules

function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
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

		const explanationItemTemplate = usableTemplate.querySelector(
			'template[explanation-item-template]',
		);

		form.explanation.forEach((explanation) => {
			const usableExplanationItemTemplate =
				explanationItemTemplate.cloneNode(true).content.children[0];

			usableExplanationItemTemplate.innerText = explanation;

			explanationItemTemplate.parentNode.append(usableExplanationItemTemplate);
		});

		usableTemplate.querySelector('form').addEventListener('submit', (e) => {
			e.preventDefault();

			const inputs = usableTemplate.querySelectorAll('input');

			const selectedInputs = [];

			inputs.forEach((input, index) => {
				input.setAttribute('disabled', '');

				if (input.checked) {
					selectedInputs.push(index);
				}
			});

			const isRight =
				JSON.stringify(selectedInputs) === JSON.stringify(form.answer);

			inputs.forEach((input) => {
				if (input.checked) {
					input.parentNode.querySelector('label').style.color = isRight
						? 'green'
						: 'red';
				}
			});

			usableTemplate
				.querySelector('span[answer-status]')
				.classList.add(isRight ? '--right' : '--wrong');

			form.answer.forEach((answer) => {
				inputs[answer].parentNode.classList.add('--right');
			});

			const submitButton = usableTemplate.querySelector('button');

			submitButton.style.filter = 'opacity(0%)';
			submitButton.style.height = window.getComputedStyle(submitButton).height;

			setTimeout(() => {
				submitButton.style.height = '0px';
				submitButton.style.padding = '0px';

				const explanationContainer = usableTemplate.querySelector(
					'div[explanation-container]',
				);
				const contentHeight = explanationContainer.scrollHeight;
				explanationContainer.style.height = `${contentHeight}px`;
			}, 700);
		});

		template.parentNode.append(usableTemplate);
	});
}
