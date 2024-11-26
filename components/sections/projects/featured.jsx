import FeaturedProject from '../../blocks/projects/featured'
import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title.block'
import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProjects() {
	return (
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle id="projects" title="Projetos" preTitle="Full Stack" />
				<a className={css.link} href="https://www.behance.net/luizhedesouz6">
					Descrição aprofundada dos projetos
				</a>
				{content.map( (data, index) => <FeaturedProject content={data} index={index} key={index} />)}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}>
						<span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`} />
					</span>
					<span class={`${css.bgSection}`}>
						<span className={`${css.bgInner} ${css.heroCenter}`} />
					</span>
					<span class={`${css.bgSection}`}>
						<span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`} />
					</span>
				</span>
				<span className={css.afterGlowBg} />
			</div>
		</Section>
	)
}