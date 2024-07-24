import Link from "next/link";
import { ContactFormInput } from "./ContactFormInput";
import { ButtonSend } from "../buttons/ButtonSendMessage";

export function ContactForm() {
    return (
        <form>
            <div className="flex flex-row">
                <ContactFormInput label="Jméno" type="text"></ContactFormInput>
                <ContactFormInput label="Email" type="email"></ContactFormInput>
            </div>
            <div>
                <ContactFormInput label="Vaše zpráva" type="textarea"></ContactFormInput>
            </div>
            <div className="flex flex-row justify-end">
                <ButtonSend label="Odeslat"></ButtonSend>
            </div>
        </form>
    );
}