// import {render} from '../render.js';

// export default class BoardPresenter {
//   boardComponent = new BoardView();
//   taskListComponent = new TaskListView();

//   constructor({boardContainer}) {
//     this.boardContainer = boardContainer;
//   }

//   init() {
//     render(this.boardComponent, this.boardContainer);
//     render(new SortView(), this.boardComponent.getElement());
//     render(this.taskListComponent, this.boardComponent.getElement());
//     render(new TaskEditView(), this.taskListComponent.getElement());

//     for (let i = 0; i < 3; i++) {
//       render(new TaskView(), this.taskListComponent.getElement());
//     }

//     render(new LoadMoreButtonView(), this.boardComponent.getElement());
//   }
// }
