import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/about', label: 'من أنا' },
  { to: '/projects', label: 'المشاريع' },
  { to: '/skills', label: 'المهارات' },
  { to: '/contact', label: 'تواصل معي' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__identity">
            <Link to="/" className="brand" aria-label="فرونتاوي، الصفحة الرئيسية">
              <span className="brand__mark" aria-hidden="true">&lt;<i />&gt;</span>
              <span className="brand__text">
                <strong>فرونتاوي <b>| Frontawy</b></strong>
                <small>الفرونت اند بالعربي.. من الصفر للاحتراف</small>
              </span>
            </Link>
            <p>أشارك المعرفة وأبني واجهات ويب عربية، واضحة، ومتجاوبة.</p>
          </div>

          <div className="footer__navigation">
            <h2>روابط سريعة</h2>
            <ul>
              {footerLinks.map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h2>خلينا على تواصل</h2>
            <p>يسعدني نبدأ حديثًا عن فكرتك.</p>
            <span>Facebook: [رابط فيسبوك]</span>
            <span>Email: [البريد الإلكتروني]</span>
            <span>GitHub: [رابط GitHub]</span>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 فرونتاوي. جميع الحقوق محفوظة.</span>
          <span className="footer__code" dir="ltr">&lt;built with care /&gt;</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
