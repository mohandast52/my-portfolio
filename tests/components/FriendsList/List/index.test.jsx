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
    const { getByTestId } = render(<FriendsList />);

    const newFriendName = 'Test Friend';
    const addInput = getByTestId('add-friend-input');
    let friendsList = getByTestId('friend-list');
    let firstName = friendsList.querySelector('div:nth-child(1) > div > h3');

    /* checking 1st element before adding new friend */
    expect(firstName.textContent).toBe('Rakesh Gupta');

    /* adding new friend Test */
    fireEvent.change(addInput, { target: { value: newFriendName } });
    fireEvent.keyPress(addInput, { key: 'Enter', keyCode: 13 });

    friendsList = getByTestId('friend-list');

    /* checking 1st element is new friend */
    firstName = friendsList.querySelector('div:nth-child(1) > div > h3');
    expect(firstName.textContent).toBe(newFriendName);

    /* checking 2nd element is previous 1st friend */
    firstName = friendsList.querySelector('div:nth-child(2) > div > h3');
    expect(firstName.textContent).toBe('Rakesh Gupta');
  });

  it('pagination works', () => {
    expect.hasAssertions();
    const { getByTestId } = render(<FriendsList />);

    const newFriendName = 'Test Friend';
    const addInput = getByTestId('add-friend-input');
    const friendsList = getByTestId('friend-list');
    let pagination = getByTestId('pagination-list');

    /* checking 1st element before adding new friend */
    const firstName = friendsList.querySelector('div:nth-child(1) > div > h3');
    expect(firstName.textContent).toBe('Rakesh Gupta');

    /* checking only one pagination to be present */
    expect(pagination.querySelector('button:nth-child(1)')).toBeEnabled();

    expect(
      pagination.querySelector('button:nth-child(2)'),
    ).not.toBeInTheDocument();

    /* adding new friend Test */
    fireEvent.change(addInput, { target: { value: newFriendName } });
    fireEvent.keyPress(addInput, { key: 'Enter', keyCode: 13 });

    pagination = getByTestId('pagination-list');

    /* checking if 2nd pagination is enabled */
    const secondBtn = pagination.querySelector('button:nth-child(2)');
    expect(secondBtn).toBeEnabled();
    fireEvent.click(secondBtn);

    /* checking last friend */
    const lastName = friendsList.querySelector('div:nth-child(1) > div > h3');
    expect(lastName.textContent).toBe('Mohan Das');
  });
});
