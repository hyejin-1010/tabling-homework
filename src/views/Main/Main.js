import axios from 'axios';
import Component from '@/core/Component';
import ReservationCard from '@/components/ReservationCard/ReservationCard';
import ReservationDetail from '@/components/ReservationDetail/ReservationDetail';
import Modal from '@/modal/Modal';

import './Main.scss';

export default class Main extends Component {
  setup() {
    this.setState({
      reservations: [],       // 예약 목록
      focusReservation: null, // 현재 보고 있는 예약 상세
      scrollTop: 0,           // setState 직전 예약 목록 scrollTop value
      isMobile: document.getElementById('app').clientWidth < 1024,
    });
    this.getReservations();
  }

  setState(newState) {
    const scrollDiv = this.target.querySelector('.scroll');
    const scrollTop = scrollDiv?.scrollTop || 0;
    super.setState({ ...newState, scrollTop: scrollTop });
  }

  didMount() {
    // 화면 사이즈가 달라질 때마다 체크한다.
    window.addEventListener('resize', () => {
      const isMobile = document.getElementById('app').clientWidth < 1024;
      if (this.state.isMobile === isMobile) { return; }
      const { focusReservation, reservations } = this.state;
      this.setState({
        isMobile,
        focusReservation: isMobile ? null : (focusReservation || reservations[0]),
      });
    })
  }

  didUpdate() {
    this.initReservationCardComponents();
    this.initReservationDetailComponent();
  }

  // 예약 목록 components sync
  initReservationCardComponents() {
    const { reservations, scrollTop } = this.state;
    for (const reservation of reservations) {
      const $reservationCard = this.target.querySelector(`[data-component="reservation-card"][reservation-id="${reservation.id}"]`);
      new ReservationCard($reservationCard, {
        reservation,
        onClick: this.onClickReservationCard.bind(this),
        onSeat: this.onClickSeatBtn.bind(this),
        onDone: this.onClickDoneBtn.bind(this),
      });
    }
    // render가 되면 다시 화면을 그리기 때문에, scroll 위치를 저장해뒀다가 다시 해당 위치로 옮겨주어야 한다.
    const scrollDiv = this.target.querySelector('.scroll');
    if (scrollDiv.scrollTo) { scrollDiv.scrollTo(0, scrollTop); }
  }

  // 예약 상세 component sync
  initReservationDetailComponent() {
    const { focusReservation, isMobile } = this.state;
    // mobile인 경우, modal로 보여줘야 하기 때문에 modal component도 sync해준다.
    if (isMobile) {
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
        focusReservation: this.state.isMobile ? null : reservations[0],
      });
    }).catch((error) => { console.error(error); });
  }

  // 예약 목록에서 카드를 클릭한 경우
  onClickReservationCard(focusReservation) {
    this.setState({ focusReservation });
  }

  // 착석 버튼 클릭한 경우, 해당 예약의 상태를 'seated'로 바꾼다.
  onClickSeatBtn(id) {
    let { focusReservation } = this.state;
    const reservations = [...this.state.reservations];
    const foundIndex = reservations.findIndex((reservation) => reservation.id === id);
    if (foundIndex === -1) { return; }
    const reservation = Object.assign({}, reservations[foundIndex], { status: 'seated' });
    reservations[foundIndex] = reservation;
    if (focusReservation?.id === id) { focusReservation = reservation; }
    this.setState({ reservations, focusReservation });
  }

  // 퇴석 버튼 클릭한 경우, 해당 예약을 예약목록에서 지운다.
  onClickDoneBtn(id) {
    let { focusReservation } = this.state;
    const reservations = [...this.state.reservations];
    const foundIndex = reservations.findIndex((reservation) => reservation.id === id);
    if (foundIndex === -1) { return; }
    reservations.splice(foundIndex, 1);
    if (focusReservation?.id === id) { focusReservation = reservations[0]; }
    this.setState({ reservations, focusReservation });
  }

  template() {
    const { reservations, focusReservation, isMobile } = this.state;

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
                }).join('') || `<h2 class="none-reservation">예약 목록이 없습니다.</h3>`
              }
            </div>
          </div>

          <!-- 예약 상세 -->
          ${isMobile || !focusReservation ? '' : `<div id="reservation-detail"></div>`}
        </div>
      </div>

      <div id="reservation-detail-modal" class="${focusReservation ? '' : 'none'}"></div>
    `;
  }
}
