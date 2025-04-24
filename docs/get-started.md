---
id: get-started
title: Get Started
sidebar_position: 1
slug: /get-started
description: Getting started with the NCOR Network
---

# Get Started with NCOR

Welcome to The Universal Data & AI Platform! This guide will help you understand what NCOR is, why you might want to join our network, and how to get involved with our various initiatives.

## What is NCOR?

The National Center for Ontological Research (NCOR) is a global non-profit organization dedicated to advancing the field of ontology through fostering research centers in different countries around the world. We serve as:

- A coordinating hub for ontological research and education
- An international community of ontology experts and practitioners
- A provider of resources for implementing ontologies in various domains
- A facilitator of cross-cultural ontology development

NCOR promotes the development of high-quality, interoperable ontologies across diverse cultural perspectives and domains.

## Why Get Started?

Organizations and individuals Get Started for several compelling reasons:

- **Knowledge Exchange:** Connect with leading experts in ontology research
- **Cross-Cultural Collaboration:** Participate in international initiatives
- **Access to Resources:** Leverage established ontologies like CCO and BFO
- **Implementation Support:** Get guidance on applying ontologies to real-world problems
- **Standards Development:** Contribute to emerging ontology standards
- **Community:** Join a network of researchers and practitioners

## How to Get Involved

### 1. Join Our Community

```bash
# Subscribe to our mailing list
# Join our Slack workspace
# Attend our next virtual meeting
```

### 2. Explore Our Resources

NCOR supports several ontology projects including:

| Project | Description |
|-------------|-------------|
| Basic Formal Ontology (BFO) | Upper-level ontology providing a framework for domain ontologies |
| Common Core Ontologies (CCO) | Mid-level ontology suite bridging BFO and domain ontologies |
| National Ontology Centers | Country-specific ontology research centers |

### 3. Attend Events and Working Groups

NCOR hosts regular events and working groups:

- Biweekly BFO-CCO Office Hours
- NCOR CCO Working Group meetings
- Annual ontology conferences and workshops
- Domain-specific ontology development initiatives

## Implementation Examples

Here's an example of how organizations use NCOR-supported ontologies:

```turtle
@prefix : <http://example.org/ncor-implementation#> .
@prefix bfo: <http://purl.obolibrary.org/obo/BFO_> .
@prefix cco: <https://github.com/CommonCoreOntology/CommonCoreOntologies/AgentOntology#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

# Create a culturally-specific organization type
:JapaneseResearchCenter rdf:type owl:Class ;
    rdfs:subClassOf cco:Organization ;
    rdfs:label "Japanese Research Center"@en ;
    rdfs:label "研究センター"@ja .
```

## Next Steps

Once you're familiar with NCOR:

1. **Explore Design Patterns** - Learn about the [ontology design patterns](/docs/design-patterns) we support
2. **Join Working Groups** - Participate in [NCOR working groups](/docs/support/working-groups)
3. **Attend Office Hours** - Get help at [scheduled office hours](/docs/support/office-hours)
4. **Review Documentation** - Dive deeper into our complete documentation

## Need Help?

- Check the [useful links](/docs/support/useful-links) for additional resources
- Explore our [GitHub repositories](https://github.com/NCOR-Organization)
- Contact the NCOR team through our [working groups](/docs/support/working-groups) 