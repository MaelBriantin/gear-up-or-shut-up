import { CharacterStats, CharacterStatsKeys, CompleteNameType } from "@/types/CharacterType";
import { ArchetypeKeys } from "@/types/ArchetypeInterface";
import archetypeData from "@/data/archetypes.json";
import { randomNumber } from "@/utils";

type LinkedStatsType = {
    key: 'HP' | 'AP' | 'MP';
    stat: CharacterStatsKeys;
    multiplier: number;
};

export class Character {

    public nameKey: number;
    public titleKey: number;
    public level: number = 1;
    public HP: number;
    public AP: number;
    public MP: number;
    public stats: CharacterStats;

    private linkedStats: LinkedStatsType[] = [
        { key: 'HP', stat: 'CON', multiplier: 10 },
        { key: 'AP', stat: 'INI', multiplier: 1 },
        { key: 'MP', stat: 'ARC', multiplier: 2 },
    ];
    
    constructor(
        public archetypeKey: ArchetypeKeys,
    ) {
        this.nameKey = this.randomizeNameAndTitle().nameKey;
        this.titleKey = this.randomizeNameAndTitle().titleKey;
        this.stats = this.generateStats();
        this.HP = this.convertStat('CON', 10);
        this.AP = this.convertStat('INI', 1);
        this.MP = this.convertStat('ARC', 2);
    }

    getStat(statKey: CharacterStatsKeys): number {
        return this.stats[statKey];
    }

    get completeName(): CompleteNameType {
        return {
            archetypeKey: this.archetypeKey,
            nameKey: this.nameKey,
            titleKey: this.titleKey,
        }
    }

    levelUp(): void {
        this.level += 1;
    }

    updateStat(stat: CharacterStatsKeys, value: number): void {
        this.stats[stat] += value;
        for (const { key, stat: baseStat, multiplier } of this.linkedStats) {
            if (stat === baseStat) {
                this[key] = this.convertStat(baseStat, multiplier);
            }
        }
    }

    private randomizeNameAndTitle(): { nameKey: number, titleKey: number } {
        return {
            nameKey: randomNumber(0, archetypeData[this.archetypeKey].name_list.length - 1),
            titleKey: randomNumber(0, 9),
        }
    }

    private convertStat(stat: CharacterStatsKeys, multiplier: number ): number {
        return this.stats[stat] * multiplier;
    }
    
    private generateStats(): CharacterStats {
        const thisArchetype = archetypeData[this.archetypeKey];
        return {
            CON: this.randomizeStat(thisArchetype.stats_ranges.CON),
            ATT: this.randomizeStat(thisArchetype.stats_ranges.ATT),
            DEF: this.randomizeStat(thisArchetype.stats_ranges.DEF),
            ARC: this.randomizeStat(thisArchetype.stats_ranges.ARC),
            INI: this.randomizeStat(thisArchetype.stats_ranges.INI),
            LCK: this.randomizeStat(thisArchetype.stats_ranges.LCK),
        }
    }

    private randomizeStat(stat: Array<number>): number {
        return stat.length > 1 ? randomNumber(stat[0], stat[1]) : stat[0];
    }
}