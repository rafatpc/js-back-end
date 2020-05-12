import { Character } from 'src/database/character.entity';

import { ICondition } from '../interfaces/ICondition';
import { BaseEntityFieldCondition } from './base-entity.condition';

export class CharacterCondition extends BaseEntityFieldCondition implements ICondition {
    consume({ Character }: {
        Character: Character
    }) {
        this.entity = Character;
    }
}
