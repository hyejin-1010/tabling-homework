import Component from '@/core/Component';

import './Modal.scss';

/**
 * @property {string} content modal-body에 들어갈 html string
 * @property {function} [close] dimmed 영역 혹은 닫기 버튼 클릭 시 호출되는 함수
 */
export default class Modal extends Component {
  didMount() {
    const { content, close } = this.props;
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
