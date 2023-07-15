import { Provider } from "react-redux";
import Body from "../Body";
import { render } from "@testing-library/react";
import store from "../../../utils/store/store";
import { StaticRouter } from "react-router-dom/server";
import { RestaurantData } from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RestaurantData),
  });
}); //mocking fetch

test("Search result on homepage ", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
  const searchBtn = body.getByTestId("search");
  console.log(searchBtn);
});
