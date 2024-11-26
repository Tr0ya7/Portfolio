import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title.block'
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'
import about from '../../../styles/sections/index/about.module.scss'

export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Sobre Mim"
					preTitle="Sinopse"
					subTitle="
						Com conhecimento em front-end, back-end, clean code, bancos de dados e devops, sigo me aprimorando para ser um profissional completo.
					"
				/>
				<section className={about.content}>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							containerStyle={{ margin: "0 auto", width: "85%" }}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copyStyle={{ fontSize: "larger" }}
							copy="
								Além das minhas habilidades técnicas, também busquei aprimorar minhas softskills — com foco especial no gerenciamento e organização do tempo. Minha experiência prévia no mundo 
								empreendedor, somada à minha atuação como desenvolvedor full stack, me levou a desenvolver uma forte capacidade de multitarefa. No entanto, ao longo do tempo, percebi a importância de 
								focar em tecnologias específicas que me permitam me aprofundar e me especializar cada vez mais, otimizando meu aprendizado e aprimorando minha expertise em áreas-chave da programação.
							"
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}