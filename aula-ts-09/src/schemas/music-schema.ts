import Joi from "joi";
import { Music } from "protocols";

export default Joi.object<Music>({
  title: Joi.string().required(),
  artist: Joi.string().required(),
});
