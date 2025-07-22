const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "Lax",
  maxAge: 1000 * 60 * 10,
};


export {cookieOptions}