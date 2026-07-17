import PropTypes from 'prop-types';

export function Education({ content }) {
  return (
    <section id="formacao">
      <h2 className="section-title">{content.title}</h2>
      <div className="timeline">
        {content.items.map((item) => (
          <div className="timeline-item" key={`${item.title}-${item.period}`}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <span className="timeline-place">{item.place}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {content.complementary && content.complementary.length > 0 && (
        <div className="complementary-courses">
          <h3 className="complementary-title">{content.complementaryTitle}</h3>
          <ul>
            {content.complementary.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

Education.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        period: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    complementaryTitle: PropTypes.string,
    complementary: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
