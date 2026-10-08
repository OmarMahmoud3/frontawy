import { useState } from 'react'
import { Link } from 'react-router-dom'

const contactEmail = '[البريد الإلكتروني]'

function Contact() {
  const [notice, setNotice] = useState('')

async function handleSubmit(event) {
  event.preventDefault()

  const form = event.currentTarget

  const formData = new FormData(form)

  const details = {
    name: formData.get('name'),
    email: formData.get('email'),
    type: formData.get('type'),
    message: formData.get('message'),
  }

  try {
    setNotice('جاري إرسال طلبك...')

    const response = await fetch('/api/whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })

    const text = await response.text()

    console.log('API status:', response.status)
    console.log('API response:', text)

    let data

    try {
      data = JSON.parse(text)
    } catch {
      throw new Error(`الخادم أرسل استجابة غير صالحة: ${text}`)
    }

    if (!response.ok) {
      throw new Error(data.message || 'حدث خطأ أثناء الإرسال')
    }

    setNotice('تم إرسال طلبك بنجاح ✅')

    // هنا استخدمنا form بدل event.currentTarget
    form.reset()

  } catch (error) {
    console.error(error)
    setNotice(error.message || 'حدث خطأ أثناء إرسال الطلب.')
  }
}
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-kicker" dir="ltr">&lt;let’s talk /&gt;</span>
          <h1>خلينا نبدأ <span>مشروعك</span></h1>
          <p>عندك فكرة لموقع أو محتاج تطور موقع موجود؟ أرسل لي تفاصيل فكرتك وسنتحدث عن أفضل طريقة لتنفيذها.</p>
          <div className="page-hero__crumb"><Link to="/">الرئيسية</Link><span>/</span><b>تواصل معي</b></div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="section-kicker" dir="ltr">&lt;your next step /&gt;</span>
            <h2>كل مشروع يبدأ <span>بحديث.</span></h2>
            <p>شارك الفكرة، حتى لو كانت في بدايتها. أقدر أساعدك نحدد شكل الموقع والواجهة المناسبة لاحتياجك.</p>
            <div className="contact-prompt">
              <span className="contact-prompt__icon" aria-hidden="true">&lt;·&gt;</span>
              <div><strong>وش يصير بعد ما ترسل؟</strong><p>أراجع التفاصيل، وبعدها نرتب طريقة مناسبة لمناقشة احتياجك.</p></div>
            </div>
            <div className="contact-details">
              <h3>تواصل عبر</h3>
              <p><span>Facebook</span><b>[رابط فيسبوك]</b></p>
              <p><span>Email</span><b>{contactEmail}</b></p>
              <p><span>GitHub</span><b>[رابط GitHub]</b></p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <span className="section-kicker" dir="ltr">&lt;project brief /&gt;</span>
              <h2>احكي لي عن فكرتك</h2>
              <p>املأ التفاصيل، وخلينا نبدأ من هنا.</p>
            </div>
            <div className="form-field">
              <label htmlFor="contact-name">الاسم</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="كيف أناديك؟" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">البريد الإلكتروني</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" dir="ltr" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-type">نوع المشروع</label>
              <select id="contact-type" name="type" defaultValue="" required>
                <option value="" disabled>اختر نوع المشروع</option>
                <option>موقع تعريفي</option>
                <option>Landing Page</option>
                <option>تطوير موقع موجود</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">الرسالة</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="اكتب نبذة عن الفكرة اللي عايزني انفذها ..." required />
            </div>
            <button type="submit" className="btn btn-primary contact-form__submit">
              إرسال الطلب <span aria-hidden="true">↗</span>
            </button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
            <p className="contact-form__privacy">لن تُرسل بيانات النموذج إلى خادم؛ عند تفعيل البريد سيتم فتح تطبيق البريد لديك.</p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
