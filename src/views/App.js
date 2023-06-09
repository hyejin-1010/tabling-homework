
import Component from '@/core/Component';
import Main from '@/views/Main/Main';

export default class App extends Component {
  didMount() {
    const $main = this.target.querySelector('[data-view="main"]');
    new Main($main, {});
  }

  template() {
    return `
      <main data-view="main">
      </main>
    `;
  }
}
