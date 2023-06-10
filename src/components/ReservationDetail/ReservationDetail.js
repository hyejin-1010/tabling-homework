import Component from '@/core/Component';

import './ReservationDetail.scss';

export default class ReservationDetail extends Component {
  template() {
    const { reservation } = this.props;

    return `
      <!--
        예약 상세
        - 예약 아이템을 클릭하면 예약 상세(예약 및 고객 정보)에 관한 데이터를 표출한다.
          - Desktop은 오른쪽 예약 상세에 표출 (초기 예약 상태는 첫 번째 예약 아이템을 표출)
          - Mobile은 예약 상세 팝업에 표출 (팝업 닫기 / dim 영역 터치 시 팝업 종료)
            - 파업 표출 시, slide-up으로 fade-in 애니메이션 처리
          - 고객 메모 및 요청 사항 데이터는 최대 3행으로 표출
            - 그 외 데이터는 1행으로 표출
      -->
      <div class="reservation-detail">
        <!-- 예약 정보 -->
        <div class="info-box">
          <h3>예약 정보</h3>
          <div class="info-item">
            <label>예약 상태</label>
            <div>${reservation.status}</div>
          </div>
          <div class="info-item">
            <label>예약 시간</label>
            <div>${reservation.timeReserved}</div>
          </div>
          <div class="info-item">
            <label>접수 시간</label>
            <div>${reservation.timeRegistered}</div>
          </div>
        </div>

        <!-- 고객 정보 -->
        <div class="info-box">
          <h3>고객 정보</h3>
          <div>
            <div class="info-item">
              <label>고객 성명</label>
              <div>${reservation.customer.name}</div>
            </div>
            <div class="info-item">
              <label>고객 등급</label>
              <div>${reservation.customer.level}</div>
            </div>
            <div class="info-item">
              <label>고객 메모</label>
              <div>${reservation.customer.memo}</div>
            </div>

            <div class="info-item request">
              <label>요청사항</label>
              <div>${reservation.customer.request}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
