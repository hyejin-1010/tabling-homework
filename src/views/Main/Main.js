import axios from 'axios';
import Component from '@/core/Component';
import ReservationCard from '@/components/ReservationCard/ReservationCard';
import ReservationDetail from '@/components/ReservationDetail/ReservationDetail';
import Modal from '@/modal/Modal';

import './Main.scss';

export default class App extends Component {
  setup() {
    this.setState({
      reservations: [],
      focusReservation: null,
      scrollTop: 0,
    });
    this.getReservations();
  }

  get isMobile() { return screen.width < 1024; }

  didUpdate() {
    const { reservations, focusReservation, scrollTop } = this.state;
    for (const reservation of reservations) {
      const $reservationCard = this.target.querySelector(`[data-component="reservation-card"][reservation-id="${reservation.id}"]`);
      new ReservationCard($reservationCard, {
        reservation,
        onClick: this.onClickReservationCard.bind(this),
        onSeat: this.onClickSeatBtn.bind(this),
        onDone: this.onClickDoneBtn.bind(this),
      });
    }

    const $scrollDiv = this.target.querySelector('.scroll');
    $scrollDiv.scrollTo(0, scrollTop);

    if (this.isMobile) {
      const $modal = this.target.querySelector('#reservation-detail-modal');
      new Modal($modal, {
        content: `<div id="reservation-detail"></div>`,
        close: function () {
          this.setState({ focusReservation: null });
        }.bind(this),
      });
    }

    const $reservationDetail = this.target.querySelector('#reservation-detail');
    if (focusReservation && $reservationDetail) {
      new ReservationDetail($reservationDetail, { reservation: focusReservation });
    }
  }

  // 서버에서 reservations 를 가져오는 함수
  getReservations() {
    axios.get(`https://frontend.tabling.co.kr/v1/store/9533/reservations`).then((resp) => {
      const { reservations } = resp.data;
      this.setState({
        reservations: reservations.filter((reservation) => reservation.status !== 'done'),
        focusReservation: this.isMobile ? null : reservations[0],
      });
    });
  }

  onClickReservationCard(focusReservation) {
    const $scrollDiv = this.target.querySelector('.scroll');
    this.setState({ focusReservation, scrollTop: $scrollDiv.scrollTop });
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
    const { reservations, focusReservation } = this.state;

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
          ${
            this.isMobile ? '' : `<div id="reservation-detail"></div>`
          }
        </div>
      </div>

      <div id="reservation-detail-modal" class="${focusReservation ? '' : 'none'}"></div>
    `;
  }
}
