import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FriendsList from "components/FriendsList";
import { FRIENDS_DB } from "../data";

describe("<FriendsList />", () => {
  it("Search filter works`", () => {
    expect.hasAssertions();
    const { getByTestId, queryByTestId } = render(<FriendsList />);
    const search = getByTestId("search-input");
    let noDataFound = queryByTestId("no-data-found");

    expect(search).toBeInTheDocument();
    fireEvent.change(search, { target: { value: "Rakesh" } });
    expect(noDataFound).toBeNull(); /* No data found => should NOT be present */

    fireEvent.change(search, { target: { value: "Random Name" } });
    noDataFound = queryByTestId("no-data-found");
    expect(noDataFound).toBeInTheDocument(); /* No data found => should be present */
  });

  it("has `Sort by button`", () => {
    expect.hasAssertions();
    const { getByTestId, debug } = render(<FriendsList />);
    let button = getByTestId("sort-by-button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);


    debug();
    // let button = getByTestId("sort-by-button");
    // expect
  });
});
