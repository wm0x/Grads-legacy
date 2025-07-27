import * as z from "zod";

export const loginInSchema = z.object({
  identifier: z // in login page we have two way to login with username and with email also for that i make name identify
    .string()
    .min(3, { message: "  Enter username or email !!  " }),
    
  password: z
    .string()
    .min(8, { message: "paswword must be more than 8 character" }),
});

export const NewUser = z.object({
    name: z.string().min(3 , {message: "your name must be more than 3 character"}),
    username: z.string().min(3 , {message: "your username must be more than 3 character"}),
    email: z.string().email({
        message:"email is not valid"
      }),
    password: z.string().min(8, { message: "password must be more than 8 character" }),

})