---
sidebar_position: 2
---

# Ontology Building
---

## Overview

The ABI project uses a hierarchical ontology structure organized into four distinct layers, providing a flexible and extensible knowledge representation system. The ontology is built using RDF/OWL and follows the Basic Formal Ontology (BFO) and Common Core Ontologies (CCO) as upper-level ontologies.

## Ontology Hierarchy

### 1. Top-Level Ontologies
- Foundation layer using BFO (Basic Formal Ontology)
- Provides fundamental concepts and relationships
- Example: `bfo-core.ttl`


```12:35:src/ontologies/top-level/bfo-core.ttl
<http://purl.obolibrary.org/obo/bfo.owl> rdf:type owl:Ontology ;
                                      owl:versionIRI <http://purl.obolibrary.org/obo/bfo/2020/bfo-core.ttl> ;
                                      dc11:contributor "Alan Ruttenberg" ,
                                                       "Albert Goldfain" ,
                                                       "Barry Smith" ,
                                                       "Bill Duncan" ,
                                                       "Bjoern Peters" ,
                                                       "Chris Mungall" ,
                                                       "David Osumi-Sutherland" ,
                                                       "Fabian Neuhaus" ,
                                                       "James A. Overton" ,
                                                       "Janna Hastings" ,
                                                       "Jie Zheng" ,
                                                       "John Beverley" ,
                                                       "Jonathan Bona" ,
                                                       "Larry Hunter" ,
                                                       "Leonard Jacuzzo" ,
                                                       "Ludger Jansen" ,
                                                       "Mark Jensen" ,
                                                       "Mark Ressler" ,
                                                       "Mathias Brochhausen" ,
                                                       "Mauricio Almeida" ,
                                                       "Melanie Courtot" ,
                                                       "Neil Otte" ,
```


### 2. Mid-Level Ontologies
- Built on top of BFO
- Uses Common Core Ontologies (CCO)
- Includes general concepts shared across domains
- Examples:
  - Agent Ontology
  - Artifact Ontology
  - Facility Ontology
  - Geospatial Ontology
  - Information Entity Ontology
  - Quality Ontology
  - Units of Measure Ontology

### 3. Domain-Level Ontologies
Domain-specific concepts and relationships. Examples include:

- Person Ontology

```11:14:src/ontologies/domain-level/person.ttl
abi:Person a owl:Class ;
    rdfs:label "Person"@en ;
    rdfs:subClassOf bfo:BFO_0000040 ;  # Material entity
    skos:definition "An individual person with associated professional and interaction data"@en .
```


- Organization Ontology

```11:14:src/ontologies/domain-level/organization.ttl
abi:Organization a owl:Class ;
    rdfs:label "Organization"@en ;
    rdfs:subClassOf bfo:BFO_0000027 ;  # Object aggregate
    skos:definition "A business or company entity with associated metadata"@en .
```


- Task Ontology

```238:243:src/ontologies/domain-level/task.ttl
abi:Task rdf:type owl:Class ;
    rdfs:subClassOf cco:ont00000228 ; # Planned Act
    rdfs:label "Task"@en ;
    rdfs:comment "A defined unit of work that needs to be accomplished within a certain period of time."@en ;
    skos:definition "A Task is a planned activity with a specific objective, timeline, and measurable outcome."@en ;
    skos:example "Writing documentation, fixing a bug, or implementing a new feature."@en .
```


### 4. Application-Level Ontologies
Specific implementations for different platforms and services:

- GitHub
- LinkedIn
- HubSpot
- Perplexity

## Creating New Ontologies

### 1. File Structure
Create new ontology files in the appropriate directory under `src/ontologies/`:
- Top-level: `src/ontologies/top-level/`
- Mid-level: `src/ontologies/mid-level/`
- Domain-level: `src/ontologies/domain-level/`
- Application-level: `src/ontologies/application-level/`

### 2. Basic Ontology Template
```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix bfo: <http://purl.obolibrary.org/obo/bfo/> .
@prefix cco: <http://www.ontologyrepository.com/CommonCoreOntologies/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix abi: <http://ontology.naas.ai/abi/> .

<http://ontology.naas.ai/abi/your-ontology.ttl> rdf:type owl:Ontology ;
    dc11:contributor "Your Name" ;
    dc:description "Description of your ontology"@en ;
    dc:title "Your Ontology Title" .
```

### 3. Adding Classes and Properties
Example of defining a new class:
```turtle
abi:YourClass a owl:Class ;
    rdfs:label "Your Class"@en ;
    rdfs:subClassOf bfo:BFO_0000001 ;  # Appropriate BFO or CCO parent class
    skos:definition "Definition of your class"@en ;
    skos:example "Example of your class usage"@en .
```

## Integration with ABI

### 1. Registering Ontologies
Use the Naas Integration API to register new ontologies:


```190:210:src/integrations/NaasIntegration.py
    class CreateOntologySchema(BaseModel): 
        workspace_id: str = Field(..., description="Workspace ID to create an ontology in")
        label: str = Field(..., description="Label for the ontology")
        ontology: str = Field(..., description="Ontology source/content")
        level: str = Field(..., description="Level of the ontology - one of: USE_CASE, DOMAIN, MID, TOP")
    class GetOntologySchema(BaseModel):
        workspace_id: str = Field(..., description="Workspace ID to get an ontology from")
        ontology_id: Optional[str] = Field("", description="Optional ontology ID to get a specific ontology. If not provided, lists all ontologies")

    class GetOntologiesSchema(BaseModel):
        workspace_id: str = Field(..., description="Workspace ID to get ontologies from")

    class UpdateOntologySchema(BaseModel):
        workspace_id: str = Field(..., description="Workspace ID to update an ontology in")
        ontology_id: str = Field(..., description="ID of the ontology to update")
        ontology_source: Optional[str] = Field(None, description="Updated ontology source")
        level: Optional[str] = Field(None, description="Updated ontology level")

    class DeleteOntologySchema(BaseModel):
        workspace_id: str = Field(..., description="Workspace ID to delete an ontology from")
        ontology_id: str = Field(..., description="ID of the ontology to delete")
```


### 2. Visualization
The system includes an ontology visualizer for exploring relationships:


```7:31:src/analytics/visualization/ontology_graph.py
class OntologyVisualizer:
    def __init__(self, ontology_path: str = "ontology/consolidated_ontology.ttl"):
        self.graph = rdflib.Graph()
        self.logger = logging.getLogger(__name__)
        self.ontology_path = Path(ontology_path)
        
        # Initialize pyvis network
        self.net = Network(
            height="750px",
            width="100%",
            bgcolor="#ffffff",
            font_color="#000000"
        )
        
        # Configure physics
        self.net.force_atlas_2based()
        self.net.show_buttons(filter_=['physics'])
        
        # Define color scheme for different namespaces
        self.namespace_colors = {
            'bfo': '#4287f5',    # Blue
            'cco': '#f5d142',    # Yellow
            'domain': '#f58442', # Orange
            'application': '#42f554'  # Green
        }
```


## Best Practices

1. **Alignment with Upper Ontologies**
   - Always align new concepts with BFO and CCO where possible
   - Use existing relationships from upper ontologies when available

2. **Documentation**
   - Include clear labels and definitions using `rdfs:label` and `skos:definition`
   - Provide examples using `skos:example`
   - Document the purpose and scope of each ontology

3. **Naming Conventions**
   - Use CamelCase for class names
   - Use lowerCamelCase for properties
   - Maintain consistent prefixes across related concepts

4. **Version Control**
   - Include version information in ontology metadata
   - Document major changes in ontology evolution
   - Maintain backward compatibility when possible

5. **Testing**
   - Validate ontology syntax and structure
   - Test integration with existing ontologies
   - Verify alignment with upper-level ontologies

## Tools and Resources

1. **Visualization**: Use the built-in OntologyVisualizer class for exploring ontology relationships
2. **Validation**: RDFlib for parsing and validating ontologies
3. **Integration**: Naas Integration API for managing ontologies in the workspace

For more detailed information about specific ontology components, refer to the individual ontology files in the `src/ontologies/` directory.