import { Request, Response } from 'express';

import {Product} from '../../models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const prodcuts = await Product.find();

    res.json(prodcuts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}