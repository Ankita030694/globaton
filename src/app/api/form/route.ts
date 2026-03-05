import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { sendConsultationEmail } from "@/lib/sendEmail";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, address, services, customService, source } = body;

        // Basic validation
        if (!name || !email || !phone || !services) {
            return NextResponse.json(
                { error: "Missing required fields: name, email, phone, services." },
                { status: 400 }
            );
        }

        const serviceToSubmit = services === "others" ? customService : services;

        // 1. Save to Firestore
        await addDoc(collection(db, "consultations"), {
            name,
            email,
            phone,
            address: address || "",
            services: serviceToSubmit,
            source: source || "unknown",
            createdAt: new Date(),
        });

        // 2. Send email to the user
        await sendConsultationEmail(name, email);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("Error in /api/form:", err);
        return NextResponse.json(
            { error: "Internal server error. Please try again." },
            { status: 500 }
        );
    }
}
