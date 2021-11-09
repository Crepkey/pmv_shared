export type WordType = "word" | "expression";
export type LanguageType = "english" | "hungarian";
export type MeaningWithPoint = { [meaning: string]: number };
export interface Word {
	id: number;
	ownerId: number;
	english: MeaningWithPoint;
	hungarian: MeaningWithPoint;
	exampleSentences: string[];
	notes: string | null;
	type: WordType;
	favourite: boolean;
	deletionDate: Date | null;
	memoryLevel: number;
}
export interface WordWithScores extends Word {
	actualScore: number;
	finalScore: number;
}

/* Used in Game feature */
export interface KnowledgeLevel {
	meaning: string;
	point: number;
}

export type ProgressColorType = "progressBlue" | "progressRed" | "progressGreen";

export interface TagColor extends KnowledgeLevel {
	color: ProgressColorType;
}

export interface GameStatistics {
	english: boolean;
	hungarian: { [meaning: string]: boolean };
}

export interface ServerError {
	error: string;
	message: string;
	stack: string;
	detail: string;
	table: string;
}
