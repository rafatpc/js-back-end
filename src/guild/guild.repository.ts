
import { EntityRepository, Repository } from 'typeorm';
import { Guild } from '../database/guild.entity';

@EntityRepository(Guild)
export class GuildRepository extends Repository<Guild> { }
