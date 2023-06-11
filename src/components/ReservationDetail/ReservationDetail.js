import Component from '@/core/Component';
import timeFormat from '@/utils/timeFormat';
import translate from '@/utils/translate';

import './ReservationDetail.scss';

/**
 * @property {object} reservation 예약 정보
 */
export default class ReservationDetail extends Component {

  get isMobile() { return screen.width < 1024; }

  template() {
    const { reservation } = this.props;
    if (!reservation) { return ``; }
    return `
      <div class="reservation-detail">
        <!-- 예약 정보 -->
        <div class="info-box">
          <h3>예약 정보</h3>
          <!-- 닫기 버튼 -->
          ${this.isMobile ? `<span class="modal-close-btn">닫기</span>` : ``}

          <div class="info-item">
            <label>예약 상태</label>
            <div>${translate[reservation.status]}</div>
          </div>
          <div class="info-item">
            <label>예약 시간</label>
            <div>${timeFormat(reservation.timeReserved)}</div>
          </div>
          <div class="info-item">
            <label>접수 시간</label>
            <div>${timeFormat(reservation.timeRegistered)}</div>
          </div>
        </div>

        <!-- 고객 정보 -->
        <div class="info-box">
          <h3>고객 정보</h3>
          <div>
            <div class="info-item">
              <label>고객 성명</label>
              <div>${reservation.customer.name || '-'}</div>
            </div>
            <div class="info-item">
              <label>고객 등급</label>
              <div>${reservation.customer.level || '-'}</div>
            </div>
            <div class="info-item">
              <label>고객 메모</label>
              <div class="multiline-ellipsis">${reservation.customer.memo || '-'}</div>
            </div>

            <div class="info-item request">
              <label>요청사항</label>
              <div class="multiline-ellipsis">${reservation.customer.request || '-'}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
