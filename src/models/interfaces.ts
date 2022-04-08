
export interface IDay {
    datetime: string;
    description: string;
    temp: number
}

export interface Data {
    address: string;
    alerts: [];
    currentConditions: {};
    days: []
}