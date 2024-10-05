export type Data = {
    [key: string]: {
        [key: string]: string | Data;
    };
};
