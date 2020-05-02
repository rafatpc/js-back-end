import { BaseEntityFieldCondition } from './base-entity.condition';
import { ICondition } from '../interfaces/ICondition';

import { Character } from 'src/database/character.entity';

export class CharacterCondition extends BaseEntityFieldCondition implements ICondition {
    consume({ Character }: {
        Character: Character
    }) {
        this.entity = Character;
    }
}
