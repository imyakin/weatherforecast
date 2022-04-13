
export interface IDay {
    datetime: string;
    description: string;
    temp: number;
    icon: string;
}

export interface Data {
    address: string;
    alerts: [];
    currentConditions: {};
    days: []
}