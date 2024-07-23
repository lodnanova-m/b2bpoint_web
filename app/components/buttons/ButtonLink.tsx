import Link from "next/link";

type ButtonLinkProps = {
    path: string,
    label: string,
}
export function ButtonLink({ path, label }: ButtonLinkProps) {
    return (
        <Link href={path}>
            <button className="bg-blue text-purple rounded-sm px-6 py-1 bg-opacity-40 hover:bg-blue hover:bg-opacity-60">{label}</button>
        </Link>
    );
}