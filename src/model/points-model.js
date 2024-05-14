import {getRandomPoint} from '../mock/points';
import {POINT_COUNT} from '../mock/mock-const';
import {mockOffers} from '../mock/offers';
import {mockDestinations} from '../mock/destinations';
import {FILTERS} from '../const.js';

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #offers = mockOffers;
  #destinations = mockDestinations;
  #filters = [];

  init() {
    this.#filters = Object.values(FILTERS);
  }

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
