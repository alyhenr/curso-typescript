import express, { Request, Response } from "express";
import prisma from "./database";
import { Prisma } from "@prisma/client";

const app = express();

type PetResult = {
  owner: string;
  pet: string;
  animal: string;
};

app.get("/pets/owner/:ownerName", async (req: Request, res: Response) => {
  const { ownerName } = req.params;
  try {
    const result = await prisma.$queryRaw<PetResult>`
      SELECT o.name as owner, p.name as pet, p.type as animal FROM people o
      JOIN pets p ON p."personId" = o."id"
      WHERE o.name = ${ownerName};
    `;
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running or port ${port}`);
});
