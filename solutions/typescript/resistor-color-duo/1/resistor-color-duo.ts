const COLORS = ['black', 'brown','red','orange', 'yellow', 'green','blue', 'violet', 'grey', 'white']

export function decodedValue(color: string[]) : number {
    return Number(`${colorCode(color[0])}${colorCode(color[1])}`);
}

export function colorCode(color: string) : number {
    return COLORS.indexOf(color);
}


console.log(decodedValue(['brown', 'green']))


