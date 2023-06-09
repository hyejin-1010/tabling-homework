import Component from '@/core/Component';
import timeFormat from '@/utils/timeFormat';

import './ReservationCard.scss';

const statusText = {
  reserved: '예약',
  seated: '착석 중'
}

export default class ReservationCard extends Component {
  // TODO: Card / Action Button Click Event

  template() {
    const { reservation } = this.props;

    return `
      <div class="card">
        <!-- 좌측 / 중앙 / 우측 : 3열로 구분하여 표출 -->

        <!--
          좌측 : 예약 시간과 상태를 1열 2행으로 중앙정렬로 표현
                예약 상태는 한글로 표출
                  - reserved : "예약" (#3BB94C)
                  - seated : "착성 중" (#162149)
        -->
        <div class="card-status">
          <!-- 예약 시간 -->
          <div>${timeFormat(reservation.timeReserved)}</div>
          <!-- 예약 상태 -->
          <div class="${reservation.status}">${statusText[reservation.status]}</div>
        </div>

        <!--
          중앙 : 예약자명, 테이블명, 방문자 수, 및 메뉴를 1열 3행으로 표출
                - 예약자명 및 테이블명은 아래 형식에 맞춰 한 줄로 표현
                  "예약자명 - 테이블명 [, 테이블명]"
                - 방문자수는 "성인 00 아이 00" 형식에 맞춰 표출
                - 메뉴는 "메뉴명(갯수)[, 메뉴명(갯수)]"
        -->
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

        <!--
          우측 : [착석] 또는 [퇴석] 버튼을 표출
                - reserved 상태면 [착석] : 클릭 시, [퇴석] 으로 버튼을 변경
                - seated 상태면 [퇴석] : 클릭 시, 예약 목록에서 제거
        -->
        <div class="card-action">
          <button id="action-btn" class="action-btn ${reservation.status}">
            ${ reservation.status === 'reserved' ? '착석' : '퇴석' }
          </button>
        </div>
      </div>
    `;
  }
}
