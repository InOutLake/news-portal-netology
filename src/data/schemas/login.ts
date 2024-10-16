import * as Joi from "joi";

export const LoginSchema = Joi.object().keys({
  email: Joi.string().email({ tlds: false, minDomainSegments: 2 }).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});
