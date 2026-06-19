import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.trim() === "") {
      console.log("\n========================================================");
      console.warn("⚠️  ZIPPYTRAIL EMAIL AUTOMATION WARNING ⚠️");
      console.warn("WEB3FORMS_ACCESS_KEY is not defined in your environment.");
      console.warn("To enable real email delivery to zippytrail@gmail.com:");
      console.warn("1. Visit https://web3forms.com/ and enter zippytrail@gmail.com");
      console.warn("2. Copy the free access key sent to your inbox.");
      console.warn("3. Paste it into your .env.local file: WEB3FORMS_ACCESS_KEY=your_key");
      console.warn("========================================================\n");

      // Return a simulated success response so local developer UI flows work
      return NextResponse.json({
        success: true,
        mocked: true,
        message: "Submission simulated successfully (environment key is missing)."
      });
    }

    let payload: Record<string, any> = {};

    if (body.type === "newsletter") {
      payload = {
        access_key: accessKey,
        subject: "New ZippyTrail Newsletter Subscription",
        from_name: "ZippyTrail Marketing Site",
        email: body.email,
        message: `A new user has subscribed to the newsletter:\n\nEmail Address: ${body.email}`,
      };
    } else if (body.type === "rider-signup") {
      payload = {
        access_key: accessKey,
        subject: `New Rider Application: ${body.name}`,
        from_name: "ZippyTrail Rider Portal",
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: `A new rider has submitted an onboarding application:\n\nFull Name: ${body.name}\nEmail Address: ${body.email}\nPhone Number: ${body.phone}\nCity to Deliver: ${body.city}\nVehicle Type: ${body.vehicleType}`,
      };
    } else if (body.type === "waiting-list") {
      payload = {
        access_key: accessKey,
        subject: `New Waiting List Signup: ${body.name || body.email}`,
        from_name: "ZippyTrail Waiting List",
        name: body.name || "",
        email: body.email,
        phone: body.phone || "",
        message: `A new user has joined the ZippyTrail waiting list:\n\nFull Name: ${body.name || "N/A"}\nEmail Address: ${body.email}\nPhone Number: ${body.phone || "N/A"}\nInterested In: ${body.interest || "Services"}`,
      };
    } else {
      return NextResponse.json({ success: false, message: "Invalid submission type." }, { status: 400 });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Email automated successfully." });
    } else {
      return NextResponse.json({ success: false, message: data.message || "Failed to deliver email." }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Form submission api error:", error);
    return NextResponse.json({ success: false, message: error.message || "Internal server error." }, { status: 500 });
  }
}
