import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Basic Formal Ontology (BFO)',
    image: require('@site/static/img/cards/BasicFormalOntology_card.png').default,
    description: 'A top-level ontology that provides a framework for building domain ontologies. BFO serves as the foundation for all Common Core Ontologies and represents the most basic categories of reality.',
    githubUrl: 'https://raw.githubusercontent.com/BFO-ontology/BFO-2020/refs/heads/master/src/owl/bfo-core.ttl'
  },
  {
    title: 'Agent Ontology (CCO)',
    image: require('@site/static/img/cards/AgentOntology_card.png').default,
    description: 'Designed to represent agents, especially persons and organizations, and their roles.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/AgentOntology.ttl'
  },
  {
    title: 'Artifact Ontology (CCO)',
    image: require('@site/static/img/cards/GeospatialOntology_card.png').default, // Using placeholder image
    description: 'Designed to represent artifacts that are common to multiple domains along with their models, specifications, and functions',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/ArtifactOntology.ttl'
  },
  {
    title: 'Currency Unit Ontology (CCO)',
    image: require('@site/static/img/cards/CurrencyUnitOntology_card.png').default, // Using placeholder image
    description: 'Designed to represent currencies that are issued and used by countries.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/CurrencyUnitOntology.ttl'
  },
  {
    title: 'Event Ontology (CCO)',
    image: require('@site/static/img/cards/EventOntology_card.png').default,
    description: 'Designed to represent processual entities, especially those performed by agents, that occur within multiple domains.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/EventOntology.ttl'
  },
  {
    title: 'Extended Relation Ontology (CCO)',
    image: require('@site/static/img/cards/ExtendedRelationOntology_card.png').default, // Using placeholder image
    description: 'Designed to represent many of the relations (i.e. object properties) that hold between entities at the level of the mid-level Common Core Ontologies.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/ExtendedRelationOntology.ttl'
  },
  {
    title: 'Facility Ontology (CCO)',
    image: require('@site/static/img/cards/FacilityOntology_card.png').default, // Using placeholder image
    description: 'Designed to represent buildings and campuses that are designed to serve some specific purpose and which are common to multiple domains.', 
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/FacilityOntology.ttl'
  },
  {
    title: 'Geospatial Ontology (CCO)',
    image: require('@site/static/img/cards/GeospatialOntology_card.png').default,
    description: 'Designed to represent sites, spatial regions, and other entities, especially those that are located near the surface of Earth, as well as the relations that hold between them.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/GeospatialOntology.ttl'
  },
  {
    title: 'Information Entity Ontology (CCO)',
    image: require('@site/static/img/cards/InformationEntityOntology_card.png').default,
    description: 'Designed to represent generic types of information as well as the relationships between information and other entities.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/InformationEntityOntology.ttl'
  },
  {
    title: 'Quality Ontology (CCO)',
    image: require('@site/static/img/cards/QualityOntology_card.png').default,
    description: 'Designed to represent a range of attributes of entities especially qualities, realizable entities, and process profiles.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/QualityOntology.ttl'
  },
  {
    title: 'Time Ontology (CCO)',
    image: require('@site/static/img/cards/TimeOntology_card.png').default,
    description: 'Designed to represent temporal regions and the relations that hold between them..',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/develop/src/cco-modules/TimeOntology.ttl'
  },
  {
    title: 'Unit Of Measure Ontology (CCO)',
    image: require('@site/static/img/cards/UnitsOfMeasureOntology_card.png').default, // Using placeholder image
    description: 'Designed to represent standard measurement units that are used when measuring various attributes of entities.',
    githubUrl: 'https://raw.githubusercontent.com/CommonCoreOntology/CommonCoreOntologies/refs/heads/develop/src/cco-modules/UnitsOfMeasureOntology.ttl'
  },
];

function FeatureCard({title, image, description, githubUrl}) {
  const cardClassName = title.toLowerCase().replace(/\s+/g, '-') + '-ontology';
  
  // Use inline style with the imported image
  const headerStyle = {
    height: '160px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px 8px 0 0',
    boxShadow: 'inset 0 -60px 60px -30px rgba(0, 0, 0, 0.5)'
  };
  
  // Gold button styles
  const buttonStyle = {
    backgroundColor: '#9e7418',
    borderColor: '#9e7418',
    color: 'white'
  };
  
  return (
    <div className="card margin-bottom--lg" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div style={headerStyle}></div>
      <div className="card-content padding--lg" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <h3>{title}</h3>
        <p style={{flex: 1}}>{description}</p>
        
        <div className="card-actions" style={{marginTop: '1rem'}}>
          <a 
            href={githubUrl} 
            className="button button--primary button--sm" 
            style={buttonStyle}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Module
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Vetted <span className={styles.highlight}>Ontology Standards</span>
          </h2>
          <p className={styles.sectionDescription}>
            Open Source Core ontologies developed and maintained with quality assurance from the Ontology Research &amp; Development Network
          </p>
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4 margin-bottom--xl">
              <FeatureCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 