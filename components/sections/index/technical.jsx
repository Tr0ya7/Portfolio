import Image from 'next/image'
import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title.block'
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'
import about from '../../../styles/sections/index/about.module.scss'

export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Técnica"
					preTitle="Hardskills"
					subTitle="Como um programador, eu busco criar as melhores experiências usando diversas tecnologias e linguagens do meu leque."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Porta de entrada e empreendedorismo"
							icon={[ 'fat', 'chart-network' ]}
							copy="
								Minha primeira experiência na área de desenvolvimento ocorreu em meados de 2022, quando, ainda no ensino médio/técnico, decidi que, com determinação, alguns amigos e o conhecimento que 
								compartilhávamos, começaríamos a desenvolver pequenos projetos web para empresas locais em Jaú/SP. Embora o nosso negócio tenha durado apenas algumas contratações pontuais, essa 
								experiência foi fundamental para o meu crescimento. Durante esse período, pude aprimorar significativamente minhas habilidades técnicas, como modelagem de banco de dados, design 
								responsivo, gestão de equipe, etc. Acredito que essa foi uma excelente porta de entrada para o vasto mercado de tecnologia.
							"
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Ambientes em que desenvolvi"
							copy="Nessa minha extensa jornada já desenvolvi usando diversos softwares e aqui estão eles!"
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Tecnologias que desenvolvo e amo ❤"
							copy="
								Eu amo profundamente resolver problemas de código e contemplar a beleza de ver tudo dando certo depois. Das interfaces front end até as rest API's do back end, nenhum projeto é tão 
								desafiador e impossível para mim
							"
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const software = [
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'visualstudio', 	name: 'Visual Studio', 		type: 'devicon' },
	{ key: 'intellij', 		name: 'Intellij', 			type: 'devicon' },
	{ key: 'eclipse', 		name: 'Eclipse', 			type: 'devicon' },
	{ key: 'sublime', 		name: 'Sublime', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'dbeaver', 		name: 'Dbeaver', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' }
]

const tech	= [
	{ key: 'javascript', 		name: 'JavaScript', 		type: 'devicon' },
	{ key: 'typescript', 		name: 'TypeScript', 		type: 'devicon' },
	{ key: 'nodejs', 			name: 'Node', 				type: 'devicon' },
	{ key: 'express', 			name: 'Express', 			type: 'devicon' },
	{ key: 'sequelize', 		name: 'sequelize', 			type: 'devicon' },
	{ key: 'java', 				name: 'Java', 				type: 'devicon' },
	{ key: 'spring', 			name: 'Spring Boot', 		type: 'devicon' },
	{ key: 'react', 			name: 'React', 				type: 'devicon' },
	{ key: 'redux', 			name: 'Redux', 				type: 'devicon' },
	{ key: 'nextjs', 			name: 'Next.JS', 			type: 'devicon' },
	{ key: 'html5', 			name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 				name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 				name: 'SASS', 				type: 'devicon' },
	{ key: 'styledcomponents', 	name: 'Styled Components', 	type: 'devicon' },
	{ key: 'tailwindcss', 		name: 'Tailwind Css', 		type: 'devicon' },
	{ key: 'git', 				name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 			name: 'MySQL', 				type: 'devicon' },
	{ key: 'postgresql', 		name: 'PostGreSQL', 		type: 'devicon' }
]