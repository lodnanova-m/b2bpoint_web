import Link from "next/link";

type ButtonSendProps = {
    label: string,
}
export function ButtonSend({ label }: ButtonSendProps) {
    return (
        <button className="bg-green text-purple text-xl font-medium rounded-md px-12 py-2 mx-4 bg-opacity-70 hover:bg-green hover:bg-opacity-90">{label}</button>
    );
}