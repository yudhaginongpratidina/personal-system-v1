export default function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="text-sm font-medium capitalize">
            {children}
        </label>
    )
}