import { Provider } from "react-redux";
import Heading from "../header/Header";

import { render, screen } from "@testing-library/react";
import store from "../../../utils/store/store";
import { StaticRouter } from "react-router-dom/server";
import { LOGO_URL } from "../../../constant";

test("Logo and Cart should load on rendering header", () => {
  //Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Heading />
      </Provider>
    </StaticRouter>
  );

  console.log(header);

  //check logo is loaded
  const logo = header.getAllByTestId("logo");
  console.log(logo);
  expect(logo[0].src).toBe(LOGO_URL);

  //check cart is empty on loaded
  const cart = header.getByTestId("cart");
  console.log(cart);
  expect(cart.innerHTML).toBe("0");
});
