import SortEventsView from '../view/sort-events-view.js';
import PointsListView from '../view/points-list-view.js';
import NewPointView from '../view/new-point-view.js';
import TripPointView from '../view/trip-point-view.js';
import TripEmptyView from '../view/trip-empty-view.js';
import {render, replace, RenderPosition} from '../framework/render.js';

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  #points = [];

  #sortComponent = new SortEventsView();
  #listComponent = new PointsListView();

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];

    render(this.#sortComponent, this.#container, RenderPosition.AFTERBEGIN);
    render(this.#listComponent, this.#container);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderEmptyView() {
    render(new TripEmptyView({filter: this.#pointsModel.filters[0]}), this.this.#listComponent.element);
  }

  #renderPoint(point) {
    // if (isEmpty(point)) {
    //   this.#renderEmptyView();
    //   return;
    // }

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new TripPointView({
      point,
      destinations: this.#pointsModel.destinations,
      offers: this.#pointsModel.offers,
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const formComponent = new NewPointView({
      point,
      destinations: this.#pointsModel.destinations,
      offers: this.#pointsModel.offers,
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onEditClick: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(formComponent, pointComponent);
    }

    function replaceFormToPoint () {
      replace(pointComponent, formComponent);
    }

    render(pointComponent, this.#listComponent.element, RenderPosition.BEFOREEND);
  }
}
