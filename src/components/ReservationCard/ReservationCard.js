import Component from '@/core/Component';
import timeFormat from '@/utils/timeFormat';
import translate from '@/utils/translate';

import './ReservationCard.scss';

export default class ReservationCard extends Component {
  didMount() {
    const { reservation, onClick, onSeat, onDone } = this.props;
    this.addEvent('click', '.card-content, .card-status', function() {
      if (onClick) { onClick(reservation); }
    });
    this.addEvent('click', '#action-btn.reserved', function() {
      if (onSeat) { onSeat(reservation.id); }
    });
    this.addEvent('click', '#action-btn.seated', function() {
      if (onDone) { onDone(reservation.id); }
    });
  }


  template() {
    const { reservation } = this.props;

    return `
      <div class="card">
        <div class="card-status">
          <!-- 예약 시간 -->
          <div>${timeFormat(reservation.timeReserved)}</div>
          <!-- 예약 상태 -->
          <div class="${reservation.status}">${translate[reservation.status]}</div>
        </div>

        <div class="card-content">
          <!-- 예약자명 및 테이블명 -->
          <div class="ellipsis">
            <span>${reservation.customer.name}</span>
            -
            <span>
              ${reservation.tables.map((table) => table.name).join(', ')}
            </span>
          </div>

          <!-- 방문자수 -->
          <div class="card-visitors">
            성인 ${reservation.customer.adult}
            아이 ${reservation.customer.child}
          </div>

          <!-- 메뉴 -->
          <div class="ellipsis">
            ${
              reservation.menus.map((menu) => {
                return `${menu.name}(${menu.qty})`;
              }).join(', ')
            }
          </div>
        </div>

        <!-- [착석] 또는 [퇴석] 버튼 -->
        <div class="card-action">
          <button id="action-btn" class="action-btn ${reservation.status}">
            ${ reservation.status === 'reserved' ? '착석' : '퇴석' }
          </button>
        </div>
      </div>
    `;
  }
}
