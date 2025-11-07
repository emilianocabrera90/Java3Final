// src/config/passport.config.js
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();

const initializePassport = () => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "clave_super_secreta",
  };

  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        // En un proyecto real podrías buscar el usuario en la DB:
        // const user = await UserModel.findById(jwt_payload.id);
        // return done(null, user);
        return done(null, jwt_payload);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  console.log("✅ Passport inicializado (estrategia JWT)");
};

export default initializePassport;
