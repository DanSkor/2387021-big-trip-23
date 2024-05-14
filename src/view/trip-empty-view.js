import AbstractView from '../framework/view/abstract-view.js';
import {TRIP_EMPTY_MESSAGES} from '../const.js';

function createTripEmptyView (filter) {
  return `<p class="trip-events__msg">${TRIP_EMPTY_MESSAGES[filter]}</p>`;
}

export default class TripEmptyView extends AbstractView {
  #filter = null;

  constructor({filter}) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createTripEmptyView(this.#filter);
  }
}
