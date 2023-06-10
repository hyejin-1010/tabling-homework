import axios from 'axios';
import Component from '@/core/Component';
import ReservationCard from '@/components/ReservationCard/ReservationCard';
import ReservationDetail from '@/components/ReservationDetail/ReservationDetail';

import './Main.scss';

export default class App extends Component {
  setup() {
    this.setState({
      reservations: [],
      focusReservation: null,
    });
    this.getReservations();
  }

  didUpdate() {
    const { reservations, focusReservation } = this.state;
    for (const reservation of reservations) {
      const $reservationCard = this.target.querySelector(`[data-component="reservation-card"][reservation-id="${reservation.id}"]`);
      new ReservationCard($reservationCard, {
        reservation,
        onClick: this.onClickReservationCard.bind(this),
        onSeat: this.onClickSeatBtn.bind(this),
        onDone: this.onClickDoneBtn.bind(this),
      });
    }
    if (focusReservation) {
      const $reservationDetail = this.target.querySelector('#reservation-detail');
      new ReservationDetail($reservationDetail, { reservation: focusReservation });
    }
  }

  // 서버에서 reservations 를 가져오는 함수
  getReservations() {
    axios.get(`https://frontend.tabling.co.kr/v1/store/9533/reservations`).then((resp) => {
      // TODO: state 가 done이면 미표출
      const { reservations } = resp.data;
      this.setState({
        reservations,
        focusReservation: reservations[0], // TODO:
      });
    });
  }

  onClickReservationCard(reservation) {
    this.setState({ focusReservation: reservation });
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
        <div class="table">
          <!-- 예약 목록 -->
          <div id="reservation-list">
            <div class="scroll">
              ${
                reservations.map(({ id }) => {
                  return `
                    <div data-component="reservation-card" reservation-id="${id}"></div>
                  `;
                }).join('')
              }
            </div>
          </div>

          <!-- 예약 상세 -->
          <div id="reservation-detail"></div>
        </div>
      </div>
    `;
  }
}
