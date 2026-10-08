function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div
        className={`project-preview project-preview--${project.type}`}
        role="img"
        aria-label={`تصور بصري لمشروع ${project.title}`}
      >
        <div className="preview-window">
          <div className="preview-topbar">
            <span />
            <span />
            <span />
            <small>{project.label}</small>
          </div>
          <div className="preview-content">
            {project.type === 'store' ? (
              <>
                <div className="preview-store-heading" />
                <div className="preview-product-row">
                  <i /><i /><i />
                </div>
              </>
            ) : project.type === 'dashboard' ? (
              <>
                <div className="preview-dashboard-nav" />
                <div className="preview-dashboard-body">
                  <i /><i /><i />
                </div>
              </>
            ) : (
              <>
                <div className="preview-copy" />
                <div className="preview-copy preview-copy--short" />
                <div className="preview-action" />
                <div className="preview-art"><b>&lt;·&gt;</b></div>
              </>
            )}
          </div>
        </div>
        <span className="preview-index">{project.label.slice(0, 2)}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__heading">
          <h3>{project.title}</h3>
          <span className="project-card__type">نموذج قابل للتعديل</span>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="التقنيات المستخدمة">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          <button
            className="project-link project-link--primary"
            type="button"
            disabled
            title="أضف رابط المشروع عند استبدال هذا النموذج بمشروعك"
          >
            مشاهدة المشروع <span aria-hidden="true">↗</span>
          </button>
          <button
            className="project-link"
            type="button"
            disabled
            title="أضف رابط الكود عند استبدال هذا النموذج بمشروعك"
          >
            الكود <span aria-hidden="true">&lt;/&gt;</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
