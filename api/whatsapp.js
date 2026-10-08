export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method Not Allowed',
    })
  }

  try {
    const { name, email, type, message } = req.body

    if (!name || !email || !type || !message) {
      return res.status(400).json({
        message: 'يرجى ملء جميع البيانات المطلوبة.',
      })
    }

    const whatsappMessage = `
طلب مشروع جديد من موقع Frontawy

الاسم: ${name}
البريد الإلكتروني: ${email}
نوع المشروع: ${type}

تفاصيل الفكرة:
${message}
`

const phone = process.env.CALLMEBOT_PHONE
const apiKey = process.env.CALLMEBOT_API_KEY

console.log('CALLMEBOT_PHONE exists:', Boolean(phone))
console.log('CALLMEBOT_API_KEY exists:', Boolean(apiKey))

if (!phone || !apiKey) {
  return res.status(500).json({
    message: 'إعدادات CallMeBot غير مكتملة.',
  })
}

    const url =
      `https://api.callmebot.com/whatsapp.php` +
      `?phone=${encodeURIComponent(phone)}` +
      `&text=${encodeURIComponent(whatsappMessage)}` +
      `&apikey=${encodeURIComponent(apiKey)}`

    console.log('Sending request to CallMeBot...')

    const response = await fetch(url)
    const result = await response.text()

    console.log('CallMeBot status:', response.status)
    console.log('CallMeBot response:', result)

    if (!response.ok) {
      return res.status(500).json({
        message: 'فشل الاتصال بخدمة WhatsApp.',
      })
    }

    return res.status(200).json({
      message: 'تم إرسال الطلب بنجاح.',
    })
  } catch (error) {
    console.error('WhatsApp error:', error)

    return res.status(500).json({
      message: error.message || 'حدث خطأ أثناء إرسال الطلب.',
    })
  }
}