(() => {
	class Description {
		constructor(wrap) {
			if (!wrap || !(wrap instanceof HTMLElement)) {
				throw new Error('wrap is not an HTMLElement');
			}

			this.wrap = wrap;
			this.init();
		}

		init() {
			const requireSelectors = this.wrap.querySelectorAll(
				'.ncua-description__summary, .ncua-description__content, .ncua-description__button'
			);
			const [summary, content, button] = Array.from(requireSelectors);

			if (!summary || !content || !button) {
				throw new Error('summary, content, button is not found');
			}

			this.bindEvent();
		}

		bindEvent() {
			const SUMMARY = 'ncua-description__summary';
			const CLOSE_BUTTON = 'ncua-description__button';

			this.wrap.addEventListener('click', (e) => {
				if (
					!e.target.className ||
					![SUMMARY, CLOSE_BUTTON].includes(e.target.className)
				) {
					return;
				}

				this.toggle();
			});
		}

		toggle() {
			this.wrap.classList.toggle('is-open');
		}
	}

	window.ncua = window.ncua || {};
	window.ncua.Description = Description;
})();

document.querySelectorAll('.ncua-description').forEach((wrap) => {
	new ncua.Description(wrap);
});
