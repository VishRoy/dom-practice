const DNA = ['G', 'C', 'T', 'A'];
const RNA = ['C', 'G', 'A', 'U'];

export function toRna(d: string): string {

    let rna = ''
    for(let i= 0;i<d.length;i++){
      if(DNA.indexOf(d[i]) < 0) {
        throw new Error('Invalid input DNA.');
      }
      rna += RNA[DNA.indexOf(d[i])]
    }
    return rna
}
