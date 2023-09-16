import { Request, Response, NextFunction } from "express";
import { Schema, ValidationErrorItem } from "joi";

export default (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data: Object = req.body;

    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      return res
        .status(422)
        .send(error.details.map((e: ValidationErrorItem) => e.message));
    }

    next();
  };
};
