import Link from "next/link";

type ContactFormInputProps = {
    type: string,
    label: string
}
export function ContactFormInput({ type, label }: ContactFormInputProps) {
    return (

        <div className="font-avenir p-4">
            <div className="text-xl py-1">{label}</div>
            {type !== "textarea" && <input type={type} className="bg-white bg-opacity-90 border-transparent px-4 py-2 drop-shadow-lg focus:outline-white"></input>}
            {type === "textarea" && <textarea className="bg-white bg-opacity-90 border-transparent px-4 py-2 resize:y drop-shadow-lg focus:outline-white min-w-full min-h-44"></textarea>}
        </div>
    );
} 