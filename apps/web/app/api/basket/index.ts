// @TODO - placeholder file for basket API routes

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log(req.body);
    // return addToBasket(req);
  }

  if (req.method === "PUT") {
    console.log(req.body);
    // return removeFromBasket(req);
  }

  return new Response("Method not allowed", { status: 405 });
}
