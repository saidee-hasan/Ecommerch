import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.RESEND_API) {
    console.error("Provide RESEND_API in the .env file");
    process.exit(1); // Exit the process if the API key is not provided
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Saidee  <onboarding@resend.dev>',
            to: sendTo,
            subject: subject,
            html: html,
        });

        if (error) {
            console.error("Error sending email:", error);
            return null; // Return null or handle the error as needed
        }

        console.log("Email sent successfully:", data);
        return data; // Return the data if needed
    } catch (error) {
        console.error("Unexpected error:", error);
        return null; // Return null or handle the error as needed
    }
};

export default sendEmail;