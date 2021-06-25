import { Request, Response } from "express";
import { ListUserReceiveService } from "../services/ListUserReceiveService";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplementsService";


class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {

    const { user_id } = request;

    const listUserReceiveComplimentsService = new ListUserReceiveService();

    const compliments = await listUserReceiveComplimentsService.execute(user_id);

    return response.json(compliments)
  }
}

export { ListUserReceiveComplimentsController };