import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FriendsList from 'components/FriendsList';

describe('<FriendsList />', () => {
  it('search filter works', () => {
    expect.hasAssertions();
    const { getByTestId, queryByTestId } = render(<FriendsList />);
    const search = getByTestId('search-input');
    let noDataFound = queryByTestId('no-data-found');

    expect(search).toBeInTheDocument();
    fireEvent.change(search, { target: { value: 'Rakesh' } });
    expect(noDataFound).toBeNull(); /* No data found => should NOT be present */

    fireEvent.change(search, { target: { value: 'Random Name' } });
    noDataFound = queryByTestId('no-data-found');
    expect(
      noDataFound,
    ).toBeInTheDocument(); /* No data found => should be present */
  });

  it('sort by button works', () => {
    expect.hasAssertions();
    const { getByTestId } = render(<FriendsList />);

    const button = getByTestId('sort-by-button');
    const friendsList = getByTestId('friend-list');
    let firstName = friendsList.querySelector('div:nth-child(1) > div > h3');

    /* checking 1st element is non-favourite as it is un-sorted */
    expect(firstName.textContent).toBe('Rakesh Gupta');

    /* clicking sort button */
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    /* checking 1st element is favourite as sorted button is clicked */
    firstName = friendsList.querySelector('div:nth-child(1) > div > h3');
    expect(firstName.textContent).toBe('Shivangi Sharma');
  });

  it('adding new friend works', () => {
    expect.hasAssertions();
    const { getByTestId, container, debug } = render(<FriendsList />);

    const button = getByTestId('sort-by-button');
    const friendsList = getByTestId('friend-list');
    let firstName = friendsList.querySelector('div:nth-child(1) > div > h3');

    /* checking 1st element is non-favourite as it is un-sorted */
    expect(firstName.textContent).toBe('Rakesh Gupta');

    /* clicking sort button */
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    /* checking 1st element is favourite as sorted button is clicked */
    firstName = friendsList.querySelector('div:nth-child(1) > div > h3');
    expect(firstName.textContent).toBe('Shivangi Sharma');
  });
});
