export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
}

export function colors(): string[] {
  return COLORS;
}

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow','green', 'blue', 'violet', 'grey', 'white']
