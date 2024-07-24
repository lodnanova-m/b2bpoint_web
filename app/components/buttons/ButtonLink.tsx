import Link from "next/link";

type ButtonLinkProps = {
    path: string,
    label: string,
}
export function ButtonLink({ path, label }: ButtonLinkProps) {
    return (
        <Link href={path}>
            <button className="bg-blue text-purple text-xl rounded-md px-8 py-2 bg-opacity-40 hover:bg-blue hover:bg-opacity-60">{label}</button>
        </Link>
    );
}