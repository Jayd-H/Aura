export interface Light {
    name: string;
    wattage: number;
    isOn: boolean;
    color: string;
    onClick?: (light: Light) => void;
}

export interface Room {
    name: string;
    temperature: number;
    lights: Light[];
}