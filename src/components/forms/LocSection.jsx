export default function LocSection({ children }) {
    return (
        <section className="flex flex-col gap-4 w-full mt-8">
            {children}
        </section>
    );
}