const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedResistorValue(color: string[]): string {
    const value =
    Number(`${colorCode(color[0])}${colorCode(color[1])}`) *
    10 ** colorCode(color[2]);

    if (value >= 1_000_000_000) {
    return format(value, 1_000_000_000, "gigaohms");
  }

  if (value >= 1_000_000) {
    return format(value, 1_000_000, "megaohms");
  }

  if (value >= 1_000) {
    return format(value, 1_000, "kiloohms");
  }

  return `${value} ohms`;
}

function format(value: number, divisor: number, unit: string) {
  const result = value / divisor;
  return `${parseFloat(result.toFixed(2))} ${unit}`;
}


export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
};


