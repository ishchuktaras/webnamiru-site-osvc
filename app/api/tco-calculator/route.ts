import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, years, savings, totalCheap, totalPro, config } = body

    // 1. E-mail pro klienta
    await resend.emails.send({
      from: 'TCO Kalkulačka <kalkulacka@webnamiru.site>',
      to: email,
      subject: `Výsledek TCO analýzy: Úspora ${savings.toLocaleString('cs-CZ')} Kč`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Výsledek vaší kalkulace</h1>
          <p>Dobrý den,</p>
          <p>zde je shrnutí vaší analýzy nákladů na webový projekt po dobu ${years} let.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #16a34a; margin-top: 0;">Potenciální úspora: ${savings.toLocaleString('cs-CZ')} Kč</h2>
            <p><strong>Vaše řešení na míru (celkem):</strong> ${totalPro.toLocaleString('cs-CZ')} Kč</p>
            <p><strong>Běžné šablonové řešení (celkem):</strong> ${totalCheap.toLocaleString('cs-CZ')} Kč</p>
          </div>

          <h3>Vstupní parametry:</h3>
          <ul>
            <li>Levný web: Start ${config.cheapInitial} Kč + ${config.cheapMonthly} Kč/měsíc</li>
            <li>Web na míru: Start ${config.proInitial} Kč + ${config.proMonthly} Kč/měsíc</li>
          </ul>

          <p>Pokud chcete probrat, jak těchto úspor dosáhnout v praxi, stačí odpovědět na tento e-mail.</p>
          <br>
          <p>S pozdravem,<br>Taras Ishchuk<br>webnamiru.site</p>
        </div>
      `
    })

    // 2. Notifikace pro vás (Lead)
    await resend.emails.send({
      from: 'Lead Bot <bot@webnamiru.site>',
      to: 'info@webnamiru.site',
      subject: `🎯 Nový TCO Lead: ${email}`,
      text: `Uživatel ${email} si spočítal úsporu ${savings} Kč. 
      Parametry:
      - Rozpočet (levný): ${config.cheapInitial}
      - Rozpočet (profi): ${config.proInitial}
      - Horizont: ${years} let`
    })

    return NextResponse.json({ message: 'Odesláno' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Chyba serveru' }, { status: 500 })
  }
}