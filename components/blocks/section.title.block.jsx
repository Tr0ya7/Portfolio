
import section from '../../styles/blocks/section.title.module.scss'

export default function SectionTitle({ id, preTitle, title, subTitle }) {
	return <div id={ id } className={`${section.title}`}><h4>{preTitle}</h4><h2>{title}</h2><p className="subtitle">{subTitle}</p></div>
}