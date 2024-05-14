import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate (value, isChecked) {
  return `<div class="trip-filters__filter">
  <input id="filter-${value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${isChecked}>
  <label class="trip-filters__filter-label" for="filter-${value}">${value[0].toUpperCase + value.slice(1)}</label>
</div>`;
}

function createFilterEventsView (filters, currentFilter) {
  return `<form class="trip-filters" action="#" method="get">
  ${filters.map((filter) => createFilterItemTemplate(filter, currentFilter)).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FilterEventsView extends AbstractView {
  #filters = [];
  #currentFilter = '';

  // constructor({filters, currentFilter}) {
  //   super();
  //   this.#filters = filters;
  //   this.#currentFilter = currentFilter;
  // }

  get template() {
    return createFilterEventsView(this.#filters, this.#currentFilter);
  }
}
