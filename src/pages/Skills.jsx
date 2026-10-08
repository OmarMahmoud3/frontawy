import { Link } from 'react-router-dom'

const skillGroups = [
  {
    title: 'Frontend',
    detail: 'تقنيات بناء الواجهات',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router'],
    code: '01',
  },
  {
    title: 'Tools',
    detail: 'أدوات العمل والتعاون',
    skills: ['Git', 'GitHub', 'Browser DevTools', 'npm'],
    code: '02',
  },
  {
    title: 'Concepts',
    detail: 'مفاهيم أطبقها في الواجهات',
    skills: ['Responsive Design', 'UI Implementation', 'REST APIs', 'Component Design'],
    code: '03',
  },
]

const interfaceDetails = [
  { title: 'Responsive Layouts', text: 'تخطيطات تتكيف مع قياسات الشاشات المختلفة.' },
  { title: 'Components', text: 'مكونات مرتبة يمكن إعادة استخدامها وتطويرها.' },
  { title: 'Navigation', text: 'تنقل مفهوم يساعد الزائر يوصل للمعلومة.' },
  { title: 'Forms', text: 'حقول واضحة وحالات تفاعل مفهومة.' },
  { title: 'Animations', text: 'حركة خفيفة تخدم التجربة بدون تشتيت.' },
  { title: 'Accessibility', text: 'اهتمام بالوضوح ودعم الاستخدام بطرق مختلفة.' },
  { title: 'RTL Interfaces', text: 'واجهات عربية تبدأ من اتجاه القراءة الصحيح.' },
]

function Skills() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-kicker" dir="ltr">&lt;tools &amp; skills /&gt;</span>
          <h1>المهارات<span>.</span></h1>
          <p>أتعلم وأطوّر أدوات وتقنيات تساعدني على بناء واجهات أفضل، وأطبقها حسب احتياج كل مشروع.</p>
          <div className="page-hero__crumb"><Link to="/">الرئيسية</Link><span>/</span><b>المهارات</b></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-heading section-heading--start skills-heading">
            <span className="section-kicker" dir="ltr">&lt;learning in progress /&gt;</span>
            <h2>أتعلّم وأطوّر</h2>
            <p>المهارات رحلة مستمرة؛ هذه التقنيات والمفاهيم التي أتعامل معها وأواصل تطويرها.</p>
          </header>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group__heading">
                  <span dir="ltr">{group.code}</span>
                  <div><h3 dir="ltr">{group.title}</h3><p>{group.detail}</p></div>
                  <b aria-hidden="true">&lt;/&gt;</b>
                </div>
                <ul className="tag-list tag-list--skills">
                  {group.skills.map((skill) => <li key={skill} dir="ltr">{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container interface-section">
          <header className="section-heading section-heading--start">
            <span className="section-kicker" dir="ltr">&lt;details make the difference /&gt;</span>
            <h2>أبني واجهات تهتم بالتفاصيل</h2>
            <p>من ترتيب المحتوى إلى سهولة التفاعل، كل جزء له دور في تجربة متكاملة.</p>
          </header>
          <div className="interface-grid">
            {interfaceDetails.map((detail, index) => (
              <article key={detail.title} className="interface-item">
                <span dir="ltr">0{index + 1}</span>
                <div><h3 dir="ltr">{detail.title}</h3><p>{detail.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div><h2>عندك واجهة تريد تنفيذها؟</h2><p>خلينا نحول التصميم أو الفكرة إلى تجربة ويب حقيقية.</p></div>
          <Link to="/contact" className="btn btn-primary">تواصل معي <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  )
}

export default Skills
