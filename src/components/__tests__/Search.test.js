import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../../utils/store/store";
import { StaticRouter } from "react-router-dom/server";
import { RestaurantData } from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RestaurantData),
  });
}); //mocking fetch

test("Search result on homepage / Shimmer loaded in the document ", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const shimmer = body.getByTestId("shimmer");
  console.log(shimmer);
  expect(shimmer.children.length).toBe(10);

  const input = body.getByTestId("search-input");
  input.value = "burger";
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("resList");
  console.log(resList);
  expect(resList.children.length).toBe(1);
});
