export interface ITechnology{
    _id: string;
    name: string;
    description: string;
    logo: string;
    tags: string[];
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface ApiResponse {
    status: number;
    data: ITechnology[]; // ◄ Tells TS that .data or ['data'] contains the array
    error: string;
}