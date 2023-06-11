import { describe, expect, test } from '@jest/globals';
import ReservationDetail from '@/components/ReservationDetail/ReservationDetail';
import Data from './mock';

describe('ReservationDetail Component Snapshot Test', () => {
  test('Basic Data', () => {
    const htmlTag = document.getElementsByTagName('html')[0];
    const app = document.createElement('div');
    app.id = 'app';
    htmlTag.appendChild(app)
    const element = document.createElement('div');
    expect(new ReservationDetail(element, { reservation: Data.reservation })).toMatchSnapshot();
  })
});
