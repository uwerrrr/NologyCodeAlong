# Firestore

## Why do we need databases?

- Store data and information
- Persist application state

## What kind of databases are there?

### Document

- Basically JSON
- No enforced structure
- Duplicated data (denormalised)
- Less likely to have relationships to other documents
- Benefit is very fast lookup

### SQL

- Structured Query Language
- Data is stored in tables
- Tables have relationships with each other
- Enforced structure, less duplication of data, complex relationships

## Why firestore?

- Familiar, document databases have a lot of similarity to JSON/Js complex data
- Popular choice with React
- Particularly suited to Live data, can subscribe to live sources of data and get real time updates
