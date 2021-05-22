export interface Range {
  first: number;
  last: number;
}

declare function parse(str: string): {
  unit?: string;
  first?: number;
  last?: number;
  suffix?: number;
  ranges?: Range[];
};

export default parse;
