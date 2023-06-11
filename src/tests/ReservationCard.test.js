import { describe, expect, test } from '@jest/globals';
import ReservationCard from '@/components/ReservationCard/ReservationCard';
import Data from './mock';

describe('ReservationCard Component Snapshot Test', () => {
  test('Basic Data', () => {
    const element = document.createElement('div');
    expect(new ReservationCard(element, { reservation: Data.reservation })).toMatchSnapshot();
  })
});
