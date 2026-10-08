import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

const services = [
  {
    mark: 'UI',
    title: 'تصميم واجهات المواقع',
    description: 'تصميم واجهات حديثة ومتناسقة تركز على تجربة المستخدم وتوصل الفكرة ببساطة.',
  },
  {
    mark: '↔',
    title: 'تطوير مواقع متجاوبة',
    description: 'مواقع تعمل بشكل ممتاز على الهاتف والتابلت والكمبيوتر، من أول شاشة لآخرها.',
  },
  {
    mark: '</>',
    title: 'تحويل التصميم إلى موقع',
    description: 'تحويل التصاميم إلى واجهات Front-End حقيقية باستخدام تقنيات الويب الحديثة.',
  },
  {
    mark: '⚛',
    title: 'تطوير مواقع React',
    description: 'بناء واجهات تفاعلية ومنظمة بمكونات واضحة تسهّل التوسّع وتطوير المشروع.',
  },
]

const reasons = [
  'تصميم عصري يراعي هوية مشروعك',
  'تجربة استخدام بسيطة وواضحة',
  'Responsive Design لكل الشاشات',
  'اهتمام بالتفاصيل والكود المنظم',
  'دعم اللغة العربية وواجهات RTL',
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__grid container">
          <div className="hero__content">
            <div className="eyebrow"><span /> مطور واجهات ويب</div>
            <h1>أحوّل أفكارك إلى <span>مواقع ويب عصرية</span></h1>
            <p className="hero__description">
              أنا مطور <b dir="ltr">Front-End Developer</b> أعمل على تصميم وتطوير واجهات مواقع سريعة،
              متجاوبة، وعصرية، مع اهتمام بالتفاصيل وتجربة المستخدم.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                شاهد مشاريعي <span aria-hidden="true">←</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">اطلب موقعك</Link>
            </div>
            <div className="hero__facebook">
              <span className="hero__facebook-icon">f</span>
              <span>تابع فرونتاوي على فيسبوك</span>
              <span className="hero__facebook-placeholder">[أضف رابط صفحة فيسبوك]</span>
            </div>
          </div>

          <div className="hero__visual" aria-label="واجهة كود برمجية تمثل فرونتاوي">
            <div className="hero__visual-orbit hero__visual-orbit--one" />
            <div className="hero__visual-orbit hero__visual-orbit--two" />
            <div className="code-card">
              <div className="code-card__header">
                <span className="code-card__lights"><i /><i /><i /></span>
                <span className="code-card__filename" dir="ltr">frontawy.jsx</span>
                <span className="code-card__status"><i /> online</span>
              </div>
              <div className="code-card__body" dir="ltr">
                <div><span className="code-number">01</span><span className="code-purple">const</span> <span className="code-cyan">frontawy</span> = {'{'}</div>
                <div><span className="code-number">02</span>&nbsp;&nbsp;<span className="code-yellow">name</span>: <span className="code-green">"فرونتاوي"</span>,</div>
                <div><span className="code-number">03</span>&nbsp;&nbsp;<span className="code-yellow">role</span>: <span className="code-green">"Front-End Developer"</span>,</div>
                <div><span className="code-number">04</span>&nbsp;&nbsp;<span className="code-yellow">focus</span>: [</div>
                <div><span className="code-number">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"واجهات عربية"</span>,</div>
                <div><span className="code-number">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">"تجربة استخدام"</span></div>
                <div><span className="code-number">07</span>&nbsp;&nbsp;]</div>
                <div><span className="code-number">08</span>{'}'};</div>
                <div className="code-card__cursor"><span className="code-number">09</span><span className="code-cyan">build</span>(<span className="code-yellow">yourIdea</span>);<i /></div>
              </div>
              <div className="code-card__footer">
                <span><b>&lt;·&gt;</b> واجهة عربية، فكرة واضحة</span>
                <span dir="ltr">HTML · CSS · React</span>
              </div>
            </div>
            <div className="hero__floating-tag hero__floating-tag--top" dir="ltr"><span>&lt;/&gt;</span> clean code</div>
            <div className="hero__floating-tag hero__floating-tag--bottom"><span>↗</span> جاهز لفكرتك</div>
          </div>
        </div>
        <div className="hero__bottom container">
          <span>من الفكرة إلى واجهة حقيقية</span>
          <span className="hero__scroll-line" />
          <span className="hero__scroll-label" dir="ltr">SCROLL TO EXPLORE</span>
        </div>
      </section>

      <section className="section section--soft" id="services">
        <div className="container">
          <header className="section-heading">
            <span className="section-kicker" dir="ltr">&lt;services /&gt;</span>
            <h2>ماذا أقدم؟</h2>
            <p>من أول تصور الواجهة إلى تفاصيل تنفيذها، أساعد فكرتك تظهر على الويب بالشكل المناسب.</p>
          </header>
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__top">
                  <span className={`service-card__icon${index % 2 ? ' service-card__icon--cyan' : ''}`} dir="ltr">{service.mark}</span>
                  <span className="service-card__number">0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-card__line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container why-layout">
          <div className="why-copy">
            <span className="section-kicker" dir="ltr">&lt;the details matter /&gt;</span>
            <h2>لماذا <span>فرونتاوي؟</span></h2>
            <p>الموقع الجيد يجمع بين شكل يلفت النظر وتجربة مريحة. أهتم بالتفاصيل التي تجعل استخدام موقعك أسهل على زوارك.</p>
            <Link to="/about" className="text-link">اعرف أكثر عني <span aria-hidden="true">←</span></Link>
          </div>
          <ul className="reason-list">
            {reasons.map((reason, index) => (
              <li key={reason}>
                <span className="reason-list__check" aria-hidden="true">✓</span>
                <span>{reason}</span>
                <small dir="ltr">0{index + 1}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <header className="section-heading section-heading--row">
            <div>
              <span className="section-kicker" dir="ltr">&lt;selected work /&gt;</span>
              <h2>بعض أعمالي</h2>
              <p>نماذج أولية توضح أنواع الواجهات التي أعمل على بنائها.</p>
            </div>
            <Link to="/projects" className="text-link">كل المشاريع <span aria-hidden="true">←</span></Link>
          </header>
          <div className="projects-grid projects-grid--home">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
          <p className="project-disclaimer">هذه نماذج تجريبية قابلة للاستبدال، وليست أعمالًا منشورة أو منسوبة إلى عميل.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-section__inner">
          <span className="cta-section__mark" aria-hidden="true">&lt;·&gt;</span>
          <div>
            <span className="section-kicker" dir="ltr">&lt;your idea starts here /&gt;</span>
            <h2>عندك فكرة لموقع؟</h2>
            <p>خلينا نحول فكرتك إلى موقع حقيقي.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">ابدأ مشروعك <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  )
}

export default Home
