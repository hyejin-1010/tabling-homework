import { describe, expect, test } from '@jest/globals';
import Main from '@/views/Main/Main';
import Data from './mock';

function renderMainView() {
  const htmlTag = document.getElementsByTagName('html')[0];
  const app = document.createElement('div');
  app.id = 'app';
  htmlTag.appendChild(app);

  const element = document.createElement('div');
  const $main = new Main(element, {});
  $main.setState({ reservations: Data.reservations, focusReservation: Data.reservations[0] });
  return $main;
}

describe('Main View Snapshot Test', () => {
  test('예약 목록을 가져와서 화면에 뿌리기', () => {
    const $main = renderMainView();
    expect($main).toMatchSnapshot();
  })
  test('예약 목록에서 착석 - onClickSeatBtn("63888899") 호출', () => {
    const $main = renderMainView();
    $main.onClickSeatBtn('63888899');
    expect($main).toMatchSnapshot();
  }),
  test('예약 목록에서 퇴석 - onClickDoneBtn("53005895") 호출', () => {
    const $main = renderMainView();
    $main.onClickDoneBtn('53005895');
    expect($main).toMatchSnapshot();
  }),
  test('예약 목록에서 카드 클릭 - onClickReservationCard("63888899") 호출', () => {
    const $main = renderMainView();
    $main.onClickReservationCard(Data.reservations[2]);
    expect($main).toMatchSnapshot();
  })
});
