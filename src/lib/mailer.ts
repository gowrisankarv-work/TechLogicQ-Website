import "server-only";
import nodemailer from "nodemailer";
import { INQUIRY_TYPES, type ContactPayload } from "./contact";

const inquiryTypeLabel = (value: ContactPayload["inquiryType"]) =>
  INQUIRY_TYPES.find((t) => t.value === value)?.label ?? value;

/**
 * Sends contact form messages by email over SMTP.
 * Currently configured for Zoho Mail: SMTP_USER is the mailbox address and SMTP_PASS is a Zoho
 * "Application-Specific Password" (not the account login password). SMTP_HOST/SMTP_PORT are set in
 * .env.local; falls back to Gmail's SMTP host if unset.
 */
export function isMailConfigured() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContactEmail(data: ContactPayload) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const typeLabel = inquiryTypeLabel(data.inquiryType);
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Inquiry Type", typeLabel],
    ["Subject", data.subject],
  ];

  await transporter.sendMail({
    from: `"TechLogicQ Website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
    replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
    subject: `[Website] [${typeLabel}] ${data.subject}`,
    text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
    html: `<table cellpadding="4">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
  });
}
