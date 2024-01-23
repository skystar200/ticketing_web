import { extname } from "path";
import { Repository} from "typeorm";

import { User } from "../entities/user.entity";
import { CustomRepository } from "../user.service";

// @EntityRepository (User)
@CustomRepository(User)
export class UserRepository extends Repository<User>{

}