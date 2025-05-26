"use server";

import { Resend } from "resend";
import { createClient } from "@/app/utils/supabase/server";
import { STRINGS } from "@/app/utils/strings";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitRSVP(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const accompany = formData.get("accompany") as string;
  const attendance = formData.get("attendance") as string;
  const menu = formData.get("menu") as string;
  const details = formData.get("details") as string;

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = await supabase.from("rsvps").insert([
    {
      name,
      email,
      accompany,
      attendance,
      menu,
      details,
    },
  ]);

  if (error) {
    console.error(error);
    return { success: false, message: "Failed to submit RSVP", error };
  }

  // Send email notification
  if (!STRINGS.sendToEmail) {
    console.error("No email to send to");
    return { success: false, message: "No email to send to" };
  }
  if (!error) {
    try {
      await resend.emails.send({
        from: "RSVP <onboarding@resend.dev>",
        to: STRINGS.sendToEmail,
        subject: "Nunta Adina & Tudor",
        html: `
        <h1>Aveti o noua invitatie completata</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number of Guests:</strong> ${accompany}</p>
        <p><strong>Attendance:</strong> ${attendance}</p>
        <p><strong>Menu:</strong> ${menu}</p>
        <p><strong>Alte observatii:</strong> ${details}</p>
      `,
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  return { success: true, message: "RSVP submitted successfully" };
}
