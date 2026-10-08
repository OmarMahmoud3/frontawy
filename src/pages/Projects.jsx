import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

function Projects() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__inner">
          <span className="section-kicker" dir="ltr">&lt;things I build /&gt;</span>
          <h1>مشاريعي<span>.</span></h1>
          <p>مجموعة من النماذج التي أعمل عليها لتطبيق مهاراتي في بناء واجهات الويب، من صفحات التعريف إلى لوحات التحكم.</p>
          <div className="page-hero__crumb"><Link to="/">الرئيسية</Link><span>/</span><b>المشاريع</b></div>
        </div>
      </section>

      <section className="section projects-page">
        <div className="container">
          <div className="projects-page__note">
            <span aria-hidden="true">&lt;!&gt;</span>
            <p><strong>ملاحظة:</strong> المشاريع المعروضة نماذج Placeholder لتوضيح أنواع الواجهات. استبدلها بأعمالك الفعلية وأضف روابط العرض والكود قبل النشر.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="projects-page__contact">
            <p>تبحث عن واجهة لمشروعك القادم؟</p>
            <Link to="/contact" className="btn btn-primary">ابدأ مشروعك <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
