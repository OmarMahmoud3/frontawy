import { Link } from 'react-router-dom'

const beliefs = [
  'الموقع الجيد ليس مجرد شكل جميل؛ لازم يخدم هدفه بوضوح.',
  'تجربة المستخدم جزء أساسي من نجاح أي موقع.',
  'الكود المنظم يسهّل تطوير المشروع مستقبلًا.',
  'التصميم المتجاوب ضرورة، لأن الناس تتصفح من شاشات مختلفة.',
]

function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-kicker" dir="ltr">&lt;about me /&gt;</span>
          <h1>من أنا<span>؟</span></h1>
          <p>أحب أبني واجهات ويب تجمع بين الفكرة الواضحة، التصميم الجيد، وسهولة الاستخدام.</p>
          <div className="page-hero__crumb"><Link to="/">الرئيسية</Link><span>/</span><b>من أنا</b></div>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <div className="about-intro__visual">
            <div className="about-code" dir="ltr">
              <span className="about-code__label">a little about my work</span>
              <p><span className="code-purple">function</span> <span className="code-cyan">buildWebsite</span>() {'{'}</p>
              <p>&nbsp;&nbsp;<span className="code-purple">return</span> {'{'}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;design: <span className="code-green">"thoughtful"</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;experience: <span className="code-green">"simple"</span>,</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;direction: <span className="code-green">"RTL-ready"</span></p>
              <p>&nbsp;&nbsp;{'}'}</p>
              <p>{'}'}</p>
              <span className="about-code__symbol">&lt;·&gt;</span>
            </div>
          </div>
          <div className="about-intro__copy">
            <span className="section-kicker" dir="ltr">&lt;the person behind the code /&gt;</span>
            <h2>أهتم بكيف <span>تُستخدم</span> الواجهة، مو بس كيف تبدو.</h2>
            <p>أنا مطور Front-End مهتم ببناء واجهات ويب حديثة تجمع بين التصميم الجيد، الأداء، وسهولة الاستخدام.</p>
            <p>أعمل على تحويل الأفكار والتصاميم إلى مواقع حقيقية متجاوبة مع مختلف أحجام الشاشات، مع اهتمام بالتفاصيل وتجربة المستخدم.</p>
            <Link to="/contact" className="btn btn-primary">خلينا نتكلم عن فكرتك <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container beliefs-layout">
          <header className="section-heading section-heading--start">
            <span className="section-kicker" dir="ltr">&lt;my principles /&gt;</span>
            <h2>ما الذي أؤمن به؟</h2>
            <p>قرارات صغيرة تصنع فرقًا كبيرًا في تجربة الموقع.</p>
          </header>
          <ul className="belief-list">
            {beliefs.map((belief, index) => (
              <li key={belief}>
                <span dir="ltr">0{index + 1}</span>
                <p>{belief}</p>
                <b aria-hidden="true">↙</b>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container brand-story">
          <div className="brand-story__logo" aria-hidden="true">&lt;<i />&gt;</div>
          <div>
            <span className="section-kicker" dir="ltr">&lt;why frontawy /&gt;</span>
            <h2>فرونتاوي، حكاية عربية مع الـ <span>Front-End</span></h2>
            <p>فرونتاوي ليست مجرد اسم لموقع، بل هوية تهدف إلى تقديم الـ Front-End باللغة العربية بطريقة بسيطة وعملية. الفكرة إننا نتعلم ونبني ونشارك المعرفة، خطوة بخطوة.</p>
            <p className="brand-story__tagline">الفرونت اند بالعربي.. من الصفر للاحتراف</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><h2>عندك فكرة تستاهل واجهة مميزة؟</h2><p>احكي لي عنها ونشوف معًا كيف تبدأ.</p></div>
          <Link to="/contact" className="btn btn-primary">تواصل معي <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  )
}

export default About
