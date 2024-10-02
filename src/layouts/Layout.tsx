import { ThemeToggle } from "@/components/ThemeToggle";

type LayoutPropsType = {
    children: React.ReactNode;
};

export const Layout = (props: LayoutPropsType) => {
    const { children } = props;
    return (
        <main className="main-layout">
            {children}
            <ThemeToggle />
        </main>
    );
}