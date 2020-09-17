export type RecordsResponse ={
    content: RecordItem[];
    totalPages: number
}

export type RecordItem = {
    id: number;
    name: string;
    age: number;
    moment: string;
    gameTitle: string;
    gamePlatform: Platfomr;
    genreName: string;
}

export type Platfomr = 'XBOX' | 'PC' | 'PAYSTATION';