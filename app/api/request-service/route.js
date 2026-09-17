import { Resend } from 'resend'

const recipient = 'mitchellrestorationdfw@gmail.com'

function clean(value, maxLength = 2000) {
  return String(value ?? '').trim().slice(0, maxLength)
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = clean(body.name, 120)
    const phone = clean(body.phone, 60)
    const company = clean(body.company, 160)
    const email = clean(body.email, 254)
    const address = clean(body.address, 300)
    const service = clean(body.service, 160)
    const details = clean(body.details, 4000)
    const contactMethod = clean(body.contactMethod, 30)

    if (!name || !phone || !service) {
      return Response.json({ error: 'Please complete your name, phone number, and service needed.' }, { status: 400 })
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return Response.json({ error: 'Email service is not configured. Please call 972-824-0752.' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send(
      {
        from: process.env.RESEND_FROM_EMAIL || 'MCCR Website <onboarding@resend.dev>',
        to: [recipient],
        replyTo: email || undefined,
        subject: `New service request from ${name}`,
        text: [
          `Name: ${name}`,
          `Company / Builder: ${company || 'Not provided'}`,
          `Phone: ${phone}`,
          `Email: ${email || 'Not provided'}`,
          `Property Address: ${address || 'Not provided'}`,
          `Service Needed: ${service}`,
          `Preferred Contact Method: ${contactMethod || 'Not provided'}`,
          '',
          'What Happened:',
          details || 'Not provided',
        ].join('\n'),
      },
      { idempotencyKey: `service-request/${crypto.randomUUID()}` },
    )

    if (error) {
      console.error('[request-service] Resend error:', error.message)
      return Response.json({ error: 'We could not send your request right now. Please call 972-824-0752.' }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (error) {
    console.error('[request-service] Unexpected error:', error)
    return Response.json({ error: 'We could not send your request right now. Please call 972-824-0752.' }, { status: 500 })
  }
}
