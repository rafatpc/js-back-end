import { Character } from "../database/character.entity";
import { GuildMember } from "src/database/guild-member.entity";

export type StatResult = {
    ServerName: string;
    ConnectTM: Date;
    DisConnectTM: Date;
    OnlineHours: number;
    Guild: {
        G_Name: string
    };
    Account: {
        GameIDC: Character
    }
};

export type OnlineCharacter = {
    Account: undefined; // Undefined properties are skipped
    ServerName: string;
    ConnectTM: Date;
    DisConnectTM: Date;
    OnlineHours: number;
    Guild: Partial<GuildMember>;
    Character: Partial<Character>;
};
