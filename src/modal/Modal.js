import Component from '@/core/Component';

import './Modal.scss';

export default class Modal extends Component {
  didMount() {
    const { content, close } = this.props;
    if (!content) { return; }
    const $body = this.target.querySelector('.modal-body');
    $body.innerHTML = content;

    this.addEvent('click', '.dimmed, .modal-close-btn', function() {
      if (close) { close(); }
    });
  }

  template() {
    return `
      <div class="modal slide-up-fade-in">
        <div class="dimmed"></div>
        <div class="modal-body">
          Content
        </div>
      </div>
    `;
  }
}
