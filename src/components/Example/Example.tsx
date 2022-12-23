import React from "react";
import { Await, useLoaderData } from "react-router-dom";

import { Error } from "~/components";
import { TProduct } from "~/components/types";

const Example: React.FC = () => {
  const data = useLoaderData() as { products: TProduct[] };

  return (
    <Await resolve={data.products} errorElement={<Error />}>
      <div>
        <img alt="Example image." src="images/logo_img.png" />
      </div>

      <p>Example component</p>
      <p>Example component</p>
      <p>Example component</p>
    </Await>
  );
};

export { Example };
