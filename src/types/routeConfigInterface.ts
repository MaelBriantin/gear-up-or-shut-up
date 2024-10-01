export interface RouteConfigInterface {
    path: string;
    element: JSX.Element;
    loader?: () => Promise<{ default: JSX.Element }>;
    children?: RouteConfigInterface[];
};