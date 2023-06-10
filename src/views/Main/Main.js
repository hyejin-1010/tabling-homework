import axios from 'axios';
import Component from '@/core/Component';
import ReservationCard from '@/components/ReservationCard';

export default class App extends Component {
  setup() {
    this.setState({ reservations: [] });
    this.getReservations();
  }

  didUpdate() {
    const { reservations } = this.state;
    for (const reservation of reservations) {
      const $reservationCard = this.target.querySelector(`[data-component="reservation-card"][reservation-id="${reservation.id}"]`);
      new ReservationCard($reservationCard, {
        reservation,
        onClick: this.onClickReservationCard,
        onSeat: this.onClickSeatBtn.bind(this),
        onDone: this.onClickDoneBtn.bind(this),
      });
    }
  }

  // 서버에서 reservations 를 가져오는 함수
  getReservations() {
    axios.get(`https://frontend.tabling.co.kr/v1/store/9533/reservations`).then((resp) => {
      // TODO: state 가 done이면 미표출
      this.setState({ reservations: resp.data.reservations });
    });
  }

  onClickReservationCard(reservation) {
    console.log('click reservation', reservation);
  }

  onClickSeatBtn(id) {
    const reservations = [...this.state.reservations];
    const foundIndex = reservations.findIndex((reservation) => reservation.id === id);
    if (foundIndex === -1) { return; }
    reservations[foundIndex] = Object.assign({}, reservations[foundIndex], { status: 'seated' });
    this.setState({ reservations });
  }

  onClickDoneBtn(id) {
    const reservations = [...this.state.reservations];
    const foundIndex = reservations.findIndex((reservation) => reservation.id === id);
    if (foundIndex === -1) { return; }
    reservations.splice(foundIndex, 1);
    this.setState({ reservations });
  }

  template() {
    const { reservations } = this.state;
    console.log('reservations : ', reservations);

    return `
      <header>
        <h1>예약 목록</h1>
      </header>
      <div class="container">
        <!-- 예약 목록 -->
        <div>
          ${
            reservations.map(({ id }) => {
              return `
                <div data-component="reservation-card" reservation-id="${id}"></div>
              `;
            }).join('')
          }
        </div>

        <!--
          예약 상세
          - 예약 아이템을 클릭하면 예약 상세(예약 및 고객 정보)에 관한 데이터를 표출한다.
            - Desktop은 오른쪽 예약 상세에 표출 (초기 예약 상태는 첫 번째 예약 아이템을 표출)
            - Mobile은 예약 상세 팝업에 표출 (팝업 닫기 / dim 영역 터치 시 팝업 종료)
              - 파업 표출 시, slide-up으로 fade-in 애니메이션 처리
            - 고객 메모 및 요청 사항 데이터는 최대 3행으로 표출
              - 그 외 데이터는 1행으로 표출
        -->
        <div></div>
      </div>
    `;
  }
}
