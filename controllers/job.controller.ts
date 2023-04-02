import { Request, Response } from "express";
import { toTitleCase, wrappedResponse } from "../utils/functions";
import {
  fetchCodeByPosition,
  fetchJobByCode,
} from "../datastores/job.datastore";

export const categorize = async (req: Request, res: Response) => {
  if (!req.query.position) {
    return wrappedResponse(res, "'posititon' is required in query", 400, null);
  }
  const result = await fetchCodeByPosition(
    toTitleCase(req.query.position as string)
  );
  if (result) {
    return wrappedResponse(res, "Found code", 200, { code: result?.code });
  }
  return wrappedResponse(res, "Record not found", 404, null);
};
export const job = async (req: Request, res: Response) => {
  if (!req.query.code) {
    return wrappedResponse(res, "'role' is required in query", 400, null);
  }
  const result = await fetchJobByCode(parseInt(req.query.code as string));
  if (result) {
    return wrappedResponse(res, "Found code", 200, {
      code: result.code,
      function: result.function,
      seniority: result.seniority,
    });
  }
  return wrappedResponse(res, "Record not found", 404, null);
};
